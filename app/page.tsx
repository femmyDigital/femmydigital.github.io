import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { CTASection } from "@/components/sections/cta-section";
import { services } from "@/lib/data/services";
import { portfolioProjects } from "@/lib/data/portfolio";
import { testimonials } from "@/lib/data/testimonials";

const homeStats = [
  { number: "30+", label: "Projects Delivered", suffix: "" },
  { number: "20+", label: "Happy Clients", suffix: "" },
  { number: "6+", label: "Years Experience", suffix: "" },
  { number: "100%", label: "Uptime Average", suffix: "" },
];

export const metadata = {
  title: "femmyDigital | Digital Agency for Scalable Products",
  description:
    "We build scalable digital products and solutions for ambitious businesses. Expert in web development, SaaS, frontend, backend, and DevOps.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection
          heading="We Build Scalable Digital Products"
          subheading="Digital Agency"
          description="Transform your business with cutting-edge web applications, SaaS platforms, and digital solutions. We combine strategy, design, and engineering to deliver exceptional results."
          badges={["Web Development", "SaaS", "API Integration"]}
          ctas={[
            {
              label: "Start your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Explore our work",
              href: "/portfolio",
              variant: "secondary",
            },
          ]}
        />

        <ServicesGrid
          services={services}
          title="Our Services"
          description="Everything you need to build and scale your digital product"
        />

        <FeaturedProjects
          projects={portfolioProjects.slice(0, 3)}
          title="Featured Work"
          description="A selection of projects we've delivered for our clients"
          showViewAll
        />

        <StatsSection stats={homeStats} />

        <TestimonialsCarousel
          testimonials={testimonials}
          title="What Our Clients Say"
          description="Join hundreds of satisfied clients who've transformed their business with femmyDigital"
        />

        <CTASection
          title="Ready to Build Something Amazing?"
          description="Let's discuss your project and how we can help bring your vision to life."
          cta={{ label: "Get in touch", href: "/contact" }}
          secondaryCTA={{ label: "Schedule a call", href: "/contact" }}
        />
      </main>
      <Footer />
    </div>
  );
}
