"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, ChevronDown } from "lucide-react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { useCart } from "@/context/cart-context"

export default function Header() {
  const { openCart, itemCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="relative">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-1 text-xl font-bold tracking-wider text-neutral-900"
          >
            CHILICOPTER
            <ChevronDown size={20} className={`transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
          </button>
          <Link href="/" className="hidden md:block text-xl font-bold tracking-wider text-neutral-900">
            CHILICOPTER
          </Link>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg md:hidden">
              <nav className="flex flex-col py-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm text-neutral-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm text-neutral-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  ABOUT
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm text-neutral-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  SHOP
                </Link>
                <Link
                  href="/where-to-buy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm text-neutral-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  WHERE TO BUY
                </Link>
                <div className="border-t border-neutral-200 mt-2 pt-2 px-4 flex items-center gap-4">
                  <Link
                    href="https://www.facebook.com/Chilicopter/"
                    target="_blank"
                    className="text-neutral-700 hover:text-orange-500 transition-colors"
                  >
                    <FaFacebookF size={16} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/chili_copter/"
                    target="_blank"
                    className="text-neutral-700 hover:text-orange-500 transition-colors"
                  >
                    <FaInstagram size={16} />
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>

        {/* Desktop nav - unchanged */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-neutral-700 hover:text-orange-500 transition-colors">
            HOME
          </Link>
          <Link href="/about" className="text-sm text-neutral-700 hover:text-orange-500 transition-colors">
            ABOUT
          </Link>
          <Link href="/shop" className="text-sm text-neutral-700 hover:text-orange-500 transition-colors">
            SHOP
          </Link>
          <Link href="/where-to-buy" className="text-sm text-neutral-700 hover:text-orange-500 transition-colors">
            WHERE TO BUY
          </Link>
        </nav>

        {/* Right side icons - unchanged */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://www.facebook.com/Chilicopter/"
              target="_blank"
              className="text-neutral-700 hover:text-orange-500 transition-colors"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="https://www.instagram.com/chili_copter/"
              target="_blank"
              className="text-neutral-700 hover:text-orange-500 transition-colors"
            >
              <FaInstagram size={14} />
            </Link>
          </div>
          <button onClick={openCart} className="text-neutral-700 hover:text-orange-500 transition-colors relative">
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
