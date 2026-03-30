export type Project = {
  id: string;
  title: string;
  subtitle: string;
  type: "Major Project" | "Minor Project" | "Hackathon" | "DevOps" | "Academic";
  year: number;
  description: string;
  detailedDescription: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  youtubeUrl?: string;
  youtubeEmbedId?: string;
  featured: boolean;
  achievement?: string;
};

export const projects: Project[] = [
  {
    id: "moodomic",
    title: "Moodomic",
    subtitle: "AI-Powered Mental Health Platform",
    type: "Major Project",
    year: 2025,
    description:
      "A full-stack AI mental health platform with a CBT-based chatbot, mood journaling, and personalized recommendations using fine-tuned NLP models.",
    detailedDescription:
      "Built as a major college project, Moodomic is a comprehensive mental health platform that integrates Cognitive Behavioral Therapy (CBT) modules with an AI-powered chatbot. The system uses a fine-tuned DistilBERT model for sentiment/mood analysis and LangChain with RAG for contextual, evidence-based mental health conversations. The backend is powered by FastAPI and Node.js with a React frontend, offering scalable architecture and secure JWT authentication.",
    technologies: [
      "React",
      "Node.js",
      "FastAPI",
      "LangChain",
      "RAG",
      "DistilBERT",
      "MongoDB",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/Dipakrajgiri",
    youtubeUrl: "https://www.youtube.com/watch?v=Zyj87kJm3no",
    youtubeEmbedId: "Zyj87kJm3no",
    featured: true,
  },
  {
    id: "krishigpt",
    title: "KrishiGPT (KhetTracker)",
    subtitle: "AI-Based Agriculture Advisory System",
    type: "Hackathon",
    year: 2025,
    description:
      "An AI-driven advisory system delivering real-time, localized crop recommendations to Nepali farmers using LangChain and RAG pipelines.",
    detailedDescription:
      "Developed during the Hack for Nepal – NCIT Hackathon 2025, KhetTracker (KrishiGPT) is an AI-powered agricultural advisory system tailored for Nepali farmers. It delivers localized, real-time crop management guidance using a RAG pipeline built on LangChain, integrating local agricultural knowledge bases. The system was built in under 24 hours and won 4th Overall and Best UI/UX at the hackathon.",
    technologies: ["FastAPI", "LangChain", "RAG", "REST APIs", "Python"],
    githubUrl: "https://github.com/Dipakrajgiri",
    youtubeUrl: "https://www.youtube.com/watch?v=t6rCWoVzcE0",
    youtubeEmbedId: "t6rCWoVzcE0",
    featured: true,
    achievement: "4th Overall + Best UI/UX — Hack for Nepal NCIT 2025",
  },
  {
    id: "deepdefend",
    title: "DeepDefend",
    subtitle: "AI-Based Financial Fraud Detection",
    type: "Hackathon",
    year: 2025,
    description:
      "A multi-stage AI system detecting suspicious financial transactions in real time using statistical analysis, ML, and anomaly detection.",
    detailedDescription:
      "Built for the Global IME Bank Hackathon 2025, DeepDefend is a production-grade multi-stage AI fraud detection system. It combines rule-based statistical analysis, supervised ML classifiers (Scikit-learn), and unsupervised anomaly detection to flag suspicious transactions. The system is containerized with Docker and served through FastAPI, with results visualized via Matplotlib and Seaborn dashboards. The accompanying research paper was recognized by Global IME Bank as 'Extremely Useful.'",
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "Docker",
      "Matplotlib",
      "Seaborn",
    ],
    githubUrl: "https://github.com/Dipakrajgiri",
    featured: true,
    achievement:
      "1st Place — Suspicious Transaction Detection, Global IME Bank Hackathon 2025",
  },
  {
    id: "vecrosoft",
    title: "VecroSoft",
    subtitle: "Plant Disease Detection System",
    type: "Minor Project",
    year: 2024,
    description:
      "A CNN-based plant disease detection platform allowing farmers to upload crop images for early-stage diagnosis via a MERN stack web app.",
    detailedDescription:
      "VecroSoft is a minor college project that demonstrates practical computer vision in agriculture. Farmers can upload images of plant leaves through a React interface; a trained CNN model (TensorFlow/Keras) classifies the disease and returns actionable recommendations. The system uses Node.js and MongoDB for the backend.",
    technologies: ["CNN", "TensorFlow", "React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Dipakrajgiri",
    youtubeUrl: "https://www.youtube.com/watch?v=g1PswkPB0x8",
    youtubeEmbedId: "g1PswkPB0x8",
    featured: false,
  },
  {
    id: "bloodstar",
    title: "BloodStar",
    subtitle: "Blood Donor Recommendation System",
    type: "Academic",
    year: 2024,
    description:
      "A location-aware platform connecting users to nearby blood donors quickly during medical emergencies, built with the PERN stack.",
    detailedDescription:
      "BloodStar is an academic information system project that helps users find compatible blood donors near them in urgent situations. The system uses location-based queries on a PostgreSQL database, served through Node.js/Express.js APIs and a React frontend.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/Dipakrajgiri",
    featured: false,
  },
  {
    id: "aws-cloudformation-templates",
    title: "AWS CloudFormation Templates Library",
    subtitle: "Reusable IaC Templates for AWS",
    type: "DevOps",
    year: 2025,
    description:
      "A library of parameterized, reusable CloudFormation templates for provisioning core AWS resources consistently across environments.",
    detailedDescription:
      "A DevOps project focused on Infrastructure as Code best practices. Built reusable CloudFormation templates for VPCs, EC2 instances, IAM roles, and RDS instances, enabling consistent multi-environment provisioning. Designed to reduce setup time and enforce organizational standards.",
    technologies: ["AWS CloudFormation", "VPC", "EC2", "IAM", "RDS"],
    githubUrl: "https://github.com/Dipakrajgiri",
    featured: false,
  },
];
