import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Our Story Section */}
      <section className="py-20 px-4 pt-32">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-orange-500">OUR STORY</span>
          </h1>
          <p className="text-neutral-600 max-w-xl text-lg leading-relaxed">
            Chilicopter is rooted in Avakaya — a South Indian Telugu tradition of pickling unripe produce with mustard
            and heat-infused ingredients. This ancient practice forms the soul of our hot sauces.
          </p>
        </div>
      </section>

      {/* Crafted With Passion Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">CRAFTED WITH</h2>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8">TRADITION</h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  In South India, particularly in Andhra Pradesh, many families have seasonal pickling traditions. The
                  annual mango harvest would not survive the harsh heat of coastal Andhra Pradesh summers, so people
                  learned to preserve them for year-round use.
                </p>
                <p>
                  This tradition has endured for so long that, even with modern agriculture and refrigeration, pickling
                  continues because of the love for that flavor. Careful attention was given during the pickling process
                  to avoid spoiling an entire year's worth of mangoes.
                </p>
                <p>
                  The care process even has a name — Madi — in which people partaking in the pickling must shower and
                  wear clean clothes untouched by anything or anyone outside. Water is another big enemy; everything
                  must be dried and kept away from damp air and moisture.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/colorful-red-orange-yellow-peppers-on-black-backgr.jpg"
                alt="Colorful peppers"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 px-4 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-neutral-900">OUR </span>
            <span className="text-orange-500">INGREDIENTS</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-neutral-600 text-center text-lg mb-8">
              Every bottle of Chilicopter hot sauce is made with simple, natural ingredients:
            </p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
              {[
                "Water",
                "Sesame Seed Oil",
                "Lemon Juice",
                "Lime Juice",
                "Brown Sugar",
                "Mustard Seeds",
                "Chilli Powder",
                "Garlic",
                "Salt",
              ].map((ingredient, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-neutral-700 font-medium text-sm">{ingredient}</p>
                </div>
              ))}
            </div>
            <p className="text-neutral-500 text-center text-sm mt-8">
              No preservatives. No artificial flavors. No colors. Just pure, authentic taste.
            </p>
          </div>
        </div>
      </section>

      {/* The Flavor Profile Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/traditional-indian-spices-mustard-seeds-red-chili-.jpg"
                alt="Traditional spices"
                width={500}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">UNIQUE</h2>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8">FLAVOR</h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Unlike western pickles, which are primarily vinegar-based, these pickles use the acid in the fruit,
                  combined with ground mustard seeds, dried red chili peppers, sesame seed oil, and salt as the "brine,"
                  forming a thick slurry that has a unique heat and flavor profile.
                </p>
                <p>
                  Other ingredients commonly used include garlic, jaggery, curry leaves, and whole spices. Growing up in
                  South India, my mother pickled unripe mangoes, gooseberries, limes, yellow cucumbers, and any other
                  sour fruit or vegetable available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-neutral-900">OUR </span>
            <span className="text-orange-500">MISSION</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              When I started Chilicopter, my goal was to bring the South Indian flavors to the American audience but
              refine it to be easier to consume — in the form of hot sauces, spreads, dips, spice blends, and beverages.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Just like the pickles, I avoid using preservatives, artificial flavors, and colors. Pure, authentic flavor
              is our promise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-neutral-900">OUR </span>
            <span className="text-orange-500">VALUES</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-100 p-8 border-l-4 border-orange-500 rounded-r-lg">
              <h3 className="text-orange-500 font-bold text-lg mb-4">TRADITION</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our recipes are rooted in generations of South Indian pickling traditions, bringing authentic Avakaya
                flavors to every bottle.
              </p>
            </div>

            <div className="bg-neutral-100 p-8 border-l-4 border-orange-500 rounded-r-lg">
              <h3 className="text-orange-500 font-bold text-lg mb-4">PURITY</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                No preservatives, no artificial flavors, no colors. Just pure, natural ingredients crafted with care in
                small batches.
              </p>
            </div>

            <div className="bg-neutral-100 p-8 border-l-4 border-orange-500 rounded-r-lg">
              <h3 className="text-orange-500 font-bold text-lg mb-4">HERITAGE</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We're bringing the bold, complex flavors of Andhra Pradesh to American tables, one bottle at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience The Heat CTA */}
      <section className="py-24 px-4 bg-orange-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">EXPERIENCE THE HEAT</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Discover our full collection of handcrafted hot sauces and find your perfect match.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-orange-500 font-semibold px-10 py-4 text-sm tracking-wider hover:bg-neutral-100 transition-colors duration-300"
          >
            SHOP NOW
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
