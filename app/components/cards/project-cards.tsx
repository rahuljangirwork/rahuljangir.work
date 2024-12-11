import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { getSortedPostsMetaData } from "@/app/lib/posts";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import Scene from "../model/scene";
import { Move } from "lucide-react";

export default async function ProjectCards({
  className,
}: {
  className?: string;
}) {
  const posts = await getSortedPostsMetaData();
  return (
    <>
      {posts
        .filter((post) => post.project)
        .map((post) => (
          <Card
            key={post.slug}
            className={cn(
              className,
              "flex flex-col overflow-hidden border h-full border-palette-1 bg-palette-2/5 backdrop-blur-md shadow-xl",
            )}
          >
            {post.src && post.src.image && (
              <div className="relative w-full aspect-[5/3] overflow-hidden">
                <Image
                  src={post.src.image}
                  alt={post.title}
                  fill
                  className="object-top"
                />
              </div>
            )}
            {post.src && post.src.video && (
              <div className="relative w-full aspect-[5/3] overflow-hidden">
                <video
                  src={post.src.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-top"
                />
              </div>
            )}
            {post.src && post.src.scene && (
              <div className="relative w-full aspect-[5/3] overflow-hidden">
                <Scene className="border-b border-b-palette-1 bg-primary" />
                <Move className="absolute right-1 bottom-1" />
              </div>
            )}
            <Link href={`/blog/${post.slug}`}>
              <CardHeader className="px-2">
                <div className="my-1 flex items-center justify-between p-1">
                  <CardTitle className="text-lg md:text-xl">
                    {post.title}
                  </CardTitle>
                  <time className="text-xs text-palette-1">
                    {post.publishDate}
                  </time>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col px-3 pb-3">
                <CardDescription className="text-palette-2/60 mb-2">
                  {post.description}
                </CardDescription>
                {post.technologies && post.technologies.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {post.technologies?.map((tag) => (
                      <Badge
                        className="px-1 py-0 text-palette-2 text-[10px] bg-white/10 shadow-sm hover:bg-primary"
                        key={tag}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Link>
          </Card>
        ))}
    </>
  );
}
