import { getSortedPostsMetaData } from "@/app/lib/posts";
import BlogPage from "@/app/components/blog-page";

export default async function Blog() {
  const allPostsData = await getSortedPostsMetaData();

  return (
    <main className="mt-8 flex flex-col md:flex-row md:items-start w-full max-w-4xl mx-auto text-palette-3 min-h-[70vh]">
      <BlogPage posts={allPostsData} />
    </main>
  );
}
