import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/lib/data";
import { blurReveal, staggerContainer } from "@/lib/animations";

export function Experience() {
  return (
    <Section title="Experience">
      <motion.div variants={staggerContainer(0.08)} className="flex flex-col gap-6 w-full">
        {experience.map((exp, i) => (
          <ExperienceItem key={exp.company + i} exp={exp} />
        ))}
      </motion.div>
    </Section>
  );
}

function ExperienceItem({ exp }: { exp: (typeof experience)[number] }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDesc = !!exp.desc;

  return (
    <motion.div
      variants={blurReveal}
      layout
      onClick={() => hasDesc && setIsOpen(!isOpen)}
      className={`group relative flex flex-col justify-between transition-all duration-300 select-none ${hasDesc ? "cursor-pointer" : "cursor-default"}`}
    >
      <motion.div layout="position" className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-1">
          <motion.h3
            layout
            className="text-base font-medium text-foreground group-hover:text-primary transition-colors"
          >
            {exp.role}
          </motion.h3>
          <div className="flex items-center gap-2">
            <motion.div
              layout
              className="size-5 rounded-sm border border-foreground/10 squircle relative overflow-hidden shrink-0 bg-neutral-900 flex items-center justify-center"
            >
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  draggable={false}
                  className="size-full object-contain p-0.5 saturate-[.75] brightness-[.95]"
                />
              ) : exp.letter ? (
                <span className="text-[10px] font-bold text-foreground">{exp.letter}</span>
              ) : null}
            </motion.div>
            <motion.span layout className="text-sm text-muted-foreground">
              {exp.company}
            </motion.span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <motion.span layout className="text-sm text-muted-foreground hidden md:block">
            {exp.dates}
          </motion.span>
          {hasDesc && (
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronRight className="size-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
            </motion.div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && hasDesc && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-foreground leading-relaxed">{exp.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
