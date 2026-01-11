"use client";

import {
  BarChart3,
  Calendar,
  ClipboardCheck,
  ClipboardList,
  Users,
} from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2,
       ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function ProjectManagement() {
  const t = useTranslations("ProjectManagementSection");

  return (
    <div className="panel min-w-full min-h-screen flex items-center justify-center text-white relative lg:px-28 px-4 bg-gradient-to-br from-[#1B263B] via-[#0F172A] to-[#0A192F]">
      <div className="relative z-40">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-6"
        >
          <span className="mb-4 inline-flex items-center gap-2 px-4 lg:py-3 py-2 text-sm rounded-full border-white/20 text-white shadow-[0_2px_5px_#00020f33] backdrop-blur-md bg-gradient-to-r from-main/20 to-background/10">
            <ClipboardList /> {t("badge")}
          </span>
          <div className="relative">
            <h2
              className="text-2xl lg:w-10/12 mx-auto lg:text-4xl font-bold mb-2 lg:pb-5 pb-2 uppercase"
              style={{
                background:
                  "linear-gradient(111.8deg, #fff 21.93%, #fff 90.29%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {t("title")}
            </h2>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Texts */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h3 className="lg:text-4xl text-white/80 text-xl font-semibold mb-4">
              {t("subtitle")}
            </h3>
            <p className="lg:text-2xl text-sm text-white/50 mb-2">
              {t("motto")}
            </p>
            <p className="lg:text-lg text-sm max-w-lg leading-relaxed text-white/80">
              {t("description")}
            </p>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-6 space-y-3 text-white/70 lg:block hidden"
            >
              {[
                { icon: <ClipboardCheck size={16} />, text: t("features.0") },
                { icon: <Users size={16} />, text: t("features.1") },
                { icon: <BarChart3 size={16} />, text: t("features.2") },
                { icon: <Calendar size={16} />, text: t("features.3") },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  className="flex items-center gap-2"
                >
                  {item.icon} {item.text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <PhoneMockup
              imageSrc="/images/img/project-management.jpg"
              alt={t("imageAlt")}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
