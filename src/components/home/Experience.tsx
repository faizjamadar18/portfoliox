import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/lib/data";
import { blurReveal, staggerContainer } from "@/lib/animations";

export function Experience() {
  return (
    <Section title="Experience">
      <motion.div variants={staggerContainer(0.08)} className="space-y-2">
        {experience.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} />
        ))}
      </motion.div>
    </Section>
  );
}

function ExperienceItem({ exp }: { exp: typeof experience[number] }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDesc = !!exp.desc;

  return (
    <motion.div
      variants={blurReveal}
      className="group rounded-xl -mx-3"
    >
      <button
        onClick={() => hasDesc && setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between p-3 rounded-xl hover:bg-accent/40 transition-colors ${!hasDesc ? "cursor-default" : ""}`}
      >
        <div className="flex flex-col items-start gap-1.5">
          <h3 className="text-[17px] font-medium text-foreground">{exp.role}</h3>
          <div className="flex items-center gap-2 text-[15px] text-muted-foreground">
            {exp.logo ? (
              <img src={exp.logo} alt={exp.company} className="size-[24px] rounded-md border-1 border-white/20 object-cover bg-black" />
            ) : exp.letter && (
              <span className="inline-flex size-[24px] items-center justify-center rounded-md bg-black border border-white/10 text-[12px] font-bold text-[#ff7b00]">
                {exp.letter}
              </span>
            )}
            <span>{exp.company}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-[14px] text-muted-foreground">
          <span>{exp.dates}</span>
          {hasDesc && (
            isOpen ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && hasDesc && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-3 pb-3 pt-1 text-[15px] leading-[1.6] text-foreground text-left font-medium">
              {exp.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
