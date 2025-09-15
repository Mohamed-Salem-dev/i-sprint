import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Geist, Geist_Mono, Orbitron, Cairo } from "next/font/google"; // أضفنا Cairo
import { ThemeProviderClient } from "@/components/providers/theme-provider/theme-provider-client";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Whatsapp from "@/components/layout/whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-orbitron",
});

// خط Cairo للغة العربية
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
      suppressHydrationWarning
    >
      <body
        className={`${orbitron.variable} ${geistSans.variable} ${
          geistMono.variable
        } ${locale === "ar" ? cairo.variable : ""} antialiased`}
         
      >
        <ThemeProviderClient
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Whatsapp />
          </NextIntlClientProvider>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
