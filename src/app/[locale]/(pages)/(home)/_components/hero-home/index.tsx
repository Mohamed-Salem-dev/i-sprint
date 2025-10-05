import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Zap, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/global/container";

export function HeroHome() {
  const t = useTranslations();
  const tFeatures = useTranslations("hero.features");
  const heroSlides = [
    {
      id: 1,
      title: t("hero.slides.0.title"),
      subtitle: t("hero.slides.0.subtitle"),
      description: t("hero.slides.0.description"),
      badge: t("hero.slides.0.badge"),
      icon: Sparkles,
    },
    {
      id: 2,
      title: t("hero.slides.1.title"),
      subtitle: t("hero.slides.1.subtitle"),
      description: t("hero.slides.1.description"),
      badge: t("hero.slides.1.badge"),
      icon: Zap,
    },
    {
      id: 3,
      title: t("hero.slides.2.title"),
      subtitle: t("hero.slides.2.subtitle"),
      description: t("hero.slides.2.description"),
      badge: t("hero.slides.2.badge"),
      icon: Rocket,
    },
  ];

  const features = [
    {
      img: "/images/Step/rocket.png",
      index: 0,
    },
    {
      img: "/images/Step/graphic-design.png",
      index: 1,
    },
    {
      img: "/images/Step/trust.png",
      index: 2,
    },
    {
      img: "/images/Step/applications.png",
      index: 3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = heroSlides[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <>
      {/* Hero Section */}
      <header className="relative  min-h-screen flex pt-24 lg:pt-0 lg:items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/video/0_Globe_Data_Visualization_1280x720.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 xl:px-60 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.badge}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center mb-5 gap-2  px-4 py-3 text-white rounded-full shadow-[0_2px_5px_#00020f33] backdrop-blur-md bg-[rgba(39,41,52,0.1)]">
                  {slide.icon && (
                    <slide.icon className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  )}
                  {slide.badge}
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={slide.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl  lg:text-5xl font-bold mb-4 uppercase font-orbitron"
                style={{
                  background:
                    "linear-gradient(111.8deg, #fff 21.93%, #076ef4 90.29%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {slide.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h2
                key={`subtitle-${slide.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-sm md:text-base"
              >
                {slide.subtitle}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${slide.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-base md:text-lg mb-8 text-white/60 lg:w-2/3 m-auto leading-relaxed"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className=" flex gap-2 justify-center items-center"
            >
              <Link
                href="/start"
                className="relative flex justify-center text-sm lg:w-56 w-44  lg:text-lg  items-center group overflow-hidden lg:px-6 px-2 py-3 font-semibold text-white bg-gradient-to-r from-main/90 to-main/90 rounded-lg shadow-lg transition-all duration-300"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-white/20 transition-all duration-500 group-hover:w-full" />
                <Play className="me-2 w-5 h-5" />
                <span className="relative z-10">{t("ctaStart")}</span>
              </Link>

              <Link
                href="/projects"
                className="relative flex justify-center items-center text-sm lg:w-56 w-44  lg:text-lg  group overflow-hidden lg:px-6 px-2 py-3 font-semibold text-white backdrop-blur-sm bg-[#ffffff11] rounded-lg shadow-lg transition-all duration-300"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-main/90 to-main/90 transition-all duration-500 group-hover:w-full" />
                <span className="relative z-10">{t("hero.ctaView")}</span>
                {/* <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute left-0 top-0 bottom-0 xl:block hidden">
          <Image
            loading="lazy"
            width={300}
            height={60}
            src="/images/banner-shape-2-B9-1SuDN (1).png"
            alt="i-Sprint decorative banner shape"
            className="w-[200px] lg:w-[300px] h-auto"
          />
        </div>

        <div className="absolute right-0 top-0 rotate-y-180 bottom-0 xl:block hidden">
          <Image
            loading="lazy"
            width={300}
            height={60}
            src="/images/banner-shape-2-B9-1SuDN (1).png"
            className="w-[200px] lg:w-[300px] h-auto"
            alt="i-Sprint decorative banner shape"
          />
        </div>
      </header>
      {/* =========================================================================== */}
      {/* Feature Section */}

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:gap-6 gap-4 relative z-10 lg:-mt-24 -mt-50 "
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
              className="text-center xl:p-5 p-2 border rounded-lg bg-white/2 backdrop-blur-sm border-white/20"
            >
              <div className="md:w-14 md:h-14 h-8 w-8 relative overflow-hidden flex items-center justify-center mx-auto">
                <Image
                  loading="lazy"
                  src={feature.img}
                  alt={`${tFeatures(`${idx}.title`)} icon`}
                  fill
                  className=" object-cover"
                />
              </div>
              <h2 className="font-semibold md:text-base text-sm text-white my-3">
                {tFeatures(`${idx}.title`)}
              </h2>
              <p className="text-white/70 md:text-sm text-xs">
                {tFeatures(`${idx}.desc`)}
              </p>
            </motion.div>
          ))}

          
        </motion.div>
        {/* <div>
            <div className="absolute left-0 -top-24 bottom-0 xl:block hidden">
              <Image
                loading="lazy"
                width={300}
                height={60}
                src="/images/hero-thumb2.png"
                alt="i-Sprint decorative banner shape"
                className="w-[200px] lg:w-[300px] h-auto"
              />
            </div>

            <div className="absolute right-0 -top-24  bottom-0 xl:block hidden">
              <Image
                loading="lazy"
                width={300}
                height={60}
                src="/images/hero-thumb3.png"
                className="w-[200px] lg:w-[300px] h-auto"
                alt="i-Sprint decorative banner shape"
              />
            </div>
          </div> */}
      </Container>
    </>
  );
}
