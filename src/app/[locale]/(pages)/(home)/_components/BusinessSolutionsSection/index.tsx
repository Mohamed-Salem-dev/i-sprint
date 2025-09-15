"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "@/components/global/container";
import SectionHeader from "@/components/global/section-header";

type ItemTs = {
  icon: string;
  title: string;
  description: string;
};

// ✅ icons ثابتة هنا
const businessIcons = [
  "/images/icons/crm.png",
  "/images/icons/erp.png",
  "/images/icons/ai-integration.png",
  "/images/icons/ai-agent.png",
  "/images/icons/ai-assistant.png",
  "/images/icons/rpa.png",
  "/images/icons/e-commerce.png",
  "/images/icons/shipment.png",
  "/images/icons/custom-dev.png",
];

export default function BusinessSolutionsSection() {
  const t = useTranslations("stepsBusiness");
  const steps = t.raw("list");

  // ✅ ندمج النصوص مع الصور
  const stepsWithIcons = steps.map((step: ItemTs, index: number) => ({
    ...step,
    icon: businessIcons[index] ?? "/images/icons/default.png", // fallback icon
  }));

  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat rounded-4xl overflow-hidden"
       style={{
            backgroundImage: "url('/images/bg-2.jpg')",
          }}
    >
               <div className="absolute inset-0 z-0" />
          <div className="absolute inset-0 bg-background/95" />

          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/90 to-transparent z-10" />

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/90 to-transparent z-10" />

      <div className="relative mx-auto z-10 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-white"
        >
          <Container className="text-center">
            <SectionHeader
              badge={t("tag")}
              title={t("title")}
              subtitle={t("subtitle")}
              icon={Rocket}
            />
          </Container>

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-4">
              {stepsWithIcons.map((item: ItemTs, idx: number) => (
                <div
                  key={idx}
                  className="lg:p-5 p-4 border-s-4 border-main/90 bg-white/5 backdrop-blur-sm rounded-md shadow-sm hover:shadow-md transition-all flex items-start flex-col lg:flex-row lg:gap-4 gap-2"
                >
                  <Image loading="lazy"
                    src={item.icon}
                    alt={`${item.title} by i-Sprint`}
                    width={40}
                    height={40}
                    className="lg:w-10 lg:h-10 w-8 h-8 object-contain"
                    
                  />
                  <div>
                    <h3 className="lg:text-lg text-base font-semibold text-white/80 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/40 lg:text-sm text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </motion.div>
      </div>
    </section>
  );
}
