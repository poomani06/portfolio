// Central portfolio content for Poomani N — proof-based cybersecurity portfolio.
// All fields here reflect the candidate's real background. Proof images are
// left as `null` until the real certificate/screenshot files are uploaded; the UI
// shows a clearly-marked DEMO placeholder until then.

export type SkillLevel = "Foundational" | "Beginner" | "Basic" | "Hands-on" | "Currently Learning";

export interface ToolDetail {
  name: string;
  what: string; // short explanation of what the tool is
  purpose: string; // main purpose / use
  level: SkillLevel;
  where?: string;
  logo: string | null;
}

export const profile = {
  name: "Poomani N",
  title: "Cybersecurity Professional",
  location: "Madurai, India",
  email: "poomanin66005@gmail.com",
  phone: "+91 8610512242",
  linkedin: "https://www.linkedin.com/in/poomanin",
  linkedinLabel: "linkedin.com/in/poomanin",
  github: "https://github.com/poomani06",
  intro:
    "Cybersecurity professional with hands-on internship exposure to vulnerability scanning, security assessment, phishing simulation, and security reporting. Currently building practical skills in SOC fundamentals, log analysis, and SIEM concepts.",
  shortIntro:
    "Cybersecurity professional with internship experience in vulnerability assessment, security reporting, and SOC fundamentals.",
};

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Tools", id: "tools" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Education", id: "education" },
  { label: "Learning", id: "learning" },
  { label: "Contact", id: "contact" },
];

export interface SkillGroup {
  title: string;
  level: SkillLevel;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Cybersecurity Fundamentals",
    level: "Foundational",
    skills: [
      "Security Concepts",
      "Risk Assessment",
      "Security Reporting",
      "Vulnerability Validation",
      "CVSS Severity Rating",
    ],
  },
  {
    title: "SOC / Blue Team",
    level: "Beginner",
    skills: [
      "Log Collection",
      "Log Monitoring",
      "Alert Generation",
      "Alert Investigation",
      "Incident Analysis",
      "Escalation",
      "Documentation",
    ],
  },
  {
    title: "Vulnerability Assessment",
    level: "Hands-on",
    skills: [
      "Vulnerability Scanning",
      "Open Port Identification",
      "Insecure Service Detection",
      "VAPT Reporting",
      "Risk Classification",
      "Remediation Recommendations",
    ],
  },
  {
    title: "Network Fundamentals",
    level: "Basic",
    skills: ["Network Discovery", "Port Scanning", "Packet Analysis"],
  },
  {
    title: "Web Security",
    level: "Basic",
    skills: [
      "Basic OWASP Top 10 Awareness",
      "Basic Web Security Concepts",
      "Reconnaissance Fundamentals",
    ],
  },
  {
    title: "Programming",
    level: "Basic",
    skills: ["Basic Java", "Basic Python"],
  },
];

// Optional richer detail shown when a visitor clicks an individual skill.
export const skillDetails: Record<
  string,
  { purpose: string; level: SkillLevel; where?: string }
> = {
  "Vulnerability Scanning": {
    purpose: "Running scans to identify known vulnerabilities in systems and services.",
    level: "Hands-on",
    where: "CypherDote internship (Nessus)",
  },
  "VAPT Reporting": {
    purpose: "Documenting security findings with risk classification and remediation guidance.",
    level: "Hands-on",
    where: "CypherDote internship",
  },
  "Risk Classification": {
    purpose: "Rating findings by severity (e.g. CVSS) to prioritise remediation.",
    level: "Hands-on",
    where: "CypherDote internship",
  },
  "Log Collection": {
    purpose: "Collecting logs from servers, systems, firewalls, and other devices.",
    level: "Beginner",
    where: "Eagle-HiTech internship (SOC L1 basics)",
  },
  "Alert Investigation": {
    purpose: "Checking alert details (user, IP, time, system, activity) to understand an event.",
    level: "Beginner",
    where: "Eagle-HiTech internship (SOC L1 basics)",
  },
  "Basic OWASP Top 10 Awareness": {
    purpose: "Basic awareness of common web application security risks — not expert level.",
    level: "Basic",
  },
  "Basic Web Security Concepts": {
    purpose: "Foundational understanding of web security concepts.",
    level: "Basic",
  },
  "Network Discovery": {
    purpose: "Mapping live hosts and services on a network.",
    level: "Basic",
  },
  "Port Scanning": {
    purpose: "Identifying open ports and running services.",
    level: "Basic",
    where: "CypherDote internship (Nmap)",
  },
  "Packet Analysis": {
    purpose: "Inspecting network traffic to understand activity.",
    level: "Basic",
    where: "Learning (Wireshark)",
  },
};

