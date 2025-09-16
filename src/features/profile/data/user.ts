import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Muneeb",
  lastName: "Ur Rehman",
  displayName: "Muneeb",
  username: "muneeb",
  gender: "male",
  pronouns: "he/him",
  bio: "Automation & Exploit Development",
  flipSentences: [
    "Offensive Security Specialist",
    "Python Engineer",
    "Automation & Exploit Development",
  ],
  address: "University Chowk, Bahawalpur, Pakistan",
  phoneNumber: "KzkyIDMwOCA2MDU4NDU1", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "bXVuZWVicmVobWFuLmluZm9zZWNAZ21haWwuY29t", // base64 encoded
  website: "https://muneebrehman.me",
  jobTitle: "Web Exploitation Engineer",
  jobs: [
    {
      title: "Red Team & Web Exploitation Engineer",
      company: "",
      website: "",
    },
  ],
  about: `
I don’t do “checklist security.” I break things — web apps, networks, assumptions and then build the tools to break them faster next time. My specialty is offensive security with a focus on web exploitation and red team operations, where flaws like JWT misconfigurations, OAuth loopholes, and race conditions aren’t just bugs to me, they’re puzzles waiting to be solved.\n
I’ve trained through Cisco Cybersecurity, Nahamsec’s bug bounty course, and OSCP prep work, but the real edge comes from live-fire experience, pushing systems until they show me their weakest point. I rank in the top 1% on TryHackMe not because I memorized playbooks, but because I refuse to stop until the problem bends.

If your defenses are predictable, I’ll find the angle you didn’t consider. And if they aren’t, I’ll automate until they are.
  `,
  avatar: "/brand/pfp.jpeg",
  ogImage:
    "/brand/og_image.jpeg",
  keywords: [
    "Muneeb ur rehman",
    "Muneeb",
    "Muneeb afzal",
    "Offensive Security",
    "Red Team Engineer",
    "Web Exploitation",
    "Bug Bounty Hunter",
    "Python Cybersecurity",
    "JWT Exploitation",
    "OAuth Security",
    "Race Condition Exploits",
    "Business Logic Flaws",
    "Access Control Bypass",
    "Privilege Escalation",
    "Network Enumeration",
    "Firewall Evasion",
    "Metasploit",
    "Nmap",
    "Burp Suite",
    "Kali Linux",
    "Scapy",
    "Automation in Cybersecurity",
    "OSCP Preparation",
    "Cisco Cybersecurity Certified",
    "TryHackMe Top 1%"
  ],
  dateCreated: "2025-09-13", // YYYY-MM-DD
};
