import BlogCards from "@/app/components/blog-cards";
import { Separator } from "@/app/components/ui/separator";
import { PenTool } from "lucide-react";

export default async function Blog() {
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
          <p className="w-full text-palette-3 bold py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis
            sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Praesent mauris.
          </p>
        </div>
      </div>
      <BlogCards />
    </>
  );
}
