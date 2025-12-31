export default function Marquee() {
  const text = "PREMIUM INGREDIENTS // BOLD FLAVORS // HANDCRAFTED CHILICOPTER // "

  return (
    <div className="bg-orange-500 py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-black font-bold text-sm tracking-wider mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
