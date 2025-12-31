"use client"

import { X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/context/cart-context"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart()
  const [notes, setNotes] = useState("")
  const router = useRouter()

  const handleCheckout = () => {
    closeCart()
    router.push("/checkout")
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={closeCart} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-neutral-900 z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-800">
          <h2 className="text-lg font-semibold text-white">Shopping Cart ({itemCount})</h2>
          <button onClick={closeCart} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-gray-400">
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4">
                <ShoppingBag size={32} />
              </div>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-neutral-800 p-3 rounded-lg">
                  <div className="w-20 h-20 relative rounded overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-sm">{item.name}</h3>
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
                      <button onClick={() => removeItem(item.id)} className="ml-auto text-gray-400 hover:text-red-500">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Notes */}
        <div className="p-4 border-t border-neutral-800">
          <label className="text-white text-sm font-medium block mb-2">Notes:</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Special instructions for your order (e.g., gift wrap, delivery notes)"
            className="w-full bg-neutral-800 border border-neutral-700 rounded-md p-3 text-gray-300 text-sm resize-none h-20 focus:outline-none focus:border-orange-500"
          />
        </div>

        {/* Totals */}
        <div className="p-4 border-t border-neutral-800 space-y-2">
          <div className="flex justify-between text-gray-300">
            <span>Subtotal ({itemCount} items)</span>
            <span className="text-white font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Shipping</span>
            <span className="text-white">$0.00</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Tax</span>
            <span className="text-white">$0.00</span>
          </div>
          <div className="flex justify-between text-white font-semibold pt-2 border-t border-neutral-700">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="p-4">
          <button
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-neutral-700 disabled:cursor-not-allowed text-black disabled:text-neutral-500 font-semibold py-3 rounded transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  )
}
