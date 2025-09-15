"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/global/container";
import SectionHeader from "@/components/global/section-header";

// SwiperJS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

type Service = {
  image: string;
  title: string;
  description: string;
  features: string[];
};

// ✅ الصور هنا Array ثابت مش في الترجمة
const serviceImages = [
  "/images/services/business-development.jpg",
  "/images/services/web-desigs.jpg",
  "/images/services/Web-Development.jpg",
  "/images/services/website-Custom Web-Solutions.jpg",
  "/images/services/Mobile-App.jpg",
  "/images/services/Web-Hosting-Support.jpg",
];

export function ServicesHome() {
  const locale = useLocale();
  const isRTL = locale === "ar";

  const t = useTranslations("services");
  const services = t.raw("list");

  // ✅ دمج الصور مع البيانات من الترجمة
  const servicesWithImages = services.map((service: Service, index: number) => ({
    ...service,
    image: serviceImages[index],
  }));

  return (
    <section
      id="services"
      className="pt-16 lg:pb-16 pb-4 relative z-10 bg-fixed bg-cover bg-top bg-no-repeat"
       style={{
            backgroundImage: "url('/images/bg-2.jpg')",
          }}
    >
      <div className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-background/90" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="relative z-10">
        <Container>
          <SectionHeader
            badge={t("headerTag")}
            title={t("headerTitle")}
            subtitle={t("headerDescription")}
            icon={Zap}
          />
        </Container>

        <Container>
          {/* Grid يظهر من xl وفوق */}
          <div className="hidden xl:grid grid-cols-3 gap-x-5 gap-y-24 pt-24">
            {servicesWithImages.map((service: Service, index: number) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </Container>

        {/* Slider يظهر تحت xl */}
        <div className="xl:hidden px-4 ">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: isRTL,
            }}
            dir={isRTL ? "rtl" : "ltr"}
            spaceBetween={15}
            coverflowEffect={{
              rotate: 45,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1.4 },
              600: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
          >
            {servicesWithImages.map((service: Service, index: number) => (
              <SwiperSlide key={index} className="pt-24">
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Container className="text-center mt-12">
          <h3 className="lg:text-2xl text-lg text-white/90 font-semibold">
            {t("bottomTitle")}
          </h3>
          <p className="text-lg text-white/60 mb-4">{t("bottomDescription")}</p>
          <Link
            href="/services"
            className="bg-gradient-to-r text-lg from-main/90 to-main/90 lg:w-1/4 w-1/2 m-auto py-3 rounded-lg my-5 flex gap-2 items-center justify-center"
          >
            {t("bottomButton")}
          </Link>
        </Container>

        <motion.div
          className="absolute lg:right-80 bottom-0 right-0"
          animate={{ y: [80, 180] }}
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
            alt="arrow i-Sprint"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="group pt-5 flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl relative transition-all duration-300 hover:shadow-xl text-white bg-gradient-to-br to-black/50 from-black/50"
      style={{ backgroundImage: "url('/images/pattern-5.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/80 rounded-2xl" />
      <div className="relative z-30">
        <div className="px-4 -mt-24">
          <Image loading="lazy"
            width={600}
            height={0}
            src={service.image}
            alt={`${service.title} service by i-Sprint`}
            className="w-full h-[200px] rounded-3xl object-center object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <div className="py-4 px-3 lg:py-5 lg:px-5 relative z-10 flex flex-col flex-grow">
          <h3 className="font-bold text-white/90 text-base lg:text-lg mb-2">
            {service.title}
          </h3>
          <p className="text-white/70 text-xs lg:text-sm flex-grow">
            {service.description}
          </p>
          <div className="flex flex-col gap-2 mt-4">
            {service.features.map((feature: string, idx: number) => (
              <div
                key={idx}
                className="flex items-center gap-2 rtl:space-x-reverse"
              >
                <CheckCircle className="w-4 h-4 text-[#238bf3] flex-shrink-0" />
                <span className="text-xs lg:text-sm text-white/60">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
