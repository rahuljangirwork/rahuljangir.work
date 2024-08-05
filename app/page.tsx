import Image from "next/image";
import CallToAction from "@/app/components/call-to-action";
import { Separator } from "@/app/components/ui/separator";
import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardText,
  SplitCardThumbnail,
} from "@/app/components/split-card";
import Carousel from "@/app/components/carousel";
import { cn } from "@/app/lib/utils";

export default function Home() {
  return (
    <>
      <section
        className={cn(
          "text-palette-2 w-full mx-auto mt-7 gap-4 px-2",
          "lg:max-w-4xl lg:px-0",
          "flex flex-col md:flex-row justify-between items-start",
        )}
      >
        <Image
          src="/mebw.JPG"
          width={360}
          height={240}
          alt="photo of me"
          className="border-2 border-palette-1 rounded-xl"
        />
        <div className="flex flex-col max-w-lg md:w-full">
          <div className="flex items-center space-x-4 pb-2">
            <h1 className="text-center font-bold text-6xl inline-block">
              {`Hi, I'm Isai`}
            </h1>
            <Separator orientation="vertical" className="h-7 bg-palette-1" />
            <p
              className={cn(
                "italic text-md pr-1 whitespace-nowrap",
                "bg-gradient-to-r from-palette-2 to-palette-1",
                "text-transparent bg-clip-text",
              )}
            >
              Welcome to my website!
            </p>
          </div>
          <p className="text-md text-justify">
            {`Thanks for stopping by. Here, you'll find some of my projects, notes, and blog posts, covering
                everything from how I set up my Minolta film camera to the
                intricacies of the 2nd Law of Thermodynamics and everything in
                between. I'd love to hear your feedback or chat about any of
                these topics, so feel free to reach out! `}
          </p>
          <CallToAction />
        </div>
      </section>
      <Separator className="w-[97%] md:w-full md:max-w-4xl mx-auto bg-palette-1 my-4" />
      <section className="w-full px-2 md:max-w-4xl md:px-0 mx-auto text-palette-2 my-3">
        <h1 className="font-bold text-3xl pb-3">About</h1>
        <section>
          <SplitCard>
            <SplitCardContent>
              <SplitCardHeader>Education</SplitCardHeader>
              <SplitCardText>
                <p className="text-md text-justify">
                  I graduated with a Mechanical Engineering degree from Brigham
                  Young University. There, I fostered a mindset of continuous
                  learning and curiosity which I use to this day. My technical
                  proficiencies span advanced CAD software, robotics systems,
                  high-level math & physics, computer programming, and hardware
                  integration.
                </p>
              </SplitCardText>
            </SplitCardContent>
            <SplitCardThumbnail>
              <Carousel src="/shepherd.jpg" />
            </SplitCardThumbnail>
          </SplitCard>
        </section>
        <section>
          <SplitCard>
            <SplitCardContent side="all">
              <SplitCardHeader>My Toolkit</SplitCardHeader>
              <SplitCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagittis ipsum. Praesent mauris. Praesent mauris.
              </SplitCardText>
            </SplitCardContent>
          </SplitCard>
        </section>
        <section>
          <SplitCard>
            <SplitCardThumbnail>
              <Carousel src="/shepherd.jpg" side="left" />
            </SplitCardThumbnail>
            <SplitCardContent side="right">
              <SplitCardHeader>My Toolkit</SplitCardHeader>
              <SplitCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagittis ipsum. Praesent mauris. Praesent mauris.
              </SplitCardText>
            </SplitCardContent>
          </SplitCard>
        </section>
        <p className="text-md text-justify">
          {`I've always wanted an online space to share my notes and thoughts on everything that I've been fortunate enough to experience throughout my schooling and life. All code is found on Github`}
        </p>
      </section>
      <div className="w-full md:max-w-4xl mx-auto flex items-center text-palette-2 gap-2 mb-2">
        <Separator className="w-[80%] bg-palette-2" />
        <p className="text-sm italic text-end">Thanks for swinging by!</p>
      </div>
    </>
  );
}
