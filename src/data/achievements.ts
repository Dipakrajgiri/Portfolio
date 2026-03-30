export type Achievement = {
  title: string;
  position: string;
  overall?: string;
  year: number;
  description: string;
  project?: string;
  icon: string;
};

export const achievements: Achievement[] = [
  {
    title: "Global IME Bank Hackathon",
    position: "1st Place — Suspicious Transaction Detection",
    overall: "4th Overall",
    year: 2025,
    description:
      "Won 1st place in the Suspicious Transaction Detection challenge; ranked 4th overall among all competing teams.",
    project: "DeepDefend",
    icon: "Trophy",
  },
  {
    title: "Hack for Nepal — NCIT Hackathon",
    position: "4th Overall + Best UI/UX Award",
    year: 2025,
    description:
      "Secured 4th place overall and won the Best UI/UX Award for developing KhetTracker, an AI-powered agriculture advisory system.",
    project: "KrishiGPT (KhetTracker)",
    icon: "Award",
  },
  {
    title: "NASA Space Apps Challenge",
    position: "Regional Winner (Dhangadhi) + Global Top 1000",
    year: 2024,
    description:
      "Won the Dhangadhi regional round and placed in the Global Top 1000 out of thousands of worldwide submissions for an AI-based climate analytics project.",
    icon: "Rocket",
  },
  {
    title: "Geotechnical Model Competition",
    position: "4th Place",
    year: 2024,
    description:
      "Achieved 4th place for an Arduino-based earthquake detection system.",
    icon: "Layers",
  },
  {
    title: "AWS Cloud Training Impact",
    position: "Milestone",
    year: 2025,
    description:
      "Successfully guided 300+ learners toward AWS Cloud fundamentals and certification readiness through structured training sessions, labs, and architecture walkthroughs.",
    icon: "Users",
  },
];
