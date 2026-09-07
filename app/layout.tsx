import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nusafiri | Where Every Journey is Designed Around You",
  description: "Luxury hospitality and experiential concierge — bespoke travel, wellness journeys, destination weddings, VIP guest management, and executive business travel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
