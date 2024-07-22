import BlogCards from "@/app/components/blog-cards";
import { Separator } from "@/app/components/ui/separator";
import { PenTool } from "lucide-react";

export default async function Blog() {
  const intro =
    "I always wanted an online space to share my thoughts on the topics I found most captivating about the mechanical engineering field, and about life too. Here, you'll find my reflections and ramblings on everything from how I set up my Neovim configuration to the intricate way the Heat Equation was derived and everything in between. I'd love to hear your feedback or have a discussion about any of these topics, feel free to reach out!";
  return (
    <>
      <div className="flex flex-col items-center w-ful max-w-5xl mx-auto text-palette-3">
        <h2 className="flex items-center text-3xl py-2 gap-2">
          <PenTool />
          Blog Posts
        </h2>
        <Separator className="my-2 bg-palette-1" />
        <div className="flex items-center space-x-8 py-3">
          <ul>
            <h3>Contents</h3>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
          <Separator orientation="vertical" className="h-[80px] bg-palette-1" />
          <p className="w-full text-palette-3 bold py-2">{intro}</p>
        </div>
      </div>
      <BlogCards />
    </>
  );
}
