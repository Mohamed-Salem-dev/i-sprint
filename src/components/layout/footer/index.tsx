"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import Container from "@/components/global/container";
import {
  Email,
  FacebookSolid,
  Instagram,
  LinkedinSolid,
  Phone,
  Play,
  Snapchat,
  TwitterSolid,
  WhatsApp,
} from "@/components/global/icons";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();

  const locale = useLocale();
  const isRTL = locale === "ar";
  const socialLinks = [
    {
      icon: LinkedinSolid,
      href: "https://www.linkedin.com/company/YourCompany",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: TwitterSolid,
      href: "https://twitter.com/YourProfile",
      label: "Twitter",
      color: "hover:text-sky-500",
    },
    {
      icon: FacebookSolid,
      href: "https://www.facebook.com/YourPage",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/YourPage",
      label: "Instagram",
      color: "hover:text-blue-600",
    },
    {
      icon: Snapchat,
      href: "https://www.snapchat.com/YourPage",
      label: "Snapchat",
      color: "hover:text-blue-600",
    },
  ];

  const iconsMap: Record<string, React.ElementType> = {
    Phone,
    WhatsApp,
    Email,
  };
  const features = [
    {
      title: "Call Us",
      details: "+20 109 155 1442",
      description: t("Footer.contact.phone"),
      icon: "Phone",
      link: "tel:+201091551442",
    },
    {
      title: "WhatsApp",
      details: "+20 109 155 1442",
      description: t("Footer.contact.whatsApp"),
      icon: "WhatsApp",
      link: "https://wa.me/201091551442",
    },
    {
      title: "Email",
      details: "info@i-sprint.com",
      description: t("Footer.contact.email"),
      icon: "Email",
      link: "mailto:info@i-sprint.com",
    },
  ];

  return (
    <footer
      className="bg-gradient-to-br from-background relative to-muted/50 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/counter-bg.png')" }}
    >
      <div className="absolute inset-0 bg-background/20" />

      <Container className="relative z-10">
        <div className="py-8">
          <div className="grid lg:grid-cols-4  gap-6 ">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image loading="lazy"
                width={150}
                height={64}
                src="/images/i-sprint-light.svg"
                alt="i-Sprint"
                className="object-cover w-[180px] h-16"
              />

              <div className="ps-4">
                <span className="text-base font-orbitron">
                  {t("Footer.yearsOf")}
                  <br />
                  <span className="text-lg">{t("Footer.experience")}</span>
                </span>

                <p className="text-white/50 text-sm mt-2 mb-2 w-4/5">
                  {t("Footer.description")}
                </p>
                <Link
                  href="/start"
                  className="bg-gradient-to-r mt-5 text-base flex items-center justify-center w-2/3 h-12 gap-1 from-main/90 to-main/90 rounded-lg text-white hover:from-main/90 hover:to-main/90 transition-all duration-300"
                >
                  <Play className="w-4 h-4" />
                  {t("Footer.start")}
                </Link>
              </div>
            </motion.div>
            <div className="ps-4">
              <h2 className="text-lg font-bold pb-5">
                {t("Footer.companyTitle")}
              </h2>
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-white/70 text-sm hover:underline"
                >
                  {t("Footer.companyLink1")}
                </Link>
                <Link
                  href="/about"
                  className="text-white/70 text-sm hover:underline"
                >
                  {t("Footer.companyLink2")}
                </Link>
                <Link
                  href="/projects"
                  className="text-white/70 text-sm hover:underline"
                >
                  {t("Footer.companyLink3")}
                </Link>
                <Link
                  href="/services"
                  className="text-white/70 text-sm hover:underline"
                >
                  {t("Footer.companyLink4")}
                </Link>
                <Link
                  href="/start"
                  className="text-white/70 text-sm hover:underline"
                >
                  {t("Footer.companyLink5")}
                </Link>
              </div>
            </div>

            <div className="ps-4">
              <h2 className="text-lg font-bold pb-5">
                {t("Footer.specialize")}
              </h2>
              <div className="flex flex-col gap-3">
                {t
                  .raw("Footer.services")
                  .map((service: string, idx: number) => (
                    <h2 key={idx} className="text-white/70 text-sm">
                      {service}
                    </h2>
                  ))}
              </div>
            </div>

            <div className="ps-4">
              <h2 className="text-lg font-bold pb-5">
                {t("Footer.contactTitle")}
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col lg:gap-4 gap-4"
              >
                {features.map((feature, idx) => {
                  const Icon = iconsMap[feature.icon] || Phone;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                    >
                      <a
                        href={feature.link}
                        className="flex gap-2 items-center"
                      >
                        <div className="flex items-center justify-center rounded-lg bg-main/10 w-10 h-10 p-2">
                          <Icon className="lg:w-5 lg:h-5 w-4 h-4 stroke-white/90" />
                        </div>
                        <div>
                          <p
                            dir="ltr"
                            className={`text-white/70 text-sm ${
                              isRTL ? "text-end" : "text-start"
                            }`}
                          >
                            {feature.details}
                          </p>
                          <p className="text-white/50 text-xs mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
              <div className="pt-5">
                <h2 className="text-lg font-bold ">
                  {t("Footer.followUsTitle")}
                </h2>
                <p className="text-white/70 text-xs">
                  {t("Footer.followUsDesc")}
                </p>
                <div className="flex gap-2 my-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-10 h-10 bg-main/10 flex items-center justify-center rounded-lg  fill-white">
                        <social.icon className="w-5 h-5 " />
                      </div>
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="opacity-50" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 i-Sprint. {t("Footer.madeWith")}</span>
            <Heart className="w-4 h-4 text-main/90 fill-current" />
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
