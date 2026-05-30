import { FileText, Mail } from "lucide-react";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiGreensock,
  SiReactquery, SiNodedotjs, SiPython, SiFastapi, SiFlask,
  SiPostgresql, SiMongodb, SiSupabase, SiPrisma, SiOpenai,
  SiGooglegemini, SiDocker, SiVercel, SiCloudflare, SiGooglecloud,
  SiStripe, SiGithub, SiX, SiYoutube,
} from "react-icons/si";
import { FaAws, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";

import zenshot from "@/assets/zenshot.jpg";
import tryscribe from "@/assets/tryscribe.jpg";
import synote from "@/assets/synote.jpg";
import serein from "@/assets/serein.jpg";

export const experience = [
  { role: "Product Engineer", company: "TryScribe", dates: "June 2025 - Present", letter: "T" },
  { role: "Full Stack Developer", company: "Codiest", dates: "Feb 2025 - Apr 2025", letter: "C" },
  { role: "Frontend Developer", company: "Polymath AI", dates: "Jun 2024 - Aug 2024", letter: "P" },
];

export const projects = [
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

export type Project = (typeof projects)[number];

export type Tech = { name: string; Icon?: IconType; color?: string; letter?: string; letterBg?: string };

export const techStack: Tech[] = [
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

export const socials: { label: string; href: string; Icon: IconType }[] = [
  { label: "GitHub", href: "https://github.com/Shreyas-29", Icon: SiGithub },
  { label: "Twitter", href: "https://twitter.com/shreyassihasane", Icon: SiX },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shreyas-sihasane", Icon: FaLinkedin },
  { label: "Youtube", href: "https://heyshreyas.com/yt", Icon: SiYoutube },
  // { label: "Notes", href: "https://www.heyshreyas.com/notes", Icon: FileText as unknown as IconType },
  { label: "Email", href: "mailto:hello@heyshreyas.com", Icon: Mail as unknown as IconType },
];

export const roles = ["Product Engineer", "Full Stack Developer", "UI Engineer", "Open Source Builder"];

export const songs = [
  {
    title: "Die With A Smile",
    artist: "Lady Gaga, Bruno Mars",
    url: "https://open.spotify.com/track/27WebcZ0fwAcdBxcx98b89",
    cover: "https://i.scdn.co/image/ab67616d00001e0282b0431cb0dd1bc3b3d162bc",
    color: "#4b90e2", // Blueish from the cover
  },
  {
    title: "Starboy",
    artist: "The Weeknd ft. Daft Punk",
    url: "https://open.spotify.com/track/7MXVkk9YMqq6vqLSZcgveL",
    cover: "https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452",
    color: "#ff5b5b", // Red
  },
  {
    title: "Espresso",
    artist: "Sabrina Carpenter",
    url: "https://open.spotify.com/track/2qSkIjg1L9g41n1m04886b",
    cover: "https://i.scdn.co/image/ab67616d00001e02659cd4673230913b3918e0d5",
    color: "#c28862", // Brown/Beige
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
    cover: "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
    color: "#ffcc00", // Yellowish
  },
];
