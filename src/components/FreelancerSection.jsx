export default function FreelancerSection({ freelancer }) {
  return (
    <>
      <span className="sec-label">// 07. freelance work</span>
      <h2 className="sec-title">Freelance Projects</h2>

      <div className="relative pl-7">
        {/* Vertical line */}
        <div className="timeline-line" />

        {freelancer.map((work, i) => (
          <div key={i} className="relative mb-12 last:mb-0">
            <div className="timeline-dot" />

            <p className="font-mono text-[11px] text-cyan mb-1 tracking-wider">
              {work.period} &nbsp;·&nbsp; {work.platform}
            </p>
            <h3 className="text-[20px] font-bold mb-0.5">{work.role}</h3>

            <ul className="flex flex-col gap-2 mt-3">
              {work.projects.map((project, j) => (
                <li key={j} className="relative pl-4 text-[13px] text-text2 leading-relaxed">
                  <span className="absolute left-0 top-1 text-blue text-[10px]">▸</span>
                  {project}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}