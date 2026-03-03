import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ViewTransitions } from "next-view-transitions";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat', // optional but recommended
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://giftedforge.com"),
  title: "GiftedForge – Global Talent Marketplace",
  description: "GiftedForge is a global talent marketplace connecting top creators, builders, and companies worldwide.",
  icons: {
    icon: [
      { url: "/favi.svg", type: "image/svg+xml" },
      { url: "/Favicon.png", sizes: "96x96", type: "image/png" }
    ]
  },
  alternates: {
    canonical: "https://giftedforge.com/",
  },
  openGraph: {
    title: "GiftedForge – Global Talent Marketplace",
    description:
      "Discover and hire top global talent on GiftedForge.",
    url: "https://giftedforge.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GiftedForge – Global Talent Marketplace",
    description: "Discover and hire top global talent on GiftedForge.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ViewTransitions>
      <html lang="en">
        <body
          className={`${montserrat.variable} ${montserrat.className}`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
