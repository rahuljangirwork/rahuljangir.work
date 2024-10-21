import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardBody,
  SplitCardThumbnail,
} from "@/app/components/cards/split-card";
import { Badge } from "@/app/components/ui/badge";
import { getSortedPosts } from "@/app/lib/projectposts";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

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
          <SplitCard
            key={slug}
            className={cn(
              className,
              "flex flex-row overflow-hidden border border-palette-1 shadow-xl",
            )}
          >
            <SplitCardContent side="left" className="w-2/3">
              <SplitCardHeader className="px-2">
                <Link href={`/projects/${slug}`}>
                  <div className="flex flex-col p-1">
                    <h1 className="mt-1 text-lg">{frontmatter.title}</h1>
                    <p className="font-sans text-xs text-pretty text-palette-2 text-opacity-50">
                      {frontmatter.description}
                    </p>
                  </div>
                </Link>
              </SplitCardHeader>
            </SplitCardContent>
            <SplitCardThumbnail>
              <Link href={`/projects/${slug}`}>
                {frontmatter.image && (
                  <div className="relative w-full aspect-[5/3] overflow-hidden">
                    <Image
                      src={frontmatter.image}
                      alt={frontmatter.title}
                      fill
                      className="object-top"
                    />
                  </div>
                )}
                {frontmatter.video && (
                  <div className="relative w-full aspect-[5/3] overflow-hidden">
                    <video
                      src={frontmatter.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-top"
                    />
                  </div>
                )}
              </Link>
            </SplitCardThumbnail>
          </SplitCard>
        );
      })}
    </>
  );
}
