import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function SmoothCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 });
  const [hover, setHover] = useState(false);
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
      setHover(!!el?.closest("a, button, [role='button'], input, textarea, label, summary"));
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

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 1.8 : 1, opacity: visible ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="size-8 rounded-full border border-foreground/70 backdrop-blur-[2px]"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 0 : 1, opacity: visible ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          className="size-1.5 rounded-full bg-foreground"
        />
      </motion.div>
    </>
  );
}