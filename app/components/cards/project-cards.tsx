import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { getSortedPostsMetaData } from "@/app/lib/posts";
import { PostMetadata } from "@/app/lib/types";
import ProjectCardsSkeleton from "@/app/components/cards/project-card-skeleton";
import Thumbnail from "@/app/components/media/thumbnail";

export default async function ProjectCards() {
  const posts = await getSortedPostsMetaData();
  const projectPosts = posts.filter((post) => post.type === "project");

  return (
    <>
      <Suspense fallback={<ProjectCardsSkeleton count={projectPosts.length} />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-2 md:px-0 mb-20">
          {projectPosts.map((post) => (
            <ProjectCard key={post.slug} post={post} />
          ))}
        </div>
      </Suspense>
    </>
  );
}

function ProjectCard({ post }: { post: PostMetadata }) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-xl border-2 border-palette-1 bg-palette-2/5 backdrop-blur-md shadow-xl hover:shadow-xl transition-all duration-300 ease-in-out">
      <CardHeader className="p-0">
        <Thumbnail src={post.src} />
      </CardHeader>
      <Link href={`/blog/${post.slug}`} className="flex-grow">
        <CardContent className="p-3">
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-xl sm:text-2xl font-bold line-clamp-1">
              {post.title}
            </CardTitle>
            <Badge
              variant="outline"
              className="text-[10px] border-palette-2 text-palette-2"
            >
              <Calendar className="w-3 h-3 mr-1" />
              {post.publishDate}
            </Badge>
          </div>
          <CardDescription className="text-sm text-palette-2/50 line-clamp-2 mb-3">
            {post.description}
          </CardDescription>
          {post.technologies && post.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.technologies.map((tag) => (
                <Badge
                  key={tag}
                  className="px-2 py-0 text-palette-2 text-[10px] bg-white/10 shadow-sm hover:bg-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Link>
      <CardFooter className="flex items-center justify-between px-3 pb-3 text-sm">
        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-1 px-3 py-1.5 border border-palette-1 rounded-md bg-palette-1/80 backdrop-blur-lg hover:scale-105 transition-transform ease-in-out"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </Link>
        {post.src && post.src.link && (
          <Link
            href={post.src.link}
            target="_blank"
            className="flex items-center gap-1 px-3 py-1.5 border border-palette-4 text-palette-4 rounded-md hover:scale-105 transition-transform ease-in-out"
          >
            View Demo
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
