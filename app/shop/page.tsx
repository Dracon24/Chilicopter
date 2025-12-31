"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Filter, ChevronDown, ChevronRight } from "lucide-react"
import { useCart } from "@/context/cart-context"

const products = [
  {
    id: "mild-avakai",
    name: "Mild Avakai Hot Sauce",
    price: 11.99,
    image: "/smoky-chipotle-hot-sauce-bottle.jpg",
    stockStatus: "In Stock",
    ingredients:
      "Water, Sesame Seed Oil, Lemon Juice, Lime Juice, Brown Sugar, Mustard Seeds, Chilli Powder, Garlic, Salt",
  },
  {
    id: "spicy-avakai",
    name: "Spicy Avakai Hot Sauce",
    price: 11.99,
    image: "/red-hot-sauce-bottle-with-peppers.jpg",
    stockStatus: "In Stock",
    ingredients:
      "Water, Sesame Seed Oil, Lemon Juice, Lime Juice, Brown Sugar, Mustard Seeds, Chilli Powder, Garlic, Salt",
  },
]

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([11.99, 11.99])
  const [availability, setAvailability] = useState({
    inStock: false,
    outOfStock: false,
    limitedStock: false,
  })
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const { addItem } = useCart()

  const clearFilters = () => {
    setPriceRange([11.99, 11.99])
    setAvailability({
      inStock: false,
      outOfStock: false,
      limitedStock: false,
    })
  }

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Header />

      <section className="px-4 md:px-8 lg:px-16">
        <div className="pt-16 pb-8">
          <h1 className="pt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 leading-tight">
            SHOP HOT SAUCES
          </h1>
        </div>

        {/* Category and Sort Bar */}
        <div className="flex justify-between items-start p-4 border border-neutral-200 rounded-lg mb-4">
          <div>
            <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wide">Shop by Category</p>
            <button className="px-4 py-1.5 border-2 border-orange-500 text-orange-500 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors">
              All Products
            </button>
          </div>
          <div className="relative">
            <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wide">Sort By</p>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 px-4 py-1.5 border border-neutral-300 rounded text-sm bg-white min-w-[140px] justify-between"
            >
              Name (A-Z)
              <ChevronDown className="w-4 h-4" />
            </button>
            {showSortDropdown && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-neutral-200 rounded overflow-hidden z-10 min-w-[140px] shadow-lg">
                <button
                  onClick={() => setShowSortDropdown(false)}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-100"
                >
                  Name (A-Z)
                </button>
                <button
                  onClick={() => setShowSortDropdown(false)}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-100"
                >
                  Name (Z-A)
                </button>
                <button
                  onClick={() => setShowSortDropdown(false)}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-100"
                >
                  Price (Low-High)
                </button>
                <button
                  onClick={() => setShowSortDropdown(false)}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-100"
                >
                  Price (High-Low)
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-56 shrink-0">
            <div className="border border-neutral-200 rounded-lg p-5 bg-neutral-50">
              <div className="flex items-center gap-2 mb-5">
                <Filter className="w-4 h-4" />
                <h2 className="font-semibold">Filters</h2>
              </div>

              {/* Price Range */}
              <div className="mb-5">
                <h3 className="text-sm text-neutral-500 mb-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseFloat(e.target.value)])}
                  className="w-full accent-orange-500 h-1"
                />
                <div className="flex justify-between mt-3 gap-2">
                  <span className="px-3 py-1 border border-neutral-300 rounded text-sm bg-white">
                    ${priceRange[0].toFixed(2)}
                  </span>
                  <span className="px-3 py-1 border border-neutral-300 rounded text-sm bg-white">
                    ${priceRange[1].toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-sm text-neutral-500 mb-3">Availability</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setAvailability({ ...availability, inStock: !availability.inStock })}
                    className={`px-3 py-1 border rounded text-sm transition-colors ${
                      availability.inStock
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-neutral-300 text-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    In Stock
                  </button>
                  <button
                    onClick={() => setAvailability({ ...availability, outOfStock: !availability.outOfStock })}
                    className={`px-3 py-1 border rounded text-sm transition-colors ${
                      availability.outOfStock
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-neutral-300 text-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    Out of Stock
                  </button>
                  <button
                    onClick={() => setAvailability({ ...availability, limitedStock: !availability.limitedStock })}
                    className={`px-3 py-1 border rounded text-sm transition-colors ${
                      availability.limitedStock
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-neutral-300 text-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    Limited Stock
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Product Count Banner */}
            <div className="flex justify-between items-center bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 mb-6">
              <div className="flex items-center gap-2 text-orange-600">
                <Filter className="w-4 h-4" />
                <span className="text-sm">Showing {products.length} products</span>
              </div>
              <button
                onClick={clearFilters}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Clear Filters
              </button>
            </div>

            {/* Product Grid - 2 columns to match image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-neutral-200 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-orange-500 font-medium mb-2">{product.name}</h3>
                    <p className="text-xs text-neutral-500 mb-3">Ingredients: {product.ingredients}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-neutral-500">{product.stockStatus}</span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full py-2.5 border border-orange-500 text-orange-500 rounded text-sm hover:bg-orange-500 hover:text-white transition-colors mb-2"
                    >
                      Add to Cart
                    </button>
                    <button className="w-full py-2.5 bg-neutral-100 text-orange-500 rounded text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1">
                      View Product <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-neutral-500 text-sm mt-8">{products.length} products loaded</p>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  )
}
