"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";

export default function FormContact() {
  const t = useTranslations("FormContact");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // محاكاة إرسال الفورم
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // إعادة ضبط الفورم
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-5">
      <div>
        <div className="grid lg:grid-cols-1 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* العنوان */}
                <div className="relative">
                  <h3 className="text-lg lg:text-xl font-bold">{t("title")}</h3>
                </div>
                <p className="text-base text-gray-300 m-auto ps-4">
                  {t("subtitle")}
                </p>
              </motion.div>

              <div>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 pt-8">
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div className="space-y-2 flex flex-col">
                        <label htmlFor="name" className="text-sm font-medium">
                          {t("nameLabel")}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder={t("namePlaceholder")}
                        />
                      </div>

                      <div className="space-y-2 flex flex-col">
                        <label
                          htmlFor="company"
                          className="text-sm font-medium"
                        >
                          {t("companyLabel")}
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={t("companyPlaceholder")}
                        />
                      </div>

                      <div className="space-y-2 flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium">
                          {t("emailLabel")}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={t("emailPlaceholder")}
                        />
                      </div>

                      <div className="space-y-2 flex flex-col">
                        <label htmlFor="phone" className="text-sm font-medium">
                          {t("phoneLabel")}
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t("phonePlaceholder")}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="message" className="text-sm font-medium">
                        {t("messageLabel")}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder={t("messagePlaceholder")}
                        rows={10}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center bg-main/90 hover:bg-main/90"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          {t("sending")}
                        </>
                      ) : (
                        <>
                          <Send
                            className={`w-4 h-4 ml-2 ${
                              isRTL ? "rotate-180 mr-2 ml-0" : ""
                            }`}
                          />
                          {t("sendBtn")}
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600 mb-2">
                      {t("successTitle")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("successMessage")}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
