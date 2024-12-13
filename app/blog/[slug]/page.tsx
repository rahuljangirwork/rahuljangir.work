import { getPostContentBySlug, getAllPostsSlug } from "@/app/lib/posts";
import "@/app/styles/highlight.css";
import { TracingBeam } from "@/app/components/ui/tracing-beam";
import { CalendarDays, Clock, Tag } from "lucide-react"; // Import icons

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
        <header className="w-full max-w-3xl mb-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.frontmatter.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-palette-2/60 mb-8">
            {post.frontmatter.publishDate && (
              <div className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" />
                <time dateTime={post.frontmatter.publishDate}>
                  {new Date(post.frontmatter.publishDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </time>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>4 min read</span>
            </div>

            {post.frontmatter.technologies && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <Tag className="w-4 h-4" />
                <div className="flex gap-2">
                  {post.frontmatter.technologies.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-palette-2/10 px-2 py-0.5 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        <article
          key={post.frontmatter.title}
          className="min-h-dvh prose prose-offwhite w-full max-w-3xl m-2"
        >
          {post.content}
        </article>
      </div>
    </TracingBeam>
  );
}
