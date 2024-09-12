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
              "flex flex-col overflow-hidden border h-full",
            )}
          >
            <Link href={`/projects/${slug}`}>
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                width={500}
                height={300}
                className="h-full w-full overflow-hidden object-cover object-top"
              />
            </Link>
            <Link href={`/projects/${slug}`}>
              <CardHeader className="px-2">
                <div className="flex flex-col py-1">
                  <CardTitle className="mt-1 text-base">
                    {frontmatter.title}
                  </CardTitle>
                  <time className="font-sans text-xs text-palette-1">
                    {frontmatter.publishDate}
                  </time>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col px-2">
                {frontmatter.technologies &&
                  frontmatter.technologies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {frontmatter.technologies?.map((tag) => (
                        <Badge
                          className="px-1 py-0 text-[10px]"
                          style={{ backgroundColor: tag.color }}
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
