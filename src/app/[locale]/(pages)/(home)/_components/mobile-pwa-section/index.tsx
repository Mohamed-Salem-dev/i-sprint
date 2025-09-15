"use client";

import {
  Smartphone,
  Zap,
  WifiOff,
  DownloadCloud,
  Bell,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Container from "@/components/global/container";
import SectionHeader from "@/components/global/section-header";

type Feature = {
  title: string;
  desc: string;
  Icon?: React.ElementType;
};

export default function MobilePwaSection() {
  const tPwa = useTranslations("pwa");
  const tMobile = useTranslations("mobile");

  // ✅ أيقونات PWA
  const pwaIcons = [Smartphone, Zap, WifiOff, DownloadCloud, Bell, ShieldCheck];
  const pwaFeatures: Feature[] = tPwa
    .raw("features")
    .map((feature: Feature, idx: number) => ({
      ...feature,
      Icon: pwaIcons[idx],
    }));

  // ✅ أيقونات Mobile
  const mobileIcons = [Cpu, Zap, WifiOff, Bell, Smartphone, ShieldCheck];
  const mobileFeatures: Feature[] = tMobile
    .raw("features")
    .map((feature: Feature, idx: number) => ({
      ...feature,
      Icon: mobileIcons[idx],
    }));

  return (
    <section className="relative z-10  bg-no-repeat pt-20 bg-fixe bg-cover bg-center "
  
    >
            <div className="absolute inset-0 z-0" />
          <div className="absolute inset-0 bg-[#1b1b1bbf]" />

          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/90 to-transparent z-10" />

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/90 to-transparent z-10" />

      {/* ✅ Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/90 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/90 to-transparent z-10" />

      <div className="relative z-40">
        <Container>
          <SectionHeader
            badge="Apps Excellence"
            title="Mobile & Progressive Web Apps"
            subtitle="We build native mobile apps and PWAs that deliver speed, offline access, push notifications, and seamless user experiences."
            icon={Smartphone}
          />
        </Container>

        <Container>
          <div className="grid md:grid-cols-3  items-center gap-8">
            {/* ✅ Left Side Text */}
            <div>
              <h3 className="text-white lg:text-2xl text-lg font-semibold mb-4">
                {tPwa("sectionTitle")}
              </h3>
              <p className="text-white/60 mb-6">{tPwa("sectionDesc")}</p>
              <div className="grid md:grid-cols-1 gap-6">
                {pwaFeatures.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    {feature.Icon && (
                      <feature.Icon className="w-8 h-8 text-main/80 mt-1" />
                    )}
                    <div>
                      <h4 className="text-white font-semibold">
                        {feature.title}
                      </h4>
                      <p className="text-white/60 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <Link
                href="/start"
                className="lg:inline-flex hidden items-center gap-2 mt-8 px-6 py-3 text-white font-semibold bg-main/90 hover:bg-main/90 transition rounded-lg shadow-md"
              >
                <Play className="w-5 h-5" />
                {tPwa("cta")}
              </Link> */}
            </div>

            {/* ✅ Right Side Image */}
            <motion.div className="relative z-50">
              <motion.div
                animate={{ y: [-30, 50] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              >
                <Image loading="lazy"
                  src="/images/daily-schedule.png"
                  alt="Preview of PWA and Mobile App interfaces"
                  width={800}
                  height={50}
                  className="w-full min-w-full object-cover"
                 
                />
              </motion.div>
            </motion.div>

            <div>
              <h3 className="text-white lg:text-2xl text-lg font-semibold mb-4">
                {tMobile("sectionTitle")}
              </h3>
              <p className="text-white/60 mb-6">{tMobile("sectionDesc")}</p>

              <div className="grid md:grid-cols-1 gap-6">
                {mobileFeatures.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    {feature.Icon && (
                      <feature.Icon className="w-8 h-8 text-main/80 mt-1" />
                    )}
                    <div>
                      <h4 className="text-white font-semibold">
                        {feature.title}
                      </h4>
                      <p className="text-white/60 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <Link
                href="/start"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-white font-semibold bg-main/90 hover:bg-main/90 transition rounded-lg shadow-md"
              >
                <Play className="w-5 h-5" />
                {tMobile("cta")}
              </Link> */}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
