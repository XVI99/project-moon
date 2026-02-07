import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Project Moon Hub - Your Gateway to The City",
    template: "%s | Project Moon Hub",
  },
  description: "Dive into the intricate worlds of Lobotomy Corporation, Library of Ruina, and Limbus Company. Explore the lore, characters, and grim realities of The City at the ultimate fan hub.",
  keywords: [
    "Project Moon",
    "Limbus Company",
    "Library of Ruina",
    "Lobotomy Corporation",
    "The City",
    "tier list",
    "team builder",
    "guide",
    "wiki",
  ],
  authors: [{ name: "Project Moon Hub" }],
  creator: "Project Moon Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://projectmoonhub.site",
    siteName: "Project Moon Hub",
    title: "Project Moon Hub - Your Gateway to The City",
    description: "The ultimate fan hub for Lobotomy Corporation, Library of Ruina, and Limbus Company.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Project Moon Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Moon Hub",
    description: "The ultimate fan hub for Project Moon games",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "d72a3c1ea66b7c98",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-pm-black text-pm-gray-light antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* HIGH PRIORITY: Analytics for tracking user behavior */}
        <Analytics />
      </body>
    </html>
  );
}
