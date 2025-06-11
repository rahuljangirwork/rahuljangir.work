import type { Metadata } from "next";
import { getSortedPostsMetaData } from "@/app/lib/posts";
import BlogCards from "@/app/components/cards/blog-cards";
import type { PostMetadata } from "@/app/lib/types";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function Blog() {
  const allPostsData: PostMetadata[] = await getSortedPostsMetaData();

  return (
    <main className="mt-8 flex flex-col lg:flex-row md:items-start w-full max-w-4xl lg:gap-8 px-4 lg:px-0 mx-auto text-palette-3 min-h-screen mb-8">
      <section className="flex flex-col items-start gap-2 pb-6 lg:pb-0 text-palette-2 w-full lg:w-1/4">
        <h1 className="text-4xl font-extrabold">
          Blog Posts<span className="text-palette-4">.</span>
        </h1>
        <p className="text-md mb-2">
          Personal insights on small worlds within engineering and my life
          <span className="text-palette-4">.</span>
        </p>
      </section>

      <section className="w-full mx-auto lg:w-3/4">
        <BlogCards posts={allPostsData} />
      </section>
    </main>
  );
}
