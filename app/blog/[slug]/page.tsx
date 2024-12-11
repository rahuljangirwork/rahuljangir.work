import { getPostContentBySlug, getAllPostsSlug } from "@/app/lib/posts";
import "@/app/styles/highlight.css";
import { TracingBeam } from "@/app/components/ui/tracing-beam";

export async function generateStaticParams() {
  const slugs = getAllPostsSlug();

  return slugs.map(({ slug }) => ({
    slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostContentBySlug(params.slug);

  return (
    <TracingBeam className="px-6">
      <div className="flex flex-col justify-center items-center text-palette-2 mt-12">
        <article
          key={post.frontmatter.title}
          className="prose prose-offwhite w-full m-2"
        >
          {post.content}
        </article>
      </div>
    </TracingBeam>
  );
}
