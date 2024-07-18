import BlogCards from "@/app/components/blog-cards";

export default async function Gallery() {
  return (
    <section className="flex flex-col items-center text-palette-3">
      <h2 className="text-3xl m-1">Blog Posts</h2>
      <p className="mb-2 italic">Welcome to my blog posts!</p>
      <BlogCards />
    </section>
  );
}
