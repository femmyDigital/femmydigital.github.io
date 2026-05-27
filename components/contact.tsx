"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { SectionWrapper, SectionHeader } from "./section-wrapper";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        label="Contact"
        title="Get in touch"
        description="Have a project in mind or want to collaborate? I'd love to hear from you."
      />

      <div className="mx-auto max-w-xl">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-foreground/5 bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-300 focus:border-primary/30 focus:ring-1 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-lg border border-foreground/5 bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-300 focus:border-primary/30 focus:ring-1 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-foreground/5 bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-300 focus:border-primary/30 focus:ring-1 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-70"
            >
              {submitted ? (
                <>
                  <CheckCircle size={16} />
                  Sent successfully
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
