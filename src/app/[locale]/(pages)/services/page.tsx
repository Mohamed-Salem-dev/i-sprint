"use client";

import {
  Server,
  TrendingUp,
  PanelBottomClose,
  CheckCircle,
  Play,
  Rocket,
  Smartphone,
  Laptop,
  ChartNoAxesCombined,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Image from "next/image";
import { PageHeader } from "@/components/global/Page-header";
import Link from "next/link";
import BusinessSolutionsSection from "../(home)/_components/BusinessSolutionsSection";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/global/container";
import SectionHeader from "@/components/global/section-header";

interface Service {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
}

// ✅ نخلي الصور و الأيقونات Arrays ثابتة
const serviceImages = [
  "/images/services/business-development.jpg",
  "/images/services/Web-Development.jpg",
  "/images/services/Mobile-App.jpg",
  "/images/services/Performance.jpg",
  "/images/services/Security-Compliance.jpg",
  "/images/services/web-desigs.jpg",
  "/images/services/seo.jpg",
  "/images/services/E-commerce.jpg",
  "/images/services/Web-Hosting-Support.jpg",
  "/images/services/CRM-Development.jpg",
  "/images/services/ERP-Development.jpg",
  "/images/services/website-Custom Web-Solutions.jpg",
  "/images/services/Content-Writing-Articles.jpg",
  "/images/services/Ai.jpg",
  "/images/services/Technical-Support-Maintenance.jpg",
];

const serviceIcons = [
  "TrendingUp",
  "Code2",
  "Smartphone",
  "Zap",
  "Shield",
  "PanelBottom",
  "Search",
  "ShoppingCart",
  "Server",
  "Handshake",
  "Database",
  "ShieldCheck",
  "FileText",
  "Brain",
  "LifeBuoy",
];
export default function ServicesPage() {
  const locale = useLocale();
  const isRTL = locale === "ar";

  console.log("isRTL", isRTL);

  const t = useTranslations("servicesPage.section4");
  const services = t.raw("list");

  // ✅ نعمل merge بين النصوص + الصور + الأيقونات
  const servicesWithAssets: Service[] = services.map(
    (service: Service, index: number) => ({
      ...service,
      image: serviceImages[index],
      icon: serviceIcons[index],
    })
  );

  const tSection1 = useTranslations("servicesPage.section1");
  const tMobile = useTranslations("servicesPage.mobile");
  const tSection3 = useTranslations("servicesPage.section3");
  const tCoreValuesSection = useTranslations("servicesPage.coreValuesSection");

  // ========================================================
  const tHeroServices = useTranslations("servicesPage");
  const tCtaSection = useTranslations("servicesPage.ctaSection");

  return (
    <>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Hero Section */}
      <PageHeader
        title={tHeroServices("heroTitle")}
        description={tHeroServices("heroDescription")}
        badge={tHeroServices("heroBadge")}
        icon={<TrendingUp className="text-lg mr-2" />}
      />
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      <Container className="py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 items-center group">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 lg:gap-6 gap-3">
              <div className="lg:space-y-6 space-y-3">
                <Image loading="lazy"
                  src="/images/projects/1.png"
                  width={450}
                  height={0}
                  alt=""
                  className="rounded-3xl shadow-2xl w-full h-72 object-cover object-top grayscale group-hover:grayscale-0 transition duration-300 brightness-90"
                />
                <Image loading="lazy"
                  src="/images/projects/2.png"
                  width={450}
                  height={0}
                  alt=""
                  className="rounded-3xl shadow-2xl w-full h-52 object-cover object-top grayscale group-hover:grayscale-0 transition duration-300 brightness-90"
                />
              </div>
              <div className="lg:space-y-6 space-y-3">
                <Image loading="lazy"
                  src="/images/projects/3.png"
                  width={450}
                  height={0}
                  alt=""
                  className="rounded-3xl shadow-2xl w-full h-52 object-cover object-top grayscale group-hover:grayscale-0 transition duration-300 brightness-90"
                />
                <Image loading="lazy"
                  src="/images/projects/4.png"
                  width={450}
                  height={0}
                  alt=""
                  className="rounded-3xl shadow-2xl w-full h-72 object-cover object-top grayscale group-hover:grayscale-0 transition duration-300 brightness-90"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:order-1 -order-1"
          >
            <div>
              <span className=" mb-4 inline-flex items-center gap-2 px-4 py-3 lg:text-sm text-xs rounded-full shadow bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <Laptop className="text-lg mr-2" />
                {tSection1("badge")}
              </span>

              <h2 className="text-xl lg:text-4xl font-bold mb-6">
                {tSection1("title")}
              </h2>

              <p className="lg:text-base text-sm text-muted-foreground leading-relaxed">
                {tSection1("description1")}
              </p>

              <div className="border-b border-b-[#e5e7ea1f] my-5"></div>

              <div className="relative grid grid-cols-2 gap-2.5">
                {tSection1.raw("features").map((item: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-[#238bf3] flex-shrink-0" />
                    <span className="lg:text-sm text-xs text-muted-foreground">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="lg:text-base text-sm text-muted-foreground leading-relaxed mt-4">
                {tSection1("description2")}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* --------------------------- Mobile App Section --------------------------- */}

      <Container className="py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-2 items-center group">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="mb-4 inline-flex items-center gap-2 px-4 py-3 lg:text-sm text-xs rounded-full shadow bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <Smartphone className="text-lg mr-2" />
                {tMobile("badge")}
              </span>

              <h2 className="text-xl lg:text-4xl font-bold mb-6">
                {tMobile("title")}
              </h2>

              <p className="lg:text-base text-sm text-muted-foreground leading-relaxed">
                {tMobile("description1")}
              </p>

              <div className="border-b border-b-[#e5e7ea1f] my-5"></div>

              <div className="relative grid grid-cols-2 gap-2.5">
                {tMobile.raw("features").map((item: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-[#238bf3] flex-shrink-0" />
                    <span className="lg:text-sm text-xs text-muted-foreground">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="lg:text-base text-sm text-muted-foreground leading-relaxed mt-4">
                {tMobile("description2")}
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-1">
              <div>
                <Image loading="lazy"
                  width={400}
                  height={0}
                  src="/images/pwa2.png"
                  alt=""
                  className="rounded-2xl w-full  object-cover object-top grayscale group-hover:grayscale-0 transition duration-300 brightness-90"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
      {/* --------------------------- Dashboard & Backend Section --------------------------- */}

      <Container className="pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-3 items-center group">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative "
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="lg:space-y-6 space-y-3">
                  <Image loading="lazy"
                    width={450}
                    height={0}
                    src="/images/dashboard/dashboard3.jpg"
                    alt=""
                    className="rounded-xl h-64 shadow-2xl w-full lg:h-96 object-cover object-top grayscale group-hover:grayscale-0 transition duration-300 brightness-90"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 lg:order-1 -order-1"
            >
              <div>
                <span className="mb-4 inline-flex items-center gap-2 px-4 py-3 lg:text-sm text-xs rounded-full shadow bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <Server className="text-lg mr-2" />
                  {tSection3("badge")}
                </span>

                <h2 className="text-xl lg:text-4xl font-bold mb-6">
                  {tSection3("title")}
                </h2>

                <p className="lg:text-base text-sm text-muted-foreground leading-relaxed">
                  {tSection3("desc1")}
                </p>

                <div className="border-b border-b-[#e5e7ea1f] my-5"></div>

                <div className="relative grid grid-cols-2 gap-2.5">
                  {tSection3.raw("features").map((item: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-[#238bf3] flex-shrink-0" />
                      <span className="lg:text-sm text-xs text-muted-foreground">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <p className="lg:text-base text-sm text-muted-foreground leading-relaxed mt-4">
                  {tSection3("desc2")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      <section
        className=" relative pt-16 bg-fixed bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/images/bg-2.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/90 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/90 to-transparent z-10" />

        {/* Section Header */}
        <Container>
          <SectionHeader
            badge={t("badge")}
            title={t("title")}
            subtitle={t("description")}
            icon={PanelBottomClose}
          />
        </Container>

        {/* Services Grid */}
        <Container className="lg:py-16 py-6">
          <div className="hidden xl:grid grid-cols-3 gap-x-5 gap-y-24 pt-24">
            {servicesWithAssets.map((service, index) => (
              <div
                key={index}
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
                      alt={service.title}
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
                      {service.features.map((feature, idx) => (
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
            ))}
          </div>
        </Container>
      </section>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      <BusinessSolutionsSection />
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      <section className="lg:py-16 py-10 bg-gradient-to-b from-background/5 to-background text-white">
        <Container>
          <SectionHeader
            badge={tCoreValuesSection("badge")}
            title={tCoreValuesSection("title")}
            subtitle={tCoreValuesSection("description")}
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
                    src="/images/icons/goal-p.png"
                    alt={tCoreValuesSection("WhatStrive.title")}
                    width={64}
                    height={64}
                    className="object-contain mb-4 lg:w-[64px] w-[40px]"
                  />
                  <h3 className="lg:text-2xl text-xl font-bold mb-2">
                    {tCoreValuesSection("WhatStrive.title")}
                  </h3>
                  <p className="text-gray-300 leading-relaxed lg:text-base text-sm">
                    {tCoreValuesSection("WhatStrive.text")}
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
                    src="/images/icons/reach.png"
                    alt={tCoreValuesSection("ShapingNext.title")}
                    width={64}
                    height={64}
                    className="object-contain mb-4 lg:w-[64px] w-[40px]"
                  />
                  <h3 className="lg:text-2xl text-xl font-bold mb-2">
                    {tCoreValuesSection("ShapingNext.title")}
                  </h3>
                  <p className="text-gray-300 leading-relaxed lg:text-base text-sm">
                    {tCoreValuesSection("ShapingNext.text")}
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
            // badge={tCtaSection("badge")}
            title={tCtaSection("title")}
            subtitle={tCtaSection("description")}
            icon={ChartNoAxesCombined}
          />
          <Link
            href="/start"
            className="relative max-w-max mx-auto flex items-center group overflow-hidden px-6 py-3 font-semibold text-white bg-gradient-to-r from-main/5 to-main/90 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Play className="me-2 w-5 h-5" />
            <span className="relative z-10">{tCtaSection("button")}</span>
          </Link>
        </Container>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
    </>
  );
}
