import Carousel from "@/app/components/carousel";
import clsx from "clsx";
import { ReactNode } from "react";

export function SplitCard({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col md:flex-row w-full max-w-4xl border-2 border-palette-1 shadow-xl rounded-md overflow-hidden mb-5">
      {children}
    </section>
  );
}

export function SplitCardContent({
  children,
  side = "left",
}: {
  side?: "left" | "right";
  children: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "w-full md:w-1/2 p-4  bg-palette-2 bg-opacity-10",
        !(side === "left")
          ? "border-l border-l-palette-1"
          : "border-r border-r-palette-1",
      )}
    >
      {children}
    </div>
  );
}
export function SplitCardHeader({ children }: { children: ReactNode }) {
  return <h2 className="text-xl text-center mb-2">{children}</h2>;
}
export function SplitCardText({ children }: { children: ReactNode }) {
  return <h2 className="text-sm p-2">{children}</h2>;
}

export function SplitCardCarousel({
  src,
  side = "right",
}: {
  src: string;
  side?: string;
}) {
  return (
    <div className="w-full md:w-1/2">
      <Carousel src={src} side={side} />
    </div>
  );
}
