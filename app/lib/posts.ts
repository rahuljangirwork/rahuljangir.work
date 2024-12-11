import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css"; // Import KaTeX styles
import { CustomMDXComponents } from "@/app/components/mdx/mdx";

const postsDirectory = path.join(process.cwd(), "/posts");

export type PostMetadata = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  project: boolean;
  src: {
    image?: string;
    video?: string;
    scene?: boolean;
  };
  technologies?: string[];
};

export async function getSortedPostsMetaData(): Promise<PostMetadata[]> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName): PostMetadata => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, "");
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Ensure the data returned by gray-matter matches PostFrontmatter type
      const frontmatter: PostMetadata = {
        slug: slug,
        title: matterResult.data.title,
        description: matterResult.data.description,
        publishDate: matterResult.data.publishDate,
        project: matterResult.data.project ?? false, // Default to false if not specified
        src: {
          image: matterResult.data.src?.image ?? "",
          video: matterResult.data.src?.video ?? "",
          scene: matterResult.data.src?.scene ?? false,
        },
        technologies: matterResult.data.technologies ?? [],
      };

      return frontmatter;
    });
  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.publishDate);
    const dateB = new Date(b.publishDate);
    return dateB.getTime() - dateA.getTime();
  });
}

export async function getPostContentBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<PostMetadata>({
    source: fileContent,
    components: CustomMDXComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex, rehypeHighlight],
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

export function getAllPostsSlug() {
  const files = fs.readdirSync(postsDirectory);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}
