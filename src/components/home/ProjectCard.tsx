import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SiGithub, SiYoutube } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { Project } from "@/lib/data";
import { blurReveal } from "@/lib/animations";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new Event("scroll-lock"));
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.dispatchEvent(new Event("scroll-unlock"));
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.dispatchEvent(new Event("scroll-unlock"));
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <motion.div variants={blurReveal} className="w-full">
        <div
          onClick={() => setIsOpen(true)}
          className="group flex flex-row items-center justify-between gap-3 lg:gap-4 w-full cursor-pointer transition-colors duration-300"
        >
          <div className="h-14 w-auto lg:h-auto lg:w-32 aspect-video shrink-0 relative overflow-hidden rounded-sm border border-foreground/10 bg-neutral-100 dark:bg-neutral-900">
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col lg:gap-1 w-full min-w-0">
            <h4 className="text-base leading-snug lg:leading-normal font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors">
              {project.name}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-2 lg:leading-snug">
              {project.desc}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Expanded modal overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Dialog */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-11/12 md:max-w-md h-fit max-h-[90%] flex flex-col bg-background rounded-xl overflow-hidden ring-1 ring-white/10 ring-inset shadow-2xl z-101"
            >
              <div className="w-full h-60 relative overflow-hidden bg-neutral-900">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover object-center"
                />
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close dialog"
                  className="absolute top-3 right-3 z-10 size-7 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/80 flex items-center justify-center backdrop-blur-md transition cursor-pointer"
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="flex flex-col p-4 overflow-y-auto">
                <div className="flex justify-between gap-2">
                  <div className="flex flex-col w-full gap-4">
                    <h3 className="text-2xl text-foreground font-semibold leading-none">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-sm bg-muted dark:bg-muted/60 text-foreground shadow-[inset_0_0_0_1px_#ffffff14,inset_0_1px_#fff2] squircle"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-2 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          aria-label="GitHub"
                          className="inline-flex items-center justify-center size-8 rounded-md bg-muted dark:bg-muted/60 text-foreground hover:text-foreground shadow-[inset_0_0_0_1px_#ffffff14,inset_0_1px_#fff3] hover:bg-muted squircle transition active:scale-95 cursor-pointer"
                        >
                          <SiGithub className="size-4" />
                        </button>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          aria-label="Live Demo"
                          className="inline-flex items-center justify-center size-8 rounded-md bg-muted dark:bg-muted/60 text-foreground hover:text-foreground shadow-[inset_0_0_0_1px_#ffffff14,inset_0_1px_#fff3] hover:bg-muted squircle transition active:scale-95 cursor-pointer"
                        >
                          <FiExternalLink className="size-4" />
                        </button>
                      </a>
                    )}
                    {"video" in project && project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          aria-label="YouTube Video"
                          className="inline-flex items-center justify-center size-8 rounded-md bg-muted dark:bg-muted/60 text-foreground hover:text-foreground shadow-[inset_0_0_0_1px_#ffffff14,inset_0_1px_#fff3] hover:bg-muted squircle transition active:scale-95 cursor-pointer"
                        >
                          <SiYoutube className="size-4" />
                        </button>
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-muted-foreground text-sm mt-4 leading-relaxed">
                  {project.longDesc || project.desc}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
