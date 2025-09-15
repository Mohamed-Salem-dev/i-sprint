import { WhatsApp } from "@/components/global/icons";
import React from "react";

export default function Whatsapp() {
  return (
    <>
      <a
        href="https://wa.me/01091551442"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-main/90 hover:bg-main/20 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
      >
        <WhatsApp className="w- h-8 stroke-white" />
      </a>
    </>
  );
}
