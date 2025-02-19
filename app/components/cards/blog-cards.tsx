import Image from "next/image";
import Link from "next/link";
import type { PostMetadata } from "@/app/lib/posts";
import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardThumbnail,
} from "@/app/components/cards/split-card";

interface BlogCardProps {
  post: PostMetadata;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <SplitCard className="flex items-start h-full">
        <SplitCardThumbnail className="flex-shrink-0 w-32 h-32">
          <Image
            src="/assets/shepherd.jpg"
            alt={`Thumbnail for ${post.title}`}
            width={300}
            height={200}
            className="object-cover w-full h-full rounded-md"
          />
        </SplitCardThumbnail>
        <SplitCardContent className="w-2/3 ml-2">
          <SplitCardHeader>
            <time className="text-palette-4 text-sm">{post.publishDate}</time>
            <h2 className="text-left font-bold text-2xl">{post.title}</h2>
          </SplitCardHeader>
          <p className="text-palette-2 text-sm line-clamp-3">
            {post.description}
          </p>
        </SplitCardContent>
      </SplitCard>
    </Link>
  );
}

interface BlogCardsProps {
  posts: PostMetadata[];
}

export default function BlogCards({ posts }: BlogCardsProps) {
  return (
    <ul className="flex flex-col gap-3" role="list">
      {posts.map((post, index) => (
        <li key={post.slug}>
          <BlogCard post={post} />
          {index < posts.length - 1 && (
            <div className="border-b border-dotted border-gray-300 mt-2.5"></div>
          )}{" "}
        </li>
      ))}
    </ul>
  );
}
