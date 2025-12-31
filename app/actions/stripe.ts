"use server"

import { stripe } from "@/lib/stripe"
import { PRODUCTS } from "@/lib/products"

interface CartItem {
  id: string
  quantity: number
}

export async function createCheckoutSession(items: CartItem[]) {
  const lineItems = items.map((item) => {
    const product = PRODUCTS.find((p) => p.id === item.id)
    if (!product) {
      throw new Error(`Product with id "${item.id}" not found`)
    }

    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          description: product.description,
        },
        unit_amount: product.priceInCents,
      },
      quantity: item.quantity,
    }
  })

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: lineItems,
    mode: "payment",
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
  })

  return session.client_secret
}
