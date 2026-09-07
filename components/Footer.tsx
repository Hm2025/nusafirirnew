"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/about/" },
      { label: "Personal", href: "/personal/" },
      { label: "Ultra Luxury", href: "/ultra-luxury/" },
      { label: "Business", href: "/business/" },
      { label: "Gallery", href: "/gallery/" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Book a Hotel", href: "/book-a-hotel/" },
      { label: "Plan My Trip", href: "/plan-my-trip/" },
      { label: "Travel Notes", href: "/travel-notes/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "/careers/" },
      { label: "Travel Partners", href: "/travel-partners/" },
      { label: "Terms and Conditions", href: "/terms/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-nusafiri-border bg-white text-[#17615f]">
      <div className="container-wide mx-auto px-6 py-16 text-center md:py-20">
        <Link href="/" className="mx-auto flex w-fit flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#17615f]">The</span>
          <span className="font-display text-5xl leading-none text-nusafiri-gold">Nusafiri</span>
          <span className="mt-2 text-[10px] uppercase tracking-[0.35em] text-[#17615f]">Travel Agency</span>
        </Link>

        <div className="mt-12 flex items-center justify-center gap-6 text-nusafiri-gold">
          <a href="#" aria-label="Facebook" className="transition-colors hover:text-[#17615f]"><Facebook className="h-6 w-6" /></a>
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-[#17615f]"><Instagram className="h-6 w-6" /></a>
          <a href="mailto:hello@nusafiri.com" aria-label="Email" className="transition-colors hover:text-[#17615f]"><Mail className="h-6 w-6" /></a>
        </div>

        <nav className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-4 text-base">
          {[...footerLinks.flatMap((column) => column.links)].map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-nusafiri-gold">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-16">
          <p className="mb-5 text-sm text-[#17615f]">Get news from Nusafiri in your inbox.</p>
          <button className="bg-gradient-to-r from-[#a96f36] via-nusafiri-gold to-[#f5d58d] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-transform duration-300 hover:-translate-y-1">
            Sign up for updates
          </button>
        </div>
      </div>
      <div className="border-t border-nusafiri-border py-5 text-center text-xs text-[#17615f]/80">
        Copyright &copy; 2025 Nusafiri. All Rights Reserved.
      </div>
    </footer>
  );
}
