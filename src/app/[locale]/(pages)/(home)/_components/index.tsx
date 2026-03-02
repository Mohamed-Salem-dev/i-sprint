"use client";

import React from "react";
import { ServicesHome } from "./services-home";
import { HeroHome } from "./hero-home";
import { PartnersSection } from "./brands";
import { WhyChooseUs } from "./why-choose-us";
import StatsHome from "./stats-home";
import PortfolioHome from "./portfolio-home";
import ProjectStepsSection from "@/components/global/project-steps-section";
import BusinessSolutionsSection from "./BusinessSolutionsSection";
import MobilePwaSection from "./mobile-pwa-section";
import AiGeneratorSection from "./AiGeneratorSection/AiGeneratorSection";
import ISprintModernLayout from "./ISprintServices";
import AdditionalServices from "./additional-services";

export default function HomeComponent() {
  return (
    <>
      <HeroHome />
      <WhyChooseUs />
      <PortfolioHome />
      <ProjectStepsSection />
      <ServicesHome />
      <ISprintModernLayout />
      {/* ============================ */}
      <div className="pb-[28rem]">
        <AiGeneratorSection />
      </div>
      <MobilePwaSection />
      <StatsHome />
      <BusinessSolutionsSection />
      <AdditionalServices />
      <PartnersSection />

      {/* <PricingHome /> */}
    </>
  );
}
