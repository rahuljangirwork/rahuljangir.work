import Link from "next/link";
import type { PostMetadata } from "@/app/lib/posts";
import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardThumbnail,
} from "@/app/components/cards/split-card";
import { ProjectMedia } from "./project-cards";

interface BlogCardProps {
  post: PostMetadata;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <SplitCard className="flex items-start h-full">
      <SplitCardThumbnail className="flex-shrink-0 aspect-video w-1/3">
        <ProjectMedia src={post.src} className="rounded-md overflow-hidden" />
      </SplitCardThumbnail>
      <Link href={`/blog/${post.slug}`}>
        <SplitCardContent className="w-full ml-2">
          <SplitCardHeader className="mb-0.5">
            <time className="text-palette-4 text-sm">{post.publishDate}</time>
            <h2 className="text-left font-bold text-3xl">{post.title}</h2>
          </SplitCardHeader>
          <p className="w-4/5 text-palette-2 text-sm line-clamp-2">
            {post.description}
          </p>
        </SplitCardContent>
      </Link>
    </SplitCard>
  );
}

interface BlogCardsProps {
  posts: PostMetadata[];
}

export default function BlogCards({ posts }: BlogCardsProps) {
  return (
    <ul className="flex flex-col gap-4" role="list">
      {posts.map((post, index) => (
        <li key={post.slug}>
          <BlogCard post={post} />
          {index < posts.length - 1 && (
            <div className="border-b border-dotted border-gray-300 mt-3"></div>
          )}{" "}
        </li>
      ))}
    </ul>
  );
}
