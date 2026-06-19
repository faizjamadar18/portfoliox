import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { g as SiGithub, H as HiDocumentText, m as SiNextdotjs, A as SiTypescript, v as SiReact, z as SiTailwindcss, f as SiFramer, n as SiNodedotjs, t as SiPython, d as SiFastapi, e as SiFlask, r as SiPostgresql, k as SiMongodb, y as SiSupabase, s as SiPrisma, p as SiOpenai, h as SiGooglegemini, b as SiDocker, B as SiVercel, S as SiCplusplus, i as SiJavascript, l as SiMysql, c as SiExpress, u as SiPytorch, j as SiLangchain, o as SiNumpy, q as SiPandas, w as SiScikitlearn, x as SiSocketdotio, C as SiWebrtc, F as FaLinkedin, D as SiX, a as FiExternalLink } from "../_libs/react-icons.mjs";
import { a as avatar } from "./router-DooYsPkm.mjs";
import { m as motion, L as LayoutGroup, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { F as FileText, M as Mail } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/lenis.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const xpense = "/assets/Xpense-CunZd01C.png";
const faizbook = "/assets/faizbook-DgI375RI.png";
const docschat = "/assets/docschat-dREWlKsw.png";
const connectify = "/assets/connectify-Bx3wqyzn.png";
const attendx = "/assets/Attendx-D8LK6S-q.png";
const projects = [
  {
    id: "attendx",
    name: "AttendX",
    desc: "An AI-powered attendance platform that automates student tracking using computer vision and voice recognition.",
    img: attendx,
    longDesc: "An AI-powered attendance platform that automates student tracking using computer vision and voice recognition.",
    tags: ["Python", "Scikit-learn", "Supabase"],
    github: "https://github.com/faizjamadar18/AttendX",
    live: "https://attendx-landing.vercel.app"
  },
  {
    id: "docschat",
    name: "DocsChat",
    desc: "A RAG-powered document assistant that transforms PDFs into accurate and interactive AI conversations.",
    img: docschat,
    longDesc: "A RAG-powered document assistant that transforms PDFs into accurate and interactive AI conversations.",
    tags: ["Next.js", "FastAPI", "RAG", "LangChain", "ChromaDB", "Gemini"],
    github: "https://github.com/faizjamadar18/DocsChat",
    live: "https://docschats.vercel.app"
  },
  {
    id: "xpense",
    name: "XpenseFlow",
    desc: "An intelligent finance platform that simplifies expense tracking, budgeting, and spending analysis with AI.",
    img: xpense,
    longDesc: "An intelligent finance platform that simplifies expense tracking, budgeting, and spending analysis with AI.",
    tags: ["Next.js", "Supabase", "Prisma", "Gemini"],
    github: "https://github.com/faizjamadar18/Xpense-flow",
    live: "https://xpenseflow.vercel.app"
  },
  {
    id: "faizbook",
    name: "Faizbook",
    desc: "A full-featured social media platform for creating content, building communities, and sharing experiences.",
    img: faizbook,
    longDesc: "A full-featured social media platform for creating content, building communities, and sharing experiences.",
    tags: ["Next.js", "Convex", "Gemini API", "ImageKit.io"],
    github: "https://github.com/faizjamadar18/AI-content-creator-by-Faiz",
    live: "https://faizbookx.vercel.app"
  },
  {
    id: "connectify",
    name: "Connectify",
    desc: "A real-time communication platform for messaging, video calls, and seamless media sharing.",
    img: connectify,
    longDesc: "A real-time communication platform for messaging, video calls, and seamless media sharing.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO", "WebRTC", "JWT"],
    github: "https://github.com/faizjamadar18/Connectify",
    live: "https://connectifyx.vercel.app"
  }
];
const techStack = [
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Motion", Icon: SiFramer, color: "#ffffff" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Flask", Icon: SiFlask, color: "#ffffff" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
  { name: "Prisma", Icon: SiPrisma, color: "#ffffff" },
  { name: "OpenAI", Icon: SiOpenai, color: "#ffffff" },
  { name: "Gemini", Icon: SiGooglegemini, color: "#8E75B2" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "SQL", letter: "SQL", letterBg: "#6B7280" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Express", Icon: SiExpress, color: "#ffffff" },
  { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
  { name: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
  { name: "NumPy", Icon: SiNumpy, color: "#013243" },
  { name: "Pandas", Icon: SiPandas, color: "#150458" },
  { name: "RAG", letter: "R", letterBg: "#6B7280" },
  { name: "Scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
  { name: "Socket.IO", Icon: SiSocketdotio, color: "#ffffff" },
  { name: "WebRTC", Icon: SiWebrtc, color: "#333333" }
];
const socials = [
  { label: "GitHub", href: "https://github.com/faizjamadar18", Icon: SiGithub },
  { label: "Resume", href: "/resume.pdf", Icon: FileText },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/faiz-jamadar-2859732a4", Icon: FaLinkedin },
  { label: "Email", href: "mailto:faizjamadar18@gmail.com", Icon: Mail },
  { label: "Twitter", href: "https://x.com/faizjamadar18", Icon: SiX }
];
const roles = ["Product Engineer", "Full Stack Developer", "UI Engineer", "Open Source Builder"];
const songs = [
  {
    title: "Starboy",
    artist: "The Weeknd ft. Daft Punk",
    url: "https://open.spotify.com/track/7MXVkk9YMqq6vqLSZcgveL",
    cover: "https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452",
    color: "#ff5b5b"
    // Red
  },
  {
    title: "Die With A Smile",
    artist: "Lady Gaga, Bruno",
    url: "https://open.spotify.com/track/27WebcZ0fwAcdBxcx98b89",
    cover: "https://i.scdn.co/image/ab67616d0000b27382ea2e9e1858aa012c57cd45",
    color: "#4b90e2"
    // Blueish from the cover
  },
  {
    title: "Espresso",
    artist: "Sabrina Carpenter",
    url: "https://open.spotify.com/track/2qSkIjg1L9g41n1m04886b",
    cover: "https://i.scdn.co/image/ab67616d00001e02659cd4673230913b3918e0d5",
    color: "#c28862"
    // Brown/Beige
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
    cover: "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
    color: "#4b694fff"
    // Yellowish
  }
];
const easeOutExpo = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: i * 0.05, ease: easeOutExpo }
  })
};
const blurReveal = {
  hidden: { opacity: 0, y: 12, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOutExpo }
  }
};
const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren
    }
  }
});
const BlurredStagger = ({
  text = "we love hextaui.com ❤️"
}) => {
  const headingText = text;
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015
      }
    }
  };
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)"
    },
    show: {
      opacity: 1,
      filter: "blur(0px)"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          variants: container,
          initial: "hidden",
          animate: "show",
          className: "text-base",
          children: headingText.split("").map((char, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              variants: letterAnimation,
              transition: { duration: 0.3 },
              children: char === " " ? " " : char
            },
            index
          ))
        }
      )
    })
  });
};
function TextFlipper() {
  const [index, setIndex] = reactExports.useState(0);
  const advance = reactExports.useCallback(() => {
    setIndex((prev) => (prev + 1) % roles.length);
  }, []);
  reactExports.useEffect(() => {
    const id = setInterval(advance, 3e3);
    return () => clearInterval(id);
  }, [advance]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    className: "relative inline-flex h-[1.8em] overflow-hidden", style: { minWidth: 200 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, {
      mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0, filter: "blur(8px)" },
          transition: { duration: 0.3 },
          className: "absolute left-0 top-0 whitespace-nowrap text-gray",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(BlurredStagger, { text: roles[index] })
        },
        roles[index]
      )
    })
  });
}
function Section({
  title,
  children,
  stagger = 0.08
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      className: "mt-16",
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.05, margin: "0px 0px 15% 0px" },
      variants: staggerContainer(stagger),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          variants: blurReveal,
          className: "text-xl font-semibold text-foreground mb-6",
          children: title
        }
      ),
        children
      ]
    }
  );
}
function ProjectCard({ project }) {
  const [isActive, setIsActive] = reactExports.useState(false);
  reactExports.useEffect(() => {
    return () => {
    };
  }, [project.id]);
  reactExports.useEffect(() => {
    if (!isActive) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    const onKey = (e) => {
      if (e.key === "Escape") setIsActive(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isActive]);
  const springTransition = { type: "spring", stiffness: 200, damping: 28 };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "relative", style: { minHeight: 104 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          variants: blurReveal,
          layoutId: `project-card-${project.id}`,
          onClick: () => setIsActive(true),
          style: { borderRadius: 12 },
          className: "flex w-full items-center gap-4 text-left hover:bg-accent/40 transition-colors",
          children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              layoutId: `project-image-${project.id}`,
              src: project.img,
              alt: project.name,
              loading: "lazy",
              style: { borderRadius: 8 },
              className: "h-20 w-32 shrink-0 object-contain"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
            className: "min-w-0", layoutId: `project-text-${project.id}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: project.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { layoutId: `project-desc-${project.id}`, className: "mt-1 text-sm text-muted-foreground line-clamp-2", children: project.desc })
            ]
          })
          ]
        }
      )
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, {
      children: isActive && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3 },
            onClick: () => setIsActive(false),
            className: "absolute inset-0 bg-black/70 backdrop-blur-md"
          }
        ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            layoutId: `project-card-${project.id}`,
            style: { borderRadius: 16 },
            className: "relative z-10 w-full max-w-md overflow-hidden border border-border bg-card shadow-2xl",
            transition: springTransition,
            children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.img,
              {
                layoutId: `project-image-${project.id}`,
                src: project.img,
                alt: project.name,
                style: { borderRadius: 0 },
                className: "h-auto max-h-80 w-full object-contain bg-muted",
                transition: springTransition
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.h3,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 8 },
                    transition: { delay: 0.1, duration: 0.25 },
                    className: "text-2xl font-semibold text-foreground",
                    children: project.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 6 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 6 },
                    transition: { delay: 0.15, duration: 0.3 },
                    className: "flex gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: project.github,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "inline-flex size-9 items-center justify-center rounded-lg border border-border bg-secondary text-foreground hover:bg-accent transition-colors",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiGithub, { className: "size-4" })
                      }
                    ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: project.live,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "inline-flex size-9 items-center justify-center rounded-lg border border-border bg-secondary text-foreground hover:bg-accent transition-colors",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiExternalLink, { className: "size-4" })
                      }
                    )
                    ]
                  }
                )
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 6 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 6 },
                  transition: { delay: 0.1, duration: 0.3 },
                  className: "mt-4 flex flex-wrap gap-2",
                  children: project.tags.map((t) => {
                    const match = techStack.find(
                      (tech) => tech.name.toLowerCase() === t.toLowerCase() || t.toLowerCase().startsWith(tech.name.toLowerCase()) || tech.name.toLowerCase().startsWith(t.toLowerCase())
                    );
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "inline-flex items-center gap-2 rounded-lg border border-white/20 bg-neutral-900 px-2.5 py-1.5 text-[13px] font-medium text-foreground",
                        children: [
                          match?.Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(match.Icon, { className: "size-4", style: { color: match.color } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "inline-flex size-4 items-center justify-center rounded-sm text-[10px] font-bold text-black",
                              style: { background: match?.letterBg ?? "#6B7280" },
                              children: match?.letter ?? t.charAt(0)
                            }
                          ),
                          t
                        ]
                      },
                      t
                    );
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  layoutId: `project-desc-${project.id}`,
                  className: "mt-5 text-sm leading-relaxed text-muted-foreground",
                  transition: springTransition,
                  children: project.longDesc
                }
              )
              ]
            })
            ]
          }
        )
        ]
      })
    })
    ]
  });
}
function PlayingAnimation({ className, style }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: `flex items-end justify-between w-4 h-4 pt-[2px] pb-[2px] ${className ?? ""}`, style, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        className: "w-[3px] bg-current rounded-[1px]",
        animate: { height: ["40%", "100%", "60%", "80%", "40%"] },
        transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        className: "w-[3px] bg-current rounded-[1px]",
        animate: { height: ["80%", "30%", "100%", "50%", "80%"] },
        transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        className: "w-[3px] bg-current rounded-[1px]",
        animate: { height: ["50%", "90%", "30%", "100%", "50%"] },
        transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        className: "w-[3px] bg-current rounded-[1px]",
        animate: { height: ["90%", "40%", "80%", "30%", "90%"] },
        transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }
      }
    )
    ]
  });
}
function NowPlaying() {
  const [index, setIndex] = reactExports.useState(0);
  const advance = reactExports.useCallback(() => {
    setIndex((prev) => (prev + 1) % songs.length);
  }, []);
  reactExports.useEffect(() => {
    const id = setInterval(advance, 8e3);
    return () => clearInterval(id);
  }, [advance]);
  const song = songs[index];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.a,
    {
      href: song.url,
      target: "_blank",
      rel: "noreferrer",
      className: "mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative h-6 min-w-[300px]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PlayingAnimation, { className: "shrink-0 transition-colors duration-500", style: { color: song.color } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "relative flex-1 h-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, {
          mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: -20, opacity: 0 },
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              className: "absolute inset-0 flex gap-3 whitespace-nowrap",
              children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: song.cover, alt: song.title, className: "size-5 rounded object-cover shadow-sm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: song.title }),
                  " · ",
                  song.artist
                ]
              })
              ]
            },
            song.url
          )
        })
      })
      ]
    }
  );
}
function VisitorCounter() {
  const [count, setCount] = reactExports.useState(null);
  reactExports.useEffect(() => {
    fetch("https://countapi.mileshilliard.com/api/v1/hit/faizx-vercel-app-visitors").then((r) => r.json()).then((data) => setCount(Number(data.value))).catch(() => setCount(null));
  }, []);
  if (count === null) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
    children: [
      count.toLocaleString(),
      " visitors"
    ]
  });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", {
    className: "min-h-screen bg-background text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "mx-auto max-w-2xl px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
        className: "flex items-center gap-5", initial: "hidden", animate: "visible", variants: fadeUp, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: avatar, alt: "Faiz Jamadar", width: 72, height: 72, className: "size-[72px] rounded-2xl border border-border object-cover bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", {
            className: "text-3xl font-semibold tracking-tight inline-flex items-center gap-2", children: [
              "Faiz Jamadar",
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", className: "size-5", "aria-label": "Verified", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", {
                  transform: "translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 30.091 10.131 L 30.091 10.131 c 5.28 -13.046 23.695 -13.207 29.202 -0.255 l 0 0 l 0 0 c 12.959 -5.491 26.093 7.416 20.829 20.469 l 0 0 l 0 0 c 13.046 5.28 13.207 23.695 0.255 29.202 l 0 0 l 0 0 c 5.491 12.959 -7.416 26.093 -20.469 20.829 l 0 0 l 0 0 c -5.28 13.046 -23.695 13.207 -29.202 0.255 l 0 0 l 0 0 C 17.748 86.122 4.613 73.215 9.878 60.162 l 0 0 l 0 0 C -3.169 54.881 -3.33 36.467 9.623 30.96 l 0 0 l 0 0 C 4.131 18.001 17.038 4.866 30.091 10.131 L 30.091 10.131 z", fill: "rgb(0,150,241)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "39.66,63.79 23.36,47.76 28.97,42.05 39.3,52.21 59.6,29.58 65.56,34.93", fill: "rgb(255,255,255)" })
                  ]
                })
              })
            ]
          }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TextFlipper, {}) })
          ]
        })
        ]
      }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
        className: "mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground", initial: "hidden", animate: "visible", variants: fadeUp, custom: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
          children: [
            "A ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Software Developer & AI Engineer" }),
            " with",
            " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "1.5+ years" }),
            " of hands-on experience building impactful products and solving real-world problems with",
            " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "up-to-date technologies" }),
            "."
          ]
        }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
          className: "text-base", children: [
            "Skilled in production-ready",
            " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Full-Stack Development" }),
            ",",
            " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "AI Automations" }),
            ", intelligent",
            " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "predictive modeling" }),
            ", and data-driven",
            " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "ML solutions" }),
            " — built to scale and ship."
          ]
        }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
          children: [
            "Open to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "full-time roles" }),
            " and",
            " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "collaborations" }),
            "."
          ]
        })
        ]
      }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", animate: "visible", variants: fadeUp, custom: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(NowPlaying, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
        className: "mt-6 flex flex-wrap gap-3", initial: "hidden", animate: "visible", variants: fadeUp, custom: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
          href: "https://github.com/faizjamadar18", className: "inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-neutral-900 px-1.5 py-1.5 text-sm font-medium text-foreground hover:bg-neutral-800 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_1px_2px_0_rgba(0,0,0,0.6),0_4px_12px_-2px_rgba(0,0,0,0.5)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SiGithub, { className: "size-4" }),
            " GitHub"
          ]
        }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
          href: "/resume.pdf", className: "inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-neutral-900 px-1.5 py-1.5 text-sm font-medium text-foreground hover:bg-neutral-800 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_1px_2px_0_rgba(0,0,0,0.6),0_4px_12px_-2px_rgba(0,0,0,0.5)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HiDocumentText, { className: "size-4" }),
            " Resume"
          ]
        })
        ]
      }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, {
        title: "Projects", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGroup, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: staggerContainer(0.08), "data-cursor": "view", className: "", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p }, p.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5" })
        ]
      }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, {
        title: "Tech Stack", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "flex flex-wrap gap-3", children: techStack.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, {
            variants: blurReveal, className: "inline-flex items-center gap-2 rounded-lg border border-white/20 bg-neutral-900 px-2.5 py-1.5 text-[13px] font-medium text-foreground hover:bg-neutral-800 transition-colors", children: [
              t.Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(t.Icon, {
                className: "size-4", style: {
                  color: t.color
                }
              }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                className: "inline-flex size-4 items-center justify-center rounded-sm text-[10px] font-bold text-black", style: {
                  background: t.letterBg
                }, children: t.letter
              }),
              t.name
            ]
          }, t.name))
        })
      }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, {
        title: "Get In Touch", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
          className: "flex flex-wrap gap-3", children: socials.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.li, {
            variants: blurReveal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
              href: s.href, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-lg border border-white/20 bg-neutral-900 px-2.5 py-1.5 text-[13px] font-medium text-foreground hover:bg-neutral-800 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "size-4" }),
                s.label
              ]
            })
          }, s.label))
        })
      }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", {
        className: "mt-20 text-xs text-muted-foreground flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
          children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Faiz Jamadar"
          ]
        }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VisitorCounter, {})
        ]
      })
      ]
    })
  });
}
export {
  Index as component
};
