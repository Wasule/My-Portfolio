export default function AchievementsSection({ achievements }) {
  return (
    <>
      <span className="sec-label">// 06. achievements & awards</span>
      <h2 className="sec-title">Recognition</h2>

      <div className="grid gap-3.5" style={{ gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))' }}>
        {achievements.map((a, i) => (
          <div key={i} className="flex gap-3 rounded-xl p-4 transition-all duration-200 hover:border-blue"
            style={{ background:'var(--bg2)', border:'1px solid var(--border)' }}>
            <span className="text-xl flex-shrink-0 mt-0.5">{a.icon}</span>
            <p className="text-[12px] text-text2 leading-relaxed">{a.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}
