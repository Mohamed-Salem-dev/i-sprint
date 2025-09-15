"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Headset, Zap, Clock1, LibraryBig } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";
import { PageHeader } from "@/components/global/Page-header";
import FormContact from "./_components/form-contact";
import FollowUs from "@/components/global/follow-us";
import Container from "@/components/global/container";
import SectionHeader from "@/components/global/section-header";
import Link from "next/link";

type Feature = {
  title: string;
  details: string;
  description: string;
  img?: string;
  link?: string;
  color?: string;
};
type FaqItemRaw = {
  question: string;
  answer: string;
};

// ✅ Array ثابت للأيقونات + اللينكات + الألوان
const featureExtras = [
  {
    img: "/images/icons/phone.png",
    link: "tel:+201091551442",
    color: "from-green-500 to-green-600",
  },
  {
    img: "/images/icons/whatsapp.png",
    link: "https://wa.me/201091551442",
    color: "from-green-500 to-green-600",
  },
  {
    img: "/images/icons/email.png",
    link: "mailto:info@i-sprint.com",
    color: "from-blue-500 to-blue-600",
  },
];

const faqIcons = [
  "/images/icons/timeline.png",
  "/images/icons/networking.png",
  "/images/icons/payment-method.png",
  "/images/icons/support.png",
];

type FaqItem = {
  question: string;
  answer: string;
  icon?: string;
};
type FeatureRaw = {
  title: string;
  details: string;
  description: string;
};

export default function ContactPage() {
  const t = useTranslations("startPage");

  const locale = useLocale();
  const isRTL = locale === "ar";
  console.log("isRTL", isRTL);

  const s3 = useTranslations("startPage.section3");
  const items: FaqItemRaw[] = s3.raw("faqs");

  // ✅ دمج الأيقونات مع الترجمة
  const faqs: FaqItem[] = items.map((item: FaqItemRaw, index: number) => ({
    ...item,
    icon: faqIcons[index],
  }));

  const tHEnd = useTranslations("startPage.heroEnd");
  const features: FeatureRaw[] = tHEnd.raw("features");

  // ✅ ندمج الترجمة مع الأيقونات + اللينكات
  const mergedFeatures: Feature[] = features.map(
    (feature: FeatureRaw, idx: number) => ({
      ...feature,
      ...featureExtras[idx],
    })
  );
  return (
    <>
      <PageHeader
        title={t("title")} // h1
        description={t("description")}
        badge={t("badge")}
        icon={<Clock1 className="text-lg mr-2" />}
      />
      <Container className="relative z-20 lg:-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-3 justify-center items-center"
        >
          {mergedFeatures.map((feature: Feature, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
              className="text-center p-5 border rounded-lg bg-white/5 backdrop-blur-sm border-white/20 hover:border-white/40 hover:scale-105 transition-transform duration-300"
            >
              <a href={feature.link} className="block">
                <div className="relative overflow-hidden flex items-center justify-center mx-auto">
                  <Image loading="lazy"
                    src={feature.img!}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="lg:w-12 lg:h-12 w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-white lg:my-3 mt-2 lg:text-lg text-base">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm" dir="ltr">
                  {feature.details}
                </p>
                <p className="text-white/50 text-xs mt-1">
                  {feature.description}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* ------------------------------------------------------------------------------------------------------ */}
      <section
        className="mx-auto relative pt-20 pb-10 -mt-20 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg-2.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-background/95" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/90 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/90 to-transparent z-10" />

        <Container className="pt-16">
          <SectionHeader
            badge={t("section2.badge")}
            title={t("section2.title")}
            subtitle={t("section2.description")}
            icon={Headset}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10">
            <FormContact />

            <div className="lg:p-6 space-y-4 order-first lg:order-last">
              <div>
                <h3 className="text-lg lg:text-xl font-bold">
                  {t("section2.formTitle")}
                </h3>
                <p className="ps-4 text-sm text-white/50">
                  {t("section2.formSubtitle")}
                </p>
              </div>

              <div>
                <h3 className="text-lg lg:text-xl font-bold">
                  {t("section2.quickResponseTitle")}
                </h3>
                <div className="space-y-2 pt-2">
                  {t
                    .raw("section2.quickResponseList")
                    .map((item: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 ps-4"
                      >
                        <div className="w-2 h-2 bg-main/50 rounded-full"></div>
                        <span className="text-sm text-white/50">{item}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="my-5">
                <FollowUs />
                <motion.div>
                  <Card className="bg-onyx-gradient text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Zap className="h-6 w-6 mr-2" />
                        <h3 className="font-semibold">
                          {t("section2.urgentHelpTitle")}
                        </h3>
                      </div>
                      <p className="mb-4 ps-4 text-sm text-white/50">
                        {t("section2.urgentHelpDescription")}
                      </p>
                      <Link
                        href="https://wa.me/201091551442"
                        className="w-full border-white/30 bg-white/10  text-white hover:bg-white/10 flex items-center justify-center gap-2 rounded-lg py-3"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {t("section2.urgentHelpButton")}
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* ------------------------------------------------------------------------------------------------------ */}
      <Container className="lg:py-16 py-10">
        {/* Section Header */}
        <SectionHeader
          badge={t("section3.badge")}
          title={t("section3.titleGradient")}
          subtitle={t("section3.description")}
          icon={LibraryBig}
        />

        {/* FAQ Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-black/20 rounded-lg">
                <div className="lg:p-12 p-4 h-full flex flex-col items-center text-center">
                  <Image loading="lazy"
                    src={faq.icon!}
                    alt={faq.question}
                    width={48}
                    height={48}
                    className="w-12 h-12 mb-4"
                  />
                  <h3 className="font-semibold mb-2 lg:text-xl text-base">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </>
  );
}
