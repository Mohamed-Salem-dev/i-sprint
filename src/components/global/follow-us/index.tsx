"use client";

import React from "react";
import { motion } from "framer-motion";
import { FacebookSolid, Instagram, LinkedinSolid, Snapchat, TwitterSolid } from "../icons";
import { useTranslations } from "next-intl";

export default function FollowUs() {
  const t = useTranslations("FollowUs");

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
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold">{t("title")}</h3>
        <p className="ps-4 text-sm text-white/50">{t("subtitle")}</p>
      </div>

      <div className="flex gap-2 my-4">
        {socialLinks.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 bg-white/10 rounded-lg hover:bg-main/90 fill-white/90`}
          >
            <social.icon className="w-5 h-5" />
            <span className="sr-only">{social.label}</span>
          </motion.a>
        ))}
      </div>
    </>
  );
}
