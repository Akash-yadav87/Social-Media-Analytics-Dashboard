export type Platform = "instagram" | "youtube" | "twitter" | "linkedin";

export interface MetricCard {
  label: string;
  value: string;
  change: number;
  platform: Platform;
  subLabel: string;
}

export interface EngagementPoint {
  date: string;
  instagram: number;
  youtube: number;
  twitter: number;
  linkedin: number;
}

export interface PostPerformance {
  id: number;
  platform: Platform;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  impressions: number;
  engagementRate: number;
  postedAt: string;
}

export interface BestPostingTime {
  day: string;
  hour: string;
  score: number;
  platform: Platform;
}

export interface ContentStrategy {
  type: string;
  avgEngagement: number;
  postsCount: number;
  trend: "up" | "down" | "stable";
}

export interface PlatformOverview {
  platform: Platform;
  followers: number;
  followersChange: number;
  totalPosts: number;
  avgLikes: number;
  avgComments: number;
  avgShares: number;
  engagementRate: number;
}

export interface HourlyEngagement {
  hour: string;
  score: number;
}

export interface WeeklyHeatmap {
  day: string;
  hours: { hour: string; value: number }[];
}

// ── Overview KPI Cards ──────────────────────────────────────────────────
export const kpiCards: MetricCard[] = [
  {
    label: "Total Impressions",
    value: "4.82M",
    change: 12.4,
    platform: "instagram",
    subLabel: "Across all platforms",
  },
  {
    label: "Total Engagements",
    value: "318K",
    change: 8.7,
    platform: "youtube",
    subLabel: "Likes + Comments + Shares",
  },
  {
    label: "Avg. Engagement Rate",
    value: "6.59%",
    change: -1.2,
    platform: "twitter",
    subLabel: "Platform average",
  },
  {
    label: "Total Followers",
    value: "2.14M",
    change: 5.3,
    platform: "linkedin",
    subLabel: "Net new this month",
  },
];

// ── 30-Day Engagement Trend ─────────────────────────────────────────────
export const engagementTrend: EngagementPoint[] = [
  { date: "Jun 1",  instagram: 18200, youtube: 9400,  twitter: 5100,  linkedin: 3200 },
  { date: "Jun 3",  instagram: 21000, youtube: 11200, twitter: 6300,  linkedin: 3800 },
  { date: "Jun 5",  instagram: 19500, youtube: 10800, twitter: 5800,  linkedin: 4100 },
  { date: "Jun 7",  instagram: 24300, youtube: 13500, twitter: 7200,  linkedin: 4600 },
  { date: "Jun 9",  instagram: 22100, youtube: 12100, twitter: 6800,  linkedin: 4300 },
  { date: "Jun 11", instagram: 26800, youtube: 14900, twitter: 8100,  linkedin: 5200 },
  { date: "Jun 13", instagram: 25200, youtube: 13700, twitter: 7600,  linkedin: 4900 },
  { date: "Jun 15", instagram: 28900, youtube: 16200, twitter: 9000,  linkedin: 5700 },
  { date: "Jun 17", instagram: 27400, youtube: 15400, twitter: 8500,  linkedin: 5400 },
  { date: "Jun 19", instagram: 31200, youtube: 17800, twitter: 9800,  linkedin: 6100 },
  { date: "Jun 21", instagram: 29800, youtube: 16900, twitter: 9200,  linkedin: 5800 },
  { date: "Jun 23", instagram: 33500, youtube: 19100, twitter: 10500, linkedin: 6600 },
  { date: "Jun 25", instagram: 32100, youtube: 18200, twitter: 10000, linkedin: 6300 },
  { date: "Jun 27", instagram: 35800, youtube: 20500, twitter: 11200, linkedin: 7000 },
  { date: "Jun 29", instagram: 34200, youtube: 19600, twitter: 10700, linkedin: 6700 },
];

