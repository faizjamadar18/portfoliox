import React from "react";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";

export function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
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
