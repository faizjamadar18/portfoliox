import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";
import { roles } from "@/lib/data";

export function TextFlipper() {
  const [index, setIndex] = useState(0);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % roles.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 3000);
    return () => clearInterval(id);
  }, [advance]);

  const currentRole = roles[index];

  return (
    <div className="text-sm lg:text-base text-muted-foreground flex items-center h-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentRole}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(6px)", transition: { duration: 0.2 } }}
          className="relative inline-block whitespace-nowrap"
        >
          <span className="inline-block">
            {currentRole.split("").map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                initial={{ opacity: 0, filter: "blur(10px)", y: 4 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ delay: 0.02 * i, duration: 0.25 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
