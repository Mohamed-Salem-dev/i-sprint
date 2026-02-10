"use client";

import { Cpu, CpuIcon } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AIAgent() {
  const t = useTranslations("AIAgentSection");

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
         ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <motion.div
      className="panel min-w-full min-h-screen flex items-center justify-center text-white relative lg:px-28 px-4 bg-gradient-to-br from-[#3c4048] via-[#1b1c1f] to-[#272729]
"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative z-40">
        {/* Badge + Title */}
        <motion.div
          className="text-center mb-6"
          variants={fadeUp}
          custom={0}
        >
          <span className="mb-4 inline-flex items-center gap-2 px-4 lg:py-3 py-2 text-sm rounded-full border-white/20 text-white shadow-[0_2px_5px_#00020f33] backdrop-blur-md bg-gradient-to-r from-main/20 to-background/10">
            <Cpu /> {t("badge")}
          </span>

          <h2
            className="text-2xl lg:w-10/12 mx-auto lg:text-4xl font-bold mb-2 lg:pb-5 pb-2 uppercase"
            style={{
              background: "linear-gradient(111.8deg, #fff 21.93%, #fff 90.29%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {t("title")}
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left Content */}
          <div>
            <motion.h3
              className="lg:text-4xl text-white/80 text-xl font-semibold mb-4"
              variants={fadeUp}
              custom={1}
            >
              {t("subtitle")}
            </motion.h3>

            <motion.p
              className="lg:text-2xl text-sm text-white/50 mb-2 lg:block hidden"
              variants={fadeUp}
              custom={2}
            >
              {t("motto")}
            </motion.p>

            <motion.p
              className="lg:text-lg text-sm max-w-lg leading-relaxed text-white/80"
              variants={fadeUp}
              custom={3}
            >
              {t("description")}
            </motion.p>

            <motion.ul
              className="mt-6 space-y-2  text-white/70 text-sm lg:text-base lg:block hidden"
              variants={fadeUp}
              custom={4}
            >
              <li className="flex items-center gap-2">
                <CpuIcon size={16} /> {t("features.nlu")}
              </li>
              <li className="flex items-center gap-2">
                <CpuIcon size={16} /> {t("features.automation")}
              </li>
              <li className="flex items-center gap-2">
                <CpuIcon size={16} /> {t("features.analytics")}
              </li>
              <li className="flex items-center gap-2">
                <CpuIcon size={16} /> {t("features.scalability")}
              </li>
            </motion.ul>
          </div>

          {/* Right Image */}
          <motion.div variants={fadeUp} custom={5}>
            <PhoneMockup
              imageSrc="/images/img/ai-Agent.webp"
              alt={t("imageAlt")}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
