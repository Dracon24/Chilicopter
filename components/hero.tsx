import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/dramatic-orange-fire-flames-and-smoke-with-red-chi.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="text-sm tracking-[0.3em] text-white/80 mb-4">EST. 2020 // SMALL BATCH</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          <span className="block">IGNITE</span>
          <span className="block text-orange-500">YOUR TASTE</span>
        </h1>
        <Link
          href="/shop"
          className="inline-block border-2 border-white text-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
        >
          SHOP THE COLLECTION
        </Link>
      </div>
    </section>
  )
}
