export default function SkillsSection({ skills }) {
  return (
    <>
      <span className="sec-label">// 04. skills & tech stack</span>
      <h2 className="sec-title">Capabilities</h2>

      <div className="grid gap-4" style={{ gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))' }}>
        {skills.map((grp) => (
          <div key={grp.group} className="rounded-xl p-5 transition-all duration-200 hover:border-blue"
            style={{ background:'var(--bg3)', border:'1px solid var(--border)' }}>
            <div className="font-mono text-[10px] text-cyan uppercase tracking-[0.08em] mb-3 pb-2"
              style={{ borderBottom:'1px solid var(--border)' }}>
              // {grp.group}
            </div>
            {grp.items.map((item) => (
              <div key={item.name} className="flex items-center gap-2 py-1.5 text-[13px] text-text2">
                <span className="w-1 h-1 rounded-full bg-blue flex-shrink-0" />
                {item.name}
                {item.note && (
                  <span className="ml-auto font-mono text-[10px] text-text3">{item.note}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
