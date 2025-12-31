import Link from "next/link"
import { FaInstagram, FaFacebookF } from "react-icons/fa"

const socialImages = [
  "/tacos-with-hot-sauce-drizzled-on-top-food-photogra.jpg",
  "/chicken-wings-with-hot-sauce-close-up-food-photo.jpg",
  "/hot-sauce-bottle-product-shot-with-peppers.jpg",
  "/pizza-with-hot-sauce-drizzle-food-photography.jpg",
  "/eggs-and-breakfast-with-hot-sauce-food-photo.jpg",
  "/burger-with-hot-sauce-gourmet-food-photography.jpg",
]

export default function Social() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-white">JOIN THE </span>
          <span className="text-orange-500">#HEATWAVE</span>
        </h2>

        <div className="flex items-center justify-center gap-6 mb-12">
          <Link
            href="https://www.instagram.com/chili_copter/"
            target="_blank"
            className="text-white hover:text-orange-500 transition-colors"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://www.facebook.com/Chilicopter/"
            target="_blank"
            className="text-white hover:text-orange-500 transition-colors"
          >
            <FaFacebookF size={24} />
          </Link>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {socialImages.map((image, index) => (
            <Link href="#" key={index} className="relative aspect-square overflow-hidden group">
              <img
                src={image || "/placeholder.svg"}
                alt={`Social post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
