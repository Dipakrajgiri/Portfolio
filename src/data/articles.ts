export type Article = {
  title: string;
  year: number;
  platform: string;
  tags: string[];
  url?: string;
};

export const articles: Article[] = [
  {
    title:
      "OAuth 2.0 Authorization Code Flow: Full Internal Mechanics with Real URLs and Validation Logic",
    year: 2025,
    platform: "Blog",
    tags: ["OAuth 2.0", "Security", "Authentication"],
  },
  {
    title:
      "Understanding AWS Identity, Roles, and Service Access Beyond Definitions",
    year: 2025,
    platform: "Blog",
    tags: ["AWS", "IAM", "Cloud Security"],
  },
  {
    title: "Deploying PERN Stack Applications on AWS Made Easier",
    year: 2025,
    platform: "Blog",
    tags: ["AWS", "PERN Stack", "Deployment", "DevOps"],
  },
  {
    title:
      "Scaling a MERN Stack Application on AWS Using Auto Scaling and Load Balancers",
    year: 2025,
    platform: "Blog",
    tags: ["AWS", "MERN Stack", "Auto Scaling", "Load Balancing"],
  },
  {
    title:
      "VPN vs Proxy: Understanding Communication Flow and Security Implications",
    year: 2025,
    platform: "Blog",
    tags: ["VPN", "Proxy", "Networking", "Security"],
  },
];
