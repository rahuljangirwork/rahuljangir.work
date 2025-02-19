import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

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
        "flex w-full max-w-4xl rounded-md overflow-hidden",
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
    <div className={cn(className, side === "all" ? "w-full" : "")}>
      {children}
    </div>
  );
}

export function SplitCardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

export function SplitCardBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

export function SplitCardThumbnail({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}
