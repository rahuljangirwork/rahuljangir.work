"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IconBlob, IconAt, IconX } from '@tabler/icons-react';
import { useState } from "react";
import DropdownMenu from "@/app/components/navigation/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import Socials from "@/app/components/navigation/socials";

import { Banner } from "@/app/components/ui/banner"; // adjust the path as needed
import { IconBulb } from "@tabler/icons-react"; // you can use any icon you like


const links = [
  {
    name: "Blog",
    href: "/blog",
  },
  // {
  //   name: "Gallery",
  //   href: "/gallery",
  // },
];

export default function NavBar() {
  const pathname = usePathname();
  const [showDropDown, setShowDropDown] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  const [showBanner, setShowBanner] = useState(true);


  return (
    <>

      {showBanner && (
        <div className="mx-auto w-full max-w-2xl px-4 pb-2">
          <Banner
            show={showBanner}
            onHide={() => setShowBanner(false)}
            icon={<IconBulb size={18} />}
            title="This site is built with ❤️ and open source tools!"
            action={{
              label: "Star on GitHub",
              onClick: () =>
                window.open("https://github.com/rahuljangirwork/rahuljangir.work", "_blank"),
            }}
            learnMoreUrl="https://github.com/rahuljangirwork/rahuljangir.work"
          />
        </div>
      )}

      <header
        className={clsx(
          pathname === "/gallery"
            ? "hidden"
            : "w-72 md:w-full md:max-w-md mx-auto rounded-full sticky top-2 z-50 bg-primary bg-opacity-25 border-palette-1 border shadow-xl backdrop-blur-sm transition-all duration-200",
        )}
      >
        <nav className="relative flex items-center h-16 px-4 text-palette-3 mx-auto">
          <div className="flex-1 flex justify-start">
            <Link
              href="/"
              className={clsx(
                "group flex items-center gap-1 text-center font-semibold text-md bg-transparent md:text-xl",
                pathname === "/" && "text-palette-4",
              )}
            >
              <IconBlob className="w-6 h-6 group-hover:rotate-[5deg] transition ease-in-out duration-300" />
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
                        : "text-palette-3 hover:bg-palette-2 hover:bg-opacity-10 hover:shadow-xl",
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="relative group"
              onMouseEnter={() => setShowSocials(true)}
              onMouseLeave={() => setShowSocials(false)}
            >
              <IconAt className="transition-colors duration-200 group-hover:text-palette-4" />
              <AnimatePresence>
                {showSocials && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 -top-1 z-10"
                  >
                    <Socials
                      className="flex ml-14 space-x-3"
                      iconSize={18}
                      linkClass="p-1.5 border border-palette-1 rounded-full shadow-lg hover:text-palette-4 transition-colors bg-palette-1/10 backdrop-blur-sm duration-200"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ---Menu Icon and Toggled Menu--- */}
          <div className="relative md:hidden">
            <motion.button
              onClick={() => setShowDropDown((prev) => !prev)}
              className="border border-palette-1 p-1 rounded-md"
              aria-label={!showDropDown ? "Open menu" : "Close menu"}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={showDropDown ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {showDropDown ? <IconX /> : <IconAt />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <AnimatePresence>
              {showDropDown && (
                <DropdownMenu links={links} setIsOpen={setShowDropDown} />
              )}
            </AnimatePresence>
          </div>


        </nav>
      </header>
    </>
  );
}
