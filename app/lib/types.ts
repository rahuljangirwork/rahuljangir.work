// export type PostMetadata = {
//   slug: string;
//   title: string;
//   description: string;
//   publishDate: string;
//   type: "blog" | "project";
//   src: {
//     image?: { path: string; alt: string };
//     video?: string;
//     scene?: string;
//     link?: string;
//   };
//   technologies?: string[];
// };


// app/lib/types.ts – expanded to carry reading time

/** Metadata used for lists & previews */
export type PostMetadata = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  type: 'blog' | 'project';
  src: {
    image?: { path: string; alt: string };
    video?: string;
    scene?: string;
    link?: string;
  };
  technologies?: string[];
  /** e.g. "4 min read" – optional because older posts may not have it */
  readingTime?: string;
};

/** Data returned by getPostContentBySlug */
export interface PostContent {
  frontmatter: PostMetadata;
  /** MDX -> React tree */
  content: React.ReactNode;
  slug: string;
  readingTime: string;
}

