import { motion } from "motion/react";

export function PlayingAnimation({ className }: { className?: string }) {
  return (
    <div className={`flex items-end justify-between w-4 h-4 pt-[2px] pb-[2px] ${className}`}>
      <motion.span
        className="w-[3px] bg-current rounded-[1px]"
        animate={{ height: ["40%", "100%", "60%", "80%", "40%"] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="w-[3px] bg-current rounded-[1px]"
        animate={{ height: ["80%", "30%", "100%", "50%", "80%"] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.span
        className="w-[3px] bg-current rounded-[1px]"
        animate={{ height: ["50%", "90%", "30%", "100%", "50%"] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.span
        className="w-[3px] bg-current rounded-[1px]"
        animate={{ height: ["90%", "40%", "80%", "30%", "90%"] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
      />
    </div>
  );
}
