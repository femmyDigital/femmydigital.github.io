import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { CTASection } from "@/components/sections/cta-section";
import { portfolioProjects } from "@/lib/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ProjectGallery } from "@/components/portfolio/project-gallery";

export const metadata = {
  title: "Project | femmyDigital",
  description: "View details about one of our featured projects.",
};

// **Step 1: Provide static params for each project**
export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = portfolioProjects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const projectImages = project.images?.length
    ? project.images
    : [project.image];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Back button */}
        <div className="border-b border-foreground/5 px-6 py-4">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Hero section */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {project.category}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>
        </section>

        {/* Project gallery */}
        <section className="px-6 py-12 ">
          <div className="mx-auto max-w-4xl">
            <ProjectGallery title={project.title} images={projectImages} />
          </div>
        </section>

        {/* Content sections */}
        <section className="px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl space-y-12">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                The Challenge
              </h2>
              <p className="text-lg text-muted-foreground">{project.problem}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Our Solution
              </h2>
              <p className="text-lg text-muted-foreground">
                {project.solution}
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                The Results
              </h2>
              <p className="text-lg text-muted-foreground">{project.results}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-foreground/10 bg-background/50 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
                >
                  View Live Project
                  <ExternalLink size={18} />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <FeaturedProjects
            projects={relatedProjects}
            title="Related Projects"
            description="Check out some of our other work"
            showViewAll={false}
          />
        )}

        <CTASection
          title="Have a Similar Project in Mind?"
          description="Let's discuss your project and how we can help you achieve your goals."
          cta={{ label: "Get in touch", href: "/contact" }}
        />
      </main>
      <Footer />
    </div>
  );
}
