// import fs from "fs";
// import path from "path";
// import { cache } from "react";
// import matter from "gray-matter";
// import { compileMDX } from "next-mdx-remote/rsc";
// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";
// import rehypeHighlight from "rehype-highlight";
// import "katex/dist/katex.min.css"; // Import KaTeX styles
// import { CustomMDXComponents } from "@/app/components/mdx/mdx";
// import { PostMetadata } from "@/app/lib/types";

// import readingTime from 'reading-time'; 

// const postsDirectory = path.join(process.cwd(), "/posts");

// const parsePostFile = (fileName: string): PostMetadata => {
//   const slug = fileName.replace(/\.mdx$/, "");
//   const fullPath = path.join(postsDirectory, fileName);

//   try {
//     const fileContents = fs.readFileSync(fullPath, "utf8");
//     const matterResult = matter(fileContents);

//     if (
//       !matterResult.data.title ||
//       !matterResult.data.description ||
//       !matterResult.data.publishDate
//     ) {
//       throw new Error(`Missing required fronmatter in ${fileName}`);
//     }

//     return {
//       slug: slug,
//       title: matterResult.data.title,
//       description: matterResult.data.description,
//       publishDate: matterResult.data.publishDate,
//       type: matterResult.data.type,
//       src: {
//         image: matterResult.data.src?.image ?? {},
//         video: matterResult.data.src?.video ?? "",
//         scene: matterResult.data.src?.scene ?? "",
//         link: matterResult.data.src?.link ?? "",
//       },
//       technologies: matterResult.data.technologies ?? [],
//     };
//   } catch (error) {
//     console.error(`Error parsing post file ${fileName}:`, error);
//     // Return a minimal valid object for error cases
//     return {
//       slug,
//       title: `Error loading ${slug}`,
//       description: "This post could not be loaded properly.",
//       publishDate: new Date().toISOString(),
//       type: "blog",
//       src: {},
//       technologies: [],
//     };
//   }
// };

// export const getSortedPostsMetaData = cache(
//   async (): Promise<PostMetadata[]> => {
//     try {
//       // Get file names under posts directory (array of strings)
//       const fileNames = fs
//         .readdirSync(postsDirectory)
//         .filter((fileName) => fileName.endsWith(".mdx"));

//       // apply the parsePostFile function to each filename in the fileNames array
//       // now allPostsData is an array of PostMetadata objects
//       const allPostsData = fileNames.map((file) => parsePostFile(file));

//       // Sort posts by date (newest first)
//       return allPostsData.sort((a, b) => {
//         const dateA = new Date(a.publishDate);
//         const dateB = new Date(b.publishDate);
//         return dateB.getTime() - dateA.getTime();
//       });
//     } catch (error) {
//       console.error("Error getting sorted posts metadata:", error);
//       return [];
//     }
//   },
// );

// export const getPostContentBySlug = cache(async (slug: string) => {
//   const fileName = slug + ".mdx";
//   const filePath = path.join(postsDirectory, fileName);
//   const fileContent = fs.readFileSync(filePath, "utf8");
//   const { frontmatter, content } = await compileMDX<PostMetadata>({
//     source: fileContent,
//     components: CustomMDXComponents,
//     options: {
//       mdxOptions: {
//         remarkPlugins: [remarkMath],
//         rehypePlugins: [rehypeKatex, rehypeHighlight],
//       },
//       parseFrontmatter: true,
//     },
//   });
//   return {
//     frontmatter,
//     content,
//     slug: path.parse(fileName).name,
//   };
// });

// export const getAllPostsSlug = cache(() => {
//   try {
//     const files = fs.readdirSync(postsDirectory);
//     return files
//       .filter((file) => file.endsWith(".mdx"))
//       .map((file) => ({
//         slug: path.parse(file).name,
//       }));
//   } catch (error) {
//     console.error("Error getting all post slugs:", error);
//     return [];
//   }
// });


// app/lib/posts.ts – now includes reading‑time support
import fs from 'fs';
import path from 'path';
import { cache } from 'react';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import 'katex/dist/katex.min.css';
import { CustomMDXComponents } from '@/app/components/mdx/mdx';
import { PostMetadata } from '@/app/lib/types';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), '/posts');

/* --------------------------------- utils -------------------------------- */
const parsePostFile = (fileName: string): PostMetadata => {
  const slug = fileName.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, fileName);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    if (!matterResult.data.title || !matterResult.data.description || !matterResult.data.publishDate) {
      throw new Error(`Missing required fronmatter in ${fileName}`);
    }

    /* return minimal metadata for list / card views */
    return {
      slug,
      title: matterResult.data.title,
      description: matterResult.data.description,
      publishDate: matterResult.data.publishDate,
      type: matterResult.data.type,
      src: {
        image: matterResult.data.src?.image ?? {},
        video: matterResult.data.src?.video ?? '',
        scene: matterResult.data.src?.scene ?? '',
        link: matterResult.data.src?.link ?? '',
      },
      technologies: matterResult.data.technologies ?? [],
      // basic reading‑time for list pages (approx.)
      readingTime: readingTime(fileContents).text,
    } as PostMetadata;
  } catch (error) {
    console.error(`Error parsing post file ${fileName}:`, error);
    return {
      slug,
      title: `Error loading ${slug}`,
      description: 'This post could not be loaded properly.',
      publishDate: new Date().toISOString(),
      type: 'blog',
      src: {},
      technologies: [],
      readingTime: '0 min read',
    };
  }
};

/* --------------------- list of metadata (for /blog) --------------------- */
export const getSortedPostsMetaData = cache(async (): Promise<PostMetadata[]> => {
  try {
    const fileNames = fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'));
    const allPostsData = fileNames.map((file) => parsePostFile(file));
    return allPostsData.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  } catch (error) {
    console.error('Error getting sorted posts metadata:', error);
    return [];
  }
});

/* ------------------ full content for a single post page ----------------- */
export interface PostContent {
  frontmatter: PostMetadata;
  content: React.ReactNode;
  slug: string;
  readingTime: string;
}

export const getPostContentBySlug = cache(async (slug: string): Promise<PostContent> => {
  const fileName = `${slug}.mdx`;
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // reading‑time BEFORE compiling (markdown only)
  const rt = readingTime(fileContent);

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
    slug,
    readingTime: rt.text,
  };
});

/* ----------------------------- slug helpers ----------------------------- */
export const getAllPostsSlug = cache(() => {
  try {
    return fs
      .readdirSync(postsDirectory)
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => ({ slug: path.parse(file).name }));
  } catch (error) {
    console.error('Error getting all post slugs:', error);
    return [];
  }
});