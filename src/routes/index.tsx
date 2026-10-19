import { createFileRoute } from "@tanstack/react-router";
import { motion, LayoutGroup } from "motion/react";
import { SiGithub } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi2";
import avatar from "@/assets/avatar.jpg";

import { projects, techStack, socials } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

import { TextFlipper } from "@/components/home/TextFlipper";
import { Section } from "@/components/home/Section";
import { ProjectCard } from "@/components/home/ProjectCard";
import { NowPlaying } from "@/components/home/NowPlaying";
import { Experience } from "@/components/home/Experience";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-dvh bg-background text-foreground antialiased font-medium">
      <div className="w-full flex flex-col items-center justify-center relative py-20">
        <section className="max-w-xl mx-auto px-4 lg:px-0 size-full">
          {/* Header */}
          <div className="w-full relative">
            <motion.div
              className="relative flex items-start justify-between"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="flex items-start gap-4">
                <div className="size-20 shrink-0">
                  <img
                    src={avatar}
                    alt="Faiz Jamadar"
                    width={80}
                    height={80}
                    className="size-full object-cover brightness-140 border border-border rounded-lg grayscale"
                  />
                </div>
                <div className="flex flex-col pt-1">
                  <h1 className="text-3xl font-semibold leading-snug inline-flex items-center gap-2 text-foreground">
                    Faiz Jamadar
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="size-5 shrink-0"
                      aria-label="Verified"
                    >
                      <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                        <path
                          d="M 30.091 10.131 L 30.091 10.131 c 5.28 -13.046 23.695 -13.207 29.202 -0.255 l 0 0 l 0 0 c 12.959 -5.491 26.093 7.416 20.829 20.469 l 0 0 l 0 0 c 13.046 5.28 13.207 23.695 0.255 29.202 l 0 0 l 0 0 c 5.491 12.959 -7.416 26.093 -20.469 20.829 l 0 0 l 0 0 c -5.28 13.046 -23.695 13.207 -29.202 0.255 l 0 0 l 0 0 C 17.748 86.122 4.613 73.215 9.878 60.162 l 0 0 l 0 0 C -3.169 54.881 -3.33 36.467 9.623 30.96 l 0 0 l 0 0 C 4.131 18.001 17.038 4.866 30.091 10.131 L 30.091 10.131 z"
                          fill="rgb(0,150,241)"
                        />
                        <polygon
                          points="39.66,63.79 23.36,47.76 28.97,42.05 39.3,52.21 59.6,29.58 65.56,34.93"
                          fill="rgb(255,255,255)"
                        />
                      </g>
                    </svg>
                  </h1>
                  <TextFlipper />
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              className="w-full relative mt-8"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              <div className="flex flex-col items-start justify-center w-full space-y-4">
                <p className="text-base md:text-base text-muted-foreground text-justify leading-relaxed">
                  A <span className="text-foreground">Software Developer & AI Engineer</span> with{" "}
                  <span className="text-foreground">1.5+ years</span> of hands-on experience
                  building impactful products and solving real-world problems with{" "}
                  <span className="text-foreground">up-to-date technologies</span>.
                </p>
                <p className="text-base md:text-base text-muted-foreground text-justify leading-relaxed">
                  Skilled in production-ready{" "}
                  <span className="text-foreground">Full-Stack Development</span>,{" "}
                  <span className="text-foreground">Product Building</span>,{" "}
                  <span className="text-foreground">AI Automations</span>, intelligent{" "}
                  <span className="text-foreground">predictive modeling</span>, and data-driven{" "}
                  <span className="text-foreground">ML solutions</span> — built to scale and ship.
                </p>
                <p className="text-base md:text-base text-muted-foreground text-justify leading-relaxed">
                  Open to <span className="text-foreground">full-time roles</span> and{" "}
                  <span className="text-foreground">collaborations</span>.
                </p>
              </div>

              {/* Now playing */}
              <NowPlaying />

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <a href="https://github.com/faizjamadar18" target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out cursor-pointer select-none bg-muted dark:bg-muted/60 text-foreground hover:text-foreground shadow-[inset_0_0_0_1px_#ffffff14,inset_0_1px_#fff3] hover:bg-muted squircle h-7 rounded-sm gap-1.5 px-2.5"
                  >
                    <SiGithub className="size-3.5" /> GitHub
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out cursor-pointer select-none bg-muted dark:bg-muted/60 text-foreground hover:text-foreground shadow-[inset_0_0_0_1px_#ffffff14,inset_0_1px_#fff3] hover:bg-muted squircle h-7 rounded-sm gap-1.5 px-2.5"
                  >
                    <HiDocumentText className="size-3.5" /> Resume
                  </button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Experience */}
          <Experience />

          {/* Projects */}
          <Section title="Projects">
            <LayoutGroup>
              <div className="flex flex-col gap-4 w-full">
                {projects.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            </LayoutGroup>
          </Section>

          {/* Tech Stack */}
          <Section title="Tech Stack">
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((t) => (
                <div
                  key={t.name}
                  className="font-semibold select-none squircle bg-muted dark:bg-muted/60 shadow-[inset_0_0_0_1px_#ffffff14,inset_0_1px_#fff2] hover:bg-muted/80 h-7.5 justify-center px-3 rounded-md flex items-center text-[13px] text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
                >
                  {t.Icon ? (
                    <t.Icon
                      className="size-3.5 mr-1.5 object-contain shrink-0"
                      style={{ color: t.color }}
                    />
                  ) : (
                    <span className="size-3.5 mr-1.5 inline-flex items-center justify-center text-[10px] font-bold">
                      {t.letter}
                    </span>
                  )}
                  {t.name}
                </div>
              ))}
            </div>
          </Section>

          {/* Get In Touch */}
          <Section title="Get In Touch">
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  href={s.href}
                >
                  <button
                    type="button"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out cursor-pointer select-none bg-muted dark:bg-muted/60 text-foreground hover:text-foreground shadow-[inset_0_0_0_1px_#ffffff14,inset_0_1px_#fff3] hover:bg-muted squircle rounded-sm h-7.5 px-2.5 gap-1.5"
                  >
                    <s.Icon className="size-4" />
                    {s.label}
                  </button>
                </a>
              ))}
            </div>
          </Section>
        </section>
      </div>
    </main>
  );
}
