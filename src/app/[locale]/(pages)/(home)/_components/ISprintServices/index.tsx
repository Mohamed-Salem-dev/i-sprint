"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, BrainCircuit, Megaphone, Settings, ArrowLeft } from "lucide-react";

const services = [
  {
    id: "01",
    title: "برمجة المواقع",
    subtitle: "نحن لا نصمم، نحن نطور تجارب رقمية",
    description: "في i-Sprint نضمن لك سرعة تحميل صفحات الموقع لأنها تعتبر من أهم عوامل بقاء الزوار، مع توفير أعلى معايير الأمان لحماية بياناتك.",
    icon: Globe,
    color: "#3b82f6"
  },
  {
    id: "02",
    title: "تطبيقات الجوال",
    subtitle: "تصميم تطبيقات تُحدث فرقاً",
    description: "نبرمج بأعلى المعايير لتطبيقات Android و iOS قوية، مع لوحة تحكم كاملة لتعديل المحتوى وربطها ببوابات الدفع العالمية.",
    icon: Smartphone,
    color: "#a855f7"
  },
  {
    id: "03",
    title: "الذكاء الاصطناعي",
    subtitle: "حلول مدعومة بالذكاء لتسريع النمو",
    description: "ندمج AI في صميم حلولنا؛ من الروبوتات التفاعلية إلى تحليل البيانات العميقة والتنبؤ بالاتجاهات لتقود شركتك بثقة.",
    icon: BrainCircuit,
    color: "#10b981"
  }
];

export default function ISprintModernLayout() {
  return (
    <section className="bg-[#050505] text-white py-24 px-6 overflow-hidden rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - تصميم جانبي */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter"
            >
              i-Sprint <span className="text-blue-500">.</span>
            </motion.h2>
            <p className="text-slate-400 text-xl border-r-2 border-blue-500 pr-6">
              نحن نحول الرؤى التقنية إلى واقع ملموس، ندمج الفن بالبرمجة لنخلق حلولاً تتجاوز التوقعات.
            </p>
          </div>
          <div className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase hidden md:block">
            Services / 2026 Edition
          </div>
        </div>

        {/* Services Stack - بديل الـ Grid */}
        <div className="space-y-1">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative border-t border-white/10 py-16 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-white/[0.02] transition-colors px-4 rounded-xl"
              >
                {/* الرقم والخلفية المتحركة */}
                <div className="absolute left-0 top-0 h-full w-0 bg-blue-600/10 group-hover:w-full transition-all duration-700 ease-in-out -z-10" />
                
                <div className="flex items-center gap-12 md:w-1/2">
                  <span 
                    className="text-6xl font-outline font-black text-transparent stroke-white/20 opacity-30 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-500" 
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
                  >
                    {service.id}
                  </span>
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-4 transition-transform duration-500 flex items-center gap-4">
                      {service.title}
                      <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowLeft size={24}/>
                      </span>
                    </h3>
                    <p className="text-blue-400 font-medium text-sm">{service.subtitle}</p>
                  </div>
                </div>

                <div className="md:w-1/3 mt-6 md:mt-0">
                  <p className="text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* الأيقونة العائمة */}
                <div className="hidden lg:flex w-24 h-24 items-center justify-center rounded-full border border-white/10 group-hover:border-blue-500 group-hover:rotate-[360deg] transition-all duration-1000">
                  <IconComponent 
                    size={40} 
                    className="text-slate-500 group-hover:text-blue-500 transition-colors duration-500" 
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* سكشن الصيانة والتسويق كـ "Featured Boxes" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
           <div className="bg-blue-600 p-12 rounded-bl-[4rem] flex flex-col justify-between aspect-video md:aspect-auto">
              <Megaphone size={48} className="text-white/30 mb-8" />
              <div>
                <h4 className="text-3xl font-bold mb-4">التسويق الرقمي</h4>
                <p className="text-blue-100">نصنع قصص نجاح ونحول الحملات الإعلانية إلى فرص مبيعات حقيقية.</p>
              </div>
           </div>
           <div className="bg-slate-900 p-12 rounded-br-[4rem] flex flex-col justify-between border border-white/5">
              <Settings size={48} className="text-blue-500 mb-8" />
              <div>
                <h4 className="text-3xl font-bold mb-4 text-white">الدعم الفني</h4>
                <p className="text-slate-400">رحلة الاستمرار والتطوير تبدأ بعد التسليم. نحن فريقك التقني المتكامل.</p>
              </div>
           </div>
        </div>

      </div>

      {/* CSS لتحقيق تأثير الـ Outline للنصوص */}
      <style jsx>{`
        .font-outline {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        .group:hover .font-outline {
          -webkit-text-stroke: 1px #3b82f6;
        }
      `}</style>
    </section>
  );
}