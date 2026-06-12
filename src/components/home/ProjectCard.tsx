import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, X } from "lucide-react";
import { Project, techStack } from "@/lib/data";
import { blurReveal } from "@/lib/animations";
import type { Tech } from "@/lib/data";

let openProjectFn: ((p: Project) => void) | null = null;

export function ProjectCard({ project }: { project: Project; index?: number }) {
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
      {/* Collapsed card — wrapper reserves space so siblings don't shift when expanded */}
      <div className="relative" style={{ minHeight: 104 }}>
      <motion.button
        type="button"
        variants={blurReveal}
        layoutId={`project-card-${project.id}`}
        onClick={() => setIsActive(true)}
        style={{ borderRadius: 12 }}
        className="flex w-full items-center gap-4 text-left hover:bg-accent/40 transition-colors"
      >
        <motion.img
          layoutId={`project-image-${project.id}`}
          src={project.img}
          alt={project.name}
          loading="lazy"
          style={{ borderRadius: 8 }}
          className="h-20 w-32 shrink-0 object-contain"
        />
        <motion.div className="min-w-0" layoutId={`project-text-${project.id}`}>
          <h3 className="text-base font-semibold text-foreground">
            {project.name}
          </h3>
          <motion.p layoutId={`project-desc-${project.id}`} className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {project.desc}
          </motion.p>
        </motion.div>
      </motion.button>
      </div>

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
              className="relative z-10 w-full max-w-md overflow-hidden border border-border bg-card shadow-2xl"
              transition={springTransition}
            >
              {/* Image morphs from small thumbnail to full-width hero */}
              <motion.img
                layoutId={`project-image-${project.id}`}
                src={project.img}
                alt={project.name}
                style={{ borderRadius: 0 }}
                className="h-auto max-h-80 w-full object-contain bg-muted"
                transition={springTransition}
              />

      

              <div className="p-6">
                {/* Name & links */}
                <div className="flex items-start justify-between gap-4">
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ delay: 0.1, duration: 0.25 }}
                    className="text-2xl font-semibold text-foreground"
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
                  {project.tags.map((t) => {
                    const match = techStack.find(
                      (tech) =>
                        tech.name.toLowerCase() === t.toLowerCase() ||
                        t.toLowerCase().startsWith(tech.name.toLowerCase()) ||
                        tech.name.toLowerCase().startsWith(t.toLowerCase()),
                    );
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-neutral-900 px-2.5 py-1.5 text-[13px] font-medium text-foreground"
                      >
                        {match?.Icon ? (
                          <match.Icon className="size-4" style={{ color: match.color }} />
                        ) : (
                          <span
                            className="inline-flex size-4 items-center justify-center rounded-sm text-[10px] font-bold text-black"
                            style={{ background: match?.letterBg ?? "#6B7280" }}
                          >
                            {match?.letter ?? t.charAt(0)}
                          </span>
                        )}
                        {t}
                      </span>
                    );
                  })}
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
