import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Collapsible from "@/app/components/collapsible";

const contentDir = path.join(process.cwd(), "/posts/projects");

export async function getPostBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    title: string;
    publishDate: string;
    description: string;
    coverImage: string;
  }>({
    source: fileContent,
    components: { Collapsible },
    options: { parseFrontmatter: true },
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
