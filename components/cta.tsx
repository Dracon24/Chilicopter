import Link from "next/link"

export default function CTA() {
  return (
    <section
      className="relative py-32 px-4 overflow-hidden"
      style={{
        backgroundImage: `url('/orange-and-red-fire-flames-gradient-background-dra.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          READY TO
          <br />
          BURN?
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Explore our full collection of handcrafted hot sauces and find your perfect match.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-black text-white px-10 py-4 text-sm tracking-wider hover:bg-zinc-900 transition-colors duration-300"
        >
          SHOP NOW
        </Link>
      </div>
    </section>
  )
}
