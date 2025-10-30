"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { StatusDot, UserStatus } from "./ui/status-dot";
import { useUserProfile } from "@/app/lib/hooks/use-user-profile";

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const fadeInLeft = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };
const fadeInRight = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } };

export default function Hero() {
  const { profileData } = useUserProfile();

  // Fallback to invisible if no data yet
  const status: UserStatus = profileData?.current_status?.status ?? "invisible";

  return (
    <section className="my-10 md:my-24 lg:my-32">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12 text-palette-2">
        {/* Text column */}
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left max-w-xl">
          <motion.h1
            className="font-bold text-5xl md:text-6xl"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            खम्माघणी<span className="text-palette-4">,</span>&nbsp;I&apos;m&nbsp;Rahul
            <span className="text-palette-4">.</span>
          </motion.h1>

          <motion.p
            className="text-md md:text-lg text-balance"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-palette-4">Software Engineer</span>, freelancer, and&nbsp;
            <span className="text-palette-4">Digital Product Designer</span> from Rajasthan.
            Passionate about my culture and about building efficient, scalable, user-friendly software.
          </motion.p>

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              href="#projects"
              aria-label="View my projects"
              className="flex items-center gap-1 my-3 px-3 py-1 bg-palette-2/10 backdrop-blur-md rounded-lg border border-transparent hover:border-palette-4 transition-all w-36 hover:w-40"
            >
              <span className="text-xs sm:text-sm">View my work</span>
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-palette-4" />
            </Link>
          </motion.div>
        </div>

        {/* Avatar column */}
        <motion.div
          className="relative order-first md:order-last aspect-square w-52 sm:w-64 md:w-80 lg:w-[400px] xl:w-[470px]"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/Portpolio.png"
            alt="Mirror film selfie"
            fill
            priority
            quality={85}
            sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 320px, (max-width: 1280px) 400px, 470px"
            className="border-4 border-palette-1 rounded-full object-cover shadow-2xl z-20"
          />

          {/* Halo blobs */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-palette-1/50 rounded-full blur-xl z-10" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-palette-1/50 rounded-full blur-xl z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/80 rounded-full blur-xl z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/80 rounded-full blur-xl z-10" />

          {/* Presence indicator */}
          <StatusDot status={status} />
        </motion.div>
      </div>
    </section>
  );
}
