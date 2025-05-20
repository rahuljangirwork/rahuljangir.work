export type ImageData = {
  src: string;
  width: number;
  height: number;
  alt: string;
  filmStock?: string;
  camera?: string;
};

// Client-side version of the gallery fetcher
export async function getAllGalleryImages(): Promise<ImageData[]> {
  // In a real application, you would fetch this data from an API
  // For this example, we'll use mock data that represents 35mm film photos
  // with proper aspect ratios (3:2 for landscape, 2:3 for portrait)

  const mockImages: ImageData[] = [
    {
      src: "/gallery/break.jpg",
      width: 1000,
      height: 1500, // 2:3 landscape
      alt: "trail to Forest City",
      filmStock: "Portra 800",
      camera: "Minolta x700",
    },
    {
      src: "/gallery/horses.JPG",
      width: 1500,
      height: 1000, // 3:2 landscape
      alt: "horses in Idaho",
      camera: "Minolta STsi",
    },
    {
      src: "/gallery/sunset.jpg",
      width: 1000,
      height: 1500, // 2:3 portrait
      alt: "sunset at Utah lake",
      camera: "Minolta x700",
    },
    {
      src: "/gallery/beebutt.jpg",
      width: 1500,
      height: 1000, // 3:2 landscape
      alt: "purple bee butt",
      filmStock: "LomoChrome Purple",
      camera: "Minolta x700",
    },
    {
      src: "/gallery/volcano.jpg",
      width: 1500,
      height: 1000, // 3:2 landscape
      alt: "the plant at Lindon",
      camera: "Minolta x700",
    },
    {
      src: "/gallery/phoenix.jpg",
      width: 1000,
      height: 1500, // 2:3 portrait
      alt: "fall tones at Alpine Loop",
      camera: "Minolta x700",
    },
  ];

  // Simulate network delay
  // await new Promise((resolve) => setTimeout(resolve, 10000));

  return mockImages;
}
