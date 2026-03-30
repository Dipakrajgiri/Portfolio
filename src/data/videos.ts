export type Video = {
  title: string;
  description: string;
  youtubeId: string;
  youtubeUrl: string;
  duration: string;
  views: string;
  project: string;
  tags: string[];
};

export const videos: Video[] = [
  {
    title:
      "Moodomic — AI-Based Mood Tracking & Mental Health Platform Demo",
    description:
      "Full demo of Moodomic, the major college project: MERN + RAG + Fine-Tuned DistilBERT for mental health support.",
    youtubeId: "Zyj87kJm3no",
    youtubeUrl: "https://www.youtube.com/watch?v=Zyj87kJm3no",
    duration: "12:28",
    views: "23 views",
    project: "moodomic",
    tags: ["AI", "Mental Health", "MERN", "RAG", "DistilBERT"],
  },
  {
    title: "VecroSoft — AI-Based Leaf Disease Detection System (CNN + MERN)",
    description:
      "Demo of VecroSoft, a CNN-based plant disease detection system built with the MERN stack.",
    youtubeId: "g1PswkPB0x8",
    youtubeUrl: "https://www.youtube.com/watch?v=g1PswkPB0x8",
    duration: "7:29",
    views: "18 views",
    project: "vecrosoft",
    tags: ["CNN", "Plant Disease", "MERN", "Computer Vision"],
  },
  {
    title:
      "KhetTracker (KrishiGPT) — AI-Driven Agricultural Advisory System",
    description:
      "Hackathon final demo for KhetTracker, an AI crop advisory system built at Hack for Nepal 2025.",
    youtubeId: "t6rCWoVzcE0",
    youtubeUrl: "https://www.youtube.com/watch?v=t6rCWoVzcE0",
    duration: "6:38",
    views: "76 views",
    project: "krishigpt",
    tags: ["Agriculture", "LangChain", "RAG", "Hackathon"],
  },
];
