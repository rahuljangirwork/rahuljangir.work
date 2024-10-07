import Image from "next/image";
import clsx from "clsx";

export default function Carousel({
  src,
  side = "right",
}: {
  src: string;
  side?: string;
}) {
  return (
    <>
      <div className="relative w-full h-full">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt="NEEDS GOOD ALT"
          className={clsx(
            !(side === "right") ? "rounded-l-md" : "rounded-r-md",
          )}
        />
      </div>
    </>
  );
}
