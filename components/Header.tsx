"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "ABOUT", href: "/about/" },
  { label: "PERSONAL", href: "/personal/" },
  {
    label: "EXPERIENCE",
    href: "/ultra-luxury/",
    dropdown: [
      { label: "Luxury African Safaris", href: "/ultra-luxury/luxury-african-safaris/" },
      { label: "Around the World Journeys", href: "/ultra-luxury/around-the-world/" },
      { label: "Private Islands", href: "/ultra-luxury/private-islands/" },
      { label: "Expedition Cruises", href: "/ultra-luxury/expedition-cruises/" },
      { label: "Bespoke Celebrations", href: "/ultra-luxury/bespoke-celebrations/" },
    ],
  },
  { label: "PLAN MY TRIP", href: "/plan-my-trip/" },
  { label: "TRAVEL # MEMORIES", href: "/travel-notes/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      className="absolute left-0 right-0 top-0 z-50 bg-black/20"
    >
      <div className="container-wide mx-auto px-6">
        <div className="flex h-[148px] items-center justify-center">
          <Link href="/" className="flex flex-col items-center group">
            <Image
              src="/nusafir.png"
              alt="Nusafiri"
              width={128}
              height={128}
              className="h-32 w-32 object-contain md:h-36 md:w-36"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="relative left-1/2 hidden h-[102px] w-screen -translate-x-1/2 items-center justify-center border-y border-white/10 bg-black/25 px-6 backdrop-blur-[2px] lg:flex">
          <ul className="flex items-center justify-center gap-8 xl:gap-12">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className="flex max-w-[110px] items-center justify-center gap-1 text-center text-[11px] uppercase tracking-widest-xl font-medium leading-tight text-white/90 transition-colors duration-300 hover:text-white"
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                        <div className="bg-nusafiri-cream shadow-xl border border-nusafiri-border rounded-sm py-4 px-6 min-w-[260px]">
                          <ul className="space-y-3">
                            {item.dropdown.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  className="block text-sm text-nusafiri-charcoal hover:text-nusafiri-gold transition-colors duration-200 font-body"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block max-w-[110px] text-center text-[11px] uppercase tracking-widest-xl font-medium leading-tight text-white/90 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden absolute right-6 top-1/2 -translate-y-1/2 text-white transition-colors duration-300"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-nusafiri-cream border-t border-nusafiri-border shadow-lg">
          <nav className="container-wide mx-auto px-6 py-8">
            <ul className="space-y-5">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.dropdown ? (
                    <div className="space-y-3">
                      <span className="text-xs uppercase tracking-widest-xl font-medium text-nusafiri-charcoal">
                        {item.label}
                      </span>
                      <ul className="pl-4 space-y-2 border-l border-nusafiri-border">
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-nusafiri-muted hover:text-nusafiri-gold transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs uppercase tracking-widest-xl font-medium text-nusafiri-charcoal hover:text-nusafiri-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
