"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import type { PostMetadata } from "@/app/lib/posts";

interface FilterDropdownProps {
  posts: PostMetadata[];
}

export default function FilterDropdown({ posts }: FilterDropdownProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "project",
    "guides",
  ]);

  const handleCategoryChange = (value: string) => {
    if (value === "all") {
      setSelectedCategories(["project", "guides", "other"]);
    } else {
      setSelectedCategories([value]);
    }
  };

  const filteredPosts = posts.filter(
    (post) =>
      selectedCategories.includes(post.title) ||
      selectedCategories.includes("all"),
  );

  return (
    <div className="mb-4">
      <Select onValueChange={handleCategoryChange} defaultValue="all">
        <SelectTrigger className="w-[180px] h-8 bg-transparent border border-palette-4">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="project">Projects</SelectItem>
          <SelectItem value="guides">Guides</SelectItem>
          <SelectItem value="other">Other Thoughts</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
