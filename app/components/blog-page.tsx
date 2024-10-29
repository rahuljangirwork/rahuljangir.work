"use client";
import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/app/components/ui/badge";
import BlogCards from "@/app/components/cards/blog-cards";
import { Mail } from "lucide-react";
import { cn } from "../lib/utils";
import Socials from "./navigation/socials";

interface PostData {
  id: string;
  title: string;
  date: string;
  description: string;
}

export default function BlogPage({
  initialPosts,
}: {
  initialPosts: PostData[];
}) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tags = ["Engineering", "Life", "Technology", "Science", "Personal"];
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };
  return (
    <>
      <section className="bg-transparent pb-20 text-left text-palette-2 w-full md:w-1/3 flex flex-col gap-2">
        <div>
          <h1 className="text-4xl font-extrabold">
            Blog Posts<span className="text-palette-4">.</span>
          </h1>
          <p className="text-md text-balance mt-2">
            My insights on small worlds within engineering and my life
          </p>
        </div>

        <div className="mt-2">
          <h2 className="text-2xl font-semibold mb-2">Filter by Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className={cn(
                  "text-palette-2 bg-palette-2/10 backdrop-blur-md",
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

        <div className="mt-2">
          <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Socials className="flex gap-2" iconSize={20} />
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center hover:text-palette-4 transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full mx-auto md:w-2/3">
        <BlogCards posts={initialPosts} />
      </section>
    </>
  );
}
