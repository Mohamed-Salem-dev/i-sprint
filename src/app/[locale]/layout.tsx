import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Geist, Geist_Mono, Orbitron, Cairo } from "next/font/google";
import { ThemeProviderClient } from "@/components/providers/theme-provider/theme-provider-client";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Whatsapp from "@/components/layout/whatsapp";

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
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
  // params: { locale: string };
   params: any; 
}) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <ThemeProviderClient
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div
          dir={locale === "ar" ? "rtl" : "ltr"}
          className={`${orbitron.variable} ${geistSans.variable} ${
            geistMono.variable
          } ${locale === "ar" ? cairo.variable : ""} dark antialiased`}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Whatsapp />
        </div>
      </ThemeProviderClient>
    </NextIntlClientProvider>
  );
}
