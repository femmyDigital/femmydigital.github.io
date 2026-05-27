import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { CTASection } from "@/components/sections/cta-section";
import { portfolioProjects } from "@/lib/data/portfolio";

export const metadata = {
  title: "Our Portfolio | femmyDigital",
  description:
    "Explore our portfolio of successful projects including web applications, SaaS platforms, and mobile apps.",
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection
          heading="Our Portfolio"
          description="Explore a selection of projects we&apos;ve delivered for clients across various industries. Each project showcases our commitment to quality, innovation, and results."
        />

        <FeaturedProjects
          projects={portfolioProjects}
          title="Recent Projects"
          description="A collection of our recent work"
          showViewAll={false}
        />

        <CTASection
          title="Ready to Start Your Next Project?"
          description="Let&apos;s discuss your vision and how we can help bring it to life."
          cta={{ label: "Get in touch", href: "/contact" }}
          secondaryCTA={{ label: "View our services", href: "/services" }}
        />
      </main>
      <Footer />
    </div>
  );
}
