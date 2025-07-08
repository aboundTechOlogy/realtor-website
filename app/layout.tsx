import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "John Smith Realty - 20 Years of Market Expertise | South Florida Real Estate",
  description: "Experienced real estate agent with 20 years navigating every market condition. Specializing in Miami-Dade, Broward, and Palm Beach counties. Honest advice, strategic pricing, proven results.",
  keywords: "real estate agent, South Florida realtor, Miami real estate, Coral Gables homes, Brickell condos, home selling, market analysis, strategic pricing",
  openGraph: {
    title: "John Smith Realty - Your Trusted South Florida Real Estate Expert",
    description: "20 years of experience navigating every market condition. From the 2008 crash to today's market.",
    type: "website",
    locale: "en_US",
    url: "https://johnsmithrealty.com",
    siteName: "John Smith Realty",
    images: [
      {
        url: "https://johnsmithrealty.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Smith Realty - South Florida Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Smith Realty - South Florida Real Estate Expert",
    description: "20 years of experience. Honest advice. Strategic pricing. Proven results.",
    images: ["https://johnsmithrealty.com/twitter-image.jpg"],
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "John Smith Realty",
    "image": "https://johnsmithrealty.com/logo.jpg",
    "telephone": "(305) XXX-XXXX",
    "email": "john@smithrealty.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Street Address]",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33133",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.7617,
      "longitude": -80.1918
    },
    "url": "https://johnsmithrealty.com",
    "sameAs": [
      "https://facebook.com/johnsmithrealty",
      "https://twitter.com/johnsmithrealty",
      "https://linkedin.com/in/johnsmithrealty",
      "https://instagram.com/johnsmithrealty"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
    "priceRange": "$$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Miami",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Fort Lauderdale",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Boca Raton",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
