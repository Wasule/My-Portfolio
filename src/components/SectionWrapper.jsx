import { useEffect, useRef } from 'react'

export default function SectionWrapper({ children, onClose, style = {} }) {
  const ref = useRef(null)

  useEffect(() => {
    // Trigger staggered entry animation
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px) scale(0.95)'
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0) scale(1)'
    }, 40)
    return () => clearTimeout(t)
  }, [])

  return (
    <div 
      className="fixed z-20 overflow-y-auto rounded-lg shadow-2xl border border-blue/20"
      style={{ 
        paddingTop: '60px',
        background: 'rgba(6,13,20,0.95)',
        backdropFilter: 'blur(10px)',
        ...style
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full flex items-center justify-center
          font-mono text-sm text-text2 transition-all duration-200 hover:text-blue hover:border-blue"
        style={{ border:'1px solid rgba(30,80,140,0.35)', background:'rgba(6,13,20,0.92)' }}
        title="Close Section"
      >
        ✕
      </button>

      {/* Content */}
      <div ref={ref} className="section-panel p-6">
        {children}
      </div>
    </div>
  )
}
