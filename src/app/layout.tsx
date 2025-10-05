import "./globals.css";
import { getTranslations } from "next-intl/server";
import type { Metadata, Viewport } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

// ✅ Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return {
    metadataBase: new URL("https://www.i-sprint.com"),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("author") }],
    icons: {
      icon: "/i.svg",
      shortcut: "/i.svg",
      apple: "/i.svg",
    },
    alternates: {
      canonical: "https://www.i-sprint.com",
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
    other: {
      robots: "index, follow",
      google: "notranslate",
      "content-Type": "text/html;charset=UTF-8",
      "apple-mobile-web-app-status-bar-style": "default",
      "Content-Language": locale,
      direction: locale === "ar" ? "rtl" : "ltr",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: "#181818",
};

// ✅ Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children} </>;
}
