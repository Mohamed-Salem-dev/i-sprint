"use client";

import Container from "@/components/global/container";
import { PageHeader } from "@/components/global/Page-header";
import SectionHeader from "@/components/global/section-header";
import { motion } from "framer-motion";
import {
  BarChart3,
  Brush,
  ChartNoAxesCombined,
  CheckCircle,
  FolderOpen,
  GalleryHorizontal,
  Play,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useLocale, useTranslations } from "use-intl";
const featureIcons = [
  "/images/icons/website-design.png",
  "/images/icons/access.png",
  "/images/icons/responsive.png",
  "/images/icons/seo.png",
];

type Feature = {
  title: string;
  desc: string;
  icon?: string;
};

export default function PortfolioPage() {
  const t = useTranslations();

  const locale = useLocale();
  const isRTL = locale === "ar";
  console.log("t", t);
  console.log("isRTL", isRTL);

  const portfolio = [
    {
      src: "/images/projects/1.png",
      title: "wizan",
      url: "https://www.wazin.sa/ar",
    },
    {
      src: "/images/projects/2.png",
      title: "mouzare",
      url: "https://mouzare.ncpd.gov.sa/",
    },
    {
      src: "/images/projects/3.png",
      title: "krz",
      url: "https://krz.sa/ar",
    },
    {
      src: "/images/projects/4.png",
      title: "juliet-divers",
      url: "https://juliet-divers.com/",
    },
    {
      src: "/images/projects/5.png",
      title: "alsoliman",
      url: "https://alsoliman.com.sa/ar",
    },
    {
      src: "/images/projects/10.png",
      title: "ncpd",
      url: "https://ma.ncpd.gov.sa/",
    },
    {
      src: "/images/projects/17.png",
      title: "icbs chools",
      url: "https://icbschools.com/",
    },
    {
      src: "/images/projects/8.png",
      title: "Home Shave",
      url: "https://homeshave.sa/en",
    },
    {
      src: "/images/projects/14.png",
      title: "nen global",
      url: "https://nen-global.org/EN/index.html",
    },
    {
      src: "/images/projects/36.png",
      title: "elarbawy",
      url: "http://www.elarbawy.com",
    },

    {
      src: "/images/projects/9.png",
      title: "tam plus",
      url: "https://tamplus.sa/",
    },

    {
      src: "/images/projects/7.png",
      title: "saudi dates",
      url: "https://saudidates.sa/",
    },

    {
      src: "/images/projects/11.png",
      title: "alhusayni",
      url: "https://alhusayni.com/",
    },

    {
      src: "/images/projects/6.png",
      title: "auction",
      url: "https://www.auction.sa/ar",
    },

    {
      src: "/images/projects/13.png",
      title: "saudi dates",
      url: "https://saudidates.sa/dates-recipes/",
    },

    {
      src: "/images/projects/15.png",
      title: "way14",
      url: "https://way14.com/en",
    },
    {
      src: "/images/projects/16.png",
      title: "stc",
      url: "https://stc.socialmediawe.com/",
    },

    {
      src: "/images/projects/18.png",
      title: "About Us",
      url: "https://spcica.com/en",
    },
    {
      src: "/images/projects/25.png",
      title: "travel",
      url: "http://travel.sa/en",
    },
    {
      src: "/images/projects/32.png",
      title: "miny soft eg",
      url: "http://minysoft-eg.com/ar",
    },
    {
      src: "/images/projects/23.png",
      title: "tsway14",
      url: "http://tsway14.com/",
    },
    {
      src: "/images/projects/27.png",
      title: "booking",
      url: "https://booking.sa/en",
    },
    {
      src: "/images/projects/31.png",
      title: "Services",
      url: "https://wizan.example.com/",
    },
    {
      src: "/images/projects/12.png",
      title: "Portfolio",
      url: "https://www.wazin.sa/ar",
    },
    {
      src: "/images/projects/22.png",
      title: "About Us",
      url: "https://wizan.example.com/",
    },

    {
      src: "/images/projects/24.png",
      title: "Portfolio",
      url: "https://wizan.example.com/",
    },
    {
      src: "/images/projects/35.png",
      title: "Services",
      url: "https://wizan.example.com/",
    },
    {
      src: "/images/projects/30.png",
      title: "About Us",
      url: "https://wizan.example.com/",
    },

    {
      src: "/images/projects/28.png",
      title: "Portfolio",
      url: "https://wizan.example.com/",
    },

    {
      src: "/images/projects/19.png",
      title: "Services",
      url: "https://wizan.example.com/",
    },

    {
      src: "/images/projects/21.png",
      title: "Landing Page",
      url: "https://wizan.example.com/",
    },

    {
      src: "/images/projects/29.png",
      title: "Landing Page",
      url: "https://wizan.example.com/",
    },
  ];

  const projectsPage = useTranslations("projectsPage.section4");
  const items = projectsPage.raw("items");

  // ✅ دمج الأيقونات مع النصوص
  const features: Feature[] = items.map((item: Feature, index: number) => ({
    ...item,
    icon: featureIcons[index],
  }));

  return (
    <>
      <PageHeader
        title={t("projectsPage.title")}
        description={t("projectsPage.description")}
        badge={t("projectsPage.badge")}
        icon={<FolderOpen className="text-lg mr-2" />}
      />

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      <section>
        <Container className="py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div>
              <span className="mb-4 inline-flex items-center gap-2 px-4 py-3 lg:text-sm text-xs rounded-full shadow bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <BarChart3 className="text-lg mr-2" />
                {t("projectsPage.section1.badge")}
              </span>

              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                {t("projectsPage.section1.title")}
              </h2>
              <p className="lg:text-lg text-base text-white/80 lg:mb-8 mb-4 leading-relaxed">
                {t("projectsPage.section1.description1")}{" "}
                <span className="text-main font-semibold">
                  {t("projectsPage.section1.projectsCount")}
                </span>{" "}
                {t("projectsPage.section1.description2")}
              </p>

              <div className="relative grid lg:grid-cols-2 grid-cols-1 gap-2.5 lg:pb-6 pb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#238bf3] flex-shrink-0" />
                  <span className="lg:text-sm text-xs text-muted-foreground">
                    {t("projectsPage.section1.feature1")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#238bf3] flex-shrink-0" />
                  <span className="lg:text-sm text-xs text-muted-foreground">
                    {t("projectsPage.section1.feature2")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#238bf3] flex-shrink-0" />
                  <span className="lg:text-sm texr-xs text-muted-foreground">
                    {t("projectsPage.section1.feature3")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#238bf3] flex-shrink-0" />
                  <span className="lg:text-sm texr-xs text-muted-foreground">
                    {t("projectsPage.section1.feature4")}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-lg rounded-lg lg:py-12 lg:px-6 py-4 px-2 border border-white/5 text-center">
                    <Image
                      loading="lazy"
                      src="/images/icons/project-management.png"
                      alt={`${t(
                        "projectsPage.section1.card1Title"
                      )} – web development & digital solutions by i-Sprint`}
                      width={64}
                      height={64}
                      className="mx-auto object-contain lg:w-[64px] w-[40px]"
                    />
                    <h3>{t("projectsPage.section1.card1Title")}</h3>
                    <p className="text-white/60 text-sm">
                      {t("projectsPage.section1.card1Desc")}
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-lg lg:py-12 lg:px-6 py-4 px-2 border border-white/5 text-center">
                    <Image
                      loading="lazy"
                      src="/images/icons/access.png"
                      alt={t("projectsPage.section1.card2Title")}
                      width={64}
                      height={64}
                      className="mx-auto object-contain lg:w-[64px] w-[40px]"
                    />
                    <h3>{t("projectsPage.section1.card2Title")}</h3>
                    <p className="text-white/60 text-sm">
                      {t("projectsPage.section1.card2Desc")}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <div className="bg-white/5 backdrop-blur-lg rounded-lg lg:py-12 lg:px-6 py-4 px-2 border border-white/5 text-center">
                    <Image
                      loading="lazy"
                      src="/images/icons/responsive-design.png"
                      alt={`${t(
                        "projectsPage.section1.card1Title"
                      )} – web development & digital solutions by i-Sprint`}
                      width={64}
                      height={64}
                      className="mx-auto object-contain lg:w-[64px] w-[40px]"
                    />
                    <h3>{t("projectsPage.section1.card3Title")}</h3>
                    <p className="text-white/60 text-sm">
                      {t("projectsPage.section1.card3Desc")}
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-lg lg:py-12 lg:px-6 py-4 px-2 border border-white/5 text-center">
                    <Image
                      loading="lazy"
                      src="/images/icons/feedback.png"
                      alt={`${t(
                        "projectsPage.section1.card1Title"
                      )} – web development & digital solutions by i-Sprint`}
                      width={64}
                      height={64}
                      className="mx-auto object-contain lg:w-[64px] w-[40px]"
                    />
                    <h3>{t("projectsPage.section1.card4Title")}</h3>
                    <p className="text-white/60 text-sm">
                      {t("projectsPage.section1.card4Desc")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      <Container className="py-10">
        <SectionHeader
          badge={t("projectsPage.section2.badge")}
          title={t("projectsPage.section2.title")}
          subtitle={t("projectsPage.section2.description")}
          icon={GalleryHorizontal}
        />
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {portfolio.slice(0).map((item, index) => (
          <div
            key={index}
            className="flex lg:gap-4 gap-2 lg:p-4 p-2 ... bg-main/10 rounded-lg"
          >
            <Link
              href={item.url}
              title={`View ${item.title} project by i-Sprint`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-shrink-0 lg:w-56 w-36 lg:h-96 h-72 box-img-project"
            >
              <Image
                loading="lazy"
                fill
                src={item.src}
                alt={`${item.title} – web development & digital solutions by i-Sprint`}
                className="rounded-lg object-cover"
              />
            </Link>

            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1  relative flex-shrink-0 lg:h-96 h-72 box-img-project"
            >
              <Image
                loading="lazy"
                fill
                src={item.src}
                alt={item.title}
                className="rounded-lg object-cover"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      <Container className="pb-10 lg:pt-20 pt-10">
        <SectionHeader
          badge={t("projectsPage.section4.badge")}
          title={t("projectsPage.section4.title")}
          subtitle={t("projectsPage.section4.description")}
          icon={ChartNoAxesCombined}
        />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:gap-8 gap-4 mx-auto text-start ">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 lg:px-10 lg:py-6 px-3 py-3 rounded-lg shadow flex lg:gap-4 gap-2 flex-col lg:flex-row"
            >
              <Image
                loading="lazy"
                src={item.icon!}
                alt={`${item.title} – professional web development & digital solutions by i-Sprint`}
                width={40}
                height={40}
                className="w-10 h-10 lg:w-16 lg:h-16 object-contain"
              />
              <div>
                <h3 className="lg:text-lg text-base font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 lg:text-sm text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      <section
        className="py-24 bg-fixe bg-cover bg-center rounded-4xl bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/24496449_sl_122019_26260_20.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-[#1b1b1bb1]" />

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/90 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/90 to-transparent z-10" />
        <Container className="text-center relative z-10">
          <SectionHeader
            badge={t("projectsPage.section5.badge")}
            title={t("projectsPage.section5.title")}
            subtitle={t("projectsPage.section5.description")}
            icon={Brush}
          />
          <Link
            href="/start"
            className="relative max-w-max mx-auto flex items-center group overflow-hidden px-6 py-3 font-semibold text-white bg-gradient-to-r from-main/5 to-main/90 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Play className="me-2 w-5 h-5" />
            <span className="relative z-10">
              {" "}
              {t("projectsPage.section5.ctaStart")}
            </span>
          </Link>
        </Container>
      </section>
    </>
  );
}
