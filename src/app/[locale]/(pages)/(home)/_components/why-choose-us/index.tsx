"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/global/container";
import SectionHeader from "@/components/global/section-header";

export function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  const features = t.raw("features") as string[];

  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-10 mt-10"
    >
      <Container>
        {/* Section Header */}
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
          icon={Star}
        />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-4 group">
          {/* Left Side - Reasons Grid */}

          <div className="grid grid-cols-1 relative lg:grid-cols-1  gap-4 lg:order-0 order-1  w-[70%] ">
            {/* <div className="absolute inset-0  bg-[#000000e6] z-10"></div> */}

            <Image loading="lazy"
              width={300}
              height={0}
              src="/images/projects/5.png"
              alt="Modern web design project by i-Sprint"
              className={`h-96 object-cover  object-top w-full  rounded-3xl grayscale group-hover:grayscale-0 transition duration-300 brightness-90`}
            />
            <Image loading="lazy"
              width={300}
              height={0}
              src="/images/projects/6.png"
              alt="Creative e-commerce development project by i-Sprint"
              className={`h-96 object-cover absolute  object-top w-[100%] 
                                 ${locale === "ar" ? "right-1/6 " : "left-1/6 "}
                                mt-14 rounded-3xl grayscale group-hover:grayscale-0 transition duration-300 brightness-90`}
            />
            <Image loading="lazy"
              width={300}
              height={0}
              src="/images/projects/7.png"
              alt="Professional mobile app interface design by i-Sprint"
              className={`h-96 object-cover absolute  object-top w-[100%] ${
                locale === "ar" ? "right-1/3 " : "left-1/3 "
              }  mt-36 rounded-3xl grayscale group-hover:grayscale-0 transition duration-300 brightness-90`}
            />
            <Image loading="lazy"
              width={300}
              height={0}
              src="/images/projects/9.png"
              alt="UI/UX digital solution example by i-Sprint"
              className={`h-96 object-cover absolute  object-top w-[100%] ${
                locale === "ar" ? "right-1/2" : "left-1/2 "
              } mt-56 rounded-3xl grayscale group-hover:grayscale-0 transition duration-300 brightness-90`}
            />
          </div>
          {/* Right Side - Features List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-xl lg:text-3xl font-bold text-onyx-900 dark:text-white mb-2">
                {t("sectionTitle")}
              </h3>
              <p className="lg:text-lg text-sm text-onyx-700 dark:text-onyx-300 leading-relaxed mb-4">
                {t("sectionDesc")}
              </p>
            </div>

            <ul className="grid grid-cols-1  md:grid-cols-1 ">
              {features.map((feature, index) => (
                <motion.li
                  role="listitem"
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 space-x-3 rtl:space-x-reverse px-3 py-2  rounded-lg hover:bg-onyx-100 dark:hover:bg-onyx-800 transition-colors duration-200"
                >
                  <CheckCircle className="w-5 h-5 text-[#1d8cfb] flex-shrink-0" />
                  <span className="text-onyx-700 dark:text-onyx-300 font-medium lg:text-base text-sm">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[linear-gradient(135deg,transparent_0%,#1f8cf921_50%,#1f8cf921_100%)] p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="lg:text-2xl text-xl font-bold text-white">
                    {t("experienceYears")}
                  </div>
                  <div className="text-white/80">{t("experienceText")}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* ========================================== */}

      <motion.div
        className={`absolute top-40 -z-10 rotate-45 opacity-5 ${
          isRTL ? "right-20 " : "left-16"
        } `}
        animate={
          {
            // scale: [0.9, 1.2, 0.9],
          }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image loading="lazy" width={800} height={0} src="/images/h1-bg01.png" alt="" />
      </motion.div>
    </motion.section>
  );
}
