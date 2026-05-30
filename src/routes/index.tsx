import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { useEffect, useState, useCallback } from "react";
import { Github, FileText, ChevronRight, AudioLines, ExternalLink, X } from "lucide-react";
import { Mail } from "lucide-react";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiGreensock,
  SiReactquery, SiNodedotjs, SiPython, SiFastapi, SiFlask,
  SiPostgresql, SiMongodb, SiSupabase, SiPrisma, SiOpenai,
  SiGooglegemini, SiDocker, SiVercel, SiCloudflare, SiGooglecloud,
  SiStripe, SiGithub, SiX, SiYoutube,
} from "react-icons/si";
import { FaAws, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";
import avatar from "@/assets/avatar.png";
import zenshot from "@/assets/zenshot.jpg";
import tryscribe from "@/assets/tryscribe.jpg";
import synote from "@/assets/synote.jpg";
import serein from "@/assets/serein.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const experience = [
  { role: "Product Engineer", company: "TryScribe", dates: "June 2025 - Present", letter: "T" },
  { role: "Full Stack Developer", company: "Codiest", dates: "Feb 2025 - Apr 2025", letter: "C" },
  { role: "Frontend Developer", company: "Polymath AI", dates: "Jun 2024 - Aug 2024", letter: "P" },
];

const projects = [
  {
    id: "zenshot",
    name: "ZenShot",
    desc: "A modern editor for builders to create viral visuals and share progress.",
    img: zenshot,
    longDesc:
      "A screenshot editor for founders to visualize progress, MRR and milestones using glass themes, remix layouts, and high res exports. Dockerized app & setup CI/CD workflow.",
    tags: ["Nextjs", "Supabase", "Docker", "CI/CD", "Cloudflare"],
    github: "https://github.com/Shreyas-29",
    live: "https://zenshot.app/",
  },
  {
    id: "tryscribe",
    name: "TryScribe",
    desc: "A modern AI workspace with tools designed to save time and reduce effort.",
    img: tryscribe,
    longDesc:
      "A modern AI workspace bundling writing, summarization, and research tools designed for productivity. Built with a polished UI and shipped to 130+ active users.",
    tags: ["Nextjs", "TypeScript", "OpenAI", "Stripe", "Vercel"],
    github: "https://github.com/Shreyas-29",
    live: "https://tryscribe.in/",
  },
  {
    id: "synote",
    name: "Synote",
    desc: "An AI note-taking app that generates notes and summaries using Gemini.",
    img: synote,
    longDesc:
      "An AI note-taking app that auto-generates structured notes and concise summaries using Gemini, with a clean writing surface and quick capture flow.",
    tags: ["Nextjs", "Gemini", "Prisma", "PostgreSQL"],
    github: "https://github.com/Shreyas-29",
    live: "#",
  },
  {
    id: "serein",
    name: "Serein",
    desc: "An editorial style habit tracking landing page focused on calm design.",
    img: serein,
    longDesc:
      "An editorial style habit tracking landing page focused on calm design, refined typography, and a quiet visual rhythm that invites daily use.",
    tags: ["Nextjs", "Tailwind", "Motion"],
    github: "https://github.com/Shreyas-29",
    live: "#",
  },
];

