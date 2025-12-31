import { Beaker, Leaf, Flame } from "lucide-react"

const features = [
  {
    icon: Beaker,
    title: "SMALL BATCH",
    description:
      "Every bottle is crafted with care in limited quantities to ensure maximum freshness and quality control. No mass production here.",
  },
  {
    icon: Leaf,
    title: "PREMIUM INGREDIENTS",
    description:
      "Made with water, sesame seed oil, lemon juice, lime juice, brown sugar, mustard seeds, chilli powder, garlic, and salt. Pure, clean heat.",
  },
  {
    icon: Flame,
    title: "BOLD FLAVORS",
    description:
      "Complex flavor profiles that deliver heat with depth, designed to complement and elevate your favorite dishes.",
  },
]

export default function Features() {
  return (
    <section className="bg-neutral-100 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 text-center rounded-lg shadow-sm">
              <feature.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" strokeWidth={1} />
              <h3 className="text-neutral-900 font-bold text-lg mb-3">{feature.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
