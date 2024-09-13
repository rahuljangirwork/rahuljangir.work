"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "react-feather";
import { TentTreeIcon } from "lucide-react";
import { useState } from "react";
import DropdownMenu from "@/app/components/dropdown-menu";
import { Separator } from "./ui/separator";
import Socials from "./socials";

const links = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full lg:max-w-2xl mx-auto lg:rounded-md sticky top-0 lg:top-2 z-50 mb-2 bg-primary bg-opacity-25 border-palette-1 border-b lg:border shadow-xl backdrop-blur-sm transition-all duration-200">
      <nav className="relative flex items-center h-16 px-4 text-palette-3 max-w-7xl mx-auto">
        <div className="flex-1 flex justify-start">
          <Link
            href="/"
            className={clsx(
              "flex items-center gap-1 text-center font-semibold text-md bg-transparent md:text-md lg:text-xl",
              "transition-all duration-300 ease-in-out hover:scale-[1.08]",
              pathname === "/" && "text-palette-4",
            )}
          >
            <TentTreeIcon className="w-6 h-6" />
            Home
          </Link>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-end gap-2">
          <ul className="flex items-center space-x-2 ">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx(
                    "text-md font-semibold px-3 py-2 rounded-md transition-all duration-200",
                    pathname === link.href
                      ? "text-palette-4 bg-palette-2 bg-opacity-10 underline underline-offset-2"
                      : "text-palette-3 hover:underline hover:bg-palette-2 hover:bg-opacity-10 hover:underline-offset-2 hover:shadow-xl",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/*
        <div className="flex-1 justify-end hidden md:flex gap-1">
          <Socials />
        </div>
        */}

        {/* ---Menu Icon and Toggled Menu--- */}
        <div className="relative md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border border-palette-1 p-1 rounded-md"
            aria-label={!isOpen ? "Open menu" : "Close menu"}
          >
            {!isOpen ? <Menu /> : <X />}
          </button>
          {isOpen && <DropdownMenu links={links} setIsOpen={setIsOpen} />}
        </div>
        <Socials
          className="hidden absolute -right-60 md:flex"
          iconSize={18}
          linkClass="p-1.5 border border-palette-1 rounded-lg hover:text-palette-1"
        />
      </nav>
    </header>
  );
}
