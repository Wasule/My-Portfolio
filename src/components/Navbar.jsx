export default function Navbar({ meta }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[60px]"
      style={{ background:'rgba(2,5,8,0.85)', backdropFilter:'blur(20px)', borderBottom:'1px solid rgba(30,80,140,0.35)' }}>
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] text-text3">{meta.email}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] text-text3">{meta.phone}</span>
        <div className="w-8 h-8 rounded-full bg-blue/20 border border-blue/50 flex items-center justify-center">
          <span className="text-xs font-mono text-blue">GW</span>
        </div>
      </div>
    </nav>
  )
}
