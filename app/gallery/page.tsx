import { getAllGalleryImages } from "@/app/lib/gallery";
import Image from "next/image";

type ImageData = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export default async function GalleryPage() {
  const images: ImageData[] = await getAllGalleryImages();

  return (
    <>
      <div className="mt-12 mx-auto grid max-w-[1000px] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, idx) => {
          const aspectRatio = image.height / image.width;
          const spanRows = Math.ceil(aspectRatio * 10);

          return (
            <div
              key={idx}
              className="relative w-full overflow-hidden"
              style={{
                gridRowEnd: `span ${spanRows}`,
                paddingBottom: `${aspectRatio * 100}%`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="absolute left-0 top-0 h-full w-full"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
