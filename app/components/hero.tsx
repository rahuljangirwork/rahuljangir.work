"use client";
import * as motion from "framer-motion/client";
import Scene from "@/app/components/model/scene";
import Image from "next/image";
import { Grab, Hand } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isClicking, setIsClicking] = useState(false);

  return (
    <section className="flex flex-col justify-center items-center my-8 gap-4">
      <div
        className="relative w-full h-56 group"
        onMouseDown={() => setIsClicking(true)}
        onMouseUp={() => setIsClicking(false)}
      >
        <Scene />
        <span className="absolute bottom-0 right-0 text-palette-2 p-1">
          {isClicking ? <Grab /> : <Hand />}
        </span>
      </div>
      <div className="text-palette-2 flex justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-2">
          <motion.h1
            className="text-left font-bold text-5xl md:text-6xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi<span className="text-palette-4">,</span> I&apos;m Isai
            <span className="text-palette-4">.</span>
          </motion.h1>
          <motion.p
            className="text-pretty text-sm md:text-lg max-w-2xl"
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
          className="relative aspect-square w-32 sm:w-56 h-fit"
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
    </section>
  );
}