export const tools: ToolDetail[] = [
  {
    name: "Nessus",
    what: "A vulnerability scanner that checks systems for known security weaknesses.",
    purpose: "Used to scan systems and report vulnerabilities with severity levels.",
    level: "Hands-on",
    where: "CypherDote internship",
    logo: "/logos/nessus.svg",
  },
  {
    name: "Nmap",
    what: "A network scanning tool used to discover hosts and services.",
    purpose: "Used to find live hosts, open ports, and running services.",
    level: "Basic",
    where: "CypherDote internship",
    logo: "/logos/nmap.svg",
  },
  {
    name: "Wireshark",
    what: "A network protocol analyzer that captures network traffic.",
    purpose: "Used to inspect packets and understand network activity.",
    level: "Basic",
    where: "Learning",
    logo: "/logos/wireshark.svg",
  },
  {
    name: "Metasploit",
    what: "A security testing framework with modules for known vulnerabilities.",
    purpose: "Used in a lab environment to validate vulnerabilities.",
    level: "Basic",
    where: "Learning",
    logo: "/logos/metasploit.svg",
  },
  {
    name: "Burp Suite",
    what: "A web application security testing tool that works as a proxy.",
    purpose: "Used to view and test web requests and responses.",
    level: "Basic",
    where: "Learning",
    logo: "/logos/burpsuite.svg",
  },
  {
    name: "OWASP ZAP",
    what: "An open-source web application security scanner.",
    purpose: "Used to run basic scans on web applications for common issues.",
    level: "Basic",
    where: "Learning",
    logo: "/logos/owasp.svg",
  },
  {
    name: "Splunk",
    what: "A SIEM platform that collects and searches log data.",
    purpose: "Used to learn log searching, monitoring, and alert basics.",
    level: "Currently Learning",
    where: "Self-study",
    logo: "/logos/splunk.svg",
  },
  {
    name: "Kali Linux",
    what: "A Linux distribution that comes with security tools pre-installed.",
    purpose: "Used as the practice environment for running security tools.",
    level: "Basic",
    where: "Learning",
    logo: "/logos/kalilinux.svg",
  },
  {
    name: "FTK Imager",
    what: "A digital forensics tool for creating and viewing disk images.",
    purpose: "Used to learn how forensic images are acquired and previewed.",
    level: "Currently Learning",
    where: "Learning",
    logo: "/logos/ftkimager.svg",
  },
  {
    name: "Autopsy",
    what: "An open-source digital forensics platform for analysing disk images.",
    purpose: "Used to learn basic examination of files and artifacts in an image.",
    level: "Currently Learning",
    where: "Learning",
    logo: "/logos/autopsy.svg",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  proofImage: string | null; // internship certificate — null = DEMO placeholder
}

export const experiences: Experience[] = [
  {
    role: "Cybersecurity Intern",
    company: "CypherDote",
    period: "August 2025 – January 2026",
    location: "Trichy, Tamil Nadu",
    summary:
      "Cybersecurity intern with practical exposure to security assessment, vulnerability scanning, phishing simulation, and security reporting.",
    points: [
      "Phishing simulation campaigns using the CypherDote CAPS platform.",
      "User behavior and campaign result analysis.",
      "Nessus vulnerability scanning.",
      "Identifying insecure services and open ports.",
      "VAPT reporting with security findings, risk classification, and remediation recommendations.",
      "Attack surface monitoring and exposure analysis.",
    ],
    proofImage: "/certificates/cypherdote-internship.jpeg",
  },
  {
    role: "SOC / Cybersecurity Intern",
    company: "Eagle-HiTech",
    period: "June – July 2026",
    location: "Chennai, Tamil Nadu",
    summary: "Learned the basic work of a SOC L1 Analyst during the internship.",
    points: [
      "Log Collection: Learned how to collect logs from servers, systems, firewalls, and other devices.",
      "Log Monitoring: Monitored logs to find unusual or suspicious activities.",
      "Alert Generation: Learned how alerts are generated when suspicious activity is detected.",
      "Alert Investigation: Checked alert details such as username, IP address, time, system, and type of activity.",
      "Incident Analysis: Checked whether the alert was a real security issue or normal activity.",
      "Escalation: Learned how to escalate serious issues to the L2/security team.",
      "Documentation: Learned how to record investigation details and actions taken.",
    ],
    proofImage: "/certificates/eagle-hitech-internship.jpeg",
  },
];

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  subtitle: string;
  logo: string | null;
  shortDescription: string;
  description: string;
  problem: string;
  solution: { label: string; text: string }[];
  technologies: string[];
  datasets: string[];
  features: { title: string; text?: string }[];
  tags: string[];
  images: ProjectImage[]; // replace with real screenshots
}

