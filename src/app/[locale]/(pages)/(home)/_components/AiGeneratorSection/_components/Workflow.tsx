"use client";

import { RectangleGoggles } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Workflow() {
  const t = useTranslations("WorkflowSection");

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

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
         ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      className="panel min-w-full min-h-screen flex items-center justify-center text-white relative lg:px-28 px-4 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#243B55]
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
            <RectangleGoggles /> {t("badge")}
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
              className="lg:text-2xl text-sm text-white/50 mb-2"
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
              className="mt-6 space-y-3 text-white/70 lg:block hidden"
              variants={fadeUp}
              custom={4}
            >
              <li className="flex items-center gap-2">
                <RectangleGoggles size={16} /> {t("feature1")}
              </li>
              <li className="flex items-center gap-2">
                <RectangleGoggles size={16} /> {t("feature2")}
              </li>
              <li className="flex items-center gap-2">
                <RectangleGoggles size={16} /> {t("feature3")}
              </li>
              <li className="flex items-center gap-2">
                <RectangleGoggles size={16} /> {t("feature4")}
              </li>
            </motion.ul>
          </div>

          {/* Right Image */}
          <motion.div variants={fadeRight}>
            <PhoneMockup
              imageSrc="/images/img/workflow.jpg"
              alt={t("imageAlt")}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
