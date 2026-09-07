import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SplitFeature from "@/components/SplitFeature";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    title: "Luxury African Safaris",
    description: "Witness the raw beauty of Africa from the comfort of the world's most exclusive safari lodges and camps.",
    href: "/ultra-luxury/luxury-african-safaris/",
  },
  {
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
    title: "Around the World Journeys",
    description: "Circumnavigate the globe in unparalleled style, experiencing the world's most iconic destinations in a single extraordinary journey.",
    href: "/ultra-luxury/around-the-world/",
  },
  {
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    title: "Private Islands",
    description: "Escape to your own slice of paradise. We curate access to the world's most exclusive private island retreats.",
    href: "/ultra-luxury/private-islands/",
  },
  {
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    title: "Expedition Cruises",
    description: "Explore the world's most remote and pristine regions aboard intimate, ultra-luxury expedition vessels.",
    href: "/ultra-luxury/expedition-cruises/",
  },
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    title: "Bespoke Celebrations",
    description: "From destination weddings to milestone birthdays, we design celebrations that become legendary.",
    href: "/ultra-luxury/bespoke-celebrations/",
  },
];

const testimonials = [
  {
    quote: "The safari experience Nusafiri arranged was beyond anything we could have imagined. Private guides, exclusive camps, and wildlife encounters that left us speechless.",
    name: "The Van der Berg Family",
    location: "Amsterdam, Netherlands",
  },
  {
    quote: "Our around-the-world journey was executed with military precision and artistic grace. Every transfer, every stay, every experience was flawless.",
    name: "Alexandra Petrov",
    location: "Moscow, Russia",
  },
  {
    quote: "Nusafiri found us a private island that does not appear on any map. That level of access is simply extraordinary.",
    name: "Marcus Webb",
    location: "Dubai, UAE",
  },
];

export default function UltraLuxury() {
  return (
    <>
      <Header />
      <main>
        <Hero
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          headline="Ultra Luxury"
          subheadline="Experiences Beyond Imagination"
        />

        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 text-center">
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg mb-6">
              Ultra luxury is not about excess — it is about access. Access to places few have seen, experiences few have had, and moments that redefine what is possible. At Nusafiri, we specialize in curating journeys that exist at the intersection of rarity and refinement.
            </p>
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg">
              Our relationships with the world's most exclusive properties, private guides, and local experts allow us to open doors that remain closed to even the most seasoned travelers. This is travel without compromise.
            </p>
          </div>
        </section>

        {/* Category Grid */}
        <section className="section-padding bg-nusafiri-warm">
          <div className="container-wide mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl text-nusafiri-charcoal mb-4">
                Ultra Luxury Collection
              </h2>
              <div className="divider-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <article key={cat.title} className="group bg-nusafiri-cream">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-nusafiri-charcoal mb-2 group-hover:text-nusafiri-gold transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-nusafiri-muted leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <Link href={cat.href} className="text-link-arrow text-xs">
                      Discover
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Testimonials testimonials={testimonials} />
        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
