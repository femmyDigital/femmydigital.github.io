"use client";

import { motion } from "framer-motion";
import { Globe, Server, Plug, Gauge } from "lucide-react";
import { SectionWrapper, SectionHeader } from "./section-wrapper";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Pixel-perfect, responsive websites and web applications built with modern frameworks and best practices.",
  },
  {
    icon: Server,
    title: "Full Stack Applications",
    description:
      "End-to-end application development from database design to frontend interfaces with seamless deployment.",
  },
  {
    icon: Plug,
    title: "API & Integrations",
    description:
      "RESTful and GraphQL APIs, third-party integrations, and microservices architecture for complex systems.",
  },
  {
    icon: Gauge,
    title: "Performance & Optimization",
    description:
      "Core Web Vitals optimization, caching strategies, and infrastructure tuning for blazing-fast experiences.",
  },
];

export function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        label="Services"
        title="What I do"
        description="Specialized in building modern web solutions that scale. From concept to deployment, I handle every aspect of the development lifecycle."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass glow-blue-hover group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Subtle corner glow on hover */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/0 transition-all duration-700 group-hover:bg-primary/5" />

            <div className="relative z-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <service.icon size={22} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
