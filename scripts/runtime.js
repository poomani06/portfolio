(() => {
  const experiences = [
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
      proofImage: "certificates/cypherdote-internship.jpeg",
    },
    {
      role: "SOC / Cybersecurity Intern",
      company: "Eagle-HiTech",
      period: "June – July 2026",
      location: "Chennai, Tamil Nadu",
      summary:
        "Learned the basic work of a SOC L1 Analyst during the internship.",
      points: [
        "Log Collection: Learned how to collect logs from servers, systems, firewalls, and other devices.",
        "Log Monitoring: Monitored logs to find unusual or suspicious activities.",
        "Alert Generation: Learned how alerts are generated when suspicious activity is detected.",
        "Alert Investigation: Checked alert details such as username, IP address, time, system, and type of activity.",
        "Incident Analysis: Checked whether the alert was a real security issue or normal activity.",
        "Escalation: Learned how to escalate serious issues to the L2/security team.",
        "Documentation: Learned how to record investigation details and actions taken.",
      ],
      proofImage: "certificates/eagle-hitech-internship.jpeg",
    },
  ];

  const project = {
    title: "FakeXpose",
    subtitle: "Multimodal Deepfake Detection System",
    logo: "projects/fakexpose-logo.svg",
    shortDescription:
      "A multimodal deepfake detection system for images, videos, and audio.",
    description:
      "FakeXpose is a multimodal deepfake detection system designed to identify manipulated or AI-generated images, videos, and audio.",
    problem:
      "AI-generated deepfake content can manipulate facial expressions, lip movements, and voices with high realism. This creates risks such as misinformation, identity misuse, financial scams, and difficulties in verifying digital evidence.",
    solution: [
      {
        label: "Image Detection",
        text: "Uses Xception to identify image-level manipulation.",
      },
      {
        label: "Video Detection",
        text: "Extracts video frames and performs frame-level predictions, followed by median aggregation for video-level classification.",
      },
      {
        label: "Audio Detection",
        text: "Uses WavLM speech embeddings to identify synthetic or manipulated speech.",
      },
      {
        label: "Backend API",
        text: "Flask exposes the detection functionality through APIs.",
      },
      {
        label: "Storage",
        text: "MongoDB Atlas stores detection results and metadata.",
      },
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
      { src: "projects/fakexpose-1.png", alt: "FakeXpose login portal" },
      {
        src: "projects/fakexpose-2.png",
        alt: "FakeXpose prediction dashboard",
      },
      {
        src: "projects/fakexpose-3.png",
        alt: "FakeXpose upload and new analysis screen",
      },
      {
        src: "projects/fakexpose-4.png",
        alt: "FakeXpose image manipulation result",
      },
      {
        src: "projects/fakexpose-5.png",
        alt: "FakeXpose video frame-level analysis",
      },
      {
        src: "projects/fakexpose-6.png",
        alt: "FakeXpose audio speech analysis",
      },
    ],
  };

  const certifications = [
    {
      name: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      image: "certificates/cybersecurity-essentials.jpeg",
      category: "Certification",
      whatIsThis:
        "A foundational cybersecurity course focused on the basic principles of cyber safety, threats, and digital security concepts.",
      purpose:
        "To build a clear understanding of common cybersecurity topics and how digital systems can be protected.",
      whatILearned:
        "I learned basic cyber threat concepts, online safety practices, and the role of secure behavior in protecting devices and data.",
      whereUseful:
        "This is useful for understanding the basics of cybersecurity, safe digital habits, and how security practices apply in everyday technology use.",
    },
    {
      name: "Network Security Fundamentals",
      issuer: "GUVI",
      image: "certificates/cybersecurity-essentials.jpeg",
      category: "Certification",
      whatIsThis:
        "A learning program on key network security concepts and the basics of securing networks and connected systems.",
      purpose:
        "To understand how networks are protected and how common security measures reduce risk in connected environments.",
      whatILearned:
        "I learned about network security foundations, access control basics, common threats, and the importance of securing network services.",
      whereUseful:
        "This is useful for understanding how network protection works in real-world environments, especially in system and security operations.",
    },
    {
      name: "Fundamentals of Information Security",
      issuer: "Infosys Springboard",
      image: "certificates/fundamentals-of-information-security.jpeg",
      category: "Certification",
      whatIsThis:
        "A fundamentals-based information security course covering basic concepts, risks, and security principles used in digital systems.",
      purpose:
        "To introduce the core ideas behind protecting information, systems, and digital assets from risk.",
      whatILearned:
        "I learned the basic concepts of information security, risk awareness, and how confidentiality, integrity, and availability are maintained.",
      whereUseful:
        "This is useful for building a strong foundation in information protection and understanding how security practices support safe technology usage.",
    },
    {
      name: "Foundation of Cyber Security",
      issuer: "Coursera",
      image: "certificates/foundation-of-cyber-security.jpeg",
      category: "Certification",
      whatIsThis:
        "A beginner-level cybersecurity course focused on foundational security concepts and core digital protection principles.",
      purpose:
        "To strengthen understanding of cybersecurity basics and the importance of secure systems and controls.",
      whatILearned:
        "I learned the main principles of cybersecurity, the role of security controls, and how common digital risks are addressed in practice.",
      whereUseful:
        "This is useful for learning the fundamentals of cybersecurity and creating a base for further study in security operations and risk management.",
    },
    {
      name: "ISO/IEC 27001 Information Security Associate",
      issuer: "SkillFront",
      image: "certificates/iso-27001-associate.jpeg",
      category: "Certification",
      whatIsThis:
        "A certification-oriented learning program on ISO/IEC 27001 concepts and information security management practices.",
      purpose:
        "To understand the basics of information security management systems and the role of governance and control frameworks.",
      whatILearned:
        "I learned the basic structure of ISO/IEC 27001, security governance concepts, and how information security is managed through policies and controls.",
      whereUseful:
        "This is useful for understanding governance, risk, and compliance foundations, especially in security operations and information protection contexts.",
    },
  ];

  const education = [
    {
      institution: "P.S.N.A. College of Engineering and Technology",
      place: "Dindigul, Tamil Nadu",
      degree: "B.E. Cybersecurity",
      years: "2023 - 2027",
      detail: "CGPA: 8.3",
    },
    {
      institution: "Government Girls Higher Secondary School",
      place: "Karungalakudi",
      degree: "Higher Secondary Education",
      years: "",
      detail: "12th Percentage: 87.66%",
    },
  ];

  const skillDetails = {
    "Security Concepts": {
      purpose:
        "Understanding foundational cybersecurity principles, CIA triad (Confidentiality, Integrity, Availability), and defense-in-depth security architectures.",
      level: "Foundational",
      where: "Academic coursework & self-directed study",
    },
    "Risk Assessment": {
      purpose:
        "Identifying, analyzing, and evaluating potential security risks to digital assets and systems to prioritize protection measures.",
      level: "Foundational",
      where: "CypherDote internship & academic projects",
    },
    "Security Reporting": {
      purpose:
        "Structuring and documenting security assessment findings with clear risk classifications, impact analysis, and actionable remediation steps.",
      level: "Foundational",
      where: "CypherDote internship (VAPT reporting)",
    },
    "Vulnerability Validation": {
      purpose:
        "Verifying scanner outputs in controlled environments to confirm exploitable vulnerabilities and eliminate false positive results.",
      level: "Foundational",
      where: "CypherDote internship (lab testing)",
    },
    "CVSS Severity Rating": {
      purpose:
        "Calculating Common Vulnerability Scoring System (CVSS v3.1) metrics (Base, Temporal, Environmental) to gauge vulnerability severity and patching urgency.",
      level: "Foundational",
      where: "CypherDote internship",
    },
    "Log Collection": {
      purpose:
        "Collecting and aggregating system, authentication, and firewall logs from diverse endpoints and network equipment.",
      level: "Beginner",
      where: "Eagle-HiTech internship (SOC L1 basics)",
    },
    "Log Monitoring": {
      purpose:
        "Continuously monitoring event logs in near real-time to detect anomalous patterns, unauthorized logins, and indicators of compromise.",
      level: "Beginner",
      where: "Eagle-HiTech internship (SOC L1 basics)",
    },
    "Alert Generation": {
      purpose:
        "Understanding rule triggers, correlation logic, and threshold-based alert generation in SIEM and monitoring systems.",
      level: "Beginner",
      where: "Eagle-HiTech internship (SOC L1 basics)",
    },
    "Alert Investigation": {
      purpose:
        "Checking alert telemetry such as username, IP address, timestamp, affected system, and activity sequence to determine scope.",
      level: "Beginner",
      where: "Eagle-HiTech internship (SOC L1 basics)",
    },
    "Incident Analysis": {
      purpose:
        "Triage and verification to distinguish genuine security incidents from benign user activity or false positives.",
      level: "Beginner",
      where: "Eagle-HiTech internship (SOC L1 basics)",
    },
    Escalation: {
      purpose:
        "Following standardized Incident Response playbooks to escalate confirmed high-severity incidents to L2/L3 security specialists.",
      level: "Beginner",
      where: "Eagle-HiTech internship (SOC L1 basics)",
    },
    Documentation: {
      purpose:
        "Recording thorough case notes, evidence logs, remediation steps taken, and post-incident summary documentation.",
      level: "Beginner",
      where: "Eagle-HiTech internship (SOC L1 basics)",
    },
    "Vulnerability Scanning": {
      purpose:
        "Running automated and customized scans using tools like Nessus to discover vulnerabilities, misconfigurations, and outdated software.",
      level: "Hands-on",
      where: "CypherDote internship (Nessus)",
    },
    "Open Port Identification": {
      purpose:
        "Mapping exposed TCP/UDP ports on target systems to assess attack surfaces and identify unneeded exposed services.",
      level: "Hands-on",
      where: "CypherDote internship (Nmap)",
    },
    "Insecure Service Detection": {
      purpose:
        "Identifying insecure or legacy communication protocols (e.g., Telnet, unencrypted HTTP, deprecated SSL/TLS, SMBv1).",
      level: "Hands-on",
      where: "CypherDote internship",
    },
    "VAPT Reporting": {
      purpose:
        "Authoring comprehensive Vulnerability Assessment and Penetration Testing reports tailored for technical teams and leadership.",
      level: "Hands-on",
      where: "CypherDote internship",
    },
    "Risk Classification": {
      purpose:
        "Categorizing discovered vulnerabilities by threat likelihood, exploitability, and organizational business impact.",
      level: "Hands-on",
      where: "CypherDote internship",
    },
    "Remediation Recommendations": {
      purpose:
        "Formulating specific hardening steps, configuration patches, and architectural mitigations for each identified vulnerability.",
      level: "Hands-on",
      where: "CypherDote internship",
    },
    "Network Discovery": {
      purpose:
        "Discovering active hosts, network topology, routing paths, and device profiles on local subnets and target segments.",
      level: "Basic",
      where: "CypherDote internship & practical labs",
    },
    "Port Scanning": {
      purpose:
        "Executing stealth SYN scans, version detection, and OS fingerprinting using Nmap.",
      level: "Basic",
      where: "CypherDote internship (Nmap)",
    },
    "Packet Analysis": {
      purpose:
        "Capturing and dissecting network packets with Wireshark to inspect handshakes, protocol anomalies, and data transmission.",
      level: "Basic",
      where: "Practical learning (Wireshark)",
    },
    "Basic OWASP Top 10 Awareness": {
      purpose:
        "Awareness of critical web application risks including Injection, Broken Authentication, Sensitive Data Exposure, and Security Misconfiguration.",
      level: "Basic",
      where: "Coursework & self-directed research",
    },
    "Basic Web Security Concepts": {
      purpose:
        "Understanding client-server architecture, HTTP headers, cookies, sessions, and common web attack vectors.",
      level: "Basic",
      where: "Coursework & security labs",
    },
    "Reconnaissance Fundamentals": {
      purpose:
        "Conducting passive and active reconnaissance to gather intelligence on target domain perimeters, DNS records, and publicly exposed infrastructure.",
      level: "Basic",
      where: "Security fundamentals practice",
    },
    "Basic Java": {
      purpose:
        "Object-oriented programming, data structures, and core application development concepts.",
      level: "Basic",
      where: "Academic curriculum",
    },
    "Basic Python": {
      purpose:
        "Security scripting, automation, API integration, and basic deepfake detection pipeline implementation in FakeXpose.",
      level: "Basic",
      where: "Project development & automation scripts",
    },
  };

  function resolveAssetUrl(src) {
    if (!src) return "";
    if (
      src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("data:")
    )
      return src;
    const baseTag = document.querySelector("base");
    const baseHref =
      (baseTag ? baseTag.getAttribute("href") : "/portfolio/").replace(
        /\/+$/,
        "",
      ) + "/";
    const cleanSrc = src.replace(/^\/+/, "").replace(/^portfolio\//, "");
    return baseHref + cleanSrc;
  }

  function createModalContainer() {
    let container = document.getElementById("pf-modal-root");
    if (!container) {
      container = document.createElement("div");
      container.id = "pf-modal-root";
      document.body.appendChild(container);
    }
    return container;
  }

  function closeModal() {
    const container = document.getElementById("pf-modal-root");
    if (container) container.innerHTML = "";
    const lb = document.getElementById("pf-lightbox-backdrop");
    if (!lb) {
      document.body.style.overflow = "";
    }
  }

  function openModal(options) {
    const eyebrow = options.eyebrow || "";
    const title = options.title || "";
    const contentHtml = options.contentHtml || "";
    const container = createModalContainer();
    document.body.style.overflow = "hidden";
    container.innerHTML = `
      <div id="pf-modal-backdrop" role="dialog" aria-modal="true" aria-label="${title}" class="fixed inset-0 z-[65] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm">
        <div class="panel relative max-h-[88vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8" id="pf-modal-panel">
          <button type="button" id="pf-modal-close" aria-label="Close" class="absolute right-4 top-4 rounded-md border border-border bg-card p-2 text-foreground transition-colors hover:border-primary hover:text-primary">
            <svg class="size-5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          ${eyebrow ? `<p class="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-secondary">${eyebrow}</p>` : ""}
          <h3 class="pr-10 text-2xl font-bold">${title}</h3>
          <div class="mt-5">${contentHtml}</div>
        </div>
      </div>
    `;

    const backdrop = document.getElementById("pf-modal-backdrop");
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeModal();
      });
    }
    const closeBtn = document.getElementById("pf-modal-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }
  }

  // Lightbox implementation
  let activeLightbox = null;

  function closeLightbox() {
    activeLightbox = null;
    const lb = document.getElementById("pf-lightbox-root");
    if (lb) lb.innerHTML = "";
    const modal = document.getElementById("pf-modal-backdrop");
    if (!modal) {
      document.body.style.overflow = "";
    }
  }

  function renderLightbox() {
    if (!activeLightbox) return;
    let lb = document.getElementById("pf-lightbox-root");
    if (!lb) {
      lb = document.createElement("div");
      lb.id = "pf-lightbox-root";
      document.body.appendChild(lb);
    }
    document.body.style.overflow = "hidden";
    const { images, index, title } = activeLightbox;
    const current = images[index];
    if (!current) return;

    lb.innerHTML = `
      <div id="pf-lightbox-backdrop" role="dialog" aria-modal="true" aria-label="${title}" class="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm">
        <div class="relative max-h-full w-full max-w-4xl" id="pf-lightbox-panel">
          <div class="mb-3 flex items-center justify-between">
            <p class="font-mono text-sm text-secondary">
              ${title} <span class="text-muted-foreground">· ${index + 1} / ${images.length}</span>
            </p>
            <button type="button" id="pf-lightbox-close" aria-label="Close image preview" class="rounded-md border border-border bg-card p-2 text-foreground transition-colors hover:border-primary hover:text-primary">
              <svg class="size-5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <div class="relative flex justify-center">
            <img src="${resolveAssetUrl(current.src)}" alt="${current.alt}" class="mx-auto max-h-[72vh] w-auto rounded-xl border border-border object-contain" />
            ${
              images.length > 1
                ? `
              <button type="button" id="pf-lb-prev" aria-label="Previous image" class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-2 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary">
                <svg class="size-5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button type="button" id="pf-lb-next" aria-label="Next image" class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-2 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary">
                <svg class="size-5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            `
                : ""
            }
          </div>

          ${
            images.length > 1
              ? `
            <div class="mt-4 flex flex-wrap items-center justify-center gap-2" id="pf-lb-thumbs">
              ${images
                .map(
                  (img, i) => `
                <button type="button" data-idx="${i}" aria-label="Show image ${i + 1}" class="size-14 overflow-hidden rounded-md border transition-all ${i === index ? "border-primary shadow-[var(--glow-primary)]" : "border-border opacity-60 hover:opacity-100"}">
                  <img src="${resolveAssetUrl(img.src)}" alt="${img.alt}" class="size-full object-cover" />
                </button>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }
        </div>
      </div>
    `;

    const backdrop = document.getElementById("pf-lightbox-backdrop");
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeLightbox();
      });
    }
    const closeBtn = document.getElementById("pf-lightbox-close");
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    const prevBtn = document.getElementById("pf-lb-prev");
    if (prevBtn)
      prevBtn.addEventListener("click", () => {
        activeLightbox.index =
          (activeLightbox.index - 1 + activeLightbox.images.length) %
          activeLightbox.images.length;
        renderLightbox();
      });
    const nextBtn = document.getElementById("pf-lb-next");
    if (nextBtn)
      nextBtn.addEventListener("click", () => {
        activeLightbox.index =
          (activeLightbox.index + 1) % activeLightbox.images.length;
        renderLightbox();
      });
    const thumbs = document.querySelectorAll("#pf-lb-thumbs button");
    thumbs.forEach((btn) => {
      btn.addEventListener("click", () => {
        activeLightbox.index = parseInt(btn.dataset.idx, 10);
        renderLightbox();
      });
    });
  }

  function openLightbox(images, index, title) {
    activeLightbox = { images, index, title };
    renderLightbox();
  }

  // Keydown handler
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (activeLightbox) closeLightbox();
      else closeModal();
    } else if (activeLightbox && activeLightbox.images.length > 1) {
      if (e.key === "ArrowLeft") {
        activeLightbox.index =
          (activeLightbox.index - 1 + activeLightbox.images.length) %
          activeLightbox.images.length;
        renderLightbox();
      } else if (e.key === "ArrowRight") {
        activeLightbox.index =
          (activeLightbox.index + 1) % activeLightbox.images.length;
        renderLightbox();
      }
    }
  });

  // Modal Openers
  function showExperienceModal(idx) {
    const exp = experiences[idx];
    if (!exp) return;
    const content = `
      <div class="space-y-6 text-sm">
        <p class="text-muted-foreground">${exp.summary}</p>
        <ul class="space-y-2">
          ${exp.points
            .map(
              (p) => `
            <li class="flex gap-3">
              <span class="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true"></span>
              <span class="text-muted-foreground">${p}</span>
            </li>
          `,
            )
            .join("")}
        </ul>
        ${
          exp.proofImage
            ? `
          <button type="button" data-lightbox-exp="${idx}" class="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
            <svg class="size-4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/></svg>
            View Internship Certificate
          </button>
        `
            : ""
        }
      </div>
    `;
    openModal({
      eyebrow: exp.period,
      title: `${exp.role} · ${exp.company}`,
      contentHtml: content,
    });
  }

  function showProjectModal() {
    const content = `
      <div class="space-y-6 text-sm">
        <div>
          <h4 class="text-sm font-semibold text-secondary">Project Description</h4>
          <p class="mt-2 text-muted-foreground">${project.description}</p>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-secondary">Problem</h4>
          <p class="mt-2 text-muted-foreground">${project.problem}</p>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-secondary">Solution</h4>
          <p class="mt-2 text-muted-foreground">FakeXpose provides a single platform for detecting deepfakes across multiple media types.</p>
          <ul class="mt-3 space-y-2">
            ${project.solution
              .map(
                (s) => `
              <li class="flex gap-3">
                <span class="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true"></span>
                <span class="text-muted-foreground"><span class="font-semibold text-foreground">${s.label}:</span> ${s.text}</span>
              </li>
            `,
              )
              .join("")}
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-secondary">Technologies Used</h4>
          <div class="mt-3 flex flex-wrap gap-2">
            ${project.technologies.map((t) => `<span class="rounded-full border border-secondary/30 bg-card-alt px-3 py-1 text-sm text-foreground">${t}</span>`).join("")}
          </div>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-secondary">Datasets</h4>
          <ul class="mt-2 space-y-1 text-muted-foreground">
            ${project.datasets.map((d) => `<li>${d}</li>`).join("")}
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-secondary">Key Features</h4>
          <ul class="mt-3 space-y-2">
            ${project.features
              .map(
                (f) => `
              <li class="flex gap-3">
                <span class="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true"></span>
                <span class="text-muted-foreground"><span class="font-semibold text-foreground">${f.title}</span>${f.text ? ` — ${f.text}` : ""}</span>
              </li>
            `,
              )
              .join("")}
          </ul>
        </div>
        ${
          project.images && project.images.length > 0
            ? `
          <button type="button" data-lightbox-project="true" class="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
            <svg class="size-4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            View Screenshots
          </button>
        `
            : ""
        }
      </div>
    `;
    openModal({
      eyebrow: "Project",
      title: `${project.title} – ${project.subtitle}`,
      contentHtml: content,
    });
  }

  function showCertificationModal(idx) {
    const cert = certifications[idx];
    if (!cert) return;
    const content = `
      <div class="space-y-5 text-sm">
        <div>
          <p class="text-sm font-semibold text-secondary">What is this certification?</p>
          <p class="mt-2 text-muted-foreground">${cert.whatIsThis}</p>
        </div>
        <div>
          <p class="text-sm font-semibold text-secondary">Purpose</p>
          <p class="mt-2 text-muted-foreground">${cert.purpose}</p>
        </div>
        <div>
          <p class="text-sm font-semibold text-secondary">What I learned</p>
          <p class="mt-2 text-muted-foreground">${cert.whatILearned}</p>
        </div>
        <div>
          <p class="text-sm font-semibold text-secondary">Where it is useful</p>
          <p class="mt-2 text-muted-foreground">${cert.whereUseful}</p>
        </div>
        ${
          cert.image
            ? `
          <button type="button" data-lightbox-cert="${idx}" class="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
            <svg class="size-4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/></svg>
            View Certificate
          </button>
        `
            : ""
        }
      </div>
    `;
    openModal({
      eyebrow: "Certification",
      title: cert.name,
      contentHtml: content,
    });
  }

  function showEducationModal(idx) {
    const edu = education[idx];
    if (!edu) return;
    const content = `
      <div class="space-y-2 text-sm">
        <p class="text-base font-semibold text-foreground">${edu.degree}</p>
        ${edu.years ? `<p class="font-mono text-secondary">${edu.years}</p>` : ""}
        <p class="text-muted-foreground">${edu.place}</p>
        <p class="font-mono text-xs text-secondary">${edu.detail}</p>
      </div>
    `;
    openModal({
      eyebrow: "Education",
      title: edu.institution,
      contentHtml: content,
    });
  }

  function showSkillModal(skillName) {
    const detail = skillDetails[skillName];
    const content = `
      <div class="space-y-4 text-sm">
        ${
          detail
            ? `
          <div class="flex items-center gap-2">
            <span class="font-mono text-xs uppercase tracking-wider text-secondary">Proficiency Level:</span>
            <span class="rounded-full border border-primary/40 bg-card-alt px-3 py-0.5 font-mono text-xs text-primary">${detail.level}</span>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-secondary">Purpose & Application</h4>
            <p class="mt-2 text-muted-foreground">${detail.purpose}</p>
          </div>
          ${
            detail.where
              ? `
            <div>
              <h4 class="text-sm font-semibold text-secondary">Practical Context</h4>
              <p class="mt-2 text-muted-foreground">${detail.where}</p>
            </div>
          `
              : ""
          }
        `
            : `
          <p class="text-muted-foreground">Practical skill applied across cybersecurity operations and projects.</p>
        `
        }
      </div>
    `;
    openModal({
      eyebrow: "Skill Detail",
      title: skillName,
      contentHtml: content,
    });
  }

  function initRuntime() {
    // Mobile Nav Toggle
    const menuBtn = document.querySelector(
      'button[aria-label="Open navigation menu"], button[aria-label="Close navigation menu"]',
    );
    const sidebar = document.querySelector("aside");
    if (menuBtn && sidebar) {
      menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
        sidebar.classList.toggle("flex");
      });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const target = document.querySelector(a.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
          if (window.innerWidth < 1024 && sidebar) {
            sidebar.classList.add("hidden");
            sidebar.classList.remove("flex");
          }
        }
      });
    });

    // Delegated click handler for all interactive buttons
    document.addEventListener("click", (e) => {
      // 1. View Certificate button (from main cards or inside modal)
      const certImgBtn =
        e.target.closest("[data-lightbox-cert]") ||
        (e.target.closest("button") &&
          e.target.closest("button").textContent.includes("View Certificate") &&
          !e.target.closest("button").textContent.includes("Internship"));
      if (certImgBtn) {
        e.preventDefault();
        let idx =
          certImgBtn.dataset && certImgBtn.dataset.lightboxCert !== undefined
            ? parseInt(certImgBtn.dataset.lightboxCert, 10)
            : undefined;
        if (isNaN(idx) || idx === undefined) {
          // Find enclosing certification or active modal title
          const card = certImgBtn.closest(".panel");
          if (card) {
            const h3 = card.querySelector("h3");
            if (h3) {
              idx = certifications.findIndex(
                (c) =>
                  c.name.toLowerCase() === h3.textContent.trim().toLowerCase(),
              );
            }
          }
        }
        if (idx !== undefined && idx >= 0 && certifications[idx]) {
          const cert = certifications[idx];
          if (cert && cert.image) {
            openLightbox(
              [{ src: cert.image, alt: cert.name + " certificate" }],
              0,
              cert.name + " certificate",
            );
          }
        }
        return;
      }

      // 2. View Internship Certificate button (from main cards or inside modal)
      const expCertBtn =
        e.target.closest("[data-lightbox-exp]") ||
        (e.target.closest("button") &&
          (e.target
            .closest("button")
            .textContent.includes("View Internship Certificate") ||
            (e.target.closest("#experience") &&
              e.target
                .closest("button")
                .textContent.includes("View Certificate"))));
      if (expCertBtn) {
        e.preventDefault();
        let idx =
          expCertBtn.dataset && expCertBtn.dataset.lightboxExp !== undefined
            ? parseInt(expCertBtn.dataset.lightboxExp, 10)
            : undefined;
        if (isNaN(idx) || idx === undefined) {
          const card = expCertBtn.closest(".panel");
          if (card) {
            const h3 = card.querySelector("h3");
            if (h3) {
              idx = experiences.findIndex((exp) =>
                h3.textContent.includes(exp.company),
              );
            }
          }
        }
        if (idx === undefined || isNaN(idx)) idx = 0;
        const exp = experiences[idx];
        if (exp && exp.proofImage) {
          openLightbox(
            [
              {
                src: exp.proofImage,
                alt: exp.company + " internship certificate",
              },
            ],
            0,
            exp.company + " internship certificate",
          );
        }
        return;
      }

      // 3. View Screenshots button (from project section or inside project modal)
      const ssBtn =
        e.target.closest("[data-lightbox-project]") ||
        (e.target.closest("button") &&
          e.target.closest("button").textContent.includes("View Screenshots"));
      if (ssBtn) {
        e.preventDefault();
        openLightbox(project.images, 0, project.title + " screenshots");
        return;
      }

      // 4. Project Detail button
      const projBtn =
        e.target.closest("[data-project-btn]") ||
        (e.target.closest("#projects button") &&
          e.target.closest("button").textContent.includes("View Project"));
      if (projBtn) {
        e.preventDefault();
        showProjectModal();
        return;
      }

      // 5. Experience Detail buttons
      const expBtn =
        e.target.closest("[data-exp-idx]") ||
        e.target.closest("#experience button");
      if (expBtn && expBtn.textContent.includes("View Details")) {
        e.preventDefault();
        let idx = expBtn.dataset.expIdx
          ? parseInt(expBtn.dataset.expIdx, 10)
          : undefined;
        if (idx === undefined) {
          const allExpBtns = Array.from(
            document.querySelectorAll("#experience button"),
          ).filter((b) => b.textContent.includes("View Details"));
          idx = allExpBtns.indexOf(expBtn);
        }
        if (idx !== undefined && idx >= 0) {
          showExperienceModal(idx);
        }
        return;
      }

      // 6. Certification Detail buttons
      const certBtn =
        e.target.closest("[data-cert-idx]") ||
        e.target.closest("#certifications button");
      if (certBtn && certBtn.textContent.includes("View Details")) {
        e.preventDefault();
        let idx = certBtn.dataset.certIdx
          ? parseInt(certBtn.dataset.certIdx, 10)
          : undefined;
        if (idx === undefined) {
          const allCertBtns = Array.from(
            document.querySelectorAll("#certifications button"),
          ).filter((b) => b.textContent.includes("View Details"));
          idx = allCertBtns.indexOf(certBtn);
        }
        if (idx !== undefined && idx >= 0) {
          showCertificationModal(idx);
        }
        return;
      }

      // 7. Education Detail buttons
      const eduBtn =
        e.target.closest("[data-edu-idx]") ||
        e.target.closest("#education button");
      if (eduBtn && eduBtn.textContent.includes("View Details")) {
        e.preventDefault();
        let idx = eduBtn.dataset.eduIdx
          ? parseInt(eduBtn.dataset.eduIdx, 10)
          : undefined;
        if (idx === undefined) {
          const allEduBtns = Array.from(
            document.querySelectorAll("#education button"),
          );
          idx = allEduBtns.indexOf(eduBtn);
        }
        if (idx !== undefined && idx >= 0) {
          showEducationModal(idx);
        }
        return;
      }

      // 8. Skill tags
      const skillTag =
        e.target.closest("[data-skill-name]") ||
        (e.target.closest("#skills button, #skills span") &&
          !e.target.closest("h2, h3, p"));
      if (skillTag) {
        const name = skillTag.dataset.skillName || skillTag.textContent.trim();
        if (name && skillDetails[name]) {
          e.preventDefault();
          showSkillModal(name);
          return;
        }
      }
    });

    // Contact Form Ajax
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const origText = submitBtn ? submitBtn.innerHTML : "";
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = "Sending...";
        }
        const name = form.querySelector("#cf-name")?.value || "";
        const email = form.querySelector("#cf-email")?.value || "";
        const subject = form.querySelector("#cf-subject")?.value || "";
        const message = form.querySelector("#cf-message")?.value || "";

        try {
          const res = await fetch(
            "https://formsubmit.co/ajax/poomanin66005@gmail.com",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({ name, email, _subject: subject, message }),
            },
          );
          if (res.ok) {
            form.innerHTML =
              '<div class="rounded-lg border border-primary/40 bg-card-alt p-6 text-center text-primary font-medium">✓ Message sent successfully! Thank you for reaching out.</div>';
          } else {
            throw new Error("Failed");
          }
        } catch (err) {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
          }
          alert(
            "Could not send message. Please email directly to poomanin66005@gmail.com",
          );
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRuntime);
  } else {
    initRuntime();
  }
})();
