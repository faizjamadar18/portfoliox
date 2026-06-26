import { createFileRoute } from "@tanstack/react-router";
import { motion, LayoutGroup } from "motion/react";
import { ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi2";
import avatar from "@/assets/avatar.jpg";

import { projects, techStack, socials } from "@/lib/data";
import { fadeUp, blurReveal, staggerContainer } from "@/lib/animations";

import { TextFlipper } from "@/components/home/TextFlipper";
import { Section } from "@/components/home/Section";
import { ProjectCard } from "@/components/home/ProjectCard";
import { NowPlaying } from "@/components/home/NowPlaying";
import { VisitorCounter } from "@/components/home/VisitorCounter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-xl sm:px-4 px-6 py-16 md:py-24 ">
        {/* Header */}
        <motion.div
          className="flex items-center gap-5"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <img
            src={avatar}
            alt="Faiz Jamadar"
            width={72}
            height={72}
            className="size-[72px] rounded-2xl border border-border object-cover bg-muted"
          />
          <div>
            <h1 className="text-3xl font-semibold tracking-tight inline-flex items-center gap-2">Faiz Jamadar<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-5" aria-label="Verified"><g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 30.091 10.131 L 30.091 10.131 c 5.28 -13.046 23.695 -13.207 29.202 -0.255 l 0 0 l 0 0 c 12.959 -5.491 26.093 7.416 20.829 20.469 l 0 0 l 0 0 c 13.046 5.28 13.207 23.695 0.255 29.202 l 0 0 l 0 0 c 5.491 12.959 -7.416 26.093 -20.469 20.829 l 0 0 l 0 0 c -5.28 13.046 -23.695 13.207 -29.202 0.255 l 0 0 l 0 0 C 17.748 86.122 4.613 73.215 9.878 60.162 l 0 0 l 0 0 C -3.169 54.881 -3.33 36.467 9.623 30.96 l 0 0 l 0 0 C 4.131 18.001 17.038 4.866 30.091 10.131 L 30.091 10.131 z" fill="rgb(0,150,241)" /><polygon points="39.66,63.79 23.36,47.76 28.97,42.05 39.3,52.21 59.6,29.58 65.56,34.93" fill="rgb(255,255,255)" /></g></svg></h1>
            <p className="text-sm mt-0.5"><TextFlipper /></p>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <p >
            A <span className="text-foreground font-medium">Software Developer & AI Engineer</span> with{" "}
            <span className="text-foreground font-medium">1.5+ years</span> of hands-on experience building
            impactful products and solving real-world problems with{" "}
            <span className="text-foreground font-medium">up-to-date technologies</span>.
          </p>
          <p className="text-base">
            Skilled in production-ready{" "}
            <span className="text-foreground font-medium">Full-Stack Development</span>,{" "}
            <span className="text-foreground font-medium">AI Automations</span>, intelligent{" "}
            <span className="text-foreground font-medium">predictive modeling</span>, and data-driven{" "}
            <span className="text-foreground font-medium">ML solutions</span> — built to scale and ship.
          </p>
          <p >
            Open to <span className="text-foreground font-medium">full-time roles</span> and{" "}
            <span className="text-foreground font-medium">collaborations</span>.
          </p>
        </motion.div>

        {/* Now playing */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <NowPlaying />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex flex-wrap gap-3"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          <a
            href="https://github.com/faizjamadar18"
            className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-neutral-900 px-1.5 py-1.5 text-sm font-medium text-foreground hover:bg-neutral-800 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_1px_2px_0_rgba(0,0,0,0.6),0_4px_12px_-2px_rgba(0,0,0,0.5)]"
          >
            <SiGithub className="size-4" /> GitHub
          </a>
          <a
            href="https://drive.google.com/file/d/1uuMm5FXXjjXnBtj7xf0A1Xj7bFcL9doq/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-neutral-900 px-1.5 py-1.5 text-sm font-medium text-foreground hover:bg-neutral-800 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_1px_2px_0_rgba(0,0,0,0.6),0_4px_12px_-2px_rgba(0,0,0,0.5)]"
          >
            <HiDocumentText className="size-4" /> Resume
          </a>
        </motion.div>

        {/* Projects */}
        <Section title="Projects">
          <LayoutGroup>
            <motion.div
              variants={staggerContainer(0.08)}
              data-cursor="view"
              className=""
            >
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </motion.div>
          </LayoutGroup>
          <div className="mt-5">
            {/* <a
              href="#"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View Projects <ChevronRight className="size-4" />
            </a> */}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section title="Tech Stack">
          <div className="flex flex-wrap gap-3">
            {techStack.map((t, i) => (
              <motion.span
                key={t.name}
                variants={blurReveal}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-neutral-900 px-2.5 py-1.5 text-[13px] font-medium text-foreground hover:bg-neutral-800 transition-colors"
              >
                {t.Icon ? (
                  <t.Icon className="size-4" style={{ color: t.color }} />
                ) : (
                  <span
                    className="inline-flex size-4 items-center justify-center rounded-sm text-[10px] font-bold text-black"
                    style={{ background: t.letterBg }}
                  >
                    {t.letter}
                  </span>
                )}
                {t.name}
              </motion.span>
            ))}
          </div>
        </Section>

        {/* Get In Touch */}
        <Section title="Get In Touch">
          <ul className="flex flex-wrap gap-3">
            {socials.map((s, i) => (
              <motion.li key={s.label} variants={blurReveal}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-neutral-900 px-2.5 py-1.5 text-[13px] font-medium text-foreground hover:bg-neutral-800 transition-colors"
                >
                  <s.Icon className="size-4" />
                  {s.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </Section>

        <footer className="mt-20 text-xs text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Faiz Jamadar</span>
          <VisitorCounter />
        </footer>
      </div>
    </main>
  );
}
