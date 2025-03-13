"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SplitCard,
  SplitCardContent,
  SplitCardHeader,
  SplitCardThumbnail,
} from "@/app/components/cards/split-card";
import Thumbnail from "@/app/components/media/thumbnail";
import { Badge } from "@/app/components/ui/badge";
import { PostMetadata } from "@/app/lib/types";
import { cn } from "@/app/lib/utils";

function BlogCard({ post }: { post: PostMetadata }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="group rounded-md bg-palette-3/5 backdrop-blur-sm p-4"
    >
      <SplitCard className="flex flex-col sm:flex-row gap-4 text-palette-3">
        <SplitCardThumbnail className="w-full sm:w-2/5 flex-shrink-0 border border-palette-1 rounded-md overflow-hidden">
          <Thumbnail src={post.src} className="h-full" />
        </SplitCardThumbnail>
        <Link href={`/blog/${post.slug}`}>
          <SplitCardContent className="w-full flex flex-col">
            <SplitCardHeader className="mb-0.5">
              <time className="text-palette-4 text-sm">{post.publishDate}</time>
              <h2 className="text-left font-bold text-3xl">{post.title}</h2>
            </SplitCardHeader>
            <p className="w-4/5 text-palette-2 text-sm line-clamp-2">
              {post.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.technologies?.map((tag) => (
                <Badge
                  key={tag}
                  className="px-2 py-0 text-palette-2 text-[10px] bg-white/10 shadow-sm hover:bg-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </SplitCardContent>
        </Link>
      </SplitCard>
    </motion.div>
  );
}

export default function BlogCards({ posts }: { posts: PostMetadata[] }) {
  const [activeTab, setActiveTab] = useState<PostMetadata["type"]>("project");

  const filteredPosts = posts.filter((post) => post.type === activeTab);

  return (
    <>
      <div className="flex space-x-2 mb-6 text-sm mt-1 text-palette-3">
        <button
          className={cn(
            "w-20 rounded-full py-1 px-2 border bg-palette-3/10 backdrop-blur-sm",
            activeTab === "blog" ? "border-palette-4" : "border-palette-1",
          )}
          onClick={() => setActiveTab("blog")}
        >
          Blog
        </button>
        <button
          className={cn(
            "w-24 rounded-full py-1 px-2 border bg-palette-3/10 backdrop-blur-sm",
            activeTab === "project" ? "border-palette-4" : "border-palette-3",
          )}
          onClick={() => setActiveTab("project")}
        >
          Projects
        </button>
      </div>
      <ul className="flex flex-col gap-4" role="list">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="space-y-6"
          >
            {filteredPosts.map((post) => (
              <li key={post.slug}>
                <BlogCard post={post} />
              </li>
            ))}
          </motion.div>
        </AnimatePresence>
      </ul>
    </>
  );
}
