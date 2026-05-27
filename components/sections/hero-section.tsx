"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroSectionProps {
  heading: string;
  subheading?: string;
  description: string;
  ctas?: Array<{
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }>;
  badges?: string[];
}

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

export function HeroSection({
  heading,
  subheading,
  description,
  ctas = [
    { label: "Get started", href: "/contact", variant: "primary" },
    { label: "Learn more", href: "/about", variant: "secondary" },
  ],
  badges = [],
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl bg-primary/10" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center sm:py-24"
      >
        {/* Badges */}
        {badges.length > 0 && (
          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-wrap justify-center gap-2"
          >
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        )}

        {/* Subheading */}
        {subheading && (
          <motion.p
            variants={itemVariants}
            className="mb-4 text-sm font-medium tracking-wider text-primary uppercase"
          >
            {subheading}
          </motion.p>
        )}

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
        >
          {heading}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mb-8 text-lg text-muted-foreground text-balance max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-3 sm:flex-row sm:justify-center items-center"
        >
          {ctas.map((cta, idx) => (
            <Link
              key={idx}
              href={cta.href}
              className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
                cta.variant === "primary"
                  ? "bg-primary text-primary-foreground hover:opacity-90 hover:shadow-lg hover:shadow-primary/20"
                  : "border border-foreground/20 text-foreground hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {cta.label}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
