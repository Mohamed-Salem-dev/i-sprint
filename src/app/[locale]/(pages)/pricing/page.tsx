"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  Check,
  Star,
  Zap,
  Crown,
  MessageCircle,
  Layers2,
  Globe,
  CreditCard,
  PackagePlus,
  Rocket,
  Activity,
  AlignLeft,
  Newspaper,
  GaugeCircle,
  Languages,
  ListChecks,
  LayoutDashboard,
  LayoutTemplate,
  ShieldCheck,
  UploadCloud,
  ShieldHalf,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
// import { ShapeTitleLine } from "@/components/global/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PageHeader } from "@/components/global/Page-header";
import ProjectStepsSection from "@/components/global/project-steps-section";

interface Plan {
  name: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  popular: boolean;
  monthlyPrice: string;
  yearlyPrice: string;
  originalYearly: string;
  features: string[];
}

interface PlanCardProps extends Plan {
  isYearly: boolean;
}
export default function PricingPage() {
  const t = useTranslations();

  const locale = useLocale();
  const isRTL = locale === "ar";
  const [isYearly, setIsYearly] = useState(false);
  console.log("t", t);

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

  const addOns = [
    {
      name: "Progressive Web App (PWA)",
      description:
        "Transform your website into a fast, offline-capable mobile app experience.",
      price: "EGP 4,000 (one-time)",
      icon: <Rocket size={36} className="text-main" />,
    },
    {
      name: "Custom Web Animations",
      description:
        "Engage visitors with modern, smooth scroll-based and interactive animations.",
      price: "EGP 2,000 – 5,000 (based on complexity)",
      icon: <Activity size={36} className="text-main" />,
    },
    {
      name: "Copywriting",
      description:
        "Professional English content for your pages (Home, About, Services, etc.).",
      price: "EGP 300 per page",
      icon: <AlignLeft size={36} className="text-main" />,
    },
    {
      name: "Blog Integration",
      description:
        "Add a dynamic, SEO-friendly blog with easy publishing tools.",
      price: "EGP 1,800 (one-time)",
      icon: <Newspaper size={36} className="text-main" />,
    },
    {
      name: "Live Chat Integration",
      description: "Enable WhatsApp, Messenger, or custom chat on your site.",
      price: "EGP 700 (one-time)",
      icon: <MessageCircle size={36} className="text-main" />,
    },
    {
      name: "Speed Optimization",
      description:
        "Boost page load speed, reduce bounce rate, and improve performance score.",
      price: "EGP 2,500 (one-time)",
      icon: <GaugeCircle size={36} className="text-main" />,
    },
    {
      name: "Multi-language Setup",
      description:
        "Add support for multiple languages with a smart language switcher.",
      price: "EGP 3,500 for 2 languages",
      icon: <Languages size={36} className="text-main" />,
    },
    {
      name: "Advanced Contact Forms",
      description:
        "Multi-step, conditional, or booking forms with third-party integration.",
      price: "EGP 1,200 – 3,000",
      icon: <ListChecks size={36} className="text-main" />,
    },
    {
      name: "Custom Admin Panel",
      description:
        "Easy-to-use dashboard for managing your site's content and users.",
      price: "EGP 6,000+ (depending on features)",
      icon: <LayoutDashboard size={36} className="text-main" />,
    },
    {
      name: "Custom Landing Page",
      description:
        "High-converting landing page for ads, offers, or product launches.",
      price: "EGP 2,000 – 3,500",
      icon: <LayoutTemplate size={36} className="text-main" />,
    },
    {
      name: "Custom Domain & Email",
      description:
        "Get a branded domain and a professional email address set up.",
      price: "EGP 1,200/year",
      icon: <Globe size={36} className="text-main" />,
    },
    {
      name: "Server Optimization",
      description:
        "Improve server performance, caching, and uptime reliability.",
      price: "EGP 1,500 – 3,000 (one-time)",
      icon: <GaugeCircle size={36} className="text-main" />,
    },
    {
      name: "Website Migration",
      description:
        "Seamless transfer of your website and database to a new host or server.",
      price: "EGP 1,000 – 2,000",
      icon: <UploadCloud size={36} className="text-main" />,
    },
    {
      name: "Security & Backup Setup",
      description:
        "Protect your site with daily backups and enhanced security measures.",
      price: "EGP 1,800 (one-time)",
      icon: <ShieldCheck size={36} className="text-main" />,
    },
    {
      name: "CDN & DDoS Protection",
      description:
        "Accelerate global load times and protect your site from attacks with a content delivery network and DDoS security.",
      price: "EGP 1,500/year",
      icon: <ShieldHalf size={36} className="text-main" />,
    },
    {
      name: "Payment Gateway Integration",
      description:
        "Integrate secure payment methods like Fawry, Paymob, Stripe, or PayPal into your website.",
      price: "EGP 2,500 – 4,000 (one-time)",
      icon: <CreditCard size={36} className="text-main" />,
    },
  ];

  // ==============================

  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Choose the Right Plan for Your Business"
        description="No hidden fees. Just simple pricing tailored to your project —
              whether you're launching a website, store, or full-scale platform."
        badge="  Transparent & Flexible Pricing"
        icon={<CreditCard className="text-lg mr-2" />}
      />

      {/* =========================================================================================== */}
      {/* ====================================================================================================== */}
      <section
        className={`py-10 ${isRTL ? "arabic" : "english"} relative`}
        style={{
          backgroundImage: "url('/images/pricing-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] md:w-[70%] mx-auto">
          {/* Header */}
          {/* Header Section Below Pricing Page */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            {/* Badge */}
            <span className="mb-4 inline-flex items-center gap-2 px-4 py-3 text-sm rounded-full shadow bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <Layers2 className="text-lg mr-2" />
              Plans & Pricing
            </span>

            {/* Title with Gradient */}
            <div className="relative">
              <h2
                className="text-4xl md:text-5xl font-bold mb-2 pb-5"
                style={{
                  background:
                    "linear-gradient(111.8deg, #fff 21.93%, #076ef4 90.29%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Scalable Pricing for Every Business
              </h2>

              {/* Decorative Lines */}
              {/* <span className="absolute bottom-0 right-0">
                <ShapeTitleLine />
              </span>
              <span className="absolute bottom-0 left-0 rotate-y-180">
                <ShapeTitleLine />
              </span> */}
            </div>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 max-w-2xl m-auto my-3">
              Choose a plan that grows with your goals — flexible, transparent,
              and designed for success.
            </p>
          </motion.div>

          {/* Pricing Swiper */}
          <div className="grid grid-cols-[35%_65%] gap-8 items-center">
            <div>
              <h3 className="font-bold text-4xl">
                Pricing that suits your needs
              </h3>
              <p className="text-white/70 my-3">
                Choose a flexible plan tailored to your business goals and
                budget.
              </p>

              <div className="pt-5 flex flex-col gap-12">
                <div className="flex gap-3">
                  <div className="w-8 h-8 min-w-8 bg-main rounded-full flex items-center justify-center">
                    <Check />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Quality Services</h4>
                    <p className="text-white/50 pt-2">
                      Leverage on enterprise-grade technology management
                      solutions at prices to meet all your needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 min-w-8 bg-main rounded-full flex items-center justify-center">
                    <Check />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">
                      Support & Optimization
                    </h4>
                    <p className="text-white/50 pt-2">
                      Leverage on enterprise-grade technology management
                      solutions at prices to meet all your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              {/* Billing Toggle */}
              <div className="flex justify-center">
                <div className="inline-flex items-center mt-10 mb-5 bg-white dark:bg-slate-800 p-1 rounded-full shadow-lg border mx-auto">
                  <button
                    onClick={() => setIsYearly(false)}
                    className={`px-6 py-2 cursor-pointer rounded-full transition-all duration-300 ${
                      !isYearly
                        ? "bg-primary text-white shadow-lg"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Pay Monthly
                  </button>

                  <button
                    onClick={() => setIsYearly(true)}
                    className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-300 relative ${
                      isYearly
                        ? "bg-primary text-white shadow-lg"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Pay Yearly
                    <span className="absolute -top-5 -right-8 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Save 30%
                    </span>
                  </button>
                </div>
              </div>
              {/* -------------------------------------------------- */}
              <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                centeredSlides={true}
                centeredSlidesBounds={true}
                initialSlide={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 1.8,
                  },
                }}
                className=""
              >
                {plans.map((plan, index) => (
                  <SwiperSlide
                    key={index}
                    className="min-h-[650px] rounded-3xl my-5  transition-shadow duration-300"
                  >
                    <PlanCard {...plan} isYearly={isYearly} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* ====================================================================================================== */}
      {/* Add-ons Section */}
      <section
        className="relative py-16 bg-fixe bg-cover bg-center rounded-4xl bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/images/12067355_4884273.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#1b1b1bd0]" />
        <div className="absolute inset-0 z-0" />

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/90 to-transparent z-10" />

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/90 to-transparent z-10" />

        <div className="w-[70%] mx-auto relative z-10">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16 "
          >
            <div className="relative">
              <span className="mb-4 inline-flex items-center gap-2 px-4 py-3 text-sm rounded-full shadow bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                <PackagePlus className="text-lg mr-2" />
                Tailored Solutions for Your Vision
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mb-2 pb-5"
                style={{
                  background:
                    "linear-gradient(111.8deg, #fff 21.93%, #076ef4 90.29%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Additional Services
              </h2>
              {/* <span className="absolute bottom-0 right-0">
                <ShapeTitleLine />
              </span>
              <span className="absolute bottom-0 left-0 rotate-y-180">
                <ShapeTitleLine />
              </span> */}
            </div>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expand your solution with powerful add-ons designed to increase
              your reach, performance, and results.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-full bg-black/10   backdrop-blur-md rounded-2xl   transition-all duration-300">
                  <div className="p-6 text-center flex items-center flex-col">
                    <div className="mb-4">{addon.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {addon.name}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      {addon.description}
                    </p>
                    {/* <div className="text-xl font-bold text-primary">
                      {addon.price}
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectStepsSection />
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
