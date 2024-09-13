// lib/gallery.ts
import fs from "fs";
import path from "path";
import sizeOf from "image-size";

const contentDir = path.join(process.cwd(), "public/gallery");

export async function getAllGalleryImages() {
  const fileNames = fs.readdirSync(contentDir);
  const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
  const imageFiles = fileNames.filter((file) =>
    imageExtensions.includes(path.extname(file).toLowerCase()),
  );

  const images = imageFiles.map((fileName) => {
    const filePath = path.join(contentDir, fileName);
    const dimensions = sizeOf(filePath);

    return {
      src: `/gallery/${fileName}`,
      width: dimensions.width || 0,
      height: dimensions.height || 0,
      alt: fileName.split(".").slice(0, -1).join("."),
    };
  });

  return images;
}
