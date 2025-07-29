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
export type StatsRange =
  | "last_7_days"
  | "last_30_days"
  | "last_6_months"
  | "last_year"
  | "all_time"

export interface WakaTimeStatItem {
  name: string
  total_seconds: number
  percent: number
  digital: string
  decimal: string
  text: string
  hours: number
  minutes: number
  seconds: number
}

export interface WakaTimeLanguage extends WakaTimeStatItem {
  color?: string
}

export interface WakaTimeEditor extends WakaTimeStatItem { }
export interface WakaTimeOS extends WakaTimeStatItem { }
export interface WakaTimeMachine extends WakaTimeStatItem { }

export interface WakaTimeStats {
  username: string
  user_id: string
  range: string
  languages: WakaTimeLanguage[]
  editors: WakaTimeEditor[]
  operating_systems: WakaTimeOS[]
  machines: WakaTimeMachine[]
  total_seconds: number
  daily_average: number
  is_up_to_date: boolean
  percent_calculated: number
  status: string
  timeout: number
  writes_only: boolean
  best_day?: {
    date: string
    total_seconds: number
    text: string
  }
  days_including_holidays: number
  days_minus_holidays: number
}

export interface WakaTimeInsightResponse<T> {
  data: T[]
  range: string
  is_up_to_date: boolean
  percent_calculated: number
  timeout: number
}

export interface WakaTimeAllStats {
  stats: { data: WakaTimeStats }
  editors: WakaTimeInsightResponse<WakaTimeEditor>
  languages: WakaTimeInsightResponse<WakaTimeLanguage>
  operatingSystems: WakaTimeInsightResponse<WakaTimeOS>
  machines: WakaTimeInsightResponse<WakaTimeMachine>
  range: string
}
