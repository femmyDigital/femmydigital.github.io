"use client";

import { motion } from "framer-motion";
import { Service } from "@/lib/data/types";
import { ServiceCard } from "@/components/ui/service-card";

interface ServicesGridProps {
  services: Service[];
  title?: string;
  description?: string;
}

export function ServicesGrid({
  services,
  title = "Our Services",
  description = "Everything you need to build and scale your digital product",
}: ServicesGridProps) {
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
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {services.map((service, idx) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard
                service={service}
                featured={idx === services.length - 1 && services.length % 2 === 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
