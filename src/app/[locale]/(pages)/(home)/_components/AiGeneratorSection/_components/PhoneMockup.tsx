import Image from "next/image";
import { useLocale } from "next-intl";

interface PhoneMockupProps {
  imageSrc: string;
  alt?: string;
}

export default function PhoneMockup({ imageSrc, alt = "App Screenshot" }: PhoneMockupProps) {
    const locale = useLocale(); 
  return (
    <div className={`relative flex ${locale === "ar" ? "justify-end" : "justify-start"}`}>
      <Image
        src={imageSrc}
        alt={alt}
        width={600}
        height={200}
        className="rounded-xl lg:w-[600px] w-[280px] h-40 lg:h-full object-cover"
      />
      <div className={`absolute top-20  ${locale === "ar" ? "-left-24" : "-right-24"} lg:block hidden`}>
        <div className="flex items-center justify-center">
          <div className="relative w-52 h-96 rounded-3xl border-[6px] border-gray-800 bg-black shadow-2xl">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-20">
              <div className="w-2.5 h-2.5 bg-[#252628] rounded-full absolute right-2 top-1 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#003978] rounded-full"></div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-900">
              <Image
                src={imageSrc}
                alt={alt}
                fill
                className="object-cover object-left h-full"
              />
            </div>

            <div className="absolute left-[-4px] top-24 w-1 h-14 bg-[#696969] rounded-l-lg"></div>
            <div className="absolute left-[-4px] top-44 w-1 h-10 bg-[#696969] rounded-l-lg"></div>
            <div className="absolute right-[-4px] top-32 w-1 h-20 bg-[#696969] rounded-r-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
