export type PostMetadata = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  type: "blog" | "project";
  src: {
    image?: { path: string; alt: string };
    video?: string;
    scene?: boolean;
    link?: string;
  };
  technologies?: string[];
};
