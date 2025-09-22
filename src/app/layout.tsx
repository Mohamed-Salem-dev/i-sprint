// app/layout.tsx
import "./globals.css";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: any; // مؤقتاً لحد ما المشكلة تتحل
};

// دالة generateMetadata جاهزة لكل SEO وSocial Sharing
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("author") }],
    viewport:
      "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1",
    themeColor: "default",
    icons: {
      icon: "/i.svg",
      shortcut: "/i.svg",
      apple: "/i.svg",
    },
    alternates: {
      canonical: "https://www.i-sprint.com",
    },
    other: {
      robots: "index, follow",
      google: "notranslate",
      "content-Type": "text/html;charset=UTF-8",
      "apple-mobile-web-app-status-bar-style": "default",
      "Content-Language": params.locale,
      direction: params.locale === "ar" ? "rtl" : "ltr",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://www.i-sprint.com",
      siteName: "i-Sprint",
      images: [
        {
          url: "/preview.png",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/preview.png"],
    },
  };
}

// RootLayout نفسه
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
       <head>
      <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="اسم تطبيقك" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
