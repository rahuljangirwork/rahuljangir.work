import clsx from "clsx";
import { ReactNode } from "react";

export function SplitCard({ children }: { children: ReactNode }) {
  return (
    <section
      className={clsx(
        "flex flex-col md:flex-row w-full max-w-4xl border-2 border-palette-1 shadow-xl rounded-md overflow-hidden mb-5",
        "transition-all duration-200 ease-in-out",
        "hover:scale-[1.01] hover:shadow-[0_10px_60px_25px_rgba(79,111,82,0.3)]",
      )}
    >
      {children}
    </section>
  );
}

export function SplitCardContent({
  children,
  side = "left",
}: {
  side?: "left" | "right" | "all";
  children: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "p-4 bg-palette-2 bg-opacity-10",
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
  return <h2 className="text-xl text-center mb-2">{children}</h2>;
}
export function SplitCardBody({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function SplitCardThumbnail({ children }: { children: ReactNode }) {
  return <div className="w-full md:w-1/2">{children}</div>;
}
