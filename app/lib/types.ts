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





// Add these to your existing types file
// app/lib/types.ts
// app/lib/types.ts
// app/lib/types.ts

// app/lib/types.ts

export type StatsRange = "today" | "week" | "all_time";

export interface WakaTimeStatItem {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  decimal: string;
  text: string;
  hours: number;
  minutes: number;
  seconds: number;
  color?: string | null;
}

export interface Project extends WakaTimeStatItem {
  ai_additions?: number;
  ai_deletions?: number;
  human_additions?: number;
  human_deletions?: number;
}

export interface WakaTimeStatsEntry {
  id: string;
  user_id: string;
  period_type: string;
  period_start: string; // ISO datetime string
  period_end: string; // ISO datetime string

  best_day?: { date: string; text: string; total_seconds?: number };

  languages: WakaTimeStatItem[];
  editors: WakaTimeStatItem[];
  operating_systems: WakaTimeStatItem[];
  machines: WakaTimeStatItem[];
  projects: Project[];

  total_seconds: number;
  human_readable_total: string;
  human_readable_daily_average?: string | null;
  daily_average_seconds?: number;

  // Any additional fields are allowed
  [key: string]: any;
}

// This is the result from your get_portfolio_data('wakatime', ...) RPC: an array of stat entries
export type WakaTimeStatsData = WakaTimeStatsEntry[];
