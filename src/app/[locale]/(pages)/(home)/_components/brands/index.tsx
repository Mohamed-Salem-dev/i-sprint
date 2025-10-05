"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Handshake } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Container from "@/components/global/container";
import SectionHeader from "@/components/global/section-header";
import { motion } from "framer-motion";

const bubbles = [
  { id: 1, logo: "/images/companies-clients/alhusayni.png", name: "Alhusayni" },
  { id: 2, logo: "/images/companies-clients/alslman.png", name: "AlSoliman" },
  { id: 3, logo: "/images/companies-clients/Houya.png", name: "Houya" },
  {
    id: 4,
    logo: "/images/companies-clients/icbschools.png",
    name: "ICB Schools",
  },
  { id: 5, logo: "/images/companies-clients/krz-2.png", name: "KRZ" },
  { id: 6, logo: "/images/companies-clients/Mouzare.png", name: "Mouzare" },
  {
    id: 7,
    logo: "/images/companies-clients/Logo-Arabawy.png",
    name: "ElArbawy",
  },
  { id: 8, logo: "/images/companies-clients/8.png", name: "Company 8" },
];

const bubbles2 = [
  { id: 9, logo: "/images/companies-clients/my.juliet.png", name: "My Juliet" },
  {
    id: 10,
    logo: "/images/companies-clients/Our-generosity-knows-no-bounds.png",
    name: "Generosity Company",
  },
  {
    id: 11,
    logo: "/images/companies-clients/saudl-Dates.png",
    name: "Saudi Dates",
  },
  {
    id: 12,
    logo: "/images/companies-clients/The-Electronic-Palm-and-Dates-Academy.png",
    name: "Electronic Palm Academy",
  },
  { id: 13, logo: "/images/companies-clients/way14.png", name: "Way14" },
  { id: 14, logo: "/images/companies-clients/wazin.png", name: "Wazin" },
  { id: 15, logo: "/images/companies-clients/nen.png", name: "Nen Global" },
  { id: 16, logo: "/images/companies-clients/12.png", name: "Company 16" },
];

