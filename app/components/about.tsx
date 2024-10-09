"use client";
import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardBody,
} from "@/app/components/cards/split-card";
import EmailToast from "@/app/components/ui/email-toast";
import { useState } from "react";
import { cn } from "../lib/utils";
import CallToAction from "@/app/components/navigation/call-to-action";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [showTLDR, setShowTLDR] = useState(true);

  const toggleView = () => {
    setShowTLDR((prev) => !prev);
  };

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <SplitCard className="my-20 text-palette-2">
      <SplitCardContent side="all">
        <SplitCardHeader className="flex justify-between items-center mb-2">
          <h1 className="text-left md:text-center font-bold text-3xl">
            About<span className="text-palette-4">.</span>
          </h1>
          <div className="flex gap-2">
            <button
              onClick={toggleView}
              className={cn(
                showTLDR ? "border border-palette-4" : "",
                "text-sm rounded-md px-2 py-1 bg-white bg-opacity-10",
              )}
            >
              TL;DR
            </button>
            <button
              onClick={toggleView}
              className={cn(
                !showTLDR ? "border border-palette-4" : "",
                "text-sm rounded-md px-2 py-1 bg-white bg-opacity-10",
              )}
            >
              Long Story
            </button>
          </div>
        </SplitCardHeader>
        <SplitCardBody className="flex flex-col gap-3">
          <AnimatePresence mode="wait">
            {showTLDR ? (
              <motion.p
                key="tldr"
                className="text-md text-left"
                variants={variants}
                initial="enter"
                animate="center"
                transition={{ duration: 0.3 }}
              >
                Welcome! Short story is that I&apos;ve always wanted a space for
                sharing my projects, notes, and thoughts on various topics from
                my education, hobbies, and life experiences, so here it is :)
                Feel free to reach out!
                <EmailToast className="inline-flex gap-1 text-md text-palette-4 hover:underline focus:outline-none" />
              </motion.p>
            ) : (
              <motion.p
                key="long-story"
                className="text-md text-left"
                variants={variants}
                initial="enter"
                animate="center"
                transition={{ duration: 0.3 }}
              >
                Welcome to my personal website! Here&apos;s the long story. Like
                I said, I&apos;ve always wanted an online space dedicated to
                sharing my efforts, thoughts, and reflections on everything that
                I&apos;ve been fortunate enough to experience throughout my
                schooling at BYU and life growing up in Utah.
                <br /> Here, you&apos;ll find some of my projects, notes, and
                blog posts, covering everything from how I set up my Minolta
                film camera to the intricacies of the 2nd Law of Thermodynamics
                and everything in between. I&apos;d love to hear your feedback
                or chat about any of these topics, so feel free to reach out!
                <EmailToast className="inline-flex gap-1 text-md text-palette-4 hover:underline focus:outline-none" />
              </motion.p>
            )}
          </AnimatePresence>
          <div className="flex flex-1 justify-center">
            <CallToAction className="text-xs md:text-sm" />
          </div>
        </SplitCardBody>
      </SplitCardContent>
    </SplitCard>
  );
}
