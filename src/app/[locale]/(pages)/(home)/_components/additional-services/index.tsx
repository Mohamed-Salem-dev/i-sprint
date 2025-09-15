import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  AlignLeft,
  CreditCard,
  GaugeCircle,
  Globe,
  Languages,
  LayoutDashboard,
  LayoutTemplate,
  ListChecks,
  MessageCircle,
  Newspaper,
  PackagePlus,
  Rocket,
  ShieldCheck,
  ShieldHalf,
  UploadCloud,
} from "lucide-react";
// import { ShapeTitleLine } from "@/components/global/icons";

export default function AdditionalServices() {
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
  return (
    <>
      <section
        className="relative py-10 bg-fixe bg-cover bg-center rounded-4xl bg-no-repeat overflow-hidden my-20"
        // style={{
        //   backgroundImage: "url('/images/12067355_4884273.jpg')",
        // }}
      >
        {/* <div className="absolute inset-0 bg-[#1b1b1bd0]" />
        <div className="absolute inset-0 z-0" />

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/90 to-transparent z-10" />

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/90 to-transparent z-10" /> */}

        <div className="container mx-auto px-28 relative z-10">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16 w-[70%] mx-auto"
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
                  <div className="p-6 flex-col">
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
    </>
  );
}
