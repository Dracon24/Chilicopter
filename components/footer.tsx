import Link from "next/link"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CHILICOPTER</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium craft hot sauces made in small batches with bold flavors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider">QUICK LINKS</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">
                About
              </Link>
              <Link href="/shop" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">
                Shop
              </Link>
              <Link href="/where-to-buy" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">
                Where to Buy
              </Link>
              <Link href="/cart" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">
                Cart
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider">FOLLOW US</h4>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/Chilicopter/"
                target="_blank"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaFacebookF size={16} />
              </Link>
              <Link
                href="https://www.instagram.com/chili_copter/"
                target="_blank"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaInstagram size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">© 2025 Chilicopter Hot Sauce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
