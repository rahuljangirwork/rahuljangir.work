"use client";

import * as motion from "framer-motion/client";
import Image from "next/image";
import CallToAction from "@/app/components/navigation/call-to-action";

export default function Hero() {
  return (
    <section className="my-10 md:my-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0 text-palette-2">
        <div className="flex flex-col gap-2 text-center md:text-left">
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
          <CallToAction className="mt-4 w-full max-w-xs sm:max-w-lg md:max-w-xl mx-auto" />
        </div>
        <motion.div
          className="relative aspect-square w-60 sm:w-72 md:w-96 h-fit"
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
