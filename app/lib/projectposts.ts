import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Import KaTeX styles
import { CustomMDXComponents } from "@/app/components/mdx";

const contentDir = path.join(process.cwd(), "/posts/projects");

type PostFrontmatter = {
  title: string;
  publishDate: string;
  description: string;
  coverImage: string;
};

export async function getPostBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<PostFrontmatter>({
    source: fileContent,
    components: CustomMDXComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
      parseFrontmatter: true,
    },
  });
  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getSortedPosts() {
  const files = fs.readdirSync(contentDir);
  const posts = await Promise.all(
    files.map(async (file) => await getPostBySlug(path.parse(file).name)),
  );
  return posts.sort((a, b) =>
    a.frontmatter.publishDate < b.frontmatter.publishDate ? 1 : -1,
  );
}

export function getAllPostsSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}
