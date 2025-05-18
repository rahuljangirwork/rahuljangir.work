import { getAllGalleryImages } from "@/app/lib/gallery";
import Link from "next/link";
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
    <div className="min-h-screen bg-gray-100 flex pt-12 px-8 gap-8">
      <div className="h-72 w-1/5 flex flex-col justify-between">
        <div className="text-palette-1">
          <h1 className="text-5xl font-bold">Isai Sanchez</h1>
          <p>my life in film.</p>
        </div>
        <Link href="/" className="text-palette-4">
          {`< back home.`}
        </Link>
      </div>
      <div className="h-full w-full grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
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
    </div>
  );
}
