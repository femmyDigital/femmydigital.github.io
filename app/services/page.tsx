import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CTASection } from "@/components/sections/cta-section";
import { services } from "@/lib/data/services";

export const metadata = {
  title: "Our Services | femmyDigital",
  description:
    "Comprehensive digital services including web development, SaaS, frontend, backend, API integration, and DevOps.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection
          heading="Our Services"
          description="We provide comprehensive digital solutions to help your business grow. From web applications to SaaS platforms, we handle every aspect of your project."
        />

        <ServicesGrid
          services={services}
          title="What We Offer"
          description="Explore our full range of digital services"
        />

        {/* Detailed services section */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Our Services
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-foreground/10 bg-background/50 p-6">
                <div className="mb-4 text-4xl">🎯</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Tailored Solutions
                </h3>
                <p className="text-muted-foreground">
                  We customize our services to fit your specific business needs and goals.
                </p>
              </div>

              <div className="rounded-xl border border-foreground/10 bg-background/50 p-6">
                <div className="mb-4 text-4xl">👥</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Expert Team
                </h3>
                <p className="text-muted-foreground">
                  Our team consists of seasoned professionals with deep expertise in their fields.
                </p>
              </div>

              <div className="rounded-xl border border-foreground/10 bg-background/50 p-6">
                <div className="mb-4 text-4xl">📈</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Proven Results
                </h3>
                <p className="text-muted-foreground">
                  We measure success by your growth and deliver measurable impact.
                </p>
              </div>

              <div className="rounded-xl border border-foreground/10 bg-background/50 p-6">
                <div className="mb-4 text-4xl">⏱️</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Timely Delivery
                </h3>
                <p className="text-muted-foreground">
                  We respect your timeline and deliver projects on schedule.
                </p>
              </div>

              <div className="rounded-xl border border-foreground/10 bg-background/50 p-6">
                <div className="mb-4 text-4xl">🔒</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Security First
                </h3>
                <p className="text-muted-foreground">
                  Security and data protection are built into every project from day one.
                </p>
              </div>

              <div className="rounded-xl border border-foreground/10 bg-background/50 p-6">
                <div className="mb-4 text-4xl">🚀</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Ongoing Support
                </h3>
                <p className="text-muted-foreground">
                  We support you after launch with maintenance, updates, and optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Transform Your Business?"
          description="Let&apos;s discuss your project requirements and find the perfect solution for your needs."
          cta={{ label: "Schedule a consultation", href: "/contact" }}
        />
      </main>
      <Footer />
    </div>
  );
}
