export default function EducationSection({ education }) {
  return (
    <>
      <span className="sec-label">// 05. education & certifications</span>
      <h2 className="sec-title">Learning Journey</h2>

      <div className="grid gap-4" style={{ gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))' }}>
        {education.map((edu, i) => (
          <div key={i} className="rounded-xl p-5 transition-all duration-200 hover:border-cyan"
            style={{ background:'var(--bg3)', border:'1px solid var(--border)' }}>
            <p className="font-mono text-[10px] text-text3 mb-1.5">{edu.period}</p>
            <h3 className="text-[14px] font-bold mb-1 leading-snug">{edu.degree}</h3>
            <p className="font-mono text-[11px] text-cyan mb-2.5">{edu.institution}</p>
            <p className="text-[12px] text-text2 leading-relaxed">{edu.detail}</p>
            <span className="inline-block mt-2 font-mono text-[9px] px-2.5 py-0.5 rounded-full"
              style={{ border:'1px solid rgba(0,212,255,0.3)', color:'var(--cyan)', background:'rgba(0,212,255,0.07)' }}>
              {edu.badge}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
