import React from "react";
import { motion } from "motion/react";
import { blurReveal, staggerContainer } from "@/lib/animations";

export function Section({
  title,
  children,
  stagger = 0.08,
  className = "w-full relative mt-12",
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px 15% 0px" }}
      variants={staggerContainer(stagger)}
    >
      <motion.h2 variants={blurReveal} className="text-xl text-left font-medium text-foreground">
        {title}
      </motion.h2>
      <div className="w-full mt-4">{children}</div>
    </motion.section>
  );
}
