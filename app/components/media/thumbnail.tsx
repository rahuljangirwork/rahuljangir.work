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
  if (src.image && src.image.path) {
    return (
      <div className={cn("relative w-full aspect-video", className)}>
        <Image
          src={src.image.path}
          alt={src.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  if (src && src.video) {
    return (
      <div
        className={cn(
          "relative w-full aspect-video overflow-hidden",
          className,
        )}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full -h-[99%] object-cover scale-x-[1.005]"
        >
          <source src={src.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  if (src && src.scene) {
    return (
      <div className={cn("relative w-full aspect-video bg-primary", className)}>
        <Scene className="w-full h-full" />
        <Move
          className="absolute right-2 bottom-2 text-primary-foreground"
          aria-hidden="true"
        />
      </div>
    );
  }

  return null;
}