export const project: Project = {
  title: "FakeXpose",
  subtitle: "Multimodal Deepfake Detection System",
  logo: "/projects/fakexpose-logo.svg",
  shortDescription:
    "A multimodal deepfake detection system for images, videos, and audio.",
  description:
    "FakeXpose is a multimodal deepfake detection system designed to identify manipulated or AI-generated images, videos, and audio.",
  problem:
    "AI-generated deepfake content can manipulate facial expressions, lip movements, and voices with high realism. This creates risks such as misinformation, identity misuse, financial scams, and difficulties in verifying digital evidence.",
  solution: [
    { label: "Image Detection", text: "Uses Xception to identify image-level manipulation." },
    {
      label: "Video Detection",
      text: "Extracts video frames and performs frame-level predictions, followed by median aggregation for video-level classification.",
    },
    {
      label: "Audio Detection",
      text: "Uses WavLM speech embeddings to identify synthetic or manipulated speech.",
    },
    { label: "Backend API", text: "Flask exposes the detection functionality through APIs." },
    { label: "Storage", text: "MongoDB Atlas stores detection results and metadata." },
  ],
  technologies: [
    "Python",
    "PyTorch",
    "Xception",
    "WavLM",
    "Flask",
    "HTML",
    "CSS",
    "Bootstrap",
    "OpenCV",
    "Librosa",
    "MongoDB Atlas",
    "PyMongo",
    "VS Code",
  ],
  datasets: ["FaceForensics++ (FF++)", "ASVspoof"],
  features: [
    { title: "Multimedia Detection", text: "Image, video, and audio" },
    { title: "Frame-Level Video Analysis" },
    { title: "Median Aggregation" },
    { title: "AI-Based Audio Analysis" },
    { title: "API-Based Architecture" },
    { title: "Cloud Database" },
    { title: "Web Interface" },
  ],
  tags: ["Python", "PyTorch", "Xception", "WavLM", "Flask", "MongoDB Atlas"],
  images: [
    { src: "/projects/fakexpose-1.png", alt: "FakeXpose login portal" },
    { src: "/projects/fakexpose-2.png", alt: "FakeXpose prediction dashboard" },
    { src: "/projects/fakexpose-3.png", alt: "FakeXpose upload and new analysis screen" },
    { src: "/projects/fakexpose-4.png", alt: "FakeXpose image manipulation result" },
    { src: "/projects/fakexpose-5.png", alt: "FakeXpose video frame-level analysis" },
    { src: "/projects/fakexpose-6.png", alt: "FakeXpose audio speech analysis" },
  ],
};

export interface Certification {
  name: string;
  issuer: string;
  image: string | null; // real certificate — null = DEMO placeholder
  category: "Certification" | "Internship";
  whatIsThis: string;
  purpose: string;
  whatILearned: string;
  whereUseful: string;
  certificateUrl?: string;
}

