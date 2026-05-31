import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";
import { songs } from "@/lib/data";
import { PlayingAnimation } from "@/components/ui/playing-animation";

export function NowPlaying() {
  const [index, setIndex] = useState(0);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % songs.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 8000);
    return () => clearInterval(id);
  }, [advance]);

  const song = songs[index];

  return (
    <motion.a
      href={song.url}
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative h-6 min-w-[300px]"
    >
      <PlayingAnimation className="shrink-0 transition-colors duration-500" style={{ color: song.color }} />
      <div className="relative flex-1 h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={song.url}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex gap-3 whitespace-nowrap"
          >
            <img src={song.cover} alt={song.title} className="size-5 rounded object-cover shadow-sm" />
            <span>
              <span className="text-foreground font-medium">{song.title}</span> · {song.artist}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.a>
  );
}
