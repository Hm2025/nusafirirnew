import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroBlock from "@/components/IntroBlock";
import SplitFeature from "@/components/SplitFeature";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import TrustBar from "@/components/TrustBar";

const introParagraphs = [
  "At Nusafiri, we believe that the most extraordinary journeys are not simply planned — they are designed. Every detail, every moment, every sensation is crafted with intention to create experiences that transcend the ordinary.",
  "As your dedicated luxury hospitality and experiential concierge, we curate bespoke travel, wellness journeys, destination celebrations, and VIP guest management with an unwavering commitment to excellence. From the moment you dream of a destination to the moment you return transformed, we are with you every step of the way.",
  "Our team of seasoned travel architects has explored the world's most coveted destinations, forged relationships with the finest properties and experiences, and developed an intuitive understanding of what discerning travelers truly desire. We do not just plan trips — we design memories that last a lifetime.",
  "At a time when trust and expertise are paramount, our dedicated team is passionately committed to guiding you through every detail, ensuring your travels are seamless, personal, and memorable.",
];

const testimonials = [
  {
    quote: "Nusafiri transformed our anniversary celebration into something beyond our wildest dreams. Every detail was perfection — from the private villa in Santorini to the surprise sunset dinner on a secluded terrace. They understood exactly what we wanted before we even knew ourselves.",
    name: "Sarah Mitchell",
    location: "London, United Kingdom",
  },
  {
    quote: "As someone who travels extensively for business, I have worked with many concierge services. Nusafiri stands in a league of its own. Their attention to detail, discretion, and ability to anticipate needs is unparalleled. They have become an indispensable part of my travel life.",
    name: "James Carter",
    location: "New York, USA",
  },
  {
    quote: "Our family safari through Kenya and Tanzania was nothing short of magical. Nusafiri arranged private guides, exclusive camps, and moments of connection with wildlife that brought us to tears. This was not a vacation — it was a transformation.",
    name: "The Andersen Family",
    location: "Copenhagen, Denmark",
  },
];

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=85",
    title: "25th Anniversary Trip Ideas That Actually Work",
    excerpt: "Most 25th anniversary trips are planned backwards. Couples choose a destination first and hope it feels special. This guide shows how to choose the right trip so it actually lives up to the milestone.",
    slug: "art-of-slow-travel",
  },
  {
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=85",
    title: "Embark on the Ultimate African Safari Adventure",
    excerpt: "Discover the most captivating safari destinations across Africa with our expertly curated guide. From the towering dunes of Namibia to the lush plains of Kenya and the wetlands of Botswana.",
    slug: "hidden-gems-private-islands",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
    title: "Unforgettable Journeys for Every Generation",
    excerpt: "Planning a trip for the whole family? Our curated guide to the best multigenerational travel ideas features destinations and experiences that bring everyone together.",
    slug: "wellness-journeys",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero
          image="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=85"
          slides={[
            { image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=85", video: "/hero%202.mp4", headline: "Where Every Journey is Designed Around You" },
            { image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=85", video: "/hero1.mp4" },
            { image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=85", video: "/slider3.mp4" },
          ]}
          headline="Travel Beyond the Destination"
          subheadline="Experience the Extraordinary"
          headlineFont="birthstone"
          description="Our luxury travel advisors deliver exceptionally indulgent experiences wherever life takes you. From beach escapes and city breaks to cruises, safaris, and important business journeys, every detail is perfectly pampered."
          height="h-screen"
        />

        <IntroBlock
          title="Trust and Luxury Redefined"
          paragraphs={introParagraphs}
        />

        <SplitFeature
          image="/bsiness.jpeg"
          eyebrow="Business Travel"
          title="Where Business Meets Pleasure"
          description="Executive travel demands precision, efficiency, and seamless execution. Our corporate travel specialists ensure that every business journey is optimized for productivity while maintaining the comfort and luxury that discerning professionals expect."
          linkText="Take Me There"
          linkHref="/business/"
          reversed
        />

        <Testimonials
          testimonials={testimonials}
          image="/backgrd.jpeg"
        />

        <BlogPreview eyebrow="See the world our way" posts={blogPosts} />

        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
