import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, X } from "lucide-react";
import { Project } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

let openProjectFn: ((p: Project) => void) | null = null;

export function ProjectCard({ project, index }: { project: Project; index: number }) {
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
        className="flex w-full items-center gap-4 p-3 text-left hover:bg-accent/40 transition-colors"
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
          <h3 className="text-base font-semibold text-foreground">
            {project.name}
          </h3>
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
              className="relative z-10 w-full max-w-md overflow-hidden border border-border bg-card shadow-2xl"
              transition={springTransition}
            >
              {/* Image morphs from small thumbnail to full-width hero */}
              <motion.img
                layoutId={`project-image-${project.id}`}
                src={project.img}
                alt={project.name}
                style={{ borderRadius: 0 }}
                className="h-62 w-full object-cover"
                transition={springTransition}
              />

              {/* Close button */}
              {/* <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.15, duration: 0.2 }}
                onClick={() => setIsActive(false)}
                aria-label="Close"
                className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur hover:bg-background"
              >
                <X className="size-4" />
              </motion.button> */}

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
