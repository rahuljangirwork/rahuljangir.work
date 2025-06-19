"use client";

import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardBody,
} from "@/app/components/cards/split-card";
import EmailToast from "@/app/components/ui/email-toast";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AnimatedTabs } from "./ui/animated-tabs";

export default function About() {
  const [activeTab, setActiveTab] = useState("tldr");

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const tabs = [
    { id: "tldr", label: "TL;DR" },
    { id: "long-story", label: "Long Story" },
  ];

  return (
    <SplitCard className="my-24 text-palette-2">
      <SplitCardContent side="all">
        <SplitCardHeader className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
          <motion.h1
            className="text-left md:text-center font-bold text-3xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            About the site<span className="text-palette-4">.</span>
          </motion.h1>

          {/* Use your animated tabs instead of plain buttons */}
          <AnimatedTabs
            tabs={tabs}
            defaultTab="tldr"
            onChange={(tabId) => setActiveTab(tabId)}
          />
        </SplitCardHeader>

        <SplitCardBody className="flex flex-col gap-3 min-h-[200px]">
          <AnimatePresence mode="wait">
            {activeTab === "tldr" ? (
              <motion.div
                key="tldr"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-2 text-md text-left text-pretty"
              >
                <p>
                  Big thanks to{" "}
                  <Link
                    href="https://www.isais.dev/"
                    className="text-palette-4 hover:underline"
                  >
                    isais.dev
                  </Link>{" "}
                  — this site wouldn&apos;t be here without his work! 99% of the
                  structure came from his template.
                </p>
                <p>
                  For the past two months I was thinking: where do I start? Now
                  I’m here. This is my space to share my projects, thoughts, how
                  I build digital products, how I learn, how I solve problems.
                </p>
                <p>
                  I&apos;ll also share my Linux configuration and workflow for
                  productivity — hope it helps someone!
                </p>
                <p>
                  This site is built with{" "}
                  <Link
                    href="https://nextjs.org/"
                    className="text-palette-4 hover:underline"
                  >
                    Next.js
                  </Link>{" "}
                  , TypeScript, Tailwind CSS, and{" "}
                  <Link
                    href="https://ui.shadcn.com/"
                    className="text-palette-4 hover:underline"
                  >
                    shadcn
                  </Link>{" "}
                  components. Source code is{" "}
                  <Link
                    href="https://github.com/rahuljangirwork/rahuljangir.work"
                    className="text-palette-4 hover:underline"
                  >
                    here
                  </Link>
                  .
                </p>
              </motion.div>
            ) : (
                <motion.div
                  key="long-story"
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-3 text-md text-left text-pretty"
                >
                  <p>
                    For the past couple of months, I’ve been thinking deeply about how to begin sharing my journey — and this is it. I’ve finally carved out a space to document my projects, daily learnings, thoughts, and the way I build and break things.
                  </p>

                  <p>
                    I’ll be sharing my Linux setups, dotfiles, development tools, and productivity workflows. I love tweaking minimal environments like DWM, setting up custom configs, and optimizing my systems to match my workflow.
                  </p>

                  <p>
                    I’m Rahul Jangir — a full-stack developer, and architect at{" "}
                    <Link
                      href="https://getmysolutions.in/" // replace with the actual URL
                      className="text-palette-4 hover:underline"
                    >
                      GetMy Solutions Pvt. Ltd.
                    </Link>
                    . I come from Rajasthan, where curiosity sparked my interest in understanding how machines work. Even though it&apos;s far from a tech hub, that never stopped me from exploring deeper layers of technology — from circuits to cloud.
                  </p>

                  <p>
                    I specialize in building efficient and reliable software, whether it&apos;s working with bare-metal systems, IoT, or modern web technologies. I&apos;m passionate about problem-solving and creating tools that simplify complexity.
                  </p>

                  <p>
                    I also enjoy working with platforms like{" "}
                    <Link
                      href="https://supabase.com"
                      className="text-palette-4 hover:underline"
                    >
                      Supabase
                    </Link>
                    ,{" "}
                    <Link
                      href="https://angular.io"
                      className="text-palette-4 hover:underline"
                    >
                      Angular
                    </Link>
                    , and Next.js to craft scalable apps. Whether it’s authentication flows, real-time dashboards, or custom CRM tools — I thrive on clean architecture and performance.
                  </p>

                  <p>
                    Outside of software, I’m exploring the world of ethical hacking and cybersecurity. Understanding vulnerabilities and strengthening systems is something I’m keen to master.
                  </p>

                  <p>
                    I believe in building things from scratch, learning through doing, and staying close to the system. Most of my development happens on Linux — it’s more than an OS, it’s my playground.
                  </p>

                  <p>
                    This site is built with{" "}
                    <Link href="https://nextjs.org/" className="text-palette-4 hover:underline">
                      Next.js
                    </Link>
                    , TypeScript, Tailwind CSS, and{" "}
                    <Link href="https://ui.shadcn.com/" className="text-palette-4 hover:underline">
                      shadcn
                    </Link>{" "}
                    components. The source code is available{" "}
                    <Link
                      href="https://github.com/rahuljangirwork/rahuljangir.work"
                      className="text-palette-4 hover:underline"
                    >
                      here
                    </Link>
                    .
                  </p>

                  <p>
                    If you’re someone who loves raw development, minimal setups, building powerful tools, or just geeking out over systems — we’ll get along well. Welcome to my corner of the internet.
                  </p>
                </motion.div>

            )}
          </AnimatePresence>
        </SplitCardBody>
      </SplitCardContent>
    </SplitCard>
  );
}
