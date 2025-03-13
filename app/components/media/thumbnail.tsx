import Image from "next/image";
import { Move } from "lucide-react";
import { PostMetadata } from "@/app/lib/types";
import { cn } from "@/app/lib/utils";
import Scene from "@/app/components/model/scene";

export default function Thumbnail({
  src,
  className,
}: {
  src: PostMetadata["src"];
  className?: string;
}) {
  // Base container class for all thumbnail types
  const containerClasses = cn(
    "relative w-full aspect-video overflow-hidden",
    className,
  );

  if (src.image && src.image.path) {
    return (
      <div className={containerClasses}>
        <Image
          src={src.image.path}
          alt={src.image.alt || "Thumbnail image"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  if (src && src.video) {
    return (
      <div className={containerClasses}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={src.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  if (src && src.scene) {
    return (
      <div className={containerClasses}>
        <Scene className="w-full h-full" />
        <Move
          className="absolute right-2 bottom-2 text-primary-foreground z-10"
          size={18}
          aria-hidden="true"
        />
      </div>
    );
  }

  // Fallback empty container with the same dimensions
  return <div className={containerClasses} />;
}
