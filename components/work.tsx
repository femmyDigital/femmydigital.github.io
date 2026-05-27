"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper, SectionHeader } from "./section-wrapper";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A high-performance online store with real-time inventory, Stripe payments, and an admin dashboard.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with real-time data visualization, role-based access, and team collaboration tools.",
    tags: ["React", "Node.js", "PostgreSQL", "D3.js"],
  },
  {
    title: "AI Content Studio",
    description:
      "AI-powered content generation platform with text, image, and code generation capabilities.",
    tags: ["Next.js", "OpenAI", "MongoDB", "Vercel AI"],
  },
  {
    title: "DevOps Toolkit",
    description:
      "Internal tooling platform for CI/CD pipeline management, monitoring, and automated deployments.",
    tags: ["React", "Go", "Docker", "AWS"],
  },
];

export function Work() {
  return (
    <SectionWrapper id="work">
      <SectionHeader
        label="Work"
        title="Selected projects"
        description="A selection of recent projects showcasing my approach to building modern, performant web applications."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass glow-blue-hover group relative rounded-2xl p-8 transition-all duration-500 hover:scale-[1.01]"
          >
            {/* Blue accent line at top */}
            <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <h3 className="mb-3 text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-foreground/5 bg-foreground/5 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="group/btn flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-300 hover:gap-2.5"
            >
              View Project
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
