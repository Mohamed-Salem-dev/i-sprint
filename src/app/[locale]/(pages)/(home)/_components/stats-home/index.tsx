"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Calendar, Play, Timer } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/global/container";

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (endTime - startTime), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * value));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      updateCount();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-xl lg:text-2xl font-bold ">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsHome() {
  const locale = useLocale();
  const t = useTranslations("stats");

  const stats = [
    {
      icon: Calendar,
      value: 10,
      suffix: "+",
      label: t("yearsExperience"),
      description: t("since"),
    },
    {
      icon: Timer,
      value: 7,
      suffix: "d",
      label: t("avgDeliveryTime"),
      description: t("fromIdea"),
    },
    {
      icon: Briefcase,
      value: 150,
      suffix: "+",
      label: t("projectsCompleted"),
      description: t("delivered"),
    },
    {
      icon: Calendar,
      value: 100,
      suffix: "%",
      label: t("onTimeDelivery"),
      description: t("punctual"),
    },
  ];

  return (
    <Container>
      <section
        className={`m-auto rounded-4xl bg-gradient-to-r lg:px-0 px-4 lg:from-white/5 lg:to-wfrom-white/5 from-white/5 to-wfrom-white/10 relative overflow-hidden my-20
          lg:after:-bottom-5 after:-bottom-20
          ${
            locale === "ar"
              ? "after:-left-[15%] after:rotate-[-35deg]"
              : "after:-right-[15%] after:rotate-[35deg]"
          }
           after:absolute after:h-[70%] after:w-[20%] after:-bottom-10
          after:rounded-2xl after:bg-gradient-to-b after:from-black/5 after:to-main/10
          `}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]">
          <div
            className={`bg-gradient-to-r lg:from-main/5 lg:to-main/10 rounded-s-4xl h-full lg:pt-24 lg:pb-20 pb-5
    ${
      locale === "ar"
        ? "lg:[clip-path:polygon(50%_0,100%_0,100%_100%,0_100%)]"
        : "lg:[clip-path:polygon(0_0,100%_0,50%_100%,0%_100%)]"
    } 
  `}
          >
            <div className="flex items-center h-full px-4 lg:ps-20">
              <div
                className={`relative after:-bottom-[130px]
                    ${
                      locale === "ar"
                        ? "after:-left-1/3 after:bottom-0"
                        : "after:right-[170px]"
                    }
                after:absolute after:h-[100%] after:rounded-2xl after:w-[30%] after:bg-[#ffffff38] after:rotate-[35deg]`}
              >
                <h2 className="font-orbitron pb-5">{t("title")}</h2>
                <h3 className="text-xl lg:text-2xl font-bold mb-2 pb-1 lg:w-[50%] w-full uppercase font-orbitron">
                  {t("subtitle")}
                </h3>

                <p className="lg:text-base text-sm text-gray-300 lg:w-[65%] w-full">
                  {t("description")}
                </p>

                <Link
                  href="/start"
                  className="text-lg gap-2 lg:flex hidden  mt-10  px-8 py-3 duration-300 max-w-max  items-center justify-center rounded-lg bg-gradient-to-r transition-all from-main/90 to-main/90"
                >
                  <Play className="h-5 w-5" />
                  {t("startProject")}
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:pe-20 lg:pt-32 lg:pb-20 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg lg:py-4 py-2 px-2 flex gap-2 flex-col lg:flex-row transition-all hover:bg-gradient-to-r hover:from-main/10 hover:to-main/90"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-label={stat.label + ": " + stat.description}
                    className="inline-flex bg-[#1f1f1fd5] group-hover:bg-amber-50 items-center justify-center min-w-12 w-12 h-12 rounded-full shadow-lg"
                  >
                    <stat.icon className="w-5 h-5 text-main" />
                  </motion.div>

                  <div>
                    <div className="mb-2 text-transparent bg-gradient-to-r from-white/90 to-main/90 bg-clip-text">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <h3 className="lg:text-base text-sm font-semibold text-white">
                      {stat.label}
                    </h3>
                    <p className="text-onyx-300 text-xs">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/start"
              className="text-lg gap-2 lg:hidden flex   mt-5 mb-8 px-8 py-3 duration-300 max-w-max  items-center justify-center rounded-lg bg-gradient-to-r transition-all from-main/90 to-main/90"
            >
              <Play className="h-5 w-5" />
              {t("startProject")}
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
