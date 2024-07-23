import Image from "next/image";
import clsx from "clsx";

export default function Carousel({
  isFlipped = false,
}: {
  isFlipped?: boolean;
}) {
  return (
    <>
      <div className="relative w-full h-full">
        <Image
          src={"/shepherd.jpg"}
          layout="fill"
          objectFit="cover"
          alt="NEEDS GOOD ALT"
          className={clsx(!isFlipped ? "rounded-r-md" : "rounded-l-md")}
        />
      </div>
    </>
  );
}
