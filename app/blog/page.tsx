import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { BlogGrid } from "@/components/sections/blog-grid";
import { CTASection } from "@/components/sections/cta-section";
import { blogPosts } from "@/lib/data/blog";

export const metadata = {
  title: "Blog | femmyDigital",
  description:
    "Read insights and best practices about web development, SaaS, DevOps, and digital product development.",
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection
          heading="Our Blog"
          description="Insights, best practices, and updates about web development, SaaS, DevOps, and digital product development."
        />

        <BlogGrid
          posts={blogPosts}
          title="Latest Articles"
          description="Thoughts and knowledge from our team"
          columns={3}
        />

        <CTASection
          title="Subscribe to Our Newsletter"
          description="Get the latest articles and insights delivered to your inbox."
          cta={{ label: "Stay updated", href: "/contact" }}
        />
      </main>
      <Footer />
    </div>
  );
}
