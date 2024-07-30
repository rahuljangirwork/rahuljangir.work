import Image from "next/image";
import { Separator } from "@/app/components/ui/separator";
import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardText,
  SplitCardCarousel,
} from "@/app/components/split-card";
import { cn } from "@/app/lib/utils";

export default function Home() {
  return (
    <>
      <section className="w-full px-2 md:max-w-4xl md:px-0 mx-auto text-palette-2">
        <div className="flex flex-col md:flex-row justify-between items-center my-7 gap-4">
          <Image
            src="/mebw.JPG"
            width={360}
            height={240}
            alt="photo of me"
            className="hidden lg:block border-2 border-palette-1 rounded-xl"
          />
          <Image
            src="/mebw.JPG"
            width={300}
            height={200}
            alt="photo of me"
            className="hidden md:block lg:hidden border-2 border-palette-1 rounded-xl"
          />
          <div className="mx-2 flex flex-col items-center">
            <Image
              src="/mebw.JPG"
              width={240}
              height={160}
              alt="photo of me"
              className="block md:hidden border-2 border-palette-1 rounded-xl"
            />
            <div className="py-2 max-w-lg md:w-full">
              <div className="flex items-center space-x-4 pb-2">
                <h1 className="text-center font-bold text-4xl inline-block">
                  {`Hi, I'm Isai`}
                </h1>
                <Separator
                  orientation="vertical"
                  className="h-7 bg-palette-1"
                />
                <p
                  className={cn(
                    "italic text-md pr-1",
                    "bg-gradient-to-r from-palette-2 to-palette-1",
                    "text-transparent bg-clip-text",
                  )}
                >
                  Thanks for swinging by.
                </p>
              </div>
              <p className="text-md text-justify">
                {`Welcome to my website! I've always wanted an online space to
                share my notes and thoughts on a variety of topics that I've
                been lucky to experience during my schooling and in life.`}
              </p>
              <p className="text-md text-justify">
                {" "}
                Here, you'll find some of my projects and blog posts discussing
                everything from how I set up my Minolta film camera to the
                intricacy of the 2nd Law of Thermodynamics and everything in
                between. I'd love to hear your feedback or chat about any of
                these topics, so feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Separator className="w-[97%] md:w-full md:max-w-4xl mx-auto bg-palette-1" />
      <section className="w-full px-2 md:max-w-4xl md:px-0 mx-auto text-palette-2 mb-3">
        <h1 className="font-bold text-3xl py-3">About Me</h1>
        <section>
          <SplitCard>
            <SplitCardContent>
              <SplitCardHeader>College</SplitCardHeader>
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
            <SplitCardCarousel src="/shepherd.jpg"></SplitCardCarousel>
          </SplitCard>
        </section>
        <section>
          <SplitCard>
            <SplitCardCarousel
              src="/shepherd.jpg"
              side="left"
            ></SplitCardCarousel>
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
      </section>
    </>
  );
}
