"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRef } from "react";
import Socials from "./socials";

interface LinkType {
  name: string;
  href: string;
}

interface DropdownMenuProps {
  links: LinkType[];
  setIsOpen: (isOpen: boolean) => void;
}

export default function DropdownMenu({ links, setIsOpen }: DropdownMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: -12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute right-0 mt-6 w-56 rounded-xl border border-palette-1/40 bg-primary/90 shadow-xl backdrop-blur-lg backdrop-saturate-150 p-2 z-50"
    >
      {/* Links */}
      <div className="flex flex-col space-y-1">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={clsx(
              "flex items-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200",
              pathname === link.href
                ? "bg-palette-4/20 text-palette-4 underline underline-offset-4"
                : "text-palette-2 hover:bg-palette-1/20 hover:text-palette-4"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Socials */}
      <div className="mt-3 border-t border-palette-1/30 pt-3">
        <Socials className="flex justify-end space-x-3 px-2" />
      </div>
    </motion.div>
  );
}
