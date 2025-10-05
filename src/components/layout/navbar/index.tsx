"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Info, Briefcase, FolderOpen, Play } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import LanguageSwitcher from "@/components/language-switcher";

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";
  const pathname = usePathname().replace(/^\/(en|ar)/, "") || "/";

  const navigationItems = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/about", label: t("nav.about"), icon: Info },
    { href: "/projects", label: t("nav.projects"), icon: FolderOpen },
    { href: "/services", label: t("nav.services"), icon: Briefcase },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        dir={isRTL ? "rtl" : "ltr"}
        className={`fixed z-50 transition-all rounded-2xl m-auto left-0 right-0 xl:w-[85%] w-[90%] duration-500 hidden lg:flex items-center justify-between px-4 py-1
        ${
          scrolled
            ? "bg-gradient-to-br from-background to-background shadow-2xl top-2"
            : "top-4 bg-[#00000021] backdrop-blur"
        }`}
      >
        <Link href="/">
          <Image loading="lazy"
            width={150}
            height={0}
            src="/images/i-sprint-light.svg"
            alt=""
            className="object-cover w-[140px] h-18"
          />
        </Link>
        <nav className="flex gap-3 text-white">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-1 transition rounded-md py-2 px-3  hover:bg-gradient-to-r hover:from-white/20   hover:to-white/5
              ${
                pathname === item.href
                  ? "bg-gradient-to-r from-white/10 to-white/10  text-white shadow-lg"
                  : "text-white  hover:text-white"
              }
                after:absolute after:-bottom-3 after:left-1/2 
              `}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {/* <ThemeModeToggle /> */}
          <LanguageSwitcher className="w-12 h-12 flex items-center justify-center  bg-transparent  border border-white/20 rounded-lg" />
          <Link
            href="/start"
            className="bg-gradient-to-r text-base flex items-center justify-center w-30 h-12 gap-1 from-main/90 to-main/90 rounded-lg text-white hover:from-main/90 hover:to-main/90 transition-all duration-300"
          >
            <Play className="w-4 h-4" />
            {t("Start")}
          </Link>
        </div>
      </nav>

      {/* ================================================================ */}
      {/* Mobile */}
      <div className="">
        {/* Mobile Auth Bar */}
        <div
          className={`fixed top-4 ${
            isRTL ? "right-4" : "left-4"
          } z-50 bg-[#0f172a] rounded-full 
        px-4 py-1.5 flex items-center justify-between gap-3 min-w-[70%] lg:hidden ${
          scrolled ? "bg-[#1e2020] shadow-xl" : "bg-[#00000021] backdrop-blur"
        }`}
        >
          <Link href="/">
            <Image loading="lazy"
              width={150}
              height={0}
              src="/images/i-sprint-light.svg"
              alt=""
              className="object-cover w-[90px] h-12"
            />
          </Link>
         <div className="flex gap-1">
           <LanguageSwitcher className="w-10 h-10 flex items-center justify-center  bg-transparent  border border-white/20 rounded-full" />
           <Link
            href="/start"
            className="bg-gradient-to-r text-base flex items-center px-4 gap-1 py-2 from-main/90 to-main/90 rounded-full text-white hover:from-main/90 hover:to-main/5 transition-all duration-300"
          >
            <Play className="w-5 h-5" />
            {t("Start")}
          </Link>

         </div>
        </div>

        {/* Mobile Menu Button + Sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <div
              className={`fixed top-6  ${
                isRTL ? "left-4" : "right-2"
              } z-50 lg:hidden`}
            >
              <span
                className={`rounded-full flex items-center justify-center  w-11 h-11 cursor-pointer ${
                  scrolled
                    ? "bg-[#1e2020] shadow-xl"
                    : "bg-[#00000021] backdrop-blur"
                }`}
                aria-label="Open Menu"
              >
                <Menu className="text-main/90 w-6 h-6 text-4xl" />
              </span>
            </div>
          </SheetTrigger>

          <SheetContent
            side={isRTL ? "right" : "left"}
            className="w-72 bg-background text-white flex flex-col justify-between me-5"
          >
            <div>
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <Link href="/">
                  <Image loading="lazy"
                    width={150}
                    height={0}
                    src="/images/i-sprint-light.svg"
                    alt=""
                    className="object-cover w-[120px] h-12"
                  />
                </Link>
              </div>
              {/* <SheetTitle className="hidden">Main Menu</SheetTitle> */}

              <nav className="flex flex-col gap-4 p-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative flex text-sm items-center rounded-lg px-2 py-3  gap-2 transition
                   ${
                     pathname === item.href
                       ? "bg-gradient-to-r from-white/10 to-white/10  text-white shadow-lg"
                       : "text-white  hover:text-white"
                   }
                    after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-main after:transition-all after:duration-300
                    hover:to-white/10 hover:bg-gradient-to-r  hover:from-white/10 
                  `}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="px-6 mt-6 mb-6">
              <Link
                href="/start"
                className="bg-gradient-to-r text-base flex text-center items-center px-5 gap-2 py-3 PX-2 from-main/90 to-main/90 rounded-lg text-white hover:from-main/90 hover:to-main/90 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                {t("Start")}
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
