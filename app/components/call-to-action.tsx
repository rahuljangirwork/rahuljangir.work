import Link from "next/link";
import { Separator } from "@/app/components/ui/separator";

export default function CallToAction() {
  return (
    <div className="flex justify-end items-center text-palette-2 gap-2 py-3">
      <Link
        href="/projects"
        className="whitespace-nowrap italic text-sm hover:text-palette-1 transition-colors"
      >
        Explore my projects
      </Link>
      <Separator
        orientation="vertical"
        className="hidden sm:block h-4 bg-palette-1"
      />
      <Link
        href="/blog"
        className="whitespace-nowrap italic text-sm hover:text-palette-1 transition-colors"
      >
        Visit my blog
      </Link>
      <Separator
        orientation="vertical"
        className="hidden sm:block h-4 bg-palette-1"
      />
      <Link
        href="/gallery"
        className="whitespace-nowrap italic text-sm hover:text-palette-1 transition-colors"
      >
        Checkout my film flicks
      </Link>
    </div>
  );
}
