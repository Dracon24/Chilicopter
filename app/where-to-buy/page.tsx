import Header from "@/components/header"
import Footer from "@/components/footer"
import { ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"

const retailStores = [
  {
    name: "BELMONT BUTCHERY",
    address: "15 N Belmont Ave, Richmond, VA 23221",
  },
  {
    name: "SHEPPARD FARMS MARKET",
    address: "704 N Sheppard St, Richmond, VA 23221",
  },
  {
    name: "SUPPER CLUB - TUCKAHOE",
    address: "417 N Ridge Rd, Henrico, VA 23229",
  },
]

const farmersMarkets = [
  {
    name: "RVA BIG MARKET",
    location: "Bryan Park",
    address: "4308 Hermitage Road, Richmond, VA 23227",
    hours: "Saturdays: 9 AM - Noon",
    mapQuery: "Bryan+Park,+4308+Hermitage+Road,+Richmond,+VA+23227",
  },
  {
    name: "SOUTH OF THE JAMES MARKET",
    location: "Forrest Hill Park",
    address: "4021 Forest Hill Ave, Richmond, VA 23225",
    hours: "Sundays: 10 AM - 1 PM",
    mapQuery: "Forest+Hill+Park,+4021+Forest+Hill+Ave,+Richmond,+VA+23225",
  },
]

export default function WhereToBuyPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Header />

      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 pt-32 pb-16">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-orange-500 italic tracking-wide">
          WHERE TO BUY
        </h1>
        <p className="mt-6 text-neutral-600 text-lg max-w-xl">
          Find Chilicopter hot sauce at our retail locations and farmers' markets in the Richmond area.
        </p>
      </section>

      {/* Retail Stores Section */}
      <section className="px-4 md:px-8 lg:px-16 py-16 bg-neutral-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          RETAIL <span className="text-orange-500">STORES</span>
        </h2>
        <p className="text-neutral-600 mb-12">
          Visit our partner retail locations to experience Chilicopter hot sauce.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {retailStores.map((store, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="flex items-start gap-3 mb-2">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <h3 className="text-lg font-bold text-neutral-900">{store.name}</h3>
              </div>
              <p className="text-neutral-600 text-sm ml-8 mb-4">{store.address}</p>
              <div className="flex gap-6 ml-8">
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
                  target="_blank"
                  className="flex items-center gap-2 text-orange-500 text-sm font-medium hover:text-orange-400"
                >
                  <ExternalLink className="w-4 h-4" />
                  DIRECTIONS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Farmers' Markets Section */}
      <section className="px-4 md:px-8 lg:px-16 py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          FARMERS' <span className="text-orange-500">MARKETS</span>
        </h2>
        <p className="text-neutral-600 mb-12">
          Meet us at local farmers' markets and discover Chilicopter hot sauce fresh from our booth.
        </p>

        <div className="flex flex-col gap-8">
          {farmersMarkets.map((market, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row rounded-lg overflow-hidden border border-neutral-200 shadow-sm"
            >
              {/* Left side - info */}
              <div className="bg-neutral-50 p-6 w-full md:w-1/2">
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{market.name}</h3>
                <p className="text-orange-500 text-sm mb-3">{market.location}</p>
                <p className="text-neutral-600 text-sm mb-3">{market.address}</p>
                <div className="border-l-2 border-orange-500 pl-3 mb-4">
                  <p className="text-neutral-700 text-sm font-medium">Hours</p>
                  <p className="text-neutral-600 text-sm">{market.hours}</p>
                </div>
                <div className="flex gap-6">
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${market.mapQuery}`}
                    target="_blank"
                    className="flex items-center gap-2 text-orange-500 text-sm font-medium hover:text-orange-400"
                  >
                    <ExternalLink className="w-4 h-4" />
                    DIRECTIONS
                  </Link>
                </div>
              </div>
              {/* Right side - Google Map */}
              <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[250px]">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${market.mapQuery}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-20 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-6 text-white">CAN'T FIND US NEARBY?</h2>
        <p className="text-white/80 mb-8">Order Chilicopter hot sauce online and have it delivered to your door.</p>
        <Link
          href="/shop"
          className="inline-block bg-white hover:bg-neutral-100 text-orange-500 font-semibold px-10 py-4 transition-colors"
        >
          SHOP ONLINE
        </Link>
      </section>

      <Footer />
    </main>
  )
}
