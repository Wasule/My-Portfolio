import { useTypewriter } from '../hooks/useTypewriter'

export default function HeroSection({ meta }) {
  const typed = useTypewriter(meta.roles, 80, 38, 1800)

  return (
    <section className="relative z-10 flex items-center min-h-screen justify-start">
      <div className="max-w-[500px] ml-12 w-full">

        <p className="font-mono text-[12px] text-cyan tracking-[0.1em] mb-5 animate-fade-up-1">
          // AI · Robotics · Cybersecurity · Full-Stack
        </p>

        <h1 className="font-sans font-extrabold leading-none tracking-tight mb-5 animate-fade-up-2"
          style={{ fontSize:'clamp(56px,8vw,100px)', letterSpacing:'-0.03em' }}>
          Gaurav<br />
          <span className="text-blue">Wasule</span>
        </h1>

        <p className="font-mono text-[16px] text-text2 mb-7 animate-fade-up-3 min-h-[1.6em]">
          {typed}<span className="cursor-blink" />
        </p>

        <p className="text-[15px] text-text2 max-w-[500px] leading-[1.85] mb-10 animate-fade-up-4">
          {meta.summary} Click any neural node to explore sections. Click multiple nodes to view them simultaneously.
        </p>

        <div className="flex gap-11 animate-fade-up-6">
          {meta.stats.map((s) => (
            <div key={s.label}>
              <div className="text-[30px] font-extrabold leading-none">
                {s.value.replace('+', '')}<span className="text-blue">{s.value.includes('+') ? '+' : ''}</span>
              </div>
              <div className="font-mono text-[10px] text-text3 mt-1 uppercase tracking-[0.08em]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hint badge */}
      <div className="absolute bottom-9 left-1/4 -translate-x-1/2 flex items-center gap-2.5
        font-mono text-[11px] text-text3 rounded-full px-5 py-2 animate-fade-up-6"
        style={{ border:'1px solid rgba(30,80,140,0.35)', background:'rgba(6,13,20,0.7)', backdropFilter:'blur(8px)' }}>
        <div className="w-3.5 h-3.5 rounded-full border border-blue" style={{ background:'rgba(79,168,245,0.2)' }} />
        click neural nodes to open sections • click again to close • click hub to close all
      </div>
    </section>
  )
}
