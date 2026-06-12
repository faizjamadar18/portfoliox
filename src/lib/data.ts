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

import xpense from "@/assets/Xpense.png";
import faizbook from "@/assets/faizbook.png";
import docschat from "@/assets/docschat.png";
import connectify from "@/assets/connectify.png";
import attendx from "@/assets/Attendx.png";


export const experience = [
  { role: "Product Engineer", company: "TryScribe", dates: "June 2025 - Present", letter: "T" },
  { role: "Full Stack Developer", company: "Codiest", dates: "Feb 2025 - Apr 2025", letter: "C" },
  { role: "Frontend Developer", company: "Polymath AI", dates: "Jun 2024 - Aug 2024", letter: "P" },
];

export const projects = [
  {
    id: "attendx",
    name: "AttendX",
    desc: "An AI-powered attendance platform that automates student tracking using computer vision and voice recognition.",
    img: attendx,
    longDesc:
      "An AI-powered attendance platform that automates student tracking using computer vision and voice recognition.",
    tags: ["Python", "Scikit-learn", "Streamlit", "Supabase", "Computer Vision"],
    github: "https://github.com/faizjamadar18/AttendX",
    live: "https://attendx-landing.vercel.app",
  },
  {
    id: "xpense",
    name: "XpenseFlow",
    desc: "An intelligent finance platform that simplifies expense tracking, budgeting, and spending analysis with AI.",
    img: xpense,
    longDesc:
      "An intelligent finance platform that simplifies expense tracking, budgeting, and spending analysis with AI.",
    tags: ["Next.js", "Clerk", "Supabase", "Prisma", "Gemini API"],
    github: "https://github.com/faizjamadar18/Xpense-flow",
    live: "https://xpenseflow.vercel.app",
  },
  {
    id: "docschat",
    name: "DocsChat",
    desc: "A RAG-powered document assistant that transforms PDFs into accurate and interactive AI conversations.",
    img: docschat,
    longDesc:
      "A RAG-powered document assistant that transforms PDFs into accurate and interactive AI conversations.",
    tags: ["Next.js", "FastAPI", "LangChain", "ChromaDB", "Gemini", "RAG"],
    github: "https://github.com/faizjamadar18/DocsChat",
    live: "https://docschats.vercel.app",
  },
  {
    id: "faizbook",
    name: "Faizbook",
    desc: "A full-featured social media platform for creating content, building communities, and sharing experiences.",
    img: faizbook,
    longDesc:
      "A full-featured social media platform for creating content, building communities, and sharing experiences.",
    tags: ["Next.js", "Convex", "Gemini API", "ImageKit.io"],
    github: "https://github.com/faizjamadar18/AI-content-creator-by-Faiz",
    live: "https://faizbookx.vercel.app",
  },
  {
    id: "connectify",
    name: "Connectify",
    desc: "A real-time communication platform for messaging, video calls, and seamless media sharing.",
    img: connectify,
    longDesc:
      "A real-time communication platform for messaging, video calls, and seamless media sharing.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO", "WebRTC", "JWT"],
    github: "https://github.com/faizjamadar18/Connectify",
    live: "https://connectifyx.vercel.app",
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
  { label: "GitHub", href: "https://github.com/faizjamadar18", Icon: SiGithub },
  { label: "Resume", href: "/resume.pdf", Icon: FileText as unknown as IconType },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shreyas-sihasane", Icon: FaLinkedin },
  { label: "Email", href: "mailto:faizjamadar18@gmail.com", Icon: Mail as unknown as IconType },
  { label: "Twitter", href: "https://x.com/faizjamadar18", Icon: SiX },
];

export const roles = ["Product Engineer", "Full Stack Developer", "UI Engineer", "Open Source Builder"];

export const songs = [
  {
    title: "Starboy",
    artist: "The Weeknd ft. Daft Punk",
    url: "https://open.spotify.com/track/7MXVkk9YMqq6vqLSZcgveL",
    cover: "https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452",
    color: "#ff5b5b", // Red
  },
  {
    title: "Die With A Smile",
    artist: "Lady Gaga, Bruno",
    url: "https://open.spotify.com/track/27WebcZ0fwAcdBxcx98b89",
    cover: "https://i.scdn.co/image/ab67616d0000b27382ea2e9e1858aa012c57cd45",
    color: "#4b90e2", // Blueish from the cover
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
    color: "#4b694fff", // Yellowish
  },
];
