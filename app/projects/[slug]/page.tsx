import { getPostBySlug, getAllPostsSlug } from "@/app/lib/projectposts";

export async function generateStaticParams() {
  const slugs = getAllPostsSlug();

  return slugs.map(({ slug }) => ({
    slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="flex flex-col justify-center items-center text-palette-2">
      <h1 className="mt-2">{post.frontmatter.title}</h1>
      <p>Description of project: {post.frontmatter.description}</p>
      <article
        key={post.frontmatter.title}
        className="prose prose-offwhite w-full m-2"
      >
        {post.content}
      </article>
    </div>
  );
}
