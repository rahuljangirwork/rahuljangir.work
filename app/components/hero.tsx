"use client";

import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="my-10 md:my-32">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0 text-palette-2">
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <motion.h1
            className="font-bold text-5xl md:text-6xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi<span className="text-palette-4">,</span> I&apos;m Isai
            <span className="text-palette-4">.</span>
          </motion.h1>
          <motion.p
            className="text-md md:text-lg text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-palette-4">Mechanical Engineer</span> and
            freelance <span className="text-palette-4">Software Developer</span>{" "}
            trained in CAD, robotics, and simple web development. I love
            transforming innovative designs to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="#projects"
              className="flex items-center justify-between gap-1 my-3 px-2 sm:px-3 py-1 bg-palette-2/10 backdrop-blur-md text-palette-2 rounded-lg border border-transparent hover:border-palette-4 transition-all duration-300 w-36 hover:w-40"
            >
              <span className="text-xs sm:text-sm whitespace-nowrap">
                View my work
              </span>
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-palette-4 flex-shrink-0" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="order-first md:order-last relative aspect-square w-60 sm:w-72 md:w-[470px] h-fit"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/mebw.JPG"
            alt="Mirror film selfie"
            fill
            className="border-4 border-palette-1 rounded-full object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
