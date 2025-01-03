import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Move, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { getSortedPostsMetaData, PostMetadata } from "@/app/lib/posts";
import Scene from "@/app/components/model/scene";
import ProjectCardSkeleton from "@/app/components/cards/project-card-skeleton";

export default async function ProjectCards() {
  const posts = await getSortedPostsMetaData();
  const projectPosts = posts.filter((post) => post.project);

  return (
    <Suspense fallback={<ProjectCardsSkeleton count={projectPosts.length} />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-2 md:px-0 mb-20">
        {projectPosts.map((post) => (
          <ProjectCard key={post.slug} post={post} />
        ))}
      </div>
    </Suspense>
  );
}

function ProjectCard({ post }: { post: PostMetadata }) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-xl border-2 border-palette-1 bg-palette-2/5 backdrop-blur-md shadow-xl hover:shadow-xl transition-all duration-300 ease-in-out">
      <CardHeader className="p-0">
        <ProjectMedia src={post.src} />
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
            className="flex items-center gap-1 px-3 py-1.5 border border-palette-2/60 rounded-md hover:scale-105 transition-transform ease-in-out"
          >
            View Demo
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}

export function ProjectMedia({ src }: { src: PostMetadata["src"] }) {
  if (src && src.image) {
    return (
      <div className="relative w-full aspect-video">
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
      <div className="relative w-full aspect-video">
        <video
          src={src.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  if (src && src.scene) {
    return (
      <div className="relative w-full aspect-video bg-primary">
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

function ProjectCardsSkeleton({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4 sm:px-6 lg:px-8">
      {Array.from({ length: count }).map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  );
}
