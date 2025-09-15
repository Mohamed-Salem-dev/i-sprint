"use client";

import { Star } from "lucide-react";
// import { ShapeTitleLine } from "@/components/global/icons";

type SectionHeaderProps = {
  badge?: string;
  title?: string;
  subtitle?: string;
  icon?: React.ElementType;
};

export default function SectionHeader({
  badge,
  title,
  subtitle,
  icon: Icon = Star,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-6">
      {/* <span className="mb-4 inline-flex items-center gap-2 px-4 lg:py-3 py-2 translate-z-0 will-change-transform text-sm rounded-full shadow-[0_2px_5px_#00020f33] bg-white/10 backdrop-blur-sm border-white/20 text-white ">
        <Icon className="" />
        {badge}
      </span> */}
      <div className="relative">
        <h2
          className="text-2xl lg:text-5xl font-bold mb-2 lg:pb-5 pb-2 uppercase font-orbitron"
          style={{
            background:
              "linear-gradient(111.8deg, #fff 21.93%, #076ef4 90.29%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {title}
        </h2>
{/* 
        <span className="absolute bottom-0 right-0">
          <ShapeTitleLine className="lg:w-52 w-32 h-4" />
        </span>
        <span className="absolute bottom-0 left-0 rotate-y-180">
          <ShapeTitleLine className="lg:w-52 w-32 h-4" />
        </span> */}

        {/* <span
              className={`absolute bottom-0 ${
                isRTL ? "left-0 rotate-y-180" : "right-0"
              }`}
            >
              <ShapeTitleLine />
            </span>
            <span
              className={`absolute bottom-0 ${
                isRTL ? "right-0" : "left-0 rotate-y-180"
              }`}
            >
              <ShapeTitleLine />
            </span> */}
      </div>
      <p className="lg:text-lg text-base text-onyx-700 dark:text-onyx-300 max-w-2xl mx-auto leading-relaxed ">
        {subtitle}
      </p>
    </div>
  );
}
