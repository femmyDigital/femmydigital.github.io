"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { CTASection } from "@/components/sections/cta-section";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "web-dev",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const projectTypes = [
    { value: "cms", label: "Content Management System" },
    { value: "web-dev", label: "Web Development" },
    { value: "saas", label: "SaaS Development" },
    { value: "api", label: "API Integration" },
    { value: "devops", label: "DevOps & Deployment" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "web-dev",
      message: "",
    });

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection
          heading="Let's Work Together"
          description="Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours."
        />

        {/* Contact form and info */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Contact information */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-6 text-2xl font-bold text-foreground">
                    Get in Touch
                  </h3>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:hello@femmydigital.com"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      femmydigital@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Phone
                    </p>
                    <a
                      href="tel:+2349037709266"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      +234 (903) 770-9266
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Location
                    </p>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>

                {/* Business hours */}
                <div className="mt-8 pt-8 border-t border-foreground/10">
                  <p className="text-sm font-semibold text-foreground">
                    Business Hours
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 8 AM - 6 PM PST
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Contact form */}
              <form
                onSubmit={handleSubmit}
                className="lg:col-span-2 space-y-6 rounded-xl border border-foreground/10 bg-background/50 p-8"
              >
                {submitted && (
                  <div className="rounded-lg bg-green-500/10 border border-green-500/30 p-4 text-sm text-green-400">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Project type */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-2 text-foreground focus:border-primary/50 focus:outline-none"
                    >
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        <CTASection
          title="Still Have Questions?"
          description="Our team is here to help. Reach out and we'll provide you with the information you need."
          cta={{ label: "Schedule a call", href: "/contact" }}
        />
      </main>
      <Footer />
    </div>
  );
}
