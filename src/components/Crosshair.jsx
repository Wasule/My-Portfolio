export default function Crosshair({ pos }) {
  if (!pos) return null
  return (
    <div
      className={`crosshair${pos.onNode ? ' on-node' : ''}`}
      style={{ left: pos.x, top: pos.y }}
    />
  )
}
