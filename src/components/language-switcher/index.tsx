"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react"; // أيقونة اللغة

interface Props {
  className?: string;
}

export default function LanguageSwitcher({ className = "" }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const switchToLocale = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.replace(/^\/(ar|en)/, "")}`;
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={`flex items-center gap-1 bg-transparent text-foreground hover:bg-transparent cursor-pointer ${className}`}
        >
          <Globe className="w-4.5 h-4.5 text-white/60" />
          <span className="sr-only">Change Language</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchToLocale("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchToLocale("ar")}>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
