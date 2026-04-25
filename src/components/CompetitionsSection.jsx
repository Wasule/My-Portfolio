export default function CompetitionsSection({ competitions }) {
  return (
    <>
      <span className="sec-label">// 08. coding competitions</span>
      <h2 className="sec-title">Competition Achievements</h2>

      <div className="grid gap-4" style={{ gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))' }}>
        {competitions.map((comp, i) => (
          <div key={i} className="rounded-xl p-5 transition-all duration-200 hover:border-blue"
            style={{ background:'var(--bg2)', border:'1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-cyan tracking-wider">{comp.year}</span>
              <span className="text-lg">🏆</span>
            </div>
            <h3 className="text-[16px] font-bold mb-1">{comp.name}</h3>
            <p className="font-mono text-[12px] text-blue mb-2">{comp.achievement}</p>
            <p className="text-[12px] text-text2 leading-relaxed">{comp.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}