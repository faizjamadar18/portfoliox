import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Freeze smooth scrolling while a modal/dialog locks page scroll
    // (dispatched by e.g. ProjectCard), so the page behind the dialog can't
    // keep scrolling underneath the overlay.
    const lockScroll = () => lenis.stop();
    const unlockScroll = () => lenis.start();
    window.addEventListener("scroll-lock", lockScroll);
    window.addEventListener("scroll-unlock", unlockScroll);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.removeEventListener("scroll-lock", lockScroll);
      window.removeEventListener("scroll-unlock", unlockScroll);
    };
  }, []);
  return null;
}
