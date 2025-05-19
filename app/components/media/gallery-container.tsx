import { getAllGalleryImages } from "@/app/lib/gallery";
import GalleryImages from "./gallery-images";

export default async function GalleryContainer() {
  const images = await getAllGalleryImages();

  return <GalleryImages initialImages={images} />;
}
