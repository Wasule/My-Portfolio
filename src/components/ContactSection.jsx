export default function ContactSection({ meta }) {
  const links = [
    { href: `mailto:${meta.email}`, label: `✉  ${meta.email}` },
    { href: meta.linkedin, label: `in  LinkedIn Profile`, external: true },
    { href: `tel:${meta.phone}`, label: `☎  ${meta.phone}` },
  ]

  return (
    <>
      <span className="sec-label">// 07. contact</span>
      <h2 className="sec-title">Let's Connect</h2>

      <p className="text-[15px] text-text2 max-w-[540px] leading-[1.85] mb-8">
        Open to new opportunities, collaborations, and interesting tech conversations.
        Reach out via any channel below.
      </p>

      <div className="flex flex-wrap gap-3.5">
        {links.map((l) => (
          <a key={l.label} href={l.href} target={l.external ? '_blank' : undefined}
            rel={l.external ? 'noreferrer' : undefined}
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-mono text-[12px] text-text2
              no-underline transition-all duration-200 hover:text-blue hover:-translate-y-0.5"
            style={{ background:'var(--bg3)', border:'1px solid var(--border)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor='var(--blue)'}
            onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
