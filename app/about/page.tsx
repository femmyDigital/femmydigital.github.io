import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { TeamSection } from "@/components/sections/team-section";
import { CTASection } from "@/components/sections/cta-section";
import { teamMembers } from "@/lib/data/team";

export const metadata = {
  title: "About femmyDigital | Our Story & Mission",
  description:
    "Learn about femmyDigital's mission to build scalable digital products. Meet our team of experienced engineers and designers.",
};

const processSteps = [
  {
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business goals, target audience, and technical requirements. Our team conducts thorough research and planning to create a solid foundation for your project.",
    icon: "🔍",
  },
  {
    title: "Design & Planning",
    description:
      "Our design team creates wireframes, prototypes, and detailed specifications. We collaborate with you to ensure the design aligns with your vision and user needs.",
    icon: "🎨",
  },
  {
    title: "Development",
    description:
      "Our experienced engineers build your product using the latest technologies and best practices. We maintain clear communication throughout the development process.",
    icon: "⚙️",
  },
  {
    title: "Testing & QA",
    description:
      "We conduct comprehensive testing to ensure quality, performance, and security. Every feature is tested rigorously before deployment.",
    icon: "✅",
  },
  {
    title: "Deployment",
    description:
      "We handle the deployment process, ensuring a smooth launch with minimal downtime. Our DevOps experts set up monitoring and ensure everything runs smoothly.",
    icon: "🚀",
  },
  {
    title: "Support & Maintenance",
    description:
      "After launch, we provide ongoing support, maintenance, and optimization. We help you scale and improve your product continuously.",
    icon: "💪",
  },
];

const aboutStats = [
  { number: "30+", label: "Projects Delivered" },
  { number: "20+", label: "Happy Clients" },
  { number: "6+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection
          heading="About femmyDigital"
          description="We're a team of passionate engineers and designers building exceptional digital products that transform businesses."
        />

        {/* Mission section */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  Our Mission
                </h2>
                <p className="mb-4 text-lg text-muted-foreground">
                  We believe in the power of technology to transform businesses.
                  Our mission is to partner with ambitious companies to build
                  scalable, innovative digital products that create real value.
                </p>
                <p className="text-lg text-muted-foreground">
                  We combine strategic thinking, cutting-edge technology, and
                  creative problem-solving to deliver exceptional results.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  Our Values
                </h2>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong className="text-foreground">Excellence:</strong>{" "}
                      We strive for excellence in everything we do
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong className="text-foreground">Partnership:</strong>{" "}
                      Your success is our success
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong className="text-foreground">Innovation:</strong>{" "}
                      We embrace new technologies and ideas
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong className="text-foreground">Integrity:</strong> We
                      operate with transparency and honesty
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <StatsSection stats={aboutStats} title="Our Impact" />

        <ProcessTimeline steps={processSteps} />

        <TeamSection team={teamMembers} />

        <CTASection
          title="Let's Build Together"
          description="Ready to discuss your next project? We'd love to hear about your vision and how we can help bring it to life."
          cta={{ label: "Get in touch", href: "/contact" }}
        />
      </main>
      <Footer />
    </div>
  );
}
