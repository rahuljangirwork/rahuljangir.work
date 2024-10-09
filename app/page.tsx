import Link from "next/link";
import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardBody,
  SplitCardThumbnail,
} from "@/app/components/cards/split-card";
import Carousel from "@/app/components/media/carousel";
import Toolkit from "@/app/components/media/toolkit";
import { cn } from "@/app/lib/utils";
import EmailToast from "@/app/components/ui/email-toast";
import ProjectCards from "@/app/components/cards/project-cards";
import Hero from "./components/hero";
import About from "./components/about";

export default function Home() {
  return (
    <main className="max-w-xl md:max-w-2xl mx-auto px-4 md:px-0">
      <Hero />
      <About />
      <section className="text-palette-2">
        <div id="projects" className="scroll-mt-24">
          <SplitCard>
            <SplitCardContent side="all">
              <SplitCardHeader>
                <h1 className="text-center font-bold text-3xl">
                  Check out my latest selected work
                </h1>
              </SplitCardHeader>
              <SplitCardBody>
                <p className="text-md text-center">
                  Here&apos;s a little bit of what I&apos;ve been working on.
                </p>
              </SplitCardBody>
            </SplitCardContent>
          </SplitCard>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 p-2 mb-20">
          <ProjectCards
            className={cn(
              "transition-all duration-200 ease-in-out",
              "hover:scale-[1.01] hover:shadow-[0_10px_60px_25px_rgba(79,111,82,0.3)]",
            )}
          />
        </div>
        <SplitCard className="mb-5">
          <SplitCardContent className="bg-palette-2 bg-opacity-10">
            <SplitCardHeader>
              <h2 className="text-xl text-center">Education</h2>
            </SplitCardHeader>
            <SplitCardBody>
              <p className="text-sm px-2 text-justify">
                I graduated with a Mechanical Engineering degree from Brigham
                Young University. There, I fostered a mindset of continuous
                learning and curiosity which I use to this day. My technical
                proficiencies span advanced CAD software, robotics systems,
                high-level math & physics, computer programming, and hardware
                integration.
              </p>
            </SplitCardBody>
          </SplitCardContent>
          <SplitCardThumbnail>
            <Carousel src="/assets/shepherd.jpg" />
          </SplitCardThumbnail>
        </SplitCard>
        <SplitCard className="mb-5">
          <SplitCardContent
            side="all"
            className="relative bg-palette-2 bg-opacity-10"
          >
            <SplitCardHeader>
              <h2 className="text-xl text-center">My Toolkit</h2>
            </SplitCardHeader>
            <SplitCardBody>
              <Toolkit />
              <p className="absolute right-0 bottom-0 p-1 text-xs italic text-palette-2">
                Check out my
                <Link
                  href="#projects"
                  className="text-palette-4 hover:text-palette-1 transition-colors px-1"
                >
                  projects
                </Link>
                to see these in action
              </p>
            </SplitCardBody>
          </SplitCardContent>
        </SplitCard>
        <SplitCard className="mb-5">
          <SplitCardContent side="all" className="bg-palette-2 bg-opacity-10">
            <SplitCardHeader>
              <h2 className="text-xl text-center">Contact Me</h2>
            </SplitCardHeader>
            <SplitCardBody>
              <p className="text-md px-2 text-center">
                Feel free to shoot me an email at
                <EmailToast className="inline-flex gap-1 text-md text-palette-4 hover:underline focus:outline-none" />
              </p>
            </SplitCardBody>
          </SplitCardContent>
        </SplitCard>
      </section>
    </main>
  );
}
