import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: site.metaTitle,
    template: "%s｜兩兩探戈 Tango.two",
  },
  description: site.metaDescription,
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    locale: "zh_TW",
    type: "website",
    siteName: "兩兩探戈 Tango.two",
  },
};

// LocalBusiness / DanceSchool 結構化資料（規格 §11）
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "DanceSchool"],
  name: "兩兩探戈 Tango.two",
  alternateName: "Tango.two",
  description: site.metaDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: "美村路一段743號3樓",
    addressLocality: "台中市西區",
    addressRegion: "台中市",
    addressCountry: "TW",
  },
  email: site.email,
  sameAs: [site.facebookUrl, site.instagramUrl],
};

// 中文字型（Noto Serif TC / Noto Sans TC）需要完整 CJK unicode-range 切片，
// next/font 目前僅支援 latin subset，因此改由 Google Fonts 樣式表載入。
const fontsHref =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@500;600;700&display=swap";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={fontsHref} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
