export default function ExperienceSection({ experience }) {
  return (
    <>
      <span className="sec-label">// 02. professional experience</span>
      <h2 className="sec-title">Work History</h2>

      <div className="relative pl-7">
        {/* Vertical line */}
        <div className="timeline-line" />

        {experience.map((job, i) => (
          <div key={i} className="relative mb-12 last:mb-0">
            <div className="timeline-dot" />

            <p className="font-mono text-[11px] text-cyan mb-1 tracking-wider">
              {job.period} &nbsp;·&nbsp; {job.location}
            </p>
            <h3 className="text-[20px] font-bold mb-0.5">{job.role}</h3>
            <p className="font-mono text-[13px] text-blue mb-3">{job.company}</p>

            <ul className="flex flex-col gap-2">
              {job.points.map((pt, j) => (
                <li key={j} className="relative pl-4 text-[13px] text-text2 leading-relaxed">
                  <span className="absolute left-0 top-1 text-blue text-[10px]">▸</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