// Internship certificates live only in the Experience section (proofImage).
export const certifications: Certification[] = [
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    image: "/certificates/cybersecurity-essentials.jpeg",
    category: "Certification",
    whatIsThis: "A foundational cybersecurity course focused on the basic principles of cyber safety, threats, and digital security concepts.",
    purpose: "To build a clear understanding of common cybersecurity topics and how digital systems can be protected.",
    whatILearned: "I learned basic cyber threat concepts, online safety practices, and the role of secure behavior in protecting devices and data.",
    whereUseful: "This is useful for understanding the basics of cybersecurity, safe digital habits, and how security practices apply in everyday technology use.",
    certificateUrl: "/certificates/cybersecurity-essentials.jpeg",
  },
  {
    name: "Network Security Fundamentals",
    issuer: "GUVI",
    image: "/certificates/cybersecurity-essentials.jpeg",
    category: "Certification",
    whatIsThis: "A learning program on key network security concepts and the basics of securing networks and connected systems.",
    purpose: "To understand how networks are protected and how common security measures reduce risk in connected environments.",
    whatILearned: "I learned about network security foundations, access control basics, common threats, and the importance of securing network services.",
    whereUseful: "This is useful for understanding how network protection works in real-world environments, especially in system and security operations.",
    certificateUrl: "/certificates/cybersecurity-essentials.jpeg",
  },
  {
    name: "Fundamentals of Information Security",
    issuer: "Infosys Springboard",
    image: "/certificates/fundamentals-of-information-security.jpeg",
    category: "Certification",
    whatIsThis: "A fundamentals-based information security course covering basic concepts, risks, and security principles used in digital systems.",
    purpose: "To introduce the core ideas behind protecting information, systems, and digital assets from risk.",
    whatILearned: "I learned the basic concepts of information security, risk awareness, and how confidentiality, integrity, and availability are maintained.",
    whereUseful: "This is useful for building a strong foundation in information protection and understanding how security practices support safe technology usage.",
    certificateUrl: "/certificates/fundamentals-of-information-security.jpeg",
  },
  {
    name: "Foundation of Cyber Security",
    issuer: "Coursera",
    image: "/certificates/foundation-of-cyber-security.jpeg",
    category: "Certification",
    whatIsThis: "A beginner-level cybersecurity course focused on foundational security concepts and core digital protection principles.",
    purpose: "To strengthen understanding of cybersecurity basics and the importance of secure systems and controls.",
    whatILearned: "I learned the main principles of cybersecurity, the role of security controls, and how common digital risks are addressed in practice.",
    whereUseful: "This is useful for learning the fundamentals of cybersecurity and creating a base for further study in security operations and risk management.",
    certificateUrl: "/certificates/foundation-of-cyber-security.jpeg",
  },
  {
    name: "ISO/IEC 27001 Information Security Associate",
    issuer: "SkillFront",
    image: "/certificates/iso-27001-associate.jpeg",
    category: "Certification",
    whatIsThis: "A certification-oriented learning program on ISO/IEC 27001 concepts and information security management practices.",
    purpose: "To understand the basics of information security management systems and the role of governance and control frameworks.",
    whatILearned: "I learned the basic structure of ISO/IEC 27001, security governance concepts, and how information security is managed through policies and controls.",
    whereUseful: "This is useful for understanding governance, risk, and compliance foundations, especially in security operations and information protection contexts.",
    certificateUrl: "/certificates/iso-27001-associate.jpeg",
  },
];

export interface EducationItem {
  institution: string;
  place: string;
  degree: string;
  years?: string;
  detail: string;
  proof: string | null;
}

export const education: EducationItem[] = [
  {
    institution: "P.S.N.A. College of Engineering and Technology",
    place: "Dindigul, Tamil Nadu",
    degree: "B.E. Cybersecurity",
    years: "2023 - 2027",
    detail: "CGPA: 8.3",
    proof: null,
  },
  {
    institution: "Government Girls Higher Secondary School",
    place: "Karungalakudi",
    degree: "Higher Secondary Education",
    detail: "12th Percentage: 87.66%",
    proof: null,
  },
];

export const learning = [
  { title: "SOC Fundamentals", description: "Learning the fundamentals of Security Operations Center workflows and security monitoring." },
  { title: "Basic Log Analysis", description: "Learning how to understand authentication and security-related logs and identify suspicious activity." },
  { title: "SIEM Concepts", description: "Learning the fundamentals of SIEM, security event collection, monitoring, and alert investigation." },
  { title: "Alert Investigation", description: "Learning how to investigate alerts and determine whether activity is a real security issue." },
  { title: "GRC Fundamentals", description: "Learning the basics of Governance, Risk, and Compliance — policies, risk management, and security standards." },
  { title: "Security Monitoring", description: "Learning continuous monitoring of logs and systems for suspicious activity." },
];

// Real profile photo path. Save the actual image at public/profile-photo.jpg.
export const profilePhoto: string | null = "/profile-photo.jpg";

export const securityKnowledge: string[] = [
  "Vulnerability scanning and validation of findings",
  "Risk classification and CVSS severity rating",
  "VAPT reporting with remediation recommendations",
  "Network discovery, port scanning and packet analysis basics",
  "Basic OWASP Top 10 awareness",
  "SOC L1 basics: log collection, alert investigation, escalation",
];
