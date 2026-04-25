export default function ProjectsSection({ projects, publication }) {
  return (
    <>
      <span className="sec-label">// 03. projects & research</span>
      <h2 className="sec-title">What I've Built</h2>

      <div className="grid gap-5" style={{ gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))' }}>
        {projects.map((p, i) => (
          <div key={i} className="gw-card">
            <div className="font-mono text-[20px] text-text3 mb-3 transition-colors duration-200">{p.icon}</div>
            <h3 className="text-[15px] font-bold mb-2">{p.title}</h3>
            <p className="text-[12px] text-text2 leading-[1.7] mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map(t => <span key={t} className="gw-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      {/* Publication */}
      <div className="mt-10">
        <span className="sec-label">// published research</span>
        <div className="mt-3 rounded-xl p-6"
          style={{ background:'var(--bg3)', border:'1px solid var(--border)', borderLeft:'3px solid var(--blue)' }}>
          <h4 className="text-[15px] font-bold mb-1.5">{publication.title}</h4>
          <p className="font-mono text-[10px] text-cyan mb-3">{publication.journal}</p>
          <p className="text-[12px] text-text2 leading-[1.7]">{publication.desc}</p>
        </div>
      </div>
    </>
  )
}
