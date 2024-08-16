import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/app/components/call-to-action";
import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardBody,
  SplitCardThumbnail,
} from "@/app/components/split-card";
import Carousel from "@/app/components/carousel";
import Toolkit from "@/app/components/toolkit";
import { MyRobotIcon } from "@/public/icons";
import { cn } from "@/app/lib/utils";
import EmailToast from "@/app/components/email-toast";
import ProjectCards from "@/app/components/project-cards";

export default function Home() {
  return (
    <>
      <section
        className={cn(
          "relative text-palette-2 w-full mx-auto gap-6 px-2 my-20",
          "lg:max-w-4xl lg:px-4",
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
          <h1 className="relative font-bold text-6xl pb-2 text-left">
            Hi<span className="text-palette-4">,</span> I&apos;m Isai
            <MyRobotIcon className="absolute -top-4 -right-10 w-36 h-auto" />
          </h1>
          <p className="w-3/4 text-md">
            Mechanical Engineer and Software Developer with a strong resolve to
            transform innovative designs and fascinating concepts to life.
          </p>
        </div>
        <CallToAction className="absolute bottom-0 right-0" />
      </section>
      <section className="w-full md:max-w-4xl md:px-0 mx-auto text-palette-2">
        <SplitCard className="mb-20">
          <SplitCardContent side="all">
            <SplitCardHeader>
              <h1 className="text-center font-bold text-3xl">About</h1>
            </SplitCardHeader>
            <SplitCardBody>
              <p className="text-md text-justify py-3">
                Welcome to my website! I&apos;ve always wanted an online space
                dedicated to sharing my efforts and thoughts on everything that
                I&apos;ve been fortunate enough to experience throughout my
                schooling and life.
                <br /> Here, you&apos;ll find some of my projects, notes, and
                blog posts, covering everything from how I set up my Minolta
                film camera to the intricacies of the 2nd Law of Thermodynamics
                and everything in between. I&apos;d love to hear your feedback
                or chat about any of these topics, so feel free to reach out!
                <EmailToast className=" inline-flex gap-1 text-md text-palette-4 hover:underline focus:outline-none" />
              </p>
            </SplitCardBody>
          </SplitCardContent>
        </SplitCard>
        <div id="projects" className="scroll-mt-24">
          <SplitCard className="mb-2">
            <SplitCardContent side="all">
              <SplitCardHeader>
                <h1 className="text-center font-bold text-3xl">
                  Check out my latest selected work
                </h1>
              </SplitCardHeader>
              <SplitCardBody>
                <p className="text-md text-justify py-3">
                  Here&apos;s a little bit of what I&apos;ve been working on.
                  Feel free to reach out with any concerns, questions, or to
                  chat about what I did!
                </p>
              </SplitCardBody>
            </SplitCardContent>
          </SplitCard>
        </div>
        <ProjectCards />
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
                  href="/projects"
                  className="text-palette-4 hover:text-palette-1 transition-colors px-1"
                >
                  projects
                </Link>
                to see these in action
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
          <SplitCardContent side="all" className="bg-palette-2 bg-opacity-10">
            <SplitCardHeader>
              <h2 className="text-xl text-center">Contact Me</h2>
            </SplitCardHeader>
            <SplitCardBody>
              <p className="text-md px-2 text-center">
                Feel free to shoot me an email at
                <EmailToast className=" inline-flex gap-1 text-md text-palette-4 hover:underline focus:outline-none" />
              </p>
            </SplitCardBody>
          </SplitCardContent>
        </SplitCard>
      </section>
    </>
  );
}
