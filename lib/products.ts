export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  image: string
  ingredients: string[]
  inStock: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: "mild-avakai",
    name: "Mild Avakai Hot Sauce",
    description: "Traditional South Indian flavors with a gentle kick. Perfect for those new to Avakaya.",
    priceInCents: 1199,
    image: "/smoky-chipotle-hot-sauce-bottle.jpg",
    ingredients: [
      "Water",
      "Sesame Seed Oil",
      "Lemon Juice",
      "Lime Juice",
      "Brown Sugar",
      "Mustard Seeds",
      "Chilli Powder",
      "Garlic",
      "Salt",
    ],
    inStock: true,
  },
  {
    id: "spicy-avakai",
    name: "Spicy Avakai Hot Sauce",
    description: "Bold, authentic heat for the true spice lover. Our signature blend of traditional Andhra spices.",
    priceInCents: 1199,
    image: "/red-hot-sauce-bottle-with-peppers.jpg",
    ingredients: [
      "Water",
      "Sesame Seed Oil",
      "Lemon Juice",
      "Lime Juice",
      "Brown Sugar",
      "Mustard Seeds",
      "Chilli Powder",
      "Garlic",
      "Salt",
    ],
    inStock: true,
  },
]