type Tech = { name: string; Icon?: IconType; color?: string; letter?: string; letterBg?: string };
const techStack: Tech[] = [
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Motion", Icon: SiFramer, color: "#ffffff" },
  { name: "GSAP", Icon: SiGreensock, color: "#88CE02" },
  { name: "React Query", Icon: SiReactquery, color: "#FF4154" },
  { name: "Zustand", letter: "🐻", letterBg: "transparent" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Flask", Icon: SiFlask, color: "#ffffff" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
  { name: "NeonDB", letter: "N", letterBg: "#00E599" },
  { name: "Prisma", Icon: SiPrisma, color: "#ffffff" },
  { name: "OpenAI", Icon: SiOpenai, color: "#ffffff" },
  { name: "Gemini", Icon: SiGooglegemini, color: "#8E75B2" },
  { name: "Qdrant", letter: "Q", letterBg: "#DC382D" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
  { name: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Stripe", Icon: SiStripe, color: "#635BFF" },
  { name: "Paddle", letter: "P", letterBg: "#FFD500" },
];

const socials: { label: string; href: string; Icon: IconType }[] = [
  { label: "GitHub", href: "https://github.com/Shreyas-29", Icon: SiGithub },
  { label: "Twitter", href: "https://twitter.com/shreyassihasane", Icon: SiX },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shreyas-sihasane", Icon: FaLinkedin },
  { label: "Youtube", href: "https://heyshreyas.com/yt", Icon: SiYoutube },
  { label: "Notes", href: "https://www.heyshreyas.com/notes", Icon: FileText as unknown as IconType },
  { label: "Email", href: "mailto:hello@heyshreyas.com", Icon: Mail as unknown as IconType },
];

const roles = ["Product Engineer", "Full Stack Developer", "UI Engineer", "Open Source Builder"];

function TextFlipper() {
  const [index, setIndex] = useState(0);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % roles.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 3000);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden" style={{ minWidth: 140 }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ x: -30, opacity: 0, filter: "blur(8px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ x: 30, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 whitespace-nowrap text-muted-foreground"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.section
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      custom={delay}
    >
      <h2 className="text-xl font-semibold text-foreground mb-6">{title}</h2>
      {children}
    </motion.section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        {/* Header */}
        <motion.div
          className="flex items-center gap-5"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <img
            src={avatar}
            alt="Faiz Jamadar"
            width={72}
            height={72}
            className="size-[72px] rounded-2xl border border-border object-cover bg-muted"
          />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Faiz Jamadar</h1>
            <p className="text-sm mt-0.5"><TextFlipper /></p>

          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <p>
            I'm a <span className="text-foreground font-medium">full-stack engineer</span> who builds products from{" "}
            <span className="text-foreground font-medium">concept to launch</span>. I focus on clean code, smooth interfaces, and{" "}
            <span className="text-foreground font-medium">shipping features</span> that actually matter to users.
          </p>
          <p>
            I shipped <a href="https://tryscribe.in/" className="text-foreground font-medium underline-offset-4 hover:underline">TryScribe</a>, a productivity tool with{" "}
            <span className="text-foreground font-medium">130+ users</span>, and I'm currently building{" "}
            <a href="https://zenshot.app/" className="text-foreground font-medium underline-offset-4 hover:underline">ZenShot</a>, a screenshot beautification tool for makers sharing their progress.
          </p>
          <p>
            Open to <span className="text-foreground font-medium">full time</span> roles and{" "}
            <span className="text-foreground font-medium">collaborations</span>.
          </p>
        </motion.div>

        {/* Now playing */}
        <motion.a
          href="https://open.spotify.com/track/7MXVkk9YMqq6vqLSZcgveL"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <AudioLines className="size-4 text-[#ff5b5b]" />
          <span className="inline-flex items-center justify-center size-5 rounded bg-gradient-to-br from-rose-500 to-orange-400 text-[10px] font-bold text-white">S</span>
          <span><span className="text-foreground">Starboy</span> · The Weeknd ft. Daft Punk</span>
        </motion.a>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex flex-wrap gap-3"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          <a
            href="https://github.com/Shreyas-29"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            <Github className="size-4" /> GitHub
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            <FileText className="size-4" /> Resume
          </a>
        </motion.div>

        {/* Experience */}
        {/* <Section title="Experience">
          <ul data-cursor="expand" className="divide-y divide-border rounded-xl border border-border bg-card/40 overflow-hidden">
            {experience.map((e, i) => (
              <motion.li
                key={e.company}
                variants={fadeUp}
                custom={i}
                className="flex items-center justify-between gap-4 px-4 py-4 hover:bg-accent/40 transition-colors cursor-pointer"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{e.role}</p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex size-4 items-center justify-center rounded bg-muted text-[9px] font-semibold text-foreground">
                      {e.letter}
                    </span>
                    {e.company}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{e.dates}</span>
                  <ChevronRight className="size-4" />
                </div>
              </motion.li>
            ))}
          </ul>
        </Section> */}

        {/* Projects */}
        <Section title="Projects">
          <LayoutGroup>
            <div data-cursor="view" className="space-y-3">
              {projects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </LayoutGroup>
          <div className="mt-5">
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View Projects <ChevronRight className="size-4" />
            </a>
          </div>
        </Section>

        {/* Tech Stack */}
        <Section title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {techStack.map((t, i) => (
              <motion.span
                key={t.name}
                variants={fadeUp}
                custom={i * 0.3}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs text-foreground"
              >
                {t.Icon ? (
                  <t.Icon className="size-3.5" style={{ color: t.color }} />
                ) : (
                  <span
                    className="inline-flex size-3.5 items-center justify-center rounded-sm text-[9px] font-bold text-black"
                    style={{ background: t.letterBg }}
                  >
                    {t.letter}
                  </span>
                )}
                {t.name}
              </motion.span>
            ))}
          </div>
        </Section>

        {/* Get In Touch */}
        <Section title="Get In Touch">
          <ul className="flex flex-wrap gap-2">
            {socials.map((s, i) => (
              <motion.li key={s.label} variants={fadeUp} custom={i}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs text-foreground hover:bg-accent transition-colors"
                >
                  <s.Icon className="size-3.5" />
                  {s.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </Section>

        <footer className="mt-20 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Faiz Jamdar
        </footer>
      </div>
      <ProjectModalRoot />
    </main>
  );
}

type Project = (typeof projects)[number];

let openProjectFn: ((p: Project) => void) | null = null;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Register this card so the shared opener can target it
    const prev = openProjectFn;
    openProjectFn = (p) => {
      if (p.id === project.id) setIsActive(true);
      else prev?.(p);
    };
    return () => {
      openProjectFn = prev;
    };
  }, [project.id]);

  // Lock scroll & listen for Escape when expanded
  useEffect(() => {
    if (!isActive) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsActive(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isActive]);

  const springTransition = { type: "spring" as const, stiffness: 200, damping: 28 };

  return (
    <>
      {/* Collapsed card */}
      <motion.button
        type="button"
        variants={fadeUp}
        custom={index}
        layoutId={`project-card-${project.id}`}
        onClick={() => setIsActive(true)}
        style={{ borderRadius: 12 }}
        className="flex w-full items-center gap-4 border border-border bg-card/40 p-3 text-left hover:bg-accent/40 transition-colors"
      >
        <motion.img
          layoutId={`project-image-${project.id}`}
          src={project.img}
          alt={project.name}
          loading="lazy"
          style={{ borderRadius: 8 }}
          className="h-20 w-32 shrink-0 object-cover"
        />
        <motion.div className="min-w-0" layoutId={`project-text-${project.id}`}>
          <motion.h3 layoutId={`project-name-${project.id}`} className="text-base font-semibold text-foreground">
            {project.name}
          </motion.h3>
          <motion.p layoutId={`project-desc-${project.id}`} className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {project.desc}
          </motion.p>
        </motion.div>
      </motion.button>

      {/* Expanded overlay */}
      <AnimatePresence>
        {isActive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsActive(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Expanded card — shares layoutId with the collapsed card */}
            <motion.div
              layoutId={`project-card-${project.id}`}
              style={{ borderRadius: 16 }}
              className="relative z-10 w-full max-w-xl overflow-hidden border border-border bg-card shadow-2xl"
              transition={springTransition}
            >
              {/* Image morphs from small thumbnail to full-width hero */}
              <motion.img
                layoutId={`project-image-${project.id}`}
                src={project.img}
                alt={project.name}
                style={{ borderRadius: 0 }}
                className="h-72 w-full object-cover"
                transition={springTransition}
              />

              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.15, duration: 0.2 }}
                onClick={() => setIsActive(false)}
                aria-label="Close"
                className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur hover:bg-background"
              >
                <X className="size-4" />
              </motion.button>

              <div className="p-6">
                {/* Name & links */}
                <div className="flex items-start justify-between gap-4">
                  <motion.h3
                    layoutId={`project-name-${project.id}`}
                    className="text-2xl font-semibold text-foreground"
                    transition={springTransition}
                  >
                    {project.name}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="flex gap-2"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-secondary text-foreground hover:bg-accent transition-colors"
                    >
                      <Github className="size-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-secondary text-foreground hover:bg-accent transition-colors"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </motion.div>
                </div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs text-foreground"
                    >
                      <span className="size-1.5 rounded-full bg-muted-foreground/60" />
                      {t}
                    </span>
                  ))}
                </motion.div>

                {/* Description — slides in below the image */}
                <motion.p
                  layoutId={`project-desc-${project.id}`}
                  className="mt-5 text-sm leading-relaxed text-muted-foreground"
                  transition={springTransition}
                >
                  {project.longDesc}
                </motion.p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectModalRoot() {
  // No longer needed — kept as an empty fragment for the JSX reference in Index
  return null;
}
