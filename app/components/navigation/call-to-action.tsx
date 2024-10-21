"use client";

import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CallToAction({ className }: { className?: string }) {
  const links = [
    { href: "#projects", text: "Projects" },
    { href: "/blog", text: "Blog" },
    { href: "/gallery", text: "Gallery" },
  ];

  return (
    <div
      className={cn(
        "flex flex-row gap-2 sm:gap-3 justify-center items-center w-full max-w-2xl",
        className,
      )}
    >
      {links.map((link, index) => (
        <motion.div
          key={index}
          className="flex-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={link.href}
            className="flex items-center justify-between gap-1 px-2 sm:px-3 py-1 bg-palette-2 bg-opacity-10 text-palette-2 rounded-lg border border-transparent hover:border-palette-4 transition-colors duration-500 w-full"
          >
            <span className="text-xs sm:text-sm whitespace-nowrap">
              {link.text}
            </span>
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-palette-4 flex-shrink-0" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