// ── Platform Overview ───────────────────────────────────────────────────
export const platformOverviews: PlatformOverview[] = [
  {
    platform: "instagram",
    followers: 892000,
    followersChange: 6.2,
    totalPosts: 148,
    avgLikes: 12400,
    avgComments: 842,
    avgShares: 1230,
    engagementRate: 7.8,
  },
  {
    platform: "youtube",
    followers: 654000,
    followersChange: 4.1,
    totalPosts: 62,
    avgLikes: 8900,
    avgComments: 1240,
    avgShares: 2100,
    engagementRate: 5.9,
  },
  {
    platform: "twitter",
    followers: 341000,
    followersChange: 3.8,
    totalPosts: 312,
    avgLikes: 4200,
    avgComments: 680,
    avgShares: 1890,
    engagementRate: 6.1,
  },
  {
    platform: "linkedin",
    followers: 253000,
    followersChange: 7.4,
    totalPosts: 96,
    avgLikes: 3100,
    avgComments: 420,
    avgShares: 780,
    engagementRate: 4.8,
  },
];

// ── Top Posts ───────────────────────────────────────────────────────────
export const topPosts: PostPerformance[] = [
  {
    id: 1,
    platform: "instagram",
    content: "Behind-the-scenes product launch reel showcasing design process",
    likes: 48200,
    comments: 3100,
    shares: 5400,
    impressions: 624000,
    engagementRate: 9.1,
    postedAt: "Jun 23, 2:00 PM",
  },
  {
    id: 2,
    platform: "youtube",
    content: "Full tutorial: Building a React dashboard from scratch (60 min)",
    likes: 32100,
    comments: 4800,
    shares: 8900,
    impressions: 498000,
    engagementRate: 8.4,
    postedAt: "Jun 19, 10:00 AM",
  },
  {
    id: 3,
    platform: "twitter",
    content: "Thread: 10 data visualization patterns every analyst should know",
    likes: 18900,
    comments: 2400,
    shares: 11200,
    impressions: 512000,
    engagementRate: 7.9,
    postedAt: "Jun 25, 9:00 AM",
  },
  {
    id: 4,
    platform: "linkedin",
    content: "How we grew our team's productivity by 40% using async-first workflows",
    likes: 14200,
    comments: 1890,
    shares: 3400,
    impressions: 287000,
    engagementRate: 6.8,
    postedAt: "Jun 21, 8:00 AM",
  },
  {
    id: 5,
    platform: "instagram",
    content: "Infographic: Social media algorithm changes 2024 — what works now",
    likes: 39400,
    comments: 2600,
    shares: 4100,
    impressions: 501000,
    engagementRate: 8.6,
    postedAt: "Jun 27, 6:00 PM",
  },
];

// ── Best Posting Times ──────────────────────────────────────────────────
export const bestPostingTimes: BestPostingTime[] = [
  { day: "Monday",    hour: "9:00 AM",  score: 82, platform: "linkedin"  },
  { day: "Tuesday",   hour: "12:00 PM", score: 78, platform: "twitter"   },
  { day: "Wednesday", hour: "6:00 PM",  score: 91, platform: "instagram" },
  { day: "Thursday",  hour: "10:00 AM", score: 74, platform: "youtube"   },
  { day: "Friday",    hour: "5:00 PM",  score: 88, platform: "instagram" },
  { day: "Saturday",  hour: "11:00 AM", score: 85, platform: "youtube"   },
  { day: "Sunday",    hour: "7:00 PM",  score: 79, platform: "twitter"   },
];

// ── Content Strategy Recommendations ───────────────────────────────────
export const contentStrategies: ContentStrategy[] = [
  { type: "Short-form Video (Reels)",  avgEngagement: 9.2, postsCount: 42, trend: "up"     },
  { type: "Carousel / Slideshow",      avgEngagement: 7.8, postsCount: 35, trend: "up"     },
  { type: "Long-form Video (>10 min)", avgEngagement: 6.1, postsCount: 18, trend: "stable" },
  { type: "Static Image",             avgEngagement: 5.4, postsCount: 64, trend: "down"   },
  { type: "Text / Thread",            avgEngagement: 5.9, postsCount: 88, trend: "stable" },
  { type: "Infographic",              avgEngagement: 8.3, postsCount: 27, trend: "up"     },
];

