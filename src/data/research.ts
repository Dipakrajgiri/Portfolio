export type ResearchPaper = {
  title: string;
  conference: string;
  year: number;
  description: string;
  tags: string[];
  recognition?: string;
};

export const research: ResearchPaper[] = [
  {
    title:
      "PlantNetV1: A Deep Learning-Based Approach for Plant Disease Detection",
    conference:
      "Second International Conference on Heritage, Innovation and Transformation",
    year: 2025,
    description:
      "Research on using CNNs for accurate, real-time plant disease classification from leaf images, aimed at empowering farmers with early diagnosis tools.",
    tags: ["CNN", "Deep Learning", "Image Classification", "Agriculture"],
  },
  {
    title: "Suspicious Transaction Detection: DeepDefend",
    conference:
      "First International Conference on Emerging Research Trends and Innovation in Quality Education and Sustainable Development",
    year: 2025,
    description:
      "A research paper presenting the DeepDefend multi-stage AI approach for financial fraud detection, combining anomaly detection and supervised ML.",
    tags: ["Fraud Detection", "Machine Learning", "Anomaly Detection", "FinTech"],
    recognition:
      "Awarded 'Extremely Useful Research Paper' by Global IME Bank",
  },
  {
    title: "Suspicious Transaction Detection (Hackathon Proposal)",
    conference: "Global IME Bank Hackathon",
    year: 2025,
    description:
      "The hackathon proposal document that formed the basis of DeepDefend, recognized independently by Global IME Bank.",
    tags: ["Financial AI", "Hackathon", "Research Proposal"],
    recognition:
      "Recognized by Global IME Bank — Awarded 'Extremely Useful Research Paper'",
  },
];
