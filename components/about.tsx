import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-neutral-900">NOT JUST</span>
              <br />
              <span className="text-orange-500">SPICE.</span>
              <br />
              <span className="text-neutral-900">PURE</span>
              <br />
              <span className="text-orange-500">ENERGY.</span>
            </h2>

            <p className="text-neutral-600 mb-4 leading-relaxed">
              Rooted in Avakaya — a South Indian Telugu tradition of pickling unripe produce with mustard and
              heat-infused ingredients. This ancient practice from Andhra Pradesh forms the soul of our hot sauces.
            </p>

            <p className="text-neutral-600 mb-6 leading-relaxed">
              Unlike western pickles, our sauces use the acid in the fruit combined with ground mustard seeds, dried red
              chili peppers, and sesame seed oil for a unique heat and flavor profile. No preservatives, no artificial
              flavors — just pure, authentic taste.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors text-sm font-semibold"
            >
              READ OUR FULL STORY <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative">
            <img
              src="/artistic-black-and-white-photo-of-muscular-male-to.jpg"
              alt="Artistic shot with chili pepper"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
