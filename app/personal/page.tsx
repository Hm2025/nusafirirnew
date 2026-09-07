import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SplitFeature from "@/components/SplitFeature";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";

const testimonials = [
  {
    quote: "Nusafiri transformed our anniversary celebration into something beyond our wildest dreams. Every detail was perfection.",
    name: "Sarah Mitchell",
    location: "London, United Kingdom",
  },
  {
    quote: "Our honeymoon in the Maldives was absolutely flawless. Nusafiri thought of everything before we even asked.",
    name: "Emma & David Chen",
    location: "Singapore",
  },
  {
    quote: "The private villa in Tuscany they found us had no website, no reviews — just pure magic. That is the Nusafiri difference.",
    name: "The Richardson Family",
    location: "Sydney, Australia",
  },
];

export default function Personal() {
  return (
    <>
      <Header />
      <main>
        <Hero
          image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
          headline="Personal Travel"
          subheadline="Journeys Crafted Exclusively For You"
        />

        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 text-center">
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg mb-6">
              Your personal travel journey begins with a conversation. We take the time to understand not just where you want to go, but why you want to go there, what moves you, and what you hope to discover about yourself along the way.
            </p>
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg">
              From intimate romantic escapes to multi-generational family adventures, from solo soul-searching journeys to celebratory milestone trips — we design experiences that resonate on a deeply personal level.
            </p>
          </div>
        </section>

        <SplitFeature
          image="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80"
          title="Romantic Escapes"
          description="Whether it is a honeymoon, anniversary, or simply a retreat for two, we curate romantic experiences that deepen connection. Private dinners under the stars, couples' spa rituals, secluded beach picnics — every moment designed for intimacy."
          linkText="Explore Romantic Journeys"
          linkHref="/plan-my-trip/"
        />

        <SplitFeature
          image="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80"
          title="Family Adventures"
          description="Traveling with family is one of life's greatest gifts. We design multi-generational trips that balance adventure with comfort, education with fun, and togetherness with individual space — ensuring every member of the family returns enriched."
          linkText="Explore Family Journeys"
          linkHref="/plan-my-trip/"
          reversed
        />

        <SplitFeature
          image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80"
          title="Solo Journeys"
          description="There is profound power in traveling alone. Our solo journeys are designed for self-discovery, personal growth, and the kind of freedom that only comes from answering to no one but yourself. With our support, you are never truly alone."
          linkText="Explore Solo Journeys"
          linkHref="/plan-my-trip/"
        />

        <Testimonials testimonials={testimonials} />
        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
