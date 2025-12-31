"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/context/cart-context"
import Image from "next/image"
import { ChevronLeft, Minus, Plus, Trash2 } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart()
  const [notes, setNotes] = useState("")

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  })

  const shipping = 5.99
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the order
    alert("Order placed successfully!")
    clearCart()
    router.push("/")
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <div className="flex flex-col items-center justify-center py-32">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-400 mb-8">Add some hot sauces to get started!</p>
          <button
            onClick={() => router.push("/shop")}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded transition-colors"
          >
            Shop Now
          </button>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="px-4 md:px-8 lg:px-16 py-12">
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
          {/* Left Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-white">Contact Information</h2>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  required
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-white">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    required
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-white focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    required
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  required
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-white focus:outline-none focus:border-orange-500 mb-4"
                />
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-white focus:outline-none focus:border-orange-500 mb-4"
                />
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    required
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-white focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State"
                    required
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-white focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="ZIP code"
                    required
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  required
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Order Notes */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-white">Order Notes</h2>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Special instructions for your order (e.g., gift wrap, delivery notes)"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-3 text-white focus:outline-none focus:border-orange-500 h-24 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-md transition-colors text-lg"
              >
                Place Order - ${total.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-white">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-neutral-800 p-3 rounded-lg">
                    <div className="w-20 h-20 relative rounded overflow-hidden shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-sm truncate">{item.name}</h3>
                      <p className="text-orange-500 font-semibold">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-neutral-700 flex items-center justify-center text-white hover:bg-neutral-600"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-neutral-700 flex items-center justify-center text-white hover:bg-neutral-600"
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
              <div className="border-t border-neutral-700 pt-4 space-y-3">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Shipping</span>
                  <span className="text-white">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Tax (7%)</span>
                  <span className="text-white">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white font-bold text-lg pt-3 border-t border-neutral-700">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