// ── Engagement by Content Type (Pie) ───────────────────────────────────
export const contentTypePie = [
  { name: "Short-form Video", value: 34, color: "#6366f1" },
  { name: "Carousel",        value: 24, color: "#8b5cf6" },
  { name: "Infographic",     value: 18, color: "#a78bfa" },
  { name: "Long-form Video", value: 13, color: "#c4b5fd" },
  { name: "Static Image",    value: 7,  color: "#ddd6fe" },
  { name: "Text / Thread",   value: 4,  color: "#ede9fe" },
];

// ── Weekly Heatmap ──────────────────────────────────────────────────────
export const weeklyHeatmap: WeeklyHeatmap[] = [
  {
    day: "Mon",
    hours: [
      { hour: "6 AM",  value: 12 },
      { hour: "9 AM",  value: 68 },
      { hour: "12 PM", value: 55 },
      { hour: "3 PM",  value: 42 },
      { hour: "6 PM",  value: 61 },
      { hour: "9 PM",  value: 38 },
    ],
  },
  {
    day: "Tue",
    hours: [
      { hour: "6 AM",  value: 15 },
      { hour: "9 AM",  value: 72 },
      { hour: "12 PM", value: 78 },
      { hour: "3 PM",  value: 48 },
      { hour: "6 PM",  value: 65 },
      { hour: "9 PM",  value: 44 },
    ],
  },
  {
    day: "Wed",
    hours: [
      { hour: "6 AM",  value: 18 },
      { hour: "9 AM",  value: 65 },
      { hour: "12 PM", value: 82 },
      { hour: "3 PM",  value: 70 },
      { hour: "6 PM",  value: 91 },
      { hour: "9 PM",  value: 52 },
    ],
  },
  {
    day: "Thu",
    hours: [
      { hour: "6 AM",  value: 14 },
      { hour: "9 AM",  value: 74 },
      { hour: "12 PM", value: 69 },
      { hour: "3 PM",  value: 55 },
      { hour: "6 PM",  value: 72 },
      { hour: "9 PM",  value: 41 },
    ],
  },
  {
    day: "Fri",
    hours: [
      { hour: "6 AM",  value: 20 },
      { hour: "9 AM",  value: 61 },
      { hour: "12 PM", value: 76 },
      { hour: "3 PM",  value: 62 },
      { hour: "6 PM",  value: 88 },
      { hour: "9 PM",  value: 59 },
    ],
  },
  {
    day: "Sat",
    hours: [
      { hour: "6 AM",  value: 28 },
      { hour: "9 AM",  value: 58 },
      { hour: "12 PM", value: 85 },
      { hour: "3 PM",  value: 74 },
      { hour: "6 PM",  value: 66 },
      { hour: "9 PM",  value: 48 },
    ],
  },
  {
    day: "Sun",
    hours: [
      { hour: "6 AM",  value: 22 },
      { hour: "9 AM",  value: 46 },
      { hour: "12 PM", value: 62 },
      { hour: "3 PM",  value: 58 },
      { hour: "6 PM",  value: 79 },
      { hour: "9 PM",  value: 55 },
    ],
  },
];

// ── Impressions vs Reach Bar Chart ──────────────────────────────────────
export const impressionsReach = [
  { platform: "Instagram", impressions: 1840000, reach: 1240000 },
  { platform: "YouTube",   impressions: 1520000, reach: 980000  },
  { platform: "Twitter",   impressions: 890000,  reach: 620000  },
  { platform: "LinkedIn",  impressions: 570000,  reach: 410000  },
];

export const platformColors: Record<Platform, string> = {
  instagram: "#e1306c",
  youtube:   "#ff0000",
  twitter:   "#1da1f2",
  linkedin:  "#0077b5",
};

export const platformBg: Record<Platform, string> = {
  instagram: "bg-pink-500",
  youtube:   "bg-red-500",
  twitter:   "bg-sky-500",
  linkedin:  "bg-blue-600",
};

export const platformTextColor: Record<Platform, string> = {
  instagram: "text-pink-500",
  youtube:   "text-red-500",
  twitter:   "text-sky-500",
  linkedin:  "text-blue-600",
};

export const platformBadgeBg: Record<Platform, string> = {
  instagram: "bg-pink-50 text-pink-700",
  youtube:   "bg-red-50 text-red-700",
  twitter:   "bg-sky-50 text-sky-700",
  linkedin:  "bg-blue-50 text-blue-700",
};

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n.toString();
}
