import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";
import { songs } from "@/lib/data";

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
    <div className="mt-4">
      <a
        href={song.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 h-8 hover:opacity-80 transition-opacity"
      >
        {/* Equalizer animation */}
        <div className="flex items-end gap-0.5 h-5">
          <motion.div
            animate={{ height: ["4px", "16px", "8px", "14px", "4px"] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="w-[2.5px] rounded-full transition-colors duration-500"
            style={{ backgroundColor: song.color }}
          />
          <motion.div
            animate={{ height: ["12px", "4px", "18px", "6px", "12px"] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="w-[2.5px] rounded-full transition-colors duration-500"
            style={{ backgroundColor: song.color }}
          />
          <motion.div
            animate={{ height: ["16px", "8px", "4px", "18px", "16px"] }}
            transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
            className="w-[2.5px] rounded-full transition-colors duration-500"
            style={{ backgroundColor: song.color }}
          />
          <motion.div
            animate={{ height: ["6px", "14px", "10px", "4px", "6px"] }}
            transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
            className="w-[2.5px] rounded-full transition-colors duration-500"
            style={{ backgroundColor: song.color }}
          />
        </div>

        {/* Cover + text */}
        <div className="flex items-center gap-2">
          <div className="size-5 rounded-lg overflow-hidden relative shrink-0">
            <img src={song.cover} alt={song.title} className="object-cover size-full" />
          </div>
          <AnimatePresence mode="wait">
            <motion.span
              key={song.url}
              initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
              transition={{ duration: 0.35 }}
              className="text-sm text-muted-foreground whitespace-nowrap"
            >
              <span className="text-foreground">{song.title}</span>
              <span className="mx-1.5 text-muted-foreground">•</span>
              {song.artist}
            </motion.span>
          </AnimatePresence>
        </div>
      </a>
    </div>
  );
}