export function PartnersSection() {
  const t = useTranslations("partners");
  const locale = useLocale();
  const isRTL = locale === "ar";


  return (
    //   <div className="py-24 relative  overflow-hidden bg-fixe bg-cover bg-center "
    //    style={{
    //       backgroundImage: "url('/images/bg-header.jpg')",
    //         // filter: "grayscale(100%)",

    //     }}
    //   >
    //  <div className="absolute inset-0 bg-background/50" />
    //     <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
    //     <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />

    //     <div className="relative z-10">
    //       <Container>
    //         <SectionHeader
    //           badge={t("trustedBy")}
    //           title={t("mainTitle")}
    //           subtitle={t("description")}
    //           icon={Handshake}
    //         />

    //       {/* Swiper Logos */}
    //       <div className="mt-12 space-y-8">
    //         <div className="relative">
    //           <Swiper
    //             modules={[Autoplay]}
    //             autoplay={{
    //               delay: 20,
    //               disableOnInteraction: false,
    //             }}
    //             speed={2000}
    //             loop={true}
    //             slidesPerView="auto"
    //             spaceBetween={40}
    //             dir={isRTL ? "rtl" : "ltr"}
    //             breakpoints={{
    //               320: { slidesPerView: 2 },
    //               640: { slidesPerView: 3 },
    //               1024: { slidesPerView: 5 },
    //               1440: { slidesPerView: 5 },
    //             }}
    //           >
    //             {bubbles.map((bubble) => (
    //               <SwiperSlide key={bubble.id} className="w-24">
    //                 <div className="flex items-center justify-center border bg-white/2 backdrop-blur-sm  border-white/20 p-4  rounded-xl h-44">
    //                   <Image loading="lazy"
    //                     src={bubble.logo}
    //                     alt={`Logo of ${bubble.name}`}
    //                     width={100}
    //                     height={100}
    //                     className="object-contain"

    //                   />
    //                 </div>
    //               </SwiperSlide>
    //             ))}
    //           </Swiper>
    //         </div>
    //         <div className="relative">
    //           <Swiper
    //             modules={[Autoplay]}
    //             autoplay={{
    //               delay: 100,
    //               disableOnInteraction: false,
    //               reverseDirection: true, // يمشي بالعكس
    //             }}
    //             speed={3000}
    //             loop={true}
    //             slidesPerView="auto"
    //             spaceBetween={40}
    //             dir={isRTL ? "rtl" : "ltr"}
    //             breakpoints={{
    //               320: { slidesPerView: 2 },
    //               640: { slidesPerView: 3 },
    //               1024: { slidesPerView: 5 },
    //               1440: { slidesPerView: 5 },
    //             }}
    //           >
    //             {bubbles2.map((bubble) => (
    //               <SwiperSlide key={bubble.id} className="w-24">
    //                 <div className="flex items-center justify-center bg-white/2 backdrop-blur-sm  border border-white/20 p-4  rounded-xl h-44">
    //                   <Image loading="lazy"
    //                     src={bubble.logo}
    //                     alt={`Logo of ${bubble.name}`}
    //                     width={100}
    //                     height={100}
    //                     className="object-cover max-h-20"

    //                   />
    //                 </div>
    //               </SwiperSlide>
    //             ))}
    //           </Swiper>
    //         </div>

    //       </div>
    //       </Container>

    //     </div>
    //   </div>
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat px-4 pt-10 lg:pb-[50rem] pb-[40rem]"
        style={{ backgroundImage: "url(/images/earth.png)" }}
      >
        <Container>
          <SectionHeader
            badge={t("trustedBy")}
            title={t("mainTitle")}
            subtitle={t("description")}
            icon={Handshake}
          />
        </Container>

        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] items-center gap-10 relative">
          <div className="relative z-10">
            {/* Swiper Logos */}
            <div className="mt-12 space-y-8">
              <div className="relative">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 20,
                    disableOnInteraction: false,
                  }}
                  speed={2000}
                  loop={true}
                  slidesPerView="auto"
                  spaceBetween={40}
                  dir={isRTL ? "rtl" : "ltr"}
                  breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 3 },
                  }}
                >
                  {bubbles.map((bubble) => (
                    <SwiperSlide key={bubble.id} className="w-24">
                      <div className="flex items-center justify-center border bg-white/2 backdrop-blur-sm  border-white/20 p-4  rounded-xl h-44">
                        <Image
                          loading="lazy"
                          src={bubble.logo}
                          alt={`Logo of ${bubble.name}`}
                          width={100}
                          height={100}
                          className="object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="relative">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 100,
                    disableOnInteraction: false,
                    reverseDirection: true, // يمشي بالعكس
                  }}
                  speed={3000}
                  loop={true}
                  slidesPerView="auto"
                  spaceBetween={40}
                  dir={isRTL ? "rtl" : "ltr"}
                  breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 3 },
                  }}
                >
                  {bubbles2.map((bubble) => (
                    <SwiperSlide key={bubble.id} className="w-24">
                      <div className="flex items-center justify-center bg-white/2 backdrop-blur-sm  border border-white/20 p-4  rounded-xl h-44">
                        <Image
                          loading="lazy"
                          src={bubble.logo}
                          alt={`Logo of ${bubble.name}`}
                          width={100}
                          height={100}
                          className="object-cover max-h-20"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="flex justify-end ">
            <motion.div
      animate={{ y: [-50, -250] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      className={`absolute lg:top-0 top-[40rem] drop-shadow-lg brightness-150 saturate-200 hue-rotate-180 z-50
        ${isRTL ? "left-0 scale-x-[-1]" : "right-0"}
      `}
    >
      <Image
        loading="lazy"
        src="/images/dd.png"
        alt="Preview of PWA and Mobile App interfaces"
        width={800}
        height={50}
        className="w-[280px] lg:w-[600px] object-cover"
      />
    </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
