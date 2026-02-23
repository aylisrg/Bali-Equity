import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EQUITY BALI — Strategic Real Estate Investment in Bali",
  description:
    "Premium Bali real estate agency. Data-driven investment portfolios, in-house property management, and top-10% market performance. ROI from 12%.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "EQUITY BALI — Strategic Real Estate Investment in Bali",
    description:
      "Data-driven Bali property investment. Portfolios built on 37,000+ Airbnb listings analysis. ROI from 12%.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300..700&family=Playfair+Display:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
