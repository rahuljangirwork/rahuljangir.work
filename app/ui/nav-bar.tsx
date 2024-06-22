"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
    href: "/Contact",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="bg-opacity-50 border-palette-2 border-b-[1px] mb-2">
      <nav className="flex items-center justify-between h-16 text-palette-3">
        <Link href="/" className="flex flex-shrink-2 pl-2">
          <Image
            src="/ilogo.png"
            alt="Logo"
            width={50}
            height={50}
            sizes="100vw"
            priority={true}
            className="hover:rotate-12"
          />
          <p className="p-2 font-semibold text-[25px]">Isai Sanchez</p>
        </Link>
        <ul className="flex mr-12">
          {links.map((link) => (
            <li key={link.name} className="m-5 p-2">
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "font-medium",
                  pathname === link.href
                    ? "text-palette-2 underline underline-offset-2"
                    : "text-palette-3 hover:underline hover:underline-offset-2 hover:shadow-xl",
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-palette-1 p-1 pr-2 pl-2 mr-2 font-bold rounded">
          Contact Me
        </button>
      </nav>
    </header>
  );
}
