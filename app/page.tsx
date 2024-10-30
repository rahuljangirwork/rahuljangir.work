import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardBody,
} from "@/app/components/cards/split-card";
import ProjectCards from "@/app/components/cards/project-cards";
import Hero from "./components/hero";
import About from "./components/about";
import BentoGrid from "./components/cards/bento-grid";
import { Suspense } from "react";
import HeroSkeleton from "./components/skeletons/hero-skeleton";
import BentoGridSkeleton from "./components/skeletons/bento-skeleton";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-0">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<BentoGridSkeleton />}>
        <BentoGrid />
      </Suspense>
      <section id="projects" className="scroll-mt-24 text-palette-2">
        <SplitCard>
          <SplitCardContent side="all">
            <SplitCardHeader>
              <h1 className="text-left font-bold text-3xl">
                Projects<span className="text-palette-4">.</span>
              </h1>
            </SplitCardHeader>
            <SplitCardBody>
              <p className="text-md text-left">
                Here&apos;s a little bit of what I&apos;ve been working on.
              </p>
            </SplitCardBody>
          </SplitCardContent>
        </SplitCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-2 md:px-0 mb-20">
          <ProjectCards />
        </div>
      </section>
      <About />
    </main>
  );
}
