import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cdata Consultancy Expert Data & AI Services",
  description: "Creating a powerhouse in data modernization and AI driven transformation, specializing in data engineering, AI/ML, and data analytics.",
  alternates: { canonical: "https://cdatainsights.com/" },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    locale: "en_US",
    type: "website",
    title: "AI & Machine Learning",
    description: "At CData, we specialize in transforming how businesses manage, analyze, and leverage their data.",
    url: "https://cdatainsights.com/",
    siteName: "CData Consulting",
    images: [
      {
        url: "https://cdatainsights.com/whitelogo.png",
        alt: "CData Consulting Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "CData Consulting",
    description: "At CData, we specialize in transforming how businesses manage, analyze, and leverage their data.",
    creator: "@cdatainsights",
    site: "@cdatainsights",
    images: ["https://cdatainsights.com/whitelogo.png"],
  },
  other: {
    "google-site-verification": "bTOaQeiDZTtLH8fbvtES76JCrBIjx1At8wzT6fIwp8w",
    "twitter:label1": "Written by",
    "twitter:data1": "admin",
    "twitter:label2": "Est. reading time",
    "twitter:data2": "31 minutes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="canonical" href="https://cdatainsights.com" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Schema.org JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CData Consulting",
              alternateName: "cdatainsights",
              url: "https://cdatainsights.com/",
              logo: "https://cdatainsights.com/whitelogo.png",
              sameAs: [
                "https://www.facebook.com/cdatainsights",
                "https://www.instagram.com/p/DNp6vJCS4kN/?utm_source=ig_web_button_share_sheet",
                "https://www.linkedin.com/company/cdatainsights/"
              ]
            })
          }}
        />

        {/* Google Analytics scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WX1RQVC3JK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WX1RQVC3JK');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}