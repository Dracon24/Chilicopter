import Link from "next/link"

const products = [
  {
    name: "MILD AVAKAI",
    level: "MILD",
    image: "/smoky-chipotle-hot-sauce-bottle.jpg",
    bgColor: "from-orange-100 to-white",
  },
  {
    name: "SPICY AVAKAI",
    level: "SPICY",
    image: "/red-hot-sauce-bottle-with-peppers.jpg",
    bgColor: "from-red-100 to-white",
  },
]

export default function Lineup() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-neutral-900">THE </span>
            <span className="text-orange-500">LINEUP</span>
          </h2>
          <Link
            href="/shop"
            className="hidden md:inline-block border border-neutral-900 text-neutral-900 px-6 py-2 text-xs tracking-wider hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <Link href="/shop" key={index} className="group relative bg-neutral-100 overflow-hidden rounded-lg">
              <div className={`absolute inset-0 bg-gradient-to-t ${product.bgColor}`} />
              <div className="relative p-8 flex flex-col items-center min-h-[400px]">
                <span className="text-orange-500 text-xs tracking-wider mb-4">{product.level}</span>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-64 object-contain mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-neutral-900 font-bold text-xl tracking-wider">{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Link
            href="/shop"
            className="inline-block border border-neutral-900 text-neutral-900 px-6 py-2 text-xs tracking-wider hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  )
}
