import Image from "next/image";
import CallToAction from "@/app/components/call-to-action";
import { Separator } from "@/app/components/ui/separator";
import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardBody,
  SplitCardThumbnail,
} from "@/app/components/split-card";
import Carousel from "@/app/components/carousel";
import Toolkit from "@/app/components/toolkit";
import { cn } from "@/app/lib/utils";

export default function Home() {
  return (
    <>
      <section
        className={cn(
          "text-palette-2 w-full mx-auto mt-20 gap-4 px-2 mb-32",
          "lg:max-w-4xl lg:px-0",
          "flex flex-col md:flex-row justify-between items-center",
        )}
      >
        <Image
          src="/mebw.JPG"
          width={360}
          height={240}
          alt="photo of me"
          className="border-2 border-palette-1 rounded-xl"
        />
        <div className="flex flex-col max-w-lg md:w-full h-full">
          <h1 className="font-bold text-6xl pb-2">{`Hi, I'm Isai`}</h1>
          <p className="text-md text-justify">
            I&apos;m a Mechanical Engineering graduate and software developer
            who loves design and bringing ideas to life.
          </p>
          <div className="flex justify-end mt-2">
            <CallToAction />
          </div>
        </div>
      </section>
      <section className="w-full px-2 md:max-w-4xl md:px-0 mx-auto text-palette-2">
        <SplitCard className="mb-20">
          <SplitCardContent side="all">
            <SplitCardHeader>
              <h1 className="text-center font-bold text-3xl">About</h1>
            </SplitCardHeader>
            <SplitCardBody>
              <p className="text-md text-justify py-3">
                Welcome to my website! I&apos;ve always wanted an online space
                to share my notes and thoughts on everything that I&apos;ve been
                fortunate enough to experience throughout my schooling and life.
                <br /> Here, you&apos;ll find some of my projects, notes, and
                blog posts, covering everything from how I set up my Minolta
                film camera to the intricacies of the 2nd Law of Thermodynamics
                and everything in between. I&apos;d love to hear your feedback
                or chat about any of these topics, so feel free to reach out!
              </p>
            </SplitCardBody>
          </SplitCardContent>
        </SplitCard>
        <SplitCard
          className={cn(
            "mb-5 transition-all duration-200 ease-in-out",
            "hover:scale-[1.01] hover:shadow-[0_10px_60px_25px_rgba(79,111,82,0.3)]",
          )}
        >
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
            <Carousel src="/shepherd.jpg" />
          </SplitCardThumbnail>
        </SplitCard>
        <SplitCard
          className={cn(
            "mb-5 transition-all duration-200 ease-in-out",
            "hover:scale-[1.01] hover:shadow-[0_10px_60px_25px_rgba(79,111,82,0.3)]",
          )}
        >
          <SplitCardContent side="all" className="bg-palette-2 bg-opacity-10">
            <SplitCardHeader>
              <h2 className="text-xl text-center">My Toolkit</h2>
            </SplitCardHeader>
            <SplitCardBody>
              <Toolkit />
            </SplitCardBody>
          </SplitCardContent>
        </SplitCard>
      </section>
      <div className="w-full md:max-w-4xl mx-auto flex items-center text-palette-2 gap-2 mb-2">
        <Separator className="w-[80%] bg-palette-2" />
        <p className="text-sm italic text-end">Thanks for swinging by!</p>
      </div>
    </>
  );
}
