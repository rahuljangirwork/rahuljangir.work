import type { Metadata } from "next";
import { getSortedPostsMetaData } from "@/app/lib/posts";
import BlogCards from "@/app/components/cards/blog-cards";
import Divider from "@/app/components/divider";
import type { PostMetadata } from "@/app/lib/types";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function Blog() {
  const allPostsData: PostMetadata[] = await getSortedPostsMetaData();

  return (
    <main className="mt-8 flex flex-col md:items-start w-full max-w-4xl gap-6 px-4 lg:px-0 mx-auto text-palette-3 min-h-screen mb-8">
      <section className="flex flex-col items-center gap-2 pb-0 text-palette-2 w-full">
        <h1 className="text-4xl font-extrabold">
          Blog Posts<span className="text-palette-4">.</span>
        </h1>
        <Divider className="w-1/2" />
        <p className="text-center text-pretty text-md mb-2">
          A collection of my personal work and insights on small worlds within
          engineering
          <span className="text-palette-4">.</span>
        </p>
      </section>

      <section className="w-full max-w-3xl mx-auto">
        <BlogCards posts={allPostsData} />
      </section>
    </main>
  );
}
