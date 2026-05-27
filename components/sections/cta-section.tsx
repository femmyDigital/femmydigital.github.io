"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export function CTASection({
  title,
  description,
  cta,
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="relative w-full px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 rounded-2xl border border-primary/20 bg-background/80 backdrop-blur-sm p-8 text-center sm:p-12"
        >
          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>

          {/* Description */}
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center items-center">
            <Link
              href={cta.href}
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 group"
            >
              {cta.label}
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="rounded-lg border border-foreground/20 px-6 py-3 font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
