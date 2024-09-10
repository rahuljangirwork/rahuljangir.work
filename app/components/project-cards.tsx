import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { getSortedPosts } from "@/app/lib/projectposts";
import Link from "next/link";

export default async function ProjectCards({
  className,
}: {
  className?: string;
}) {
  const posts = await getSortedPosts();
  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-palette-3 mb-12">
      <ul className="flex gap-3">
        {posts.map(({ slug, frontmatter }) => {
          return (
            <li key={slug} className="flex-1 min-w-[250px]">
              <Link href={`/projects/${slug}`}>
                <Card className="flex flex-col h-full">
                  <CardHeader className="flex-grow">
                    <CardTitle>{frontmatter.title}</CardTitle>
                    <CardDescription>{frontmatter.publishDate}</CardDescription>
                  </CardHeader>
                  {/* Optionally include CardContent or CardFooter if needed */}
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
