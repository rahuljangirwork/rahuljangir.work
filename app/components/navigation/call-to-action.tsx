import Link from "next/link";
import { Separator } from "@/app/components/ui/separator";
import { cn } from "@/app/lib/utils";

export default function CallToAction({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center text-palette-2 gap-2", className)}>
      <Link
        href="#projects"
        className="whitespace-nowrap italic hover:text-palette-1 transition-colors"
      >
        Explore my projects
      </Link>
      <Separator orientation="vertical" className="h-4 bg-palette-4" />
      <Link
        href="/blog"
        className="whitespace-nowrap italic hover:text-palette-1 transition-colors"
      >
        Visit my blog
      </Link>
      <Separator orientation="vertical" className="h-4 bg-palette-4" />
      <Link
        href="/gallery"
        className="whitespace-nowrap italic hover:text-palette-1 transition-colors"
      >
        Checkout my film flicks
      </Link>
    </div>
  );
}
