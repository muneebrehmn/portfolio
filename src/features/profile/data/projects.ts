import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "phantom",
    title: "Phantom",
    period: {
      start: "05.2025",
    },
    link: "https://github.com/muneebrehmn/phantom",
    skills: [
      "Python",
      "Prompt Injection",
      "LLM Security",
      "Async/Await",
      "Semantic Analysis",
      "Sentence Transformers",
      "CVSS Scoring",
      "Burp Suite",
      "Offensive Security",
      "CLI Tooling",
    ],
    description: `Automated prompt injection reconnaissance framework for LLM-powered applications. 6-phase async pipeline covering the full attack lifecycle.
- 🔍 Crawl → Fingerprint → Classify → Inject → Analyze → Report pipeline with async concurrency
- 💣 588 payloads across 16 attack vectors (jailbreak, role confusion, system prompt leak, encoding bypass, and more)
- 🧠 Semantic success detection via sentence embeddings — classifies responses as refusal vs compliance
- 📊 CVSS-scored findings exported as Markdown, JSON, and interactive HTML dashboard
- 🌐 Multilingual payload coverage: Arabic, Chinese, Spanish, French, Russian, Japanese`,
    logo: "",
    isExpanded: true,
  },
  {
    id: "python-network-scanner",
    title: "Python Network Scanner",
    period: {
      start: "11.2024",
    },
    link: "https://github.com/saeen-do/network-scanner",
    skills: [
      "Python",
      "Scapy",
      "PrettyTable",
      "Mac-Vendor-Lookup",
      "ARP/ICMP Discovery",
      "Packet Crafting",
      "Local Network Recon",
      "CLI Tooling",
    ],
    description: `Scapy-based network scanner that provides fast host discovery and vendor identification with clean, tabular CLI output.
- 🔎 Fast ARP/ICMP host discovery and basic port checks
- 🧾 PrettyTable output for readable terminal reports
- 🏷️ MAC vendor lookup to quickly identify device manufacturers
- ⚙️ Lightweight, single-file CLI suitable for quick triage on local networks
- 🛡️ Designed for red-team recon and lab enumeration workflows`,
    logo: "",
    isExpanded: true,
  },
  {
    id: "encryption-decryption-suite",
    title: "Encryption & Decryption Suite",
    period: {
      start: "10.2024",
    },
    link: "https://github.com/saeen-do/project_encoding",
    skills: [
      "Python",
      "Hashing (SHA1/SHA256/SHA3)",
      "CRC Algorithms",
      "File I/O",
      "Streaming Hash",
      "CLI",
      "Data Integrity",
      "Custom Encryption Workflows",
    ],
    description: `A versatile Python utility for hashing, verification, and custom encryption/decryption workflows.
- ✅ Support for all major SHA families and multiple CRC variants
- 🔐 Tools for file hashing, integrity verification, and incremental hashing of large files
- 🧩 Extensible plugins for custom encryption/decryption pipelines
- 📁 CLI-first design for integration into scripts and automation pipelines
- 📜 Use cases: secure file exchange, forensic hashing, and integrity checks in CI/CD`,
    logo: "",
  },
  {
    id: "reconmap",
    title: "ReconMap",
    period: {
      start: "05.2025",
    },
    link: "https://github.com/saeen-do/reconmap",
    skills: [
      "Recon Automation",
      "Web UI",
      "FastAPI",
      "React",
      "Docker",
      "Modular Plugins",
      "Reporting",
      "Tool Integrations (ffuf, nmap, etc.)",
    ],
    description: `Lightweight, modular web framework for automating reconnaissance and basic pentest workflows.
- 🧱 Plugin architecture to combine open-source tools (nmap, ffuf, gobuster) into repeatable pipelines
- 🖥️ Clean web UI for launching scans, viewing structured results, and exporting reports
- 🐳 Dockerized deployment for portable lab setups and team use
- 📊 Structured reporting to speed handoffs between recon and exploitation phases
- 🎯 Built for security pros: red teamers, bug bounty hunters, and training labs`,
    logo: "",
  },
];
