import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const testimonials = [
  {
    quote: "Nusafiri transformed our anniversary celebration into something beyond our wildest dreams. Every detail was perfection — from the private villa in Santorini to the surprise sunset dinner on a secluded terrace.",
    name: "Sarah Mitchell",
    location: "London, United Kingdom",
  },
  {
    quote: "As someone who travels extensively for business, I have worked with many concierge services. Nusafiri stands in a league of its own. Their attention to detail and discretion is unparalleled.",
    name: "James Carter",
    location: "New York, USA",
  },
  {
    quote: "Our family safari through Kenya and Tanzania was nothing short of magical. Nusafiri arranged private guides, exclusive camps, and moments of connection with wildlife that brought us to tears.",
    name: "The Andersen Family",
    location: "Copenhagen, Denmark",
  },
];

export default function About() {
  return (
    <>
      <Header />
      <main>
        <Hero
          image="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&q=85"
          headline={"We've explored the\nworld for you"}
          subheadline="Let us help you navigate it safely"
          height="h-screen"
        />

        {/* Our Story Section */}
        <section className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <div className="container-wide mx-auto">
            <div className="mb-12 flex items-center gap-6 md:mb-16">
              <div className="h-px flex-1 bg-nusafiri-gold/70" />
              <h2 className="shrink-0 font-script text-5xl text-[#17615f] md:text-7xl">Our Story</h2>
            </div>
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="relative h-[520px] md:h-[680px] lg:h-[760px]">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85"
                  alt="Two travelers walking along a tropical beach"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-7 pt-2 lg:pt-0">
                <p className="text-base leading-relaxed text-nusafiri-charcoal md:text-lg">
                  Nusafiri was born from a profound love for travel and an unwavering belief that the best journeys are those designed with intention. Founded by passionate explorers who have traversed over 90 countries, stayed in the world&apos;s most exceptional properties, and experienced adventures that belong on every bucket list, we set out to share our expertise with discerning travelers worldwide.
                </p>
                <p className="text-base leading-relaxed text-nusafiri-charcoal md:text-lg">
                  In an increasingly complex world, orchestrating travel has become more intricate than ever. What you need now more than ever are travel experts who can navigate the complexities and rekindle the pure joy of discovery. Our goal is to elevate your travel experience by safely introducing you to stunningly beautiful hidden gems around the globe.
                </p>
                <p className="text-base leading-relaxed text-nusafiri-charcoal md:text-lg">
                  We work with couples, families, small groups, solo travelers, and business travelers — each with their own unique vision. Far from mere booking agents, we understand your wants and needs, and can write you the perfect travel prescription right down to the last precise detail.
                </p>
                <p className="text-base leading-relaxed text-nusafiri-charcoal md:text-lg">
                  No matter where you are located, whether your journey is for business or pleasure, two days or two months, by car, plane, private jet, yacht, or train — let us design once-in-a-lifetime journeys so you can appreciate luxury in all its forms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Quote */}
        <section
          className="relative min-h-[720px] overflow-hidden bg-[#496b5f] px-6 py-28 md:px-12 md:py-36 lg:px-20"
          style={{
            backgroundImage: "linear-gradient(rgba(35, 74, 65, 0.38), rgba(35, 74, 65, 0.38)), url('/textart1.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="mx-auto flex min-h-[560px] max-w-6xl items-start justify-end">
            <div className="max-w-2xl pt-4 text-right md:pt-8">
              <blockquote className="font-display text-3xl leading-tight text-white md:text-5xl lg:text-6xl">
                &ldquo;I think travel when I&apos;m awake and dream travel when I&apos;m asleep.&rdquo;
              </blockquote>
              <p className="mt-8 text-lg font-light text-white/55 md:text-2xl">Dr. Nabeel Alateequi</p>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <div className="container-wide mx-auto">
            <div className="mb-16 text-center md:mb-24">
              <h2 className="font-script text-5xl text-[#17615f] md:text-7xl">Meet Our Founders</h2>
            </div>

            <div className="space-y-24 md:space-y-32">
              <div className="grid grid-cols-1 items-center lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative z-0 h-[460px] md:h-[620px] lg:h-[680px]">
                  <img src="/nabeel.jpeg" alt="Nusafiri founder" className="h-full w-full object-cover" />
                </div>
                <div className="relative z-10 -mt-12 bg-white px-8 py-12 shadow-xl md:-ml-10 md:px-14 lg:-ml-16 lg:px-16">
                  <div className="absolute -right-4 -top-4 -z-10 h-full w-full bg-gradient-to-br from-nusafiri-gold to-[#f5d58d]" />
                  <div className="flex items-center gap-4">
                    <h3 className="font-display text-3xl font-semibold text-[#17615f] md:text-4xl">Founder Name</h3>
                    <div className="h-px flex-1 bg-nusafiri-gold/60" />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-nusafiri-muted">President</p>
                  <p className="mt-6 text-base leading-relaxed text-nusafiri-charcoal md:text-lg">With over two decades of experience in luxury hospitality and a passport filled with stamps from 90+ countries, our founder brings an unparalleled depth of knowledge and an infectious passion for transformative travel to every Nusafiri journey.</p>
                  <div className="mt-7 flex gap-3 text-white">
                    <a href="#" aria-label="Founder LinkedIn"><Linkedin className="h-7 w-7" /></a>
                    <a href="mailto:hello@nusafiri.com" aria-label="Founder email"><Mail className="h-7 w-7" /></a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 items-center lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative z-10 order-2 -mt-12 bg-white px-8 py-12 shadow-xl md:-mr-10 md:px-14 lg:order-1 lg:-mr-16 lg:px-16">
                  <div className="absolute -left-4 -top-4 -z-10 h-full w-full bg-gradient-to-br from-nusafiri-gold to-[#f5d58d]" />
                  <div className="flex items-center gap-4">
                    <h3 className="font-display text-3xl font-semibold text-[#17615f] md:text-4xl">Co-Founder Name</h3>
                    <div className="h-px flex-1 bg-nusafiri-gold/60" />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-nusafiri-muted">Executive Vice President</p>
                  <p className="mt-6 text-base leading-relaxed text-nusafiri-charcoal md:text-lg">A visionary in experiential design, our co-founder has spent years cultivating relationships with the world&apos;s most exclusive properties, guides, and local experts. Their instinct for matching travelers with transformative experiences is the secret behind Nusafiri&apos;s magic.</p>
                  <div className="mt-7 flex gap-3 text-white">
                    <a href="#" aria-label="Co-founder LinkedIn"><Linkedin className="h-7 w-7" /></a>
                    <a href="mailto:hello@nusafiri.com" aria-label="Co-founder email"><Mail className="h-7 w-7" /></a>
                  </div>
                </div>
                <div className="relative z-0 order-1 h-[460px] md:h-[620px] lg:order-2 lg:h-[680px]">
                  <img src="/andrew.jpg" alt="Nusafiri co-founder" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values / Trust Section */}
        <section className="bg-[#f7f8f6] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <div className="container-wide mx-auto">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div className="flex items-center justify-center">
                <svg className="h-auto w-full max-w-[430px] text-nusafiri-gold" viewBox="0 0 420 420" fill="none" aria-label="Nusafiri travel emblem" role="img">
                  <path d="M210 24C150 46 94 102 72 162c-18 49 2 104 47 135 23 16 47 25 73 32 7 2 14 2 18-2 4-4 4-11 0-18-7-12-18-24-32-34-18-13-37-22-51-38-18-20-25-44-19-68 7-29 30-56 57-72-7 32-2 67 17 91 9 11 20 18 29 26 11 10 18 23 22 38 4-15 11-28 22-38 9-8 20-15 29-26 19-24 24-59 17-91 27 16 50 43 57 72 6 24-1 48-19 68-14 16-33 25-51 38-14 10-25 22-32 34-4 7-4 14 0 18 4 4 11 4 18 2 26-7 50-16 73-32 45-31 65-86 47-135C326 102 270 46 210 24Z" fill="currentColor" opacity="0.92"/>
                  <path d="M210 92c-18 26-25 50-25 73 0 28 10 48 25 68 15-20 25-40 25-68 0-23-7-47-25-73Z" fill="white" opacity="0.92"/>
                  <path d="M105 180c23 10 45 26 61 46 11 14 20 29 25 48M315 180c-23 10-45 26-61 46-11 14-20 29-25 48M83 239c24 5 47 15 66 30 14 11 25 24 34 40M337 239c-24 5-47 15-66 30-14 11-25 24-34 40" stroke="white" strokeWidth="12" strokeLinecap="round" opacity="0.92"/>
                </svg>
              </div>
              <div>
                <div className="mb-10 flex items-center gap-5">
                  <h2 className="font-script text-5xl leading-none text-[#17615f] md:text-7xl">Safety in Uncertain Times</h2>
                  <div className="h-px flex-1 bg-nusafiri-gold/70" />
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-nusafiri-charcoal md:text-lg">
                  We hold your safety and well-being in the utmost regard. How can we guarantee the safety of travel in today&apos;s world? Leveraging our team&apos;s wealth of travel experience, our trusted network of partners, and meticulous attention to details, we are well-equipped to ask the right questions that ensure your safety requirements are addressed. Our global network of trusted tourism partners offers the assurance of adhering to the safety protocols that we scrutinize when facilitating client bookings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Second Pull Quote */}
        <section
          className="relative min-h-[860px] overflow-hidden bg-[#183a5d] px-6 py-32 md:px-12 md:py-44 lg:px-20"
          style={{
            backgroundImage: "linear-gradient(rgba(10, 39, 70, 0.46), rgba(10, 39, 70, 0.46)), url('/textart2.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="mx-auto flex min-h-[660px] max-w-6xl items-start justify-end">
            <div className="max-w-2xl pt-4 text-right md:pt-8">
              <blockquote className="font-display text-3xl leading-tight text-white md:text-5xl lg:text-6xl">
                &ldquo;We&apos;re not just building itineraries for our clients, we&apos;re creating memories that become legacies.&rdquo;
              </blockquote>
              <p className="mt-8 text-lg font-light text-white/60 md:text-2xl">Andrew Satkowiak</p>
            </div>
          </div>
        </section>

        <Testimonials testimonials={testimonials} />

        {/* Editorial Highlight */}
        <section className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <div className="container-wide mx-auto">
            <div className="mb-16 flex items-center gap-6 md:mb-20">
              <div className="h-px flex-1 bg-nusafiri-gold/70" />
              <h2 className="shrink-0 font-display text-4xl font-semibold text-[#17615f] md:text-6xl">Become Enchanted</h2>
              <div className="h-px flex-1 bg-nusafiri-gold/70" />
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
              {/* Card 1 */}
              <article className="group bg-white shadow-[0_8px_24px_rgba(26,26,26,0.08)]">
                <div className="relative h-64 overflow-hidden md:h-72">
                  <img
                    src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1000&q=85"
                    alt="A slow travel moment in Siena"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-r from-[#a96f36] via-nusafiri-gold to-[#f5d58d]" />
                </div>
                <div className="p-7 md:p-9">
                <h3 className="font-display text-3xl font-semibold text-[#17615f] mb-5 group-hover:text-nusafiri-gold transition-colors">
                  Ninety Seconds in Siena
                </h3>
                <p className="text-base text-nusafiri-charcoal leading-relaxed mb-6">
                  A fleeting moment in Tuscany taught us the true meaning of la dolce vita. Discover how a simple sunset aperitivo in Siena became the cornerstone of our philosophy on slow, meaningful travel.
                </p>
                <Link href="/travel-notes/" className="text-xs font-semibold text-nusafiri-gold underline underline-offset-4">
                  Read the story
                  <ArrowRight className="w-3 h-3" />
                </Link>
                </div>
              </article>

              {/* Card 2 */}
              <article className="group bg-white shadow-[0_8px_24px_rgba(26,26,26,0.08)]">
                <div className="relative h-64 overflow-hidden md:h-72">
                  <img
                    src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=1000&q=85"
                    alt="Hot air balloons over Cappadocia"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-r from-[#a96f36] via-nusafiri-gold to-[#f5d58d]" />
                </div>
                <div className="p-7 md:p-9">
                <h3 className="font-display text-3xl font-semibold text-[#17615f] mb-5 group-hover:text-nusafiri-gold transition-colors">
                  Up, Up & Away
                </h3>
                <p className="text-base text-nusafiri-charcoal leading-relaxed mb-6">
                  From hot air balloons over the Serengeti to private helicopter transfers in the Alps, we explore the most exhilarating ways to see the world from above — and why perspective changes everything.
                </p>
                <Link href="/travel-notes/" className="text-xs font-semibold text-nusafiri-gold underline underline-offset-4">
                  Read the story
                  <ArrowRight className="w-3 h-3" />
                </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
