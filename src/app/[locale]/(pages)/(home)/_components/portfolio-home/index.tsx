"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { GalleryVertical } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/global/container";
import SectionHeader from "@/components/global/section-header";

const slidesTop = [
  {
    src: "/images/projects/1.png",
    title: "Wazin",
    link: "https://www.wazin.sa/ar",
    alt: "Modern web design project for Wazin by i-Sprint",
  },
  {
    src: "/images/projects/2.png",
    title: "Mouzare",
    link: "https://mouzare.ncpd.gov.sa/",
    alt: "Creative e-commerce solution for Mouzare by i-Sprint",
  },
  {
    src: "/images/projects/3.png",
    title: "KRZ",
    link: "https://krz.sa/ar",
    alt: "Corporate website project for KRZ by i-Sprint",
  },
  {
    src: "/images/projects/4.png",
    title: "Juliet Divers",
    link: "https://juliet-divers.com/",
    alt: "Professional diving services website for Juliet Divers by i-Sprint",
  },
  {
    src: "/images/projects/5.png",
    title: "Alsoliman",
    link: "https://alsoliman.com.sa/ar",
    alt: "Business website solution for Alsoliman by i-Sprint",
  },
  {
    src: "/images/projects/14.png",
    title: "NEN Global",
    link: "https://nen-global.org/EN/index.html",
    alt: "Educational platform project for NEN Global by i-Sprint",
  },
  {
    src: "/images/projects/36.png",
    title: "Elarbawy",
    link: "http://www.elarbawy.com/",
    alt: "Creative company website for Elarbawy by i-Sprint",
  },
];

const slidesBottom = [
  {
    src: "/images/projects/7.png",
    title: "Saudi Dates",
    link: "https://saudidates.sa/",
    alt: "E-commerce platform for Saudi Dates by i-Sprint",
  },
  {
    src: "/images/projects/8.png",
    title: "Home Shave",
    link: "https://homeshave.sa/en",
    alt: "Modern online store for Home Shave by i-Sprint",
  },
  {
    src: "/images/projects/9.png",
    title: "TAM Plus",
    link: "https://tamplus.sa/",
    alt: "Digital service platform for TAM Plus by i-Sprint",
  },
  {
    src: "/images/projects/10.png",
    title: "NCPD",
    link: "https://ma.ncpd.gov.sa/",
    alt: "Government platform project for NCPD by i-Sprint",
  },
  {
    src: "/images/projects/11.png",
    title: "Alhusayni",
    link: "https://alhusayni.com/",
    alt: "Corporate business website for Alhusayni by i-Sprint",
  },
];


export default function PortfolioHome() {
  const swiper1Ref = useRef<SwiperType | null>(null);
  const swiper2Ref = useRef<SwiperType | null>(null);
  const t = useTranslations("projectsHome");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section className=" lg:mt-24 mt-60 lg:py-24 py-5 relative">
      {/* Section Header */}
      <Container>
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("description")}
          icon={GalleryVertical}
        />
      </Container>
      <div className="">
        {/* Slider Section */}
        <div className="relative space-y-4 mt-10">
          <Swiper
            className="mb-5"
            onSwiper={(swiper) => (swiper1Ref.current = swiper)}
            modules={[Autoplay]}
            slidesPerView={1.2}
            loop
            centeredSlides
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            dir={isRTL ? "rtl" : "ltr"}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 1.7 },
            }}
          >
            {slidesTop.map((slide, index: number) => (
              <SwiperSlide key={`row1-${index}`}>
                <SlideCard
                  slide={slide}
                  onMouseEnter={() => swiper1Ref.current?.autoplay?.pause()}
                  onMouseLeave={() => swiper1Ref.current?.autoplay?.resume()}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={(swiper) => (swiper2Ref.current = swiper)}
            modules={[Autoplay]}
            slidesPerView={1.2}
            loop
            centeredSlides
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            dir={isRTL ? "rtl" : "ltr"}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 1.7 },
            }}
          >
            {slidesBottom.map((slide, index: number) => (
              <SwiperSlide key={`row2-${index}`}>
                <SlideCard
                  slide={slide}
                  onMouseEnter={() => swiper2Ref.current?.autoplay?.pause()}
                  onMouseLeave={() => swiper2Ref.current?.autoplay?.resume()}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CTA Section */}
      <Container className="text-center mt-6 relative">
        <h3 className="lg:text-2xl text-xl font-semibold">{t("ctaTitle")}</h3>
        <p className="lg:text-lg text-sm text-muted-foreground mb-4 lg:max-w-3xl mx-auto">
          {t("ctaDescription")}
        </p>
        <Link
          href="/projects"
          className=" bg-gradient-to-r lg:text-lg text-base from-main/90 to-main/90 lg:w-1/4  w-1/2 m-auto   py-3 rounded-lg my-5 flex gap-2 items-center justify-center "
        >
          {t("ctaButton")}
        </Link>
      </Container>

      {/* Floating Images */}
      <motion.div
        className="absolute lg:right-80 right-0 bottom-0 -z-10"
        animate={{ y: [-10, 30] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <Image loading="lazy"
          width={350}
          height={60}
          className="w-[100px] lg:w-[300px] h-auto"
          src="/images/vector-2.png"
  alt="Abstract vector shape for web design background"

        />
      </motion.div>

      <div className="absolute left-0 lg:top-0 top-52 bottom-0 -z-10">
        <Image loading="lazy"
          width={600}
          height={60}
          src="/images/banner-shape-2-B9-1SuDN (1).png"
  alt="Digital background shape used in i-Sprint web development section"
          className="w-[200px] lg:w-[600px] h-auto"
         
        />
      </div>

      <div className="absolute right-0 lg:top-0 rotate-y-180 top-52 bottom-0 ">
        <Image loading="lazy"
          width={600}
          height={60}
          src="/images/banner-shape-2-B9-1SuDN (1).png"
  alt="Creative globe background element for modern websites"
          className="w-[200px] lg:w-[600px] h-auto"
       
        />
      </div>
    </section>
  );
}

function SlideCard({
  slide,
  onMouseEnter,
  onMouseLeave,
}: {
  slide: { src: string; title: string; link: string; alt: string };
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex lg:gap-4 gap-2 lg:p-4 p-2 rounded-lg overflow-hidden transition"
      style={{
        background:
          "linear-gradient(111.8deg, #41414191 21.93%, #41414191 90.29%)",
      }}
    >
      <Link
        href={slide.link}
        target={slide.link.startsWith("http") ? "_blank" : "_self"}
        rel={slide.link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="relative flex-shrink-0 lg:w-56 w-24 lg:h-96 h-56 box-img-project"
      >
        <Image loading="lazy"
          fill
          src={slide.src}
          alt={slide.alt}
          className="rounded-lg object-cover"
      
        />
      </Link>
      <Link
        href={slide.link}
        target={slide.link.startsWith("http") ? "_blank" : "_self"}
        rel={slide.link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex-1 relative flex-shrink-0 lg:w-56 w-32 lg:h-96 h-56 box-img-project"
      >
        <Image loading="lazy"
          fill
          src={slide.src}
          alt={slide.alt}
          className="rounded-lg object-cover"
       
        />
      </Link>
    </div>
  );
}
