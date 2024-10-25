import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { getSortedPosts } from "@/app/lib/projectposts";
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
  const posts = await getSortedPosts();
  return (
    <>
      {posts.map(({ slug, frontmatter }) => {
        return (
          <Card
            key={slug}
            className={cn(
              className,
              "flex flex-col overflow-hidden border h-full border-palette-1",
            )}
          >
            {frontmatter.src && frontmatter.src.image && (
              <div className="relative w-full aspect-[5/3] overflow-hidden">
                <Image
                  src={frontmatter.src.image}
                  alt={frontmatter.title}
                  fill
                  className="object-top"
                />
              </div>
            )}
            {frontmatter.src && frontmatter.src.video && (
              <div className="relative w-full aspect-[5/3] overflow-hidden">
                <video
                  src={frontmatter.src.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-top"
                />
              </div>
            )}
            {frontmatter.src && frontmatter.src.scene && (
              <div className="relative w-full aspect-[5/3] overflow-hidden">
                <Scene className="border-b border-b-palette-1 bg-white/5" />
                <Move className="absolute right-1 bottom-1" />
              </div>
            )}
            <Link href={`/projects/${slug}`}>
              <CardHeader className="px-2">
                <div className="flex flex-col p-1">
                  <CardTitle className="mt-1 text-lg">
                    {frontmatter.title}
                  </CardTitle>
                  <time className="font-sans text-xs text-palette-1">
                    {frontmatter.publishDate}
                  </time>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex flex-row px-3 pb-3">
                {frontmatter.technologies &&
                  frontmatter.technologies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {frontmatter.technologies?.map((tag) => (
                        <Badge
                          className="px-1 py-0 text-[10px] bg-white/10"
                          key={tag.name}
                        >
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                  )}
              </CardContent>
            </Link>
          </Card>
        );
      })}
    </>
  );
}
