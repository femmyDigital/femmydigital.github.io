"use client";

import { motion } from "framer-motion";
import { PortfolioProject } from "@/lib/data/types";
import { ProjectCard } from "@/components/ui/project-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeaturedProjectsProps {
  projects: PortfolioProject[];
  title?: string;
  description?: string;
  showViewAll?: boolean;
}

export function FeaturedProjects({
  projects,
  title = "Featured Work",
  description = "A selection of projects we&apos;ve delivered for our clients",
  showViewAll = true,
}: FeaturedProjectsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
        >
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
          </div>
          {showViewAll && (
            <Link
              href="/portfolio"
              className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-foreground/20 px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          )}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
