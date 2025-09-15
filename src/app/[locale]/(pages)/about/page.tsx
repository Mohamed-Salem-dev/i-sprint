"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Rocket,
  Handshake,
  Users,
  Play,
  ChartNoAxesCombined,
} from "lucide-react";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PageHeader } from "@/components/global/Page-header";
import Container from "@/components/global/container";
import SectionHeader from "@/components/global/section-header";
type SectionItem = {
  icon: string;
  title: string;
  desc: string;
};
const featureIcons = [
  "/images/icons/marketplace.png",
  "/images/icons/responsive-design.png",
  "/images/icons/secure-credit.png",
  "/images/icons/shipment.png",
  "/images/icons/access.png",
  "/images/icons/data-protection.png",
  "/images/icons/search-engine.png",
  "/images/icons/website-design.png",
  "/images/icons/economic-growth.png",
  "/images/icons/website.png",
  "/images/icons/website-Headphones.png",
  "/images/icons/technology.png",
];

export default function AboutPage() {
  const t = useTranslations("about");
  const t2 = useTranslations("about.section1");
  const locale = useLocale();
  const isRTL = locale === "ar";
  console.log("isRTL", isRTL);
  console.log("t", t);
  const features = t2.raw("features");

  const t3 = useTranslations("about.section2");
  const section22 = t3.raw("features");

  const tSection3 = useTranslations("about.section3");

  const tSection4 = useTranslations("about.section4");
  const featuresWithIcons: SectionItem[] = section22.map(
    (item: SectionItem, index: number) => ({
      ...item,
      icon: featureIcons[index],
    })
  );
  return (
    <>
      <PageHeader
        title={t("hero.title")}
        description={t("hero.description")}
        badge={t("hero.badge")}
        icon={<Handshake className="text-lg mr-2" />}
      />

      <main className="">
        <Container className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-4  justify-items-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="mb-4 inline-flex items-center gap-2 px-4 py-3 text-sm rounded-full shadow bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <Handshake className="text-lg mr-2" />
                  {t("section1.badge")}{" "}
                </span>

                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-5">
                    {t("section1.title")}
                  </h2>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t("section1.description0")}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mt-4">
                  {t("section1.description1")}
                </p>

                <div className="border-b border-b-[#e5e7ea1f] my-5"></div>

                <div className="relative grid grid-cols-2 gap-2.5">
                  {features.map((item: string, i: number) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 rtl:space-x-reverse"
                    >
                      <CheckCircle className="w-4 h-4 text-[#238bf3] flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <span className="mb-4 inline-flex mt-8 items-center gap-2 font-bold text-2xl">
                  <Users className="text-lg mr-2" />
                  {t("section1.badge2")}{" "}
                </span>

                <p className="text-base text-muted-foreground leading-relaxed ">
                  {t("section1.description2")}
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 relative lg:grid-cols-1  gap-4 lg:order-0 order-1  w-[70%] justify-self-end">
              <Image loading="lazy"
                width={400}
                height={0}
                src="/images/projects/projects5.png"
                alt="i-Sprint team working on web development projects"
                className={`h-96 object-cover  object-top w-full  rounded-3xl grayscale hover:grayscale-0 transition duration-300 brightness-90`}
              />
              <Image loading="lazy"
                width={400}
                height={0}
                src="/images/projects/5.png"
                alt="i-Sprint team working on web development projects"
                className={`h-96 object-cover absolute  object-top w-[100%] 
                       ${locale === "ar" ? "left-1/6 " : "right-1/6 "}
                      mt-16 rounded-3xl grayscale hover:grayscale-0 transition duration-300 brightness-90`}
              />
              <Image loading="lazy"
                width={400}
                height={0}
                src="/images/projects/6.png"
                alt="i-Sprint team working on web development projects"
                className={`h-96 object-cover absolute  object-top w-[100%] ${
                  locale === "ar" ? "left-1/3 " : "right-1/3 "
                }  mt-32 rounded-3xl grayscale hover:grayscale-0 transition duration-300 brightness-90`}
              />
              <Image loading="lazy"
                width={400}
                height={0}
                src="/images/projects/11.png"
                alt="i-Sprint team working on web development projects"
                className={`h-96 object-cover absolute  object-top w-[100%] ${
                  locale === "ar" ? "left-1/2" : "right-1/2 "
                } mt-56 rounded-3xl grayscale hover:grayscale-0 transition duration-300 brightness-90 lg:block hidden`}
              />
            </div>
          </div>
        </Container>

        {/* ------------------------------------------------------------------------------------------------------------------------------- */}
        <section
          className="relative lg:mt-16 mt-36 lg:py-16 py-8 bg-fixed bg-cover bg-center rounded-4xl bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: "url('/images/bg-2.jpg')",
          }}
        >
          <div className="absolute inset-0 z-0" />
          <div className="absolute inset-0 bg-background/90" />

          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/90 to-transparent z-10" />

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/90 to-transparent z-10" />

          <Container>
            <SectionHeader
              badge={t3("badge")}
              title={t3("title")}
              subtitle={t3("subtitle")}
              icon={Rocket}
            />

            <div className="relative z-10">
              <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
                {featuresWithIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-black/20 backdrop-blur-md border-white/20 lg:px-6 lg:py-10 px-2 py-2 rounded-lg flex flex-col items-center gap-3 text-center"
                  >
                    <Image loading="lazy"
                      src={item.icon!}
                      alt={`${item.title} - i-Sprint Digital Solutions`}
                      width={64}
                      height={64}
                      className="object-contain lg:w-[64px] w-[52px]"
                    />
                    <div>
                      <h3 className="lg:text-xl text-base text-white/90">
                        {item.title}
                      </h3>
                      <p className="lg:text-sm text-xs text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="lg:text-xl text-base text-center text-gray-300 max-w-2xl m-auto ">
                {t3("footerText")}
              </p>
            </div>
          </Container>
        </section>
        {/* ------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="lg:py-16 py-10 bg-gradient-to-b from-background/50 to-background/90 text-white">
          <Container>
            <SectionHeader
              badge={tSection3("badge")}
              title={tSection3("title")}
              subtitle={tSection3("subtitle")}
              icon={Rocket}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-0 bg-black/30 lg:p-5 p-3 backdrop-blur-md shadow-lg">
                  <CardContent className="lg:p-8 p-2">
                    <Image loading="lazy"
                      src="/images/icons/goal.png"
                        alt="i-Sprint Mission – What Drives Us"
                      width={64}
                      height={64}
                      className="object-contain mb-4 lg:w-[64px] w-[40px]"
                    />
                    <h3 className="lg:text-2xl text-xl font-bold mb-2">
                      {tSection3("card1.title")}
                    </h3>
                    <p className="text-gray-300 leading-relaxed lg:text-base text-sm">
                      {tSection3("card1.desc")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-0 bg-black/30 lg:p-5 p-3 backdrop-blur-md shadow-lg">
                  <CardContent className="lg:p-8 p-2">
                    <Image loading="lazy"
                      src="/images/icons/vision.png"
                      alt="i-Sprint Vision – Our Future Journey"
                      width={64}
                      height={64}
                      className="object-contain mb-4 lg:w-[64px] w-[40px]"
                    />
                    <h3 className="lg:text-2xl text-xl font-bold mb-2">
                      {tSection3("card2.title")}
                    </h3>
                    <p className="text-gray-300 leading-relaxed lg:text-base text-sm">
                      {tSection3("card2.desc")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </Container>
        </section>
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
              badge={tSection4("badge")}
              title={tSection4("title")}
              subtitle={tSection4("subtitle")}
              icon={ChartNoAxesCombined}
            />
            <Link
              href="/start"
              className="relative max-w-max mx-auto flex items-center group overflow-hidden px-6 py-3 font-semibold text-white bg-gradient-to-r from-main/5 to-main/90 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Play className="me-2 w-5 h-5" />
              <span className="relative z-10">{tSection4("button")}</span>
            </Link>
          </Container>
        </section>
      </main>
    </>
  );
}
