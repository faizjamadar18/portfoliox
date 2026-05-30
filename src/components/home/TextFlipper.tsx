import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";
import { roles } from "@/lib/data";
import { BlurredStagger } from "@/components/ui/blurred-stagger-text";

export function TextFlipper() {
  const [index, setIndex] = useState(0);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % roles.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 3000);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <span className="relative inline-flex h-[1.8em] overflow-hidden" style={{ minWidth: 200 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={roles[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 whitespace-nowrap text-gray"
        >
          <BlurredStagger text={roles[index]} />
        </motion.div>
      </AnimatePresence>
    </span>
  );
}
