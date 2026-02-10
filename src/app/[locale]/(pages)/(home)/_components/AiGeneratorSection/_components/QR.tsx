"use client";

import { motion } from "framer-motion";
import { Link2, QrCode, ShieldCheck, Smartphone } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import { useTranslations } from "next-intl";

// Variants جاهزة
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
       ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function QR() {
  const t = useTranslations("QRSection");

  return (
    <div className="panel min-w-full min-h-screen flex items-center justify-center text-white relative lg:px-28 px-4 bg-gradient-to-r from-[#191c22] via-[#1b1c1f] to-[#424248]
">
      <div className="relative z-40 w-full">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-6"
        >
          <span className="mb-4 inline-flex items-center gap-2 px-4 lg:py-3 py-2 text-sm rounded-full border-white/20 text-white shadow-[0_2px_5px_#00020f33] backdrop-blur-md bg-gradient-to-r from-main/20 to-background/10">
            <QrCode /> {t("badge")}
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

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h3 className="lg:text-4xl text-white/80 text-xl font-semibold">
              {t("subtitle")}
            </h3>
            <p className="lg:text-2xl text-sm text-white/50">{t("motto")}</p>
            <p className="lg:text-lg text-sm max-w-lg leading-relaxed text-white/80">
              {t("description")}
            </p>

            <ul className="mt-6 space-y-3 text-white/70 lg:block hidden">
              <li className="flex items-center gap-2">
                <QrCode size={16} /> {t("features.0")}
              </li>
              <li className="flex items-center gap-2">
                <Link2 size={16} /> {t("features.1")}
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={16} /> {t("features.2")}
              </li>
              <li className="flex items-center gap-2">
                <Smartphone size={16} /> {t("features.3")}
              </li>
            </ul>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex justify-center"
          >
            <PhoneMockup
              imageSrc="/images/img/qr-code.webp"
              alt={t("imageAlt")}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
