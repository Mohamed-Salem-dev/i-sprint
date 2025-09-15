// components/ProjectStepsSection.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Rocket } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Container from "../container";
import SectionHeader from "../section-header";

export default function ProjectStepsSection() {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const t = useTranslations("steps");
  const tFeatures = useTranslations("steps.steps");

  const processSteps = [
    {
      img: "/images/Step/startup.png",
      index: 0,
    },
    {
      img: "/images/Step/graphic-design.png",
      index: 1,
    },
    {
      img: "/images/Step/website-codes.png",
      index: 2,
    },

    {
      img: "/images/Step/rocket.png",
      index: 3,
    },
  ];

  return (
    <section
      className="relative py-16 bg-fixd bg-cover bg-center bg-no-repeat  overflow-hidden"
      style={{
        backgroundImage: "url('/images/site-footer-shape-bg.png')",
      }}
    >
      <div className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-background/95" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" flex flex-col gap-6 text-white"
        >
          <SectionHeader
            badge={t("tag")}
            title={t("title")}
            subtitle={t("description")}
            icon={Rocket}
          />

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5"
            >
              {processSteps.map((step, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="relative w-60 h-60 z-10 flex flex-col items-center justify-center border  bg-white/5 backdrop-blur-sm border-white/5 p-5 text-center m-auto rounded-full"
                >
                  <div className="text-center relative w-full h-full flex flex-col items-center justify-center">
                    <div className=" relative flex justify-center mb-2">
                      <Image loading="lazy"
                        src={step.img}
alt={`${tFeatures(`${idx}.title`)} step icon by i-Sprint`}
                        width={500}
                        height={0}
                        // fill
                        className="h-12 w-12 object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold  bg-gradient-to-r from-white/80 to-white/90 bg-clip-text text-transparent">
                      {tFeatures(`${idx}.title`)}
                    </h3>

                    <p className="text-white/40 text-sm">
                      {tFeatures(`${idx}.description`)}
                    </p>
                  </div>

                  {[0, 1, 2].includes(idx) && (
                    <>
                      {/* سهم الديسكتوب */}
                      <div
                        className={`hidden md:block absolute opacity-50 z-20
                          bottom-20
                          ${
                            isArabic
                              ? "right-0 -translate-x-60 rotate-y-180"
                              : "left-0 translate-x-60 "
                          }
                        `}
                      >
                        <Image loading="lazy"
                          width={96}
                          height={96}
                          src="/images/About/arrow.png"
                          alt={`${tFeatures(`${idx}.title`)} step icon by i-Sprint`}

                          className={`w-20 h-20
                          ${
                            isArabic
                              ? idx % 2 === 0
                                ? "rotate-10"
                                : "rotate-x-180"
                              : idx % 2 === 0
                              ? "rotate-10"
                              : "rotate-x-180"
                          }
                        `}
                        />
                      </div>

                      {/* سهم الموبايل */}

                      <div
                        className={`
    block md:hidden mt-4 opacity-80
    ${
      idx % 2 === 0
        ? "-translate-x-25 translate-y-12 "
        : "translate-x-25 translate-y-12  "
    }
  `}
                      >
                        <Image loading="lazy"
                          width={64}
                          height={64}
                          src="/images/About/arrow.png"
                          alt={`${tFeatures(`${idx}.title`)} step icon by i-Sprint`}

                          className={`w-12 h-12 inline-block scale-200
      ${idx % 2 === 0 ? "rotate-[110deg]" : "rotate-[260deg] scale-x-[-2]"}
    `}
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {/* Start Your Project Button */}
              <Link
                href="/start"
                className=" bg-gradient-to-r lg:text-lg text-base from-main/90 to-main/90 lg:w-1/4  w-3/5 m-auto   py-3 rounded-lg my-5 flex gap-2 items-center justify-center "
              >
                <Play className=" h-6 w-6" />
                {t("start")}
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
