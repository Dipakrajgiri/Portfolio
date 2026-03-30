export type Experience = {
  company: string;
  role: string;
  type: "full-time" | "internship" | "volunteer" | "freelance" | "academic";
  startDate: string;
  endDate: string | "Present";
  description: string[];
  skills?: string[];
};

export const experience: Experience[] = [
  {
    company: "OneCloudUtopia",
    role: "DevOps Engineer",
    type: "full-time",
    startDate: "Apr 2025",
    endDate: "Present",
    description: [
      "Designed and managed AWS cloud infrastructure for client projects",
      "Monitored and optimized AWS cloud costs using Cost Explorer and Trusted Advisor",
      "Implemented CI/CD pipelines and automated deployment workflows",
    ],
    skills: ["AWS", "DevOps", "CI/CD", "CloudWatch", "Cost Optimization"],
  },
  {
    company: "OneCloudUtopia",
    role: "DevOps Engineer Intern",
    type: "internship",
    startDate: "Jan 2025",
    endDate: "Mar 2025",
    description: [
      "Assisted in AWS infrastructure setup and cloud deployments",
      "Supported monitoring configurations and basic cloud cost optimization",
      "Worked with EC2, VPC, IAM, and RDS as part of infrastructure provisioning",
    ],
    skills: ["AWS", "EC2", "VPC", "IAM", "RDS"],
  },
  {
    company: "AWS Cloud Training & Mentorship",
    role: "AWS Cloud Trainer & Technical Mentor",
    type: "freelance",
    startDate: "2025",
    endDate: "Present",
    description: [
      "Conducted structured training sessions on EC2, VPC, IAM, S3, RDS, and DevOps fundamentals",
      "Designed hands-on labs and architecture walkthroughs for 300+ learners",
      "Guided students toward AWS Cloud Practitioner certification readiness",
    ],
    skills: [
      "AWS Training",
      "Technical Mentorship",
      "Cloud Architecture",
      "Teaching",
    ],
  },
  {
    company: "Cybersecurity Club — Far Western University",
    role: "Technical Advisor",
    type: "volunteer",
    startDate: "2024",
    endDate: "2025",
    description: [
      "Conducted workshops on network security, ethical hacking, and secure coding practices",
      "Mentored students on cybersecurity fundamentals and CTF challenges",
    ],
    skills: [
      "Network Security",
      "Ethical Hacking",
      "Secure Coding",
      "Mentorship",
    ],
  },
  {
    company: "Innovative Engineering Club — Far Western University",
    role: "Vice President",
    type: "volunteer",
    startDate: "2023",
    endDate: "2024",
    description: [
      "Organized innovation challenges, project showcases, and student-industry collaborations",
      "Conducted hands-on training sessions on Git, GitHub, and UI/UX fundamentals for students",
    ],
    skills: ["Leadership", "Event Organization", "Git", "GitHub", "UI/UX"],
  },
  {
    company: "Code for Change — Far West Region",
    role: "College Representative",
    type: "volunteer",
    startDate: "2024",
    endDate: "2024",
    description: [
      "Delivered C programming training sessions and bootcamps",
      "Served as part of the organizing team for hackathons and ideation programs across colleges",
    ],
    skills: ["C Programming", "Event Coordination", "Hackathon Organization"],
  },
  {
    company: "College Academic Projects",
    role: "Project Leader & Full-Stack AI Developer",
    type: "academic",
    startDate: "2023",
    endDate: "2025",
    description: [
      "Led weekly project meetings with team members and supervisors",
      "Managed task distribution and tracked project milestones",
      "Developed AI-powered features including NLP chatbots, recommendation systems, and deep learning models",
      "Built full-stack applications with React frontend and FastAPI / Node.js backend",
    ],
    skills: [
      "Project Management",
      "AI Development",
      "Full-Stack Development",
      "Team Leadership",
    ],
  },
];
