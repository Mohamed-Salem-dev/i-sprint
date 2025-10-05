import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Orbitron, Cairo } from "next/font/google";
import { ThemeProviderClient } from "@/components/providers/theme-provider/theme-provider-client";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Whatsapp from "@/components/layout/whatsapp";

// Fonts
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-orbitron",
});
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-cairo",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${orbitron.variable} ${cairo.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <NextIntlClientProvider locale={locale}>
          <ThemeProviderClient
            attribute="class"
            // defaultTheme="system"
            // enableSystem
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Whatsapp />
          </ThemeProviderClient>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
