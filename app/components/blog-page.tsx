"use client";
import { useState } from "react";
import { Badge } from "@/app/components/ui/badge";
import BlogCards from "@/app/components/cards/blog-cards";
import { cn } from "@/app/lib/utils";
import Socials from "@/app/components/navigation/socials";
import EmailToast from "@/app/components/ui/email-toast";
import { PostMetadata } from "@/app/lib/posts";

export default function BlogPage({ posts }: { posts: PostMetadata[] }) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tags = ["Engineering", "Life", "Technology", "Science", "Personal"];
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };
  return (
    <>
      <section className="bg-transparent pb-8 text-left text-palette-2 w-full md:w-1/3 flex flex-col gap-2 px-4 md:px-0">
        <div>
          <h1 className="text-4xl font-extrabold">
            Blog Posts<span className="text-palette-4">.</span>
          </h1>
          <p className="text-md text-balance mt-2">
            My insights on small worlds within engineering and my life
          </p>
        </div>

        <div className="flex md:flex-col">
          <div className="mt-2 max-w-sm">
            <h2 className="text-2xl font-semibold mb-2">Filter by Tags</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className={cn(
                    "text-palette-2 bg-palette-2/10 backdrop-blur-md hover:bg-primary hover:cursor-pointer",
                    selectedTags.includes(tag)
                      ? "border border-palette-4"
                      : "border border-palette-1",
                  )}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="hidden mt-6 md:flex flex-grow justify-between pr-3">
            <Socials className="flex gap-2" iconSize={20} />
            <EmailToast
              className="inline-flex items-center gap-1 text-xs text-palette-2 hover:text-palette-4 hover:underline focus:outline-none transition-all duration-300 ease-in-out"
              iconSize={12}
            >
              isaisanchezcc@gmail.com
            </EmailToast>
          </div>
        </div>
      </section>
      <section className="w-full mx-auto md:w-2/3">
        <BlogCards posts={posts} />
      </section>
    </>
  );
}
