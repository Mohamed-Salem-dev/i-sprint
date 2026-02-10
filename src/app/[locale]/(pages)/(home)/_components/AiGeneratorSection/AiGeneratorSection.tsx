"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import AIAgent from "./_components/AIAgent";
import RPA from "./_components/RPA";
import Workflow from "./_components/Workflow";
import Knowledge from "./_components/Knowledge";
import ProjectManagement from "./_components/ProjectManagement";
import QR from "./_components/QR";
import HR from "./_components/HR";

gsap.registerPlugin(ScrollTrigger);

export default function AiGeneratorSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // أول ما السكشن يدخل في الشاشة
            setupScrollTriggers();
            observer.disconnect(); // نوقف المراقبة بعد أول مرة
          }
        });
      },
      { threshold: 0.1 } // لما 10% منه يدخل في الشاشة
    );

    observer.observe(section);

    const setupScrollTriggers = () => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");

      // امسح أي تريجرات قديمة
      ScrollTrigger.getAll().forEach((st) => st.kill());

      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });
      });

      ScrollTrigger.refresh();
      console.log("ScrollTrigger Activated ✅");
    };

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative z-50 mt-16 mb-52">
      <AIAgent />
      <RPA />
      <Workflow />
      <Knowledge />
      <ProjectManagement />
      <QR />
      <HR />
    </section>
  );
}
