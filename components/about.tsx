"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Layers } from "lucide-react";
import { SectionWrapper, SectionHeader } from "./section-wrapper";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    text: "Writing maintainable, scalable code with solid design patterns and best practices.",
  },
  {
    icon: Zap,
    title: "Performance First",
    text: "Optimizing every layer of the stack for speed, from database queries to frontend rendering.",
  },
  {
    icon: Layers,
    title: "Problem Solving",
    text: "Turning complex business requirements into elegant, intuitive digital solutions.",
  },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="About"
        title="Building what matters"
        description="I'm a full stack developer focused on creating digital products that are fast, accessible, and built to last. I care deeply about clean code, performance, and delivering real value."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass glow-blue-hover group rounded-2xl p-8 transition-all duration-500"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
              <item.icon size={20} />
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
