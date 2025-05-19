import { getAllGalleryImages } from "@/app/lib/gallery";
import GalleryGrid from "./gallery-grid";

export default async function GalleryContainer() {
  const images = await getAllGalleryImages();

  return <GalleryGrid initialImages={images} />;
}
