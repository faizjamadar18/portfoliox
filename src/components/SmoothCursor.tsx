import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type CursorVariant = "default" | "button" | "expand" | "view";

export function SmoothCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 });
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);
  const hideTouch = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      hideTouch.current = true;
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = e.target as HTMLElement | null;
      if (el?.closest("[data-cursor='view']")) setVariant("view");
      else if (el?.closest("[data-cursor='expand']")) setVariant("expand");
      else if (el?.closest("a, button, [role='button'], input, textarea, label, summary")) setVariant("button");
      else setVariant("default");
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    document.documentElement.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      document.documentElement.style.cursor = "";
    };
  }, [x, y]);

  if (hideTouch.current) return null;

  const sizeRem =
    variant === "expand" || variant === "view" ? 3.75 : variant === "button" ? 1.75 : 1;
  const label = variant === "expand" ? "Expand" : variant === "view" ? "View" : "";

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          width: `${sizeRem}rem`,
          height: `${sizeRem}rem`,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
        className="flex items-center justify-center rounded-full bg-white text-black text-xs font-medium"
      >
        {label}
      </motion.div>
    </motion.div>
  );
}