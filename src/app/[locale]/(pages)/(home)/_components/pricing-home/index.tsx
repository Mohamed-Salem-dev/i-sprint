"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Zap, Star, Crown, Layers, LucideIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
// import { ShapeTitleLine } from "@/components/global/icons";

// 🌀 Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface PlanCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  popular: boolean;
  monthlyPrice: string;
  yearlyPrice: string;
  originalYearly: string;
  features: string[];
  isYearly: boolean;
}

const plans = [
  {
    name: "Starter",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-200 dark:border-cyan-800",
    popular: false,
    monthlyPrice: "299",
    yearlyPrice: "2,512",
    originalYearly: "3,588",
    features: [
      "Responsive Website Design",
      "Up to 5 Pages",
      "Contact Form Integration",
      "SEO Optimization",
      "Mobile Optimization",
      "3 Months Support",
    ],
  },
  {
    name: "Professional",
    icon: Star,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-purple-300 dark:border-pink-800",
    popular: true,
    monthlyPrice: "599",
    yearlyPrice: "5,032",
    originalYearly: "7,188",
    features: [
      "Everything in Starter",
      "Up to 15 Pages",
      "E-commerce Integration",
      "Custom CMS",
      "Advanced Analytics",
      "6 Months Support",
      "Database Integration",
    ],
  },
  {
    name: "Enterprise",
    icon: Crown,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-orange-300 dark:border-red-800",
    popular: false,
    monthlyPrice: "1,299",
    yearlyPrice: "10,912",
    originalYearly: "15,588",
    features: [
      "Everything in Professional",
      "Unlimited Pages",
      "API Development",
      "Custom Integrations",
      "Dedicated Manager",
      "12 Months Support",
      "Priority Support",
      "SLA Guarantee",
    ],
  },
];

export function PricingHome() {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <section
        className={`py-24 ${isRTL ? "arabic" : "english"} relative`}
        style={{
          backgroundImage: "url('/images/pricing-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] md:w-[70%] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-4xl mx-auto px-4"
          >
            <span className="mb-4 inline-flex items-center gap-2 px-4 py-3 text-sm rounded-full shadow bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Layers className="text-lg mr-2" />
              Choose Your Plan
            </span>

            <div className="relative">
              <h2
                className="text-4xl md:text-5xl font-bold mb-2 pb-5 uppercase font-orbitron"
                style={{
                  background:
                    "linear-gradient(111.8deg, #fff 21.93%, #076ef4 90.29%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Find the Best Plan to Boost Your Business
              </h2>
              {/* <span className="absolute bottom-0 right-0">
                <ShapeTitleLine />
              </span>
              <span className="absolute bottom-0 left-0 rotate-y-180">
                <ShapeTitleLine />
              </span> */}
            </div>

            <p className="text-xl text-gray-300 max-w-2xl m-auto my-3">
              Select from our flexible pricing options designed to scale with
              your needs and maximize your growth.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center mt-10 mb-5 bg-white dark:bg-slate-800 p-1 rounded-full shadow-lg border mx-auto">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 cursor-pointer rounded-full transition-all duration-300 ${
                  !isYearly
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-300 relative ${
                  isYearly
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
                <span className="absolute -top-5 -right-8 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 30%
                </span>
              </button>
            </div>
          </motion.div>

          {/* Pricing Swiper */}
          <div className="md:hidden">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.5}
              centeredSlides={true}
              initialSlide={1}
              className="px-4"
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                },
                400: {
                  slidesPerView: 1.5,
                },
              }}
            >
              {plans.map((plan, index) => (
                <SwiperSlide key={index}>
                  <PlanCard {...plan} isYearly={isYearly} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Grid for Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
            {plans.map((plan, idx) => (
              <PlanCard key={idx} {...plan} isYearly={isYearly} />
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <h3 className="text-2xl">Compare All Plans & Features</h3>
            <p className="text-lg text-muted-foreground mb-4">
              View detailed comparison of all our pricing plans and find the
              perfect fit for your project.
            </p>
            <Link
              href=""
              className="border bg-background shadow-xs max-w-1/3 m-auto hover:bg-accent hover:text-accent-foreground py-3 rounded-lg my-5 flex items-center justify-center dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
            >
              View All Plans
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="absolute right-0 bottom-0 -z-10"
          animate={{ y: [20, 60] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Image loading="lazy" width={350} height={60} src="/images/vector-2.png" alt="" />
        </motion.div>
      </section>
    </>
  );
}

function PlanCard({
  name,
  icon: Icon,
  color,
  borderColor,
  popular,
  monthlyPrice,
  yearlyPrice,
  originalYearly,
  features,
  isYearly,
}: PlanCardProps) {
  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative group ${popular ? "z-10" : ""} `}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="px-6 py-2 rounded-full text-sm font-bold shadow bg-white/10 backdrop-blur-sm border-white/20 text-white">
            Most Popular ⭐
          </div>
        </div>
      )}

      <div
        className={`h-[600px] p-8  rounded-2xl transition-all duration-500 ${borderColor} relative bg-black/10`}
        style={{
          backgroundImage: "url('/images/pattern-5.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${color} mb-4 transition-transform group-hover:scale-110`}
          >
            <Icon className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-2">{name}</h3>

          <div className="text-center pb-5">
            {isYearly ? (
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-baseline justify-center gap-2">
                  <del className="text-main text-sm">EGP {originalYearly}</del>
                  <motion.span
                    key={yearlyPrice}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-main"
                  >
                    {yearlyPrice}
                  </motion.span>
                  <span className="text-sm text-muted-foreground">/year</span>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full animate-pulse">
                  Save 30% 🎉
                </span>
              </div>
            ) : (
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-sm text-muted-foreground">EGP</span>
                <motion.span
                  key={monthlyPrice}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold text-main"
                >
                  {monthlyPrice}
                </motion.span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
            )}
          </div>
        </div>

        <ul className="space-y-4">
          {features.map((feature: string, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="flex items-start space-x-3 rtl:space-x-reverse"
            >
              <div
                className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mt-0.5`}
              >
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm text-muted-foreground leading-relaxed">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
        <Link
          href="/start"
          className="w-[80%]  font-medium text-white text-lg rounded-lg bg-main flex items-center justify-center p-3 absolute  left-[10%] bottom-5"
        >
          {popular ? "Get Started Now" : "Choose Plan"}
        </Link>
      </div>

      {/* {popular && (
        <div
          className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10 rounded-2xl blur-xl -z-10 group-hover:opacity-20 transition-opacity`}
        />
      )} */}
    </motion.div>
  );
}
