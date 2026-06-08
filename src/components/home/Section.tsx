import React from "react";
import { motion } from "motion/react";
import { blurReveal, staggerContainer } from "@/lib/animations";

export function Section({
  title,
  children,
  stagger = 0.08,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
}) {
  return (
    <motion.section
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(stagger)}
    >
      <motion.h2
        variants={blurReveal}
        className="text-xl font-semibold text-foreground mb-6"
      >
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
}
