"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Handshake } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
  icon?: React.ReactNode;
  bgImage?: string;
}

export const PageHeader = ({
  title,
  description,
  badge = "Welcome",
  icon = <Handshake className="text-lg mr-2" />,
  bgImage = "/images/12789069_5068978.jpg",
}: PageHeaderProps) => {
  return (
    <header className="lg:pt-32 pt-24  lg:pb-24 bg-no-repeat bg-center bg-cover relative overflow-hidden">
      {/* ✅ Animated Background */}
      <motion.div
        // initial={{ scale: 1, opacity: 0.3 }}
        // animate={{ scale: [1, 1.2, 1] }}
        // transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <div className="absolute inset-0 bg-background/50" />

      {/* ✅ Gradient Overlay */}
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-bl from-background/90 to-background/90 z-10"
      />

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto text-white"
        >
          <span className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm">
            {icon}
            {badge}
          </span>
          <AnimatePresence mode="wait">
            <motion.h1
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-2xl lg:text-5xl font-bold mb-4 uppercase font-orbitron"
              style={{
                background:
                  "linear-gradient(111.8deg, #fff 21.93%, #076ef4 90.29%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {title}
            </motion.h1>
          </AnimatePresence>
          <p className="lg:text-xl text-base text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute left-5 -top-10 bottom-0 z-20">
        <Image loading="lazy"
          width={250}
          height={60}
          src="/images/banner-shape-2-B9-1SuDN (1).png"
          alt=""
          className="lg:w-[250px] w-[180px]"
        />
      </div>
      <div className="absolute right-5 -top-10 rotate-y-180 bottom-0 z-20">
        <Image loading="lazy"
          width={250}
          height={60}
          src="/images/banner-shape-2-B9-1SuDN (1).png"
          alt=""
          className="lg:w-[250px] w-[180px]"
        />
      </div>
    </header>
  );
};
