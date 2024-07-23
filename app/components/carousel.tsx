import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <div className="relative w-full h-full">
        <Image
          src={"/shepherd.jpg"}
          layout="fill"
          objectFit="cover"
          alt="NEEDS GOOD ALT"
          className="rounded-r-md"
        />
      </div>
    </>
  );
}
