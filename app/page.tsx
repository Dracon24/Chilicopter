import Header from "@/components/header"
import Hero from "@/components/hero"
import Marquee from "@/components/marquee"
import About from "@/components/about"
import Features from "@/components/features"
import Lineup from "@/components/lineup"
import Social from "@/components/social"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Features />
      <Lineup />
      <Social />
      <CTA />
      <Footer />
    </main>
  )
}
