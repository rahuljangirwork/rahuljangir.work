import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";
import { Separator } from "@/app/components/ui/separator";

export function SplitCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        className,
        "flex flex-col md:flex-row w-full max-w-4xl rounded-md overflow-hidden",
      )}
    >
      {children}
    </section>
  );
}

export function SplitCardContent({
  children,
  className,
  side = "left",
}: {
  side?: "left" | "right" | "all";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        className,
        "p-4",
        side === "all" ? "w-full" : "w-1/2",
        side === "left" && "border-r border-r-palette-1",
        side === "right" && "border-l border-l-palette-1",
      )}
    >
      {children}
    </div>
  );
}

export function SplitCardHeader({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Separator className="w-[40px] mx-auto mt-1 mb-2 bg-palette-4" />
    </>
  );
}

export function SplitCardBody({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function SplitCardThumbnail({ children }: { children: ReactNode }) {
  return <div className="w-full md:w-1/2">{children}</div>;
}
