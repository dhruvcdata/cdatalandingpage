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
  title: "Cdata Consultancy",
  description: "- Cdata Consultancy",
  other: {
    "google-site-verification": "bTOaQeiDZTtLH8fbvtES76JCrBIjx1At8wzT6fIwp8w",
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
        <link rel="canonical" href="https://cdatainsights.com" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Google Analytics scripts */}
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
