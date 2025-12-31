import Link from "next/link"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">CHILICOPTER</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Premium craft hot sauces made in small batches with bold flavors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4 tracking-wider">QUICK LINKS</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-neutral-600 text-sm hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-neutral-600 text-sm hover:text-orange-500 transition-colors">
                About
              </Link>
              <Link href="/shop" className="text-neutral-600 text-sm hover:text-orange-500 transition-colors">
                Shop
              </Link>
              <Link href="/where-to-buy" className="text-neutral-600 text-sm hover:text-orange-500 transition-colors">
                Where to Buy
              </Link>
              <Link href="/cart" className="text-neutral-600 text-sm hover:text-orange-500 transition-colors">
                Cart
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4 tracking-wider">FOLLOW US</h4>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/Chilicopter/"
                target="_blank"
                className="text-neutral-600 hover:text-orange-500 transition-colors"
              >
                <FaFacebookF size={16} />
              </Link>
              <Link
                href="https://www.instagram.com/chili_copter/"
                target="_blank"
                className="text-neutral-600 hover:text-orange-500 transition-colors"
              >
                <FaInstagram size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-300 pt-8 text-center">
          <p className="text-neutral-500 text-xs">© 2026 Chilicopter Hot Sauce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
