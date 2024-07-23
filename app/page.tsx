import Image from "next/image";
import { Separator } from "@/app/components/ui/separator";
import HorizontalCard from "@/app/components/horizontal-card";

export default function Home() {
  const intro =
    "Welcome to my website! I've always wanted an online space to document my notes and share my thoughts on a wide range of topics that I've gratefully encountered in my schooling and in my life. Here, you'll find some of my projects and ramblings on everything from how I set up my film camera to the intricacy of the Second Law of Thermodynamics and everything in between. I'd love to hear your feedback or have a discussion about any of these topics, feel free to reach out!";

  return (
    <>
      <section className="w-full px-2 md:max-w-4xl md:px-0 mx-auto text-palette-2">
        <div className="flex flex-col md:flex-row justify-between items-start my-7 gap-4">
          <Image
            src="/mebw.JPG"
            width={360}
            height={240}
            alt="photo of me"
            className="hidden lg:block border-2 border-palette-2 rounded-xl"
          />
          <Image
            src="/mebw.JPG"
            width={300}
            height={200}
            alt="photo of me"
            className="hidden md:block lg:hidden border-2 border-palette-2 rounded-xl"
          />
          <div className="mx-2 flex flex-col items-center">
            <Image
              src="/mebw.JPG"
              width={240}
              height={160}
              alt="photo of me"
              className="block md:hidden border-2 border-palette-2 rounded-xl"
            />
            <div className="py-2">
              <div className="flex items-center space-x-4 pb-2">
                <h1 className="text-center md:text-left font-bold text-2xl">
                  {`Hi, I'm Isai`}
                </h1>
                <Separator
                  orientation="vertical"
                  className="h-7 bg-palette-1"
                />
                <p className="italic text-md">Thanks for swinging by!</p>
              </div>
              <p className="text-md">{intro}</p>
            </div>
          </div>
        </div>
      </section>
      <Separator className="w-[97%] md:w-full md:max-w-4xl mx-auto bg-palette-1" />
      <section className="w-full px-2 md:max-w-4xl md:px-0 mx-auto text-palette-2 mb-3">
        <h1 className="font-bold text-3xl py-2">About Me</h1>
        <HorizontalCard />
        <HorizontalCard order="flip" />
      </section>
    </>
  );
}
