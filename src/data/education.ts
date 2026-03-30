export type Education = {
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  cgpa: string;
  distinction: string;
  semesterGPAs: number[];
  electives: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: number;
  description: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Far Western University",
    location: "Bhimdatt–18, Kanchanpur, Nepal",
    startYear: 2021,
    endYear: 2025,
    cgpa: "3.59",
    distinction: "Batch Topper",
    semesterGPAs: [3.26, 3.41, 3.52, 3.52, 3.61, 3.68, 3.86, 3.76],
    electives: [
      "Image Processing and Pattern Recognition (7th Semester)",
      "Machine Learning (8th Semester)",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: 2025,
    description:
      "Demonstrated strong understanding of AWS Cloud concepts, security, pricing, and architectural best practices.",
  },
  {
    title: "Licensed Computer Engineer",
    issuer: "Nepal Engineering Council",
    year: 2025,
    description: "Officially licensed as a Computer Engineer in Nepal.",
  },
];
