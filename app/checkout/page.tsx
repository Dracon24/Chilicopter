"use client"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/context/cart-context"
import Image from "next/image"
import { ChevronLeft, Minus, Plus, Trash2 } from "lucide-react"
import StripeCheckout from "@/components/stripe-checkout"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, removeItem, updateQuantity, subtotal } = useCart()

  const shipping = 5.99
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  const stripeItems = items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }))

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-white text-neutral-900">
        <Header />
        <div className="flex flex-col items-center justify-center py-32">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-500 mb-8">Add some hot sauces to get started!</p>
          <button
            onClick={() => router.push("/shop")}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition-colors"
          >
            Shop Now
          </button>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Header />

      <section className="px-4 md:px-8 lg:px-16 py-12 pt-24">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Shopping</span>
        </button>

        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12">CHECKOUT</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Order Summary */}
          <div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-6 text-neutral-900">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white p-3 rounded-lg border border-neutral-200">
                    <div className="w-20 h-20 relative rounded overflow-hidden shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-neutral-900 font-medium text-sm truncate">{item.name}</h3>
                      <p className="text-orange-500 font-semibold">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-300"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-neutral-900 text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-300"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-neutral-400 hover:text-red-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-neutral-200 pt-4 space-y-3">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="text-neutral-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span className="text-neutral-900">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Tax (7%)</span>
                  <span className="text-neutral-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-900 font-bold text-lg pt-3 border-t border-neutral-200">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stripe Checkout */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-neutral-900">Payment</h2>
            <StripeCheckout items={stripeItems} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
