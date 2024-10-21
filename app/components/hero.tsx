"use client";

import * as motion from "framer-motion/client";
import Image from "next/image";
import CallToAction from "@/app/components/navigation/call-to-action";

export default function Hero() {
  return (
    <section className="flex flex-col items-center my-10 md:my-20">
      <div className="text-palette-2 flex justify-between items-start md:items-center gap-2">
        <div className="flex flex-col sm:gap-2 text-left">
          <motion.div
            className="flex gap-2 items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold text-5xl md:text-6xl">
              Hi<span className="text-palette-4">,</span> I&apos;m Isai
              <span className="text-palette-4">.</span>
            </h1>
            <div className="relative sm:hidden aspect-square w-16 h-fit">
              <Image
                src="/assets/mebw.JPG"
                alt="Mirror film selfie"
                fill
                className="border-4 border-palette-1 rounded-full object-cover"
              />
            </div>
          </motion.div>
          <motion.p
            className="text-md md:text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-palette-4">Mechanical Engineer</span> and
            freelance <span className="text-palette-4">Software Developer</span>{" "}
            trained in CAD, robotics, and simple web development. I love
            transforming innovative designs to life.
          </motion.p>
        </div>
        <motion.div
          className="hidden sm:block relative aspect-square w-48 md:w-56 h-fit"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/mebw.JPG"
            alt="Mirror film selfie"
            fill
            className="border-4 border-palette-1 rounded-full object-cover"
          />
        </motion.div>
      </div>
      <CallToAction className="mt-4 sm:mt-9" />
    </section>
  );
}
