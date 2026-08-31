import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  GraduationCap,
  ShieldCheck,
  Radar,
  FileSearch,
  Award,
  BookOpen,
  ArrowRight,
  ImageIcon,
  Github,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";
import { Lightbox } from "@/components/portfolio/Lightbox";
import { Modal } from "@/components/portfolio/Modal";
import { ContactForm } from "@/components/portfolio/ContactForm";
import {
  certifications,
  education,
  experiences,
  learning,
  profile,
  profilePhoto,
  project,
  securityKnowledge,
  skillDetails,
  skillGroups,
  tools,
} from "@/components/portfolio/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poomani N — Cybersecurity Student Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Poomani N, B.E. Cybersecurity student in Madurai with internship experience in vulnerability scanning, security assessment, and security reporting.",
      },
      {
        property: "og:title",
        content: "Poomani N — Cybersecurity Student Portfolio",
      },
      {
        property: "og:description",
        content:
          "B.E. Cybersecurity student with internship exposure to vulnerability scanning, security reporting, and SOC fundamentals.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-0.5 w-16 rounded-full bg-[image:var(--gradient-neon)]" />
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl px-4 py-20 sm:px-6 ${className}`}
    >
      {children}
    </section>
  );
}

function Tag({
  children,
  onClick,
  clickable = false,
  "data-skill-name": dataSkillName,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  clickable?: boolean;
  "data-skill-name"?: string;
}) {
  if (clickable || onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        data-skill-name={
          dataSkillName || (typeof children === "string" ? children : undefined)
        }
        className="cursor-pointer rounded-full border border-secondary/40 bg-card-alt px-3 py-1 text-sm text-foreground transition-all hover:border-primary hover:bg-card-alt/80 hover:text-primary"
      >
        {children}
      </button>
    );
  }
  return (
    <span className="rounded-full border border-secondary/30 bg-card-alt px-3 py-1 text-sm text-foreground">
      {children}
    </span>
  );
}

function Portfolio() {
  const [lightbox, setLightbox] = useState<{
    images: { src: string; alt: string }[];
    index: number;
    title: string;
  } | null>(null);
  const [projectOpen, setProjectOpen] = useState(false);
  const [expOpen, setExpOpen] = useState<number | null>(null);
  const [eduOpen, setEduOpen] = useState<number | null>(null);
  const [certOpen, setCertOpen] = useState<number | null>(null);
  const [skillOpen, setSkillOpen] = useState<string | null>(null);

  const certImages = certifications
    .filter((c) => c.image)
    .map((c) => ({
      src: c.image as string,
      alt: `${c.name} certificate from ${c.issuer}`,
    }));

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="lg:pl-[260px]">
        {/* HERO */}
        <section
          id="home"
          className="relative overflow-hidden pt-12 pb-16 sm:pt-16 lg:pt-12"
        >
          <div
            className="grid-bg pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_380px]">
            <Reveal className="max-w-[680px]">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-3 py-1 font-mono text-xs text-primary">
                <ShieldCheck className="size-3.5" aria-hidden="true" /> B.E.
                Cybersecurity · 2023–2027
              </p>
              <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[5rem]">
                {profile.name}
              </h1>
              <p className="mt-4 text-xl font-semibold neon-text sm:text-2xl lg:text-[2.2rem]">
                {profile.title}
              </p>
              <p className="mt-5 max-w-[640px] text-base leading-8 text-muted-foreground sm:text-lg">
                {profile.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-neon)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:-translate-y-0.5"
                >
                  View Projects{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-secondary/50 px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/10"
                >
                  Contact Me
                </a>
              </div>

              <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4" aria-hidden="true" />{" "}
                {profile.location}
              </p>
            </Reveal>

            <Reveal delay={120} className="flex justify-center lg:justify-end">
              <div className="panel w-full max-w-[390px] p-6 text-center sm:p-7">
                <div className="relative mx-auto grid size-40 place-items-center sm:size-44">
                  <span
                    className="ripple-ring absolute inset-0 rounded-full border border-primary/50"
                    aria-hidden="true"
                  />
                  <span
                    className="ripple-ring absolute inset-0 rounded-full border border-secondary/50 [animation-delay:1.2s]"
                    aria-hidden="true"
                  />
                  <span className="grid size-36 place-items-center rounded-full border-2 border-primary/60 bg-card-alt text-4xl font-bold neon-text shadow-[var(--glow-primary)] sm:size-40">
                    PN
                  </span>
                </div>

                <h2 className="mt-6 text-[2rem] font-semibold tracking-[-0.04em]">
                  Security Focus
                </h2>
                <ul className="mt-5 space-y-3 text-left text-sm sm:text-[15px]">
                  <li className="flex items-start gap-3">
                    <Radar
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    Vulnerability scanning &amp; assessment
                  </li>
                  <li className="flex items-start gap-3">
                    <FileSearch
                      className="mt-0.5 size-4 shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    Security reporting &amp; risk classification
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    Learning SOC, log analysis, SIEM basics
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about">
          <Reveal>
            <SectionHeading eyebrow="Profile" title="About Me" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal className="panel p-7 lg:col-span-2">
              <p className="text-muted-foreground">
                I am a final year B.E. Cybersecurity student with practical
                internship exposure to vulnerability scanning, security
                assessment, and security reporting. During my internships, I
                worked with security tools such as Nessus, Nmap, Wireshark,
                Metasploit, Burp Suite, and OWASP ZAP. I am also currently
                developing my knowledge of SOC fundamentals, basic log analysis,
                and SIEM concepts.
              </p>
              <p className="mt-5 rounded-lg border-l-2 border-primary bg-card-alt p-4 text-sm text-foreground">
                My current goal is to build strong practical skills in
                cybersecurity operations and grow toward a SOC/Blue Team career.
              </p>
            </Reveal>
            <Reveal delay={100} className="panel p-7">
              <h3 className="text-lg font-semibold">Quick Facts</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-secondary">
                    Focus
                  </dt>
                  <dd className="mt-1">Cybersecurity / SOC / Blue Team</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-secondary">
                    Education
                  </dt>
                  <dd className="mt-1">
                    {education[0]!.degree}, {education[0]!.detail}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-secondary">
                    Location
                  </dt>
                  <dd className="mt-1">{profile.location}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Skills"
              description="Click on any skill to view practical applications, context, and proficiency level."
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 70} className="panel p-6">
                <h3 className="text-lg font-semibold text-secondary">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <Tag
                      key={s}
                      clickable
                      onClick={() => setSkillOpen(s)}
                      data-skill-name={s}
                    >
                      {s}
                    </Tag>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* TOOLKIT */}
        <Section id="toolkit" className="max-w-none px-0 sm:px-0">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Hands-on exposure"
                title="Security Toolkit"
                description="Tools used during internships and practical learning. Hover to pause."
              />
            </Reveal>
          </div>
          <Reveal className="relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
              aria-hidden="true"
            />
            <div className="marquee-track gap-6 py-2">
              {[...tools, ...tools].map((tool, i) => (
                <div
                  key={`${tool.name}-${i}`}
                  aria-hidden={i >= tools.length}
                  className="panel flex w-64 shrink-0 flex-col items-center p-6 text-center"
                >
                  <span className="grid size-14 shrink-0 place-items-center rounded-xl border border-secondary/25 bg-card-alt">
                    {tool.logo ? (
                      <img
                        src={tool.logo}
                        alt={i >= tools.length ? "" : `${tool.name} logo`}
                        className="logo-neon size-7"
                      />
                    ) : (
                      <ShieldCheck
                        className="size-7 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{tool.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tool.what}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-secondary">
                    {tool.purpose}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience">
          <Reveal>
            <SectionHeading
              eyebrow="Practical exposure"
              title="Internship Experience"
            />
          </Reveal>
          <ol className="relative space-y-6 border-l border-border pl-6">
            {experiences.map((exp, i) => (
              <Reveal
                as="li"
                key={exp.company}
                delay={i * 90}
                className="panel p-6"
              >
                <span
                  className="absolute -left-[7px] mt-2 size-3 rounded-full bg-primary shadow-[var(--glow-primary)]"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {exp.role} ·{" "}
                    <span className="text-secondary">{exp.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {exp.summary}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setExpOpen(i)}
                    data-exp-idx={i}
                    aria-label={`View details for ${exp.role} at ${exp.company}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-secondary/50 px-4 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/10"
                  >
                    View Details{" "}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                  {exp.proofImage && (
                    <button
                      type="button"
                      data-lightbox-exp={i}
                      onClick={() =>
                        setLightbox({
                          images: [
                            {
                              src: exp.proofImage as string,
                              alt: `${exp.company} internship certificate`,
                            },
                          ],
                          index: 0,
                          title: `${exp.company} internship certificate`,
                        })
                      }
                      aria-label={`View internship certificate for ${exp.company}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                    >
                      <Award className="size-4" aria-hidden="true" /> View
                      Certificate
                    </button>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" className="relative overflow-hidden rounded-3xl">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url('/projects-bg.png')` }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-background/60 to-background/95"
            aria-hidden="true"
          />
          <Reveal>
            <SectionHeading eyebrow="Academic work" title="Projects" />
          </Reveal>
          <Reveal className="panel overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-5">
              <div className="grid-bg relative grid min-h-56 place-items-center overflow-hidden border-b border-border bg-card-alt p-8 text-center lg:col-span-2 lg:border-b-0 lg:border-r">
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                  style={{
                    backgroundImage: `url('/projects/project-logo-bg.png')`,
                  }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card-alt/80 via-transparent to-card-alt/60"
                  aria-hidden="true"
                />
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="relative z-10 mx-auto size-28 rounded-2xl shadow-[var(--glow-primary)]"
                  />
                ) : (
                  <ImageIcon
                    className="relative z-10 size-8 text-secondary"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="p-7 lg:col-span-3">
                <p className="font-mono text-xs uppercase tracking-widest text-secondary">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  {project.title} – {project.subtitle}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {project.shortDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setProjectOpen(true)}
                  data-project-btn="true"
                  aria-label={`View details for ${project.title}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  View Project{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* SECURITY KNOWLEDGE */}
        <Section id="security-knowledge">
          <Reveal>
            <SectionHeading eyebrow="Foundations" title="Security Knowledge" />
          </Reveal>
          <Reveal className="panel p-7">
            <h3 className="text-lg font-semibold text-secondary">
              Security &amp; Vulnerability Research Knowledge
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {securityKnowledge.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-muted-foreground"
                >
                  <ShieldCheck
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="certifications">
          <Reveal>
            <SectionHeading
              eyebrow="Verified learning"
              title="Certifications"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 60} className="panel p-6">
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCertOpen(i)}
                    data-cert-idx={i}
                    aria-label={`View details for ${cert.name}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-secondary/50 px-4 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/10"
                  >
                    View Details{" "}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                  {cert.image && (
                    <button
                      type="button"
                      data-lightbox-cert={i}
                      onClick={() =>
                        setLightbox({
                          images: [
                            {
                              src: cert.image as string,
                              alt: `${cert.name} certificate from ${cert.issuer}`,
                            },
                          ],
                          index: 0,
                          title: `${cert.name} certificate`,
                        })
                      }
                      aria-label={`View certificate image for ${cert.name}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                    >
                      <Award className="size-4" aria-hidden="true" /> View
                      Certificate
                    </button>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* LEARNING */}
        <Section id="learning">
          <Reveal>
            <SectionHeading
              eyebrow="Beginner / Currently Learning"
              title="Currently Learning"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {learning.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="panel p-6">
                <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-secondary">
                  Beginner / Currently Learning
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education">
          <Reveal>
            <SectionHeading eyebrow="Academics" title="Education" />
          </Reveal>
          <div className="grid gap-5">
            {education.map((edu, i) => (
              <Reveal
                key={edu.institution}
                className="panel flex flex-wrap items-center gap-5 p-7"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-lg border border-primary/30 bg-card-alt">
                  <GraduationCap
                    className="size-6 text-primary"
                    aria-hidden="true"
                  />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{edu.institution}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setEduOpen(i)}
                  data-edu-idx={i}
                  aria-label={`View details for ${edu.institution}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-secondary/50 px-4 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/10"
                >
                  View Details{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact">
          <Reveal>
            <SectionHeading eyebrow="Get in touch" title="Let's Connect" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="panel p-7">
              <p className="mb-6 text-muted-foreground">
                I am interested in cybersecurity opportunities, internships, and
                entry-level roles where I can continue developing my practical
                security skills.
              </p>
              <ContactForm />
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg border border-secondary/50 px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/10"
                >
                  <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  <Github className="size-4" aria-hidden="true" /> GitHub
                </a>
              </div>
            </Reveal>
            <Reveal delay={100} className="panel p-7">
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-primary"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="hover:text-primary"
                  >
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin
                    className="size-4 text-primary"
                    aria-hidden="true"
                  />
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-primary"
                  >
                    {profile.linkedinLabel}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Github className="size-4 text-primary" aria-hidden="true" />
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-primary"
                  >
                    github.com/poomani06
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  {profile.location}
                </li>
              </ul>
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · Cybersecurity Student
      </footer>

      {/* PROJECT DETAILS */}
      <Modal
        open={projectOpen}
        onClose={() => setProjectOpen(false)}
        eyebrow="Project"
        title={`${project.title} – ${project.subtitle}`}
      >
        <div className="space-y-6 text-sm">
          <div>
            <h4 className="text-sm font-semibold text-secondary">
              Project Description
            </h4>
            <p className="mt-2 text-muted-foreground">{project.description}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-secondary">Problem</h4>
            <p className="mt-2 text-muted-foreground">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-secondary">Solution</h4>
            <p className="mt-2 text-muted-foreground">
              FakeXpose provides a single platform for detecting deepfakes
              across multiple media types.
            </p>
            <ul className="mt-3 space-y-2">
              {project.solution.map((s) => (
                <li key={s.label} className="flex gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {s.label}:
                    </span>{" "}
                    {s.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-secondary">
              Technologies Used
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-secondary">Datasets</h4>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              {project.datasets.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-secondary">
              Key Features
            </h4>
            <ul className="mt-3 space-y-2">
              {project.features.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {f.title}
                    </span>
                    {f.text ? ` — ${f.text}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {project.images.length > 0 && (
            <button
              type="button"
              data-lightbox-project="true"
              onClick={() =>
                setLightbox({
                  images: project.images,
                  index: 0,
                  title: `${project.title} screenshots`,
                })
              }
              className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <ImageIcon className="size-4" aria-hidden="true" /> View
              Screenshots
            </button>
          )}
        </div>
      </Modal>

      {/* EXPERIENCE DETAILS */}
      <Modal
        open={expOpen !== null}
        onClose={() => setExpOpen(null)}
        eyebrow={expOpen !== null ? experiences[expOpen]!.period : undefined}
        title={
          expOpen !== null
            ? `${experiences[expOpen]!.role} · ${experiences[expOpen]!.company}`
            : ""
        }
      >
        {expOpen !== null && (
          <div className="space-y-6 text-sm">
            <p className="text-muted-foreground">
              {experiences[expOpen]!.summary}
            </p>
            <ul className="space-y-2">
              {experiences[expOpen]!.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
            {experiences[expOpen]!.proofImage && (
              <button
                type="button"
                data-lightbox-exp={expOpen}
                onClick={() =>
                  setLightbox({
                    images: [
                      {
                        src: experiences[expOpen]!.proofImage as string,
                        alt: `${experiences[expOpen]!.company} internship certificate`,
                      },
                    ],
                    index: 0,
                    title: `${experiences[expOpen]!.company} internship certificate`,
                  })
                }
                className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                <Award className="size-4" aria-hidden="true" /> View Internship
                Certificate
              </button>
            )}
          </div>
        )}
      </Modal>

      {/* CERTIFICATION DETAILS */}
      <Modal
        open={certOpen !== null}
        onClose={() => setCertOpen(null)}
        eyebrow={certOpen !== null ? "Certification" : undefined}
        title={certOpen !== null ? certifications[certOpen]!.name : ""}
      >
        {certOpen !== null && (
          <div className="space-y-5 text-sm">
            <div>
              <p className="text-sm font-semibold text-secondary">
                What is this certification?
              </p>
              <p className="mt-2 text-muted-foreground">
                {certifications[certOpen]!.whatIsThis}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary">Purpose</p>
              <p className="mt-2 text-muted-foreground">
                {certifications[certOpen]!.purpose}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary">
                What I learned
              </p>
              <p className="mt-2 text-muted-foreground">
                {certifications[certOpen]!.whatILearned}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary">
                Where it is useful
              </p>
              <p className="mt-2 text-muted-foreground">
                {certifications[certOpen]!.whereUseful}
              </p>
            </div>
            {certifications[certOpen]!.image && (
              <button
                type="button"
                data-lightbox-cert={certOpen}
                onClick={() =>
                  setLightbox({
                    images: [
                      {
                        src: certifications[certOpen]!.image as string,
                        alt: `${certifications[certOpen]!.name} certificate from ${certifications[certOpen]!.issuer}`,
                      },
                    ],
                    index: 0,
                    title: `${certifications[certOpen]!.name} certificate`,
                  })
                }
                className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                <Award className="size-4" aria-hidden="true" /> View Certificate
              </button>
            )}
          </div>
        )}
      </Modal>

      {/* EDUCATION DETAILS */}
      <Modal
        open={eduOpen !== null}
        onClose={() => setEduOpen(null)}
        eyebrow="Education"
        title={eduOpen !== null ? education[eduOpen]!.institution : ""}
      >
        {eduOpen !== null && (
          <div className="space-y-2 text-sm">
            <p className="text-base font-semibold text-foreground">
              {education[eduOpen]!.degree}
            </p>
            {education[eduOpen]!.years && (
              <p className="font-mono text-secondary">
                {education[eduOpen]!.years}
              </p>
            )}
            <p className="text-muted-foreground">{education[eduOpen]!.place}</p>
            <p className="font-mono text-xs text-secondary">
              {education[eduOpen]!.detail}
            </p>
          </div>
        )}
      </Modal>

      {/* SKILL DETAILS */}
      <Modal
        open={skillOpen !== null}
        onClose={() => setSkillOpen(null)}
        eyebrow="Skill Detail"
        title={skillOpen || ""}
      >
        {skillOpen && (
          <div className="space-y-4 text-sm">
            {skillDetails[skillOpen] ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-secondary">
                    Proficiency Level:
                  </span>
                  <span className="rounded-full border border-primary/40 bg-card-alt px-3 py-0.5 font-mono text-xs text-primary">
                    {skillDetails[skillOpen].level}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary">
                    Purpose &amp; Application
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {skillDetails[skillOpen].purpose}
                  </p>
                </div>
                {skillDetails[skillOpen].where && (
                  <div>
                    <h4 className="text-sm font-semibold text-secondary">
                      Practical Context
                    </h4>
                    <p className="mt-2 text-muted-foreground">
                      {skillDetails[skillOpen].where}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <p className="text-muted-foreground">
                Practical skill applied across cybersecurity operations and
                projects.
              </p>
            )}
          </div>
        )}
      </Modal>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
          onIndexChange={(i) => setLightbox({ ...lightbox, index: i })}
        />
      )}
    </div>
  );
}
