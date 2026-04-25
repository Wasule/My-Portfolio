import { useEffect, useRef, useCallback } from 'react'

const BLUE       = '79,168,245'
const BLUE_DARK  = '30,100,210'
const BLUE_DIM   = '20,60,130'

export default function NeuralCanvas({ navNodes, onNodeClick, onHoverChange, activeSections = [] }) {
  const canvasRef   = useRef(null)
  const stateRef    = useRef({})   // mutable render state — no re-renders
  const rafRef      = useRef(null)

  // ── build node positions ──
  const buildNodes = useCallback((W, H) => {
    const cx = W * 0.5, cy = H * 0.5
    const rx = Math.min(W * 0.32, 280)
    const ry = Math.min(H * 0.33, 195)

    const hub = { x: cx, y: cy, r: 14, isHub: true }

    const sections = navNodes.map((s, i) => {
      const angle = (i / navNodes.length) * Math.PI * 2 - Math.PI / 2
      return {
        ...s,
        x:     cx + Math.cos(angle) * rx,
        y:     cy + Math.sin(angle) * ry,
        baseX: cx + Math.cos(angle) * rx,
        baseY: cy + Math.sin(angle) * ry,
        r:     9,
        angle,
        driftPhase: i * 1.1,
        isSection: true,
      }
    })

    const floats = Array.from({ length: 55 }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      vx:    (Math.random() - 0.5) * 0.35,
      vy:    (Math.random() - 0.5) * 0.35,
      r:     Math.random() * 1.8 + 0.6,
      phase: Math.random() * Math.PI * 2,
      isFloat: true,
    }))

    return { hub, sections, floats }
  }, [navNodes])

  // ── main draw loop ──
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let W, H

    function resize() {
      const canvasWidth = window.innerWidth / 2
      const canvasHeight = window.innerHeight
      W = canvas.width  = canvasWidth
      H = canvas.height = canvasHeight
      const nodes = buildNodes(W, H)
      stateRef.current.hub      = nodes.hub
      stateRef.current.sections = nodes.sections
      stateRef.current.floats   = nodes.floats
      stateRef.current.hoveredNode = null
    }

    function draw(ts) {
      rafRef.current = requestAnimationFrame(draw)
      const t = ts * 0.001
      const { hub, sections, floats } = stateRef.current
      const hovered = stateRef.current.hoveredNode

      ctx.clearRect(0, 0, W, H)

      // Radial centre vignette
      const grad = ctx.createRadialGradient(W/2,H/2,0, W/2,H/2, Math.max(W,H)*0.7)
      grad.addColorStop(0, 'rgba(4,14,30,0.55)')
      grad.addColorStop(1, 'rgba(2,5,8,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0,0,W,H)

      // Drift sections
      sections.forEach(sn => {
        const d = 7
        sn.x = sn.baseX + Math.sin(t * 0.4 + sn.driftPhase) * d
        sn.y = sn.baseY + Math.cos(t * 0.3 + sn.driftPhase * 1.3) * (d * 0.6)
      })

      // Move floats
      floats.forEach(fn => {
        fn.x += fn.vx; fn.y += fn.vy
        if (fn.x < 0 || fn.x > W) fn.vx *= -1
        if (fn.y < 0 || fn.y > H) fn.vy *= -1
      })

      // Float-to-float edges
      const FDIST = 120
      for (let i = 0; i < floats.length; i++) {
        const a = floats[i]
        for (let j = i+1; j < floats.length; j++) {
          const b = floats[j]
          const dx = b.x-a.x, dy = b.y-a.y, dd = Math.sqrt(dx*dx+dy*dy)
          if (dd < FDIST) {
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y)
            ctx.strokeStyle = `rgba(${BLUE_DIM},${(1 - dd/FDIST) * 0.12})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }

      // Hub → section edges + travelling packets (only for active sections)
      sections.forEach((sn, i) => {
        const isActive = activeSections.includes(sn.id)
        if (!isActive) return
        
        const dx = sn.x - hub.x, dy = sn.y - hub.y
        ctx.beginPath(); ctx.moveTo(hub.x, hub.y); ctx.lineTo(sn.x, sn.y)
        ctx.strokeStyle = `rgba(${BLUE},0.4)`
        ctx.lineWidth = 2; ctx.stroke()

        const tp = ((t * 0.8 + i * 0.18) % 1)
        const px = hub.x + dx * tp, py = hub.y + dy * tp
        const pg = ctx.createRadialGradient(px,py,0, px,py,8)
        pg.addColorStop(0, `rgba(${BLUE},1)`); pg.addColorStop(1, `rgba(${BLUE},0)`)
        ctx.beginPath(); ctx.arc(px,py,8,0,Math.PI*2)
        ctx.fillStyle = pg; ctx.fill()
      })

      // Section ring edges
      for (let i = 0; i < sections.length; i++) {
        const a = sections[i], b = sections[(i+1) % sections.length]
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y)
        ctx.strokeStyle = `rgba(${BLUE_DIM},0.18)` 
        ctx.lineWidth = 0.7; ctx.stroke()
      }

      // Float → nearest section tendrils
      floats.forEach(fn => {
        let nearest = null, nearD = 999
        sections.forEach(sn => {
          const dx=sn.x-fn.x, dy=sn.y-fn.y, d=Math.sqrt(dx*dx+dy*dy)
          if (d < nearD) { nearD = d; nearest = sn }
        })
        if (nearest && nearD < 160) {
          ctx.beginPath(); ctx.moveTo(fn.x,fn.y); ctx.lineTo(nearest.x,nearest.y)
          ctx.strokeStyle = `rgba(${BLUE_DARK},${(1-nearD/160)*0.07})`
          ctx.lineWidth = 0.4; ctx.stroke()
        }
      })

      // Float nodes
      floats.forEach(fn => {
        const glow = Math.sin(t*1.5+fn.phase)*0.5+0.5
        const fg = ctx.createRadialGradient(fn.x,fn.y,0, fn.x,fn.y,fn.r*5)
        fg.addColorStop(0,`rgba(${BLUE_DIM},${0.06+glow*0.06})`); fg.addColorStop(1,`rgba(${BLUE_DIM},0)`)
        ctx.beginPath(); ctx.arc(fn.x,fn.y,fn.r*5,0,Math.PI*2); ctx.fillStyle=fg; ctx.fill()
        ctx.beginPath(); ctx.arc(fn.x,fn.y,fn.r,0,Math.PI*2)
        ctx.fillStyle=`rgba(60,130,220,${0.35+glow*0.4})`; ctx.fill()
      })

      // Section nodes
      ctx.font = '12px "JetBrains Mono",monospace'
      sections.forEach(sn => {
        const isHov = sn === hovered
        const isActive = activeSections.includes(sn.id)
        const pulse = Math.sin(t*2.2+sn.driftPhase)*0.5+0.5
        const R = sn.r + (isHov ? 4 : 0) + (isActive ? 2 : 0)
        const outerR = R * (isHov ? 6 : isActive ? 5 : 4.5)
        const base = isHov ? BLUE : isActive ? BLUE : BLUE_DARK

        const og = ctx.createRadialGradient(sn.x,sn.y,0, sn.x,sn.y,outerR)
        og.addColorStop(0, `rgba(${base},${isHov?0.25:isActive?0.2:0.12+pulse*0.1})`); og.addColorStop(1,`rgba(${base},0)`)
        ctx.beginPath(); ctx.arc(sn.x,sn.y,outerR,0,Math.PI*2); ctx.fillStyle=og; ctx.fill()

        ctx.beginPath(); ctx.arc(sn.x,sn.y,R*2.4,0,Math.PI*2)
        ctx.strokeStyle=`rgba(${base},${isHov?0.5:isActive?0.4:0.2+pulse*0.15})`; ctx.lineWidth=0.8; ctx.stroke()

        ctx.beginPath(); ctx.arc(sn.x,sn.y,R,0,Math.PI*2)
        ctx.fillStyle = isHov ? '#4fa8f5' : isActive ? '#5fb8f5' : `rgba(40,110,220,${0.7+pulse*0.3})`; ctx.fill()

        ctx.beginPath(); ctx.arc(sn.x,sn.y,R*0.4,0,Math.PI*2)
        ctx.fillStyle = isHov ? '#fff' : isActive ? '#e0f0ff' : 'rgba(150,210,255,0.9)'; ctx.fill()

        ctx.textAlign = 'center'
        ctx.font = isHov || isActive ? 'bold 13px "JetBrains Mono",monospace' : '12px "JetBrains Mono",monospace'
        ctx.fillStyle = isHov ? '#4fa8f5' : isActive ? '#7fc8f5' : 'rgba(100,160,220,0.75)'
        ctx.fillText(sn.label, sn.x, sn.y + R + 20)

        if (isHov || isActive) {
          ctx.font = '10px "JetBrains Mono",monospace'
          ctx.fillStyle = isHov ? 'rgba(0,212,255,0.7)' : 'rgba(0,212,255,0.5)'
          ctx.fillText(sn.icon, sn.x, sn.y + R + 35)
        }
      })

      // Hub node
      const hp = Math.sin(t*1.8)*0.5+0.5
      const hg = ctx.createRadialGradient(hub.x,hub.y,0, hub.x,hub.y,70)
      hg.addColorStop(0,`rgba(${BLUE_DARK},${0.15+hp*0.12})`); hg.addColorStop(1,`rgba(${BLUE_DARK},0)`)
      ctx.beginPath(); ctx.arc(hub.x,hub.y,70,0,Math.PI*2); ctx.fillStyle=hg; ctx.fill()

      ;[40,28,20].forEach((r,i) => {
        ctx.beginPath(); ctx.arc(hub.x,hub.y,r,0,Math.PI*2)
        ctx.strokeStyle=`rgba(${BLUE},${ [0.12,0.2,0.35][i]+hp*0.1})`
        ctx.lineWidth=0.8; ctx.stroke()
      })

      ctx.beginPath(); ctx.arc(hub.x,hub.y,hub.r,0,Math.PI*2)
      ctx.fillStyle='#4fa8f5'; ctx.fill()
      ctx.font='bold 10px "JetBrains Mono",monospace'
      ctx.textAlign='center'; ctx.fillStyle='#000'
      ctx.fillText('GW', hub.x, hub.y+4)
    }

    resize()
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('click', handleClick)
    window.addEventListener('resize', resize)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', handleClick)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [buildNodes])

  // ── hit-test helper ──
  function getHovered(x, y) {
    const { sections } = stateRef.current
    if (!sections) return null
    for (const sn of sections) {
      const dx = sn.x - x, dy = sn.y - y
      if (Math.sqrt(dx*dx+dy*dy) < sn.r + 40) return sn
    }
    return null
  }

  function isHub(x, y) {
    const { hub } = stateRef.current
    if (!hub) return false
    const dx=hub.x-x, dy=hub.y-y
    return Math.sqrt(dx*dx+dy*dy) < hub.r + 20
  }

  // ── mouse event handlers ──
  function handleMouseMove(e) {
    const canvasLeft = window.innerWidth / 2
    const x = e.clientX - canvasLeft
    const y = e.clientY
    const isOverCanvas = e.clientX >= canvasLeft && e.clientX <= window.innerWidth && e.clientY >= 0 && e.clientY <= window.innerHeight
    
    if (isOverCanvas) {
      const h = getHovered(x, y)
      stateRef.current.hoveredNode = h
      onHoverChange?.(h ? { x: e.clientX, y: e.clientY, onNode: true } : { x: e.clientX, y: e.clientY, onNode: false })
      document.body.style.cursor = h ? 'pointer' : 'default'
    } else {
      stateRef.current.hoveredNode = null
      onHoverChange?.({ x: e.clientX, y: e.clientY, onNode: false })
      document.body.style.cursor = 'default'
    }
  }

  function handleClick(e) {
    const canvasLeft = window.innerWidth / 2
    const x = e.clientX - canvasLeft
    const y = e.clientY
    const isOverCanvas = e.clientX >= canvasLeft && e.clientX <= window.innerWidth && e.clientY >= 0 && e.clientY <= window.innerHeight
    
    if (isOverCanvas) {
      const h = getHovered(x, y)
      if (h) { 
        onNodeClick(h.id)
        return 
      }
      if (isHub(x, y)) { 
        onNodeClick('home')
        return 
      }
      onNodeClick(null)  // click empty space → back to home
    }
  }

  return (
    <canvas
      ref={canvasRef}
      id="neural-canvas"
      className="fixed top-0 right-0 w-1/2 h-full z-0"
    />
  )
}
