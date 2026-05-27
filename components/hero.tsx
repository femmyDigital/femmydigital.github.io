"use client";

import { motion } from "framer-motion";

function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.15, 0.3, 0.15],
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-3xl ${className}`}
    />
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      {/* Floating orbs */}
      <FloatingOrb
        className="left-[10%] top-[20%] h-72 w-72 bg-primary/10"
        delay={0}
      />
      <FloatingOrb
        className="bottom-[20%] right-[10%] h-96 w-96 bg-primary/5"
        delay={2}
      />
      <FloatingOrb
        className="left-[50%] top-[60%] h-48 w-48 bg-foreground/5"
        delay={4}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-balance text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          I build modern
          <br />
          <span className="text-primary">digital experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Full Stack Developer crafting scalable, high-performance web
          applications with clean architecture and cutting-edge technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="w-full rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 sm:w-auto"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="glass glow-blue-hover w-full rounded-lg px-8 py-3 text-sm font-medium text-foreground transition-all duration-300 sm:w-auto"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto h-10 w-6 rounded-full border border-foreground/10 p-1"
          >
            <motion.div className="mx-auto h-2 w-1 rounded-full bg-foreground/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
