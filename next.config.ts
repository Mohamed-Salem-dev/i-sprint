import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
   eslint: {
    // ده يخلي الـ build يكمل حتى مع وجود أخطاء lint
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.pexels.com", "example.com"],
  },
  async headers() {
    
    return [
      {
        
        source: "/(.*).(png|jpg|jpeg|svg|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
