import Link from "next/link";
import { Suspense } from "react";
import GalleryContainer from "@/app/components/media/gallery-container";
import GalleryLoading from "../components/media/gallery-loading";

export default async function GalleryPage() {
  return (
    <div className="relative min-h-screen bg-[#1e1e1e] flex flex-col md:flex-row py-12 px-4 md:px-8 gap-8">
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{ backgroundImage: `url('/assets/grainy-texture.png')` }}
      />
      <div className="md:h-72 md:w-1/5 flex flex-col justify-between mb-8 md:mb-0">
        <div className="text-palette-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Isai Sanchez
          </h1>
          <p className="mt-2 text-palette-2 opacity-80">my life in film.</p>
        </div>
        <Link
          href="/"
          className="text-palette-4 mt-6 md:mt-0 inline-block transition-all duration-300 hover:translate-x-[-4px]"
        >
          {`< back home.`}
        </Link>
      </div>
      <div className="h-full w-full">
        <Suspense fallback={<GalleryLoading />}>
          <GalleryContainer />
        </Suspense>
      </div>
    </div>
  );
}
