"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Socials from "./socials";
import { Menu } from "react-feather";
import { useState } from "react";
import MenuScreen from "./menu-screen";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuState = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="sticky top-0 z-50 mb-2 bg-primary bg-opacity-25 border-palette-1 border-b shadow-xl backdrop-blur-sm transition-all duration-200">
      <nav className="flex items-center h-16 px-4 text-palette-3 max-w-7xl mx-auto">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center space-x-1">
            <Image
              src="/ilogo.png"
              alt="Logo"
              width={50}
              height={50}
              sizes="100vw"
              priority={true}
              className="hidden md:block md:transition-transform md:duration-300 hover:rotate-12"
            />
            <p className="text-center font-semibold text-md md:text-md lg:text-xl">
              Isai Sanchez
            </p>
          </Link>
        </div>
        <button
          onClick={toggleMenuState}
          className="justify-end md:hidden border border-palette-1 p-1 rounded-md"
          aria-label="Toggle menu"
        >
          <Menu aria-label="Menu" />
        </button>
        <MenuScreen links={links} onClose={toggleMenuState} isOpen={isOpen} />
        <ul className="flex-1 justify-center space-x-5 hidden md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={clsx(
                  "font-medium px-3 py-2 rounded-md transition-all duration-200",
                  pathname === link.href
                    ? "text-palette-2 bg-palette-2 bg-opacity-10 underline underline-offset-2"
                    : "text-palette-3 hover:underline hover:bg-palette-2 hover:bg-opacity-10 hover:underline-offset-2 hover:shadow-xl",
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex-1 justify-end hidden md:flex">
          <Socials />
        </div>
      </nav>
    </header>
  );
}
