import { getPostBySlug, getAllPostsSlug } from "@/app/lib/projectposts";

export async function generateStaticParams() {
  return getAllPostsSlug();
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>{post.frontmatter.title}</h1>
      <p>Description of project: {post.frontmatter.description}</p>
      <article
        key={post.frontmatter.title}
        className="prose prose-offwhite w-full m-1"
      >
        {post.content}
      </article>
    </div>
  );
}
