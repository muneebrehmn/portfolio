import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance-2023-present",
    companyName: "Freelance",
    positions: [
      {
        id: "offsec-2023-present",
        title: "Offensive Security Engineer",
        employmentPeriod: {
          start: "07.2023",
          end: "Present",
        },
        employmentType: "Freelance",
        description: `- Conducting penetration tests and red-team operations on web apps, APIs, and networks.
- Identifying and reporting vulnerabilities such as authentication bypasses, misconfigurations, and privilege escalation issues.
- Developing custom tools and scripts in Python for reconnaissance, automation, and exploit PoCs.
- Providing remediation guidance and collaborating with clients on security hardening.`,
        icon: "code",
        skills: [
          "Web Exploitation",
          "Penetration Testing",
          "Red Teaming",
          "Bug Bounty",
          "Python",
          "Burp Suite",
          "Nmap",
          "Reporting",
        ],
       isExpanded: true,
      },
    ],
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "bs-cyber-2023-present",
        title: "B.S. Cyber Security — The Islamia University of Bahawalpur",
        employmentPeriod: {
          start: "08.2023",
          end: "Present",
        },
        icon: "education",
        description: `- Pursuing a Bachelor of Science in Cyber Security.
- Coursework includes penetration testing, network security, cryptography, and forensics.`,
        skills: [
          "Network Security",
          "Cryptography",
          "Penetration Testing",
          "System Hardening",
          "Digital Forensics",
        ],
      },
      {
        id: "fsc-preeng-2021-2023",
        title: "F.Sc. Pre-Engineering — Fazaia Degree College Rafiqui, Shorkot Cantt",
        employmentPeriod: {
          start: "08.2021",
          end: "06.2023",
        },
        icon: "education",
        description: `- Completed F.Sc. Pre-Engineering with a focus on mathematics, physics, and computing fundamentals.
- Built strong analytical and problem-solving foundations.`,
        skills: ["Mathematics", "Physics", "Problem Solving"],
      },
    ],
  },
];
