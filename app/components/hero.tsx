import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { Aperture, BookOpen, PenTool } from "react-feather";
import CallToAction from "@/app/components/navigation/call-to-action";
import { cn } from "@/app/lib/utils";

export default function Hero() {
  return (
    <>
      <section
        className={cn(
          "relative text-palette-2 mt-20 flex flex-row items-center justify-center gap-2",
          "md:mb-20",
        )}
      >
        <div className="flex flex-col max-w-lg">
          <motion.h1
            className="relative font-bold text-4xl text-left sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi<span className="text-palette-4">,</span> I&apos;m Isai
          </motion.h1>
          <motion.p
            className="w-full text-md lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Mechanical Engineer and freelance Software Developer trained in CAD,
            robotics, and simple web development.
            <span className="hidden sm:inline">
              {" "}
              I love transforming innovative designs to life.
            </span>
          </motion.p>
          <motion.div
            className="hidden sm:flex"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <CallToAction className="py-2" />
          </motion.div>
        </div>
        <div className="relative aspect-square w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px]">
          <Image
            src="/assets/mebw.JPG"
            alt="Mirror film selfie"
            fill
            className={cn(
              "border-4 border-palette-1 rounded-full object-cover",
              "transition-transform duration-300 ease-in-out",
            )}
          />
        </div>
      </section>
      <section className="flex sm:hidden w-full py-4 text-palette-2 mb-8">
        <motion.div
          className="flex justify-start gap-4 mx-auto"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="#projects"
            className="flex gap-1.5 border border-palette-2 rounded-full px-1.5"
          >
            <BookOpen className="w-4" /> Projects
          </Link>
          <Link
            href="/blog"
            className="flex gap-1.5 border border-palette-2 rounded-full px-1.5"
          >
            <PenTool className="w-4" /> Blog
          </Link>
          <Link
            href="/gallery"
            className="flex gap-1.5 border border-palette-2 rounded-full px-1.5"
          >
            <Aperture className="w-4" /> Gallery
          </Link>
        </motion.div>
      </section>
    </>
  );
}
