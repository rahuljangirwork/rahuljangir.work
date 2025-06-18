"use client";

import { Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={cn(
        "backdrop-blur-md p-2 z-20 relative",
        pathname === "/gallery"
          ? "bg-[#1f1f1f] border-t border-t-palette-2/20 text-palette-4/50"
          : "bg-palette-1/20 text-palette-2/70",
      )}
    >
      <div className="max-w-3xl mx-auto px-4 md:px-0">
 <div className="flex justify-between items-center">
        <div className="w-full ">
          <p className="text-sm">© 2025 Rahul Jangir. All rights reserved.</p>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <h4 className="font-bold pr-2">
            <a href="mailto:rahuljangir.works@gmail.com">
              <Mail className="w-4 md:w-5" />
            </a>
          </h4>
        </div>
      </div>
      </div>
     
    </footer>
  );
}
