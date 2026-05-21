import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chronos by Katalis — Sistem Otomatisasi Rental PlayStation",
  description:
    "Platform IoT untuk otomatisasi rental PlayStation. Fitur self-checkout, pembayaran QRIS otomatis, timer rental, dan monitoring real-time. Kelola bisnis rental PS Anda dari mana saja.",
  keywords: [
    "rental PlayStation",
    "otomatisasi rental PS",
    "self-checkout PlayStation",
    "pembayaran QRIS rental",
    "sistem rental PS IoT",
    "chronos",
    "katalis",
    "manajemen rental PlayStation",
    "timer rental otomatis",
  ],
  authors: [{ name: "Katalis" }],
  creator: "Katalis",
  publisher: "Katalis",
  openGraph: {
    title: "Chronos by Katalis — Sistem Otomatisasi Rental PlayStation",
    description:
      "Platform IoT untuk otomatisasi rental PlayStation dengan self-checkout, pembayaran QRIS, dan monitoring real-time.",
    url: "https://chronos.katalisdev.my.id",
    siteName: "Chronos",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronos by Katalis — Otomatisasi Rental PlayStation",
    description:
      "Self-checkout, pembayaran QRIS, timer otomatis — kelola bisnis rental PS Anda dari mana saja.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('chronos-theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Chronos",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "Platform IoT untuk otomatisasi rental PlayStation dengan self-checkout, pembayaran QRIS, timer otomatis, dan monitoring real-time.",
              "url": "https://chronos.katalisdev.my.id",
              "author": {
                "@type": "Organization",
                "name": "Katalis",
                "url": "https://katalisdev.my.id"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "IDR",
                "description": "Trial gratis 14 hari"
              }
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
