import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const articles: Record<string, { title: string; date: string; image: string; content: string[] }> = {
  "art-of-slow-travel": {
    title: "The Art of Slow Travel",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80",
    content: [
      "In an age of instant gratification and bucket-list tourism, the concept of slow travel feels almost radical. It asks us to do less, see less, and experience more. It invites us to trade the frenetic pace of modern tourism for something deeper, richer, and ultimately more transformative.",
      "Slow travel is not about moving at a snail's pace — it is about moving with intention. It is the difference between spending three days in Paris checking off landmarks and spending three weeks in a single arrondissement, learning the rhythm of the neighborhood, recognizing the baker, being recognized in return.",
      "At Nusafiri, we have long championed this philosophy. Some of our most cherished client feedback comes not from the grand gestures — the private dinners, the helicopter transfers — but from the quiet moments. The morning coffee on a Tuscan terrace. The afternoon spent watching fishermen mend nets in a Greek village. The evening stroll through a Moroccan medina with no destination in mind.",
      "The benefits of slow travel extend far beyond the immediate experience. Research consistently shows that travelers who spend more time in fewer places report higher satisfaction, deeper cultural connection, and more lasting memories. When we slow down, we open ourselves to serendipity — to the unplanned encounter, the unexpected invitation, the moment that changes everything.",
      "Designing a slow travel itinerary requires a different mindset. It means saying no to more than you say yes to. It means building in buffer time, resisting the urge to optimize every hour, and leaving space for the journey to unfold organically. Our travel architects specialize in this kind of curation — creating frameworks that are structured enough to ensure comfort and safety, yet flexible enough to allow for magic.",
      "The next time you plan a journey, consider doing less. Choose one region instead of three. Stay in one property for a week instead of hopping every two nights. Take the train instead of the plane. Walk instead of drive. You may be surprised by how much more you experience when you stop trying to experience everything.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug] || {
    title: "Article",
    date: "",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80",
    content: ["Article content coming soon."],
  };

  return (
    <>
      <Header />
      <main>
        <Hero image={article.image} headline={article.title} subheadline={article.date} height="h-[60vh]" />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6">
            <div className="mb-10">
              <Link href="/travel-notes/" className="text-link-arrow text-xs"><ArrowLeft className="w-3 h-3" />Back to Travel Notes</Link>
            </div>
            <article className="space-y-6">
              {article.content.map((paragraph, i) => (
                <p key={i} className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg">{paragraph}</p>
              ))}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
