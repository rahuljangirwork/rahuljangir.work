import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
} from "@/app/components/cards/split-card";
import Link from "next/link";
import { PostMetadata } from "@/app/lib/posts";

export default function BlogCards({ posts }: { posts: PostMetadata[] }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-palette-3">
      <ul className="flex flex-col gap-3">
        {posts.map((post, index) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <SplitCard className="flex flex-col h-full">
                <SplitCardContent className="flex-grow">
                  <SplitCardHeader>
                    <time className="text-palette-4 text-sm">
                      {post.publishDate}
                    </time>
                    <h1 className="text-left font-bold text-3xl ">
                      {post.title}
                    </h1>
                  </SplitCardHeader>
                  <p className="text-palette-2 mb-2">{post.description}</p>
                </SplitCardContent>
              </SplitCard>
            </Link>
            {index < posts.length - 1 && (
              <div className="border-b border-dotted border-gray-300 my-2"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
