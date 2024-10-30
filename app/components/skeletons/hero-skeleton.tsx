import { ChevronRight } from "lucide-react";

export default function HeroSkeleton() {
  return (
    <section className="my-10 md:my-32">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <div className="w-3/4 h-12 bg-palette-1 rounded-lg animate-pulse"></div>
          <div className="w-full h-24 bg-palette-1 rounded-lg animate-pulse mt-4"></div>
          <div className="flex items-center justify-between gap-1 my-3 px-2 sm:px-3 py-1 bg-palette-1 rounded-lg w-36 h-8 animate-pulse">
            <div className="w-20 h-4 bg-primary/50 rounded"></div>
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-palette-4 flex-shrink-0" />
          </div>
        </div>
        <div className="order-first md:order-last relative aspect-square w-60 h-fit">
          <div className="w-full h-full bg-palette-1 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
