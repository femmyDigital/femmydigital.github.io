import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogGrid } from "@/components/sections/blog-grid";
import { CTASection } from "@/components/sections/cta-section";
import { blogPosts } from "@/lib/data/blog";

export const metadata = {
  title: "Blog Post | femmyDigital",
  description:
    "Read our latest article about web development and digital products.",
};

// Step 1: Provide static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const takeaways = post.takeaway ?? [];
  const content =
    post.content ??
    "This article summary is being prepared. Check back soon for the full write-up.";

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Back button */}
        <div className="border-b border-foreground/5 px-6 py-4">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Blog content */}
        <article className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="mb-4 inline-block">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              {post.title}
            </h1>

            <div className="mb-8 flex flex-wrap gap-6 border-b border-foreground/10 pb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {post.readingTime} min read
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                {post.author}
              </div>
            </div>

            <div className="relative mb-12 h-96 w-full overflow-hidden rounded-xl border border-foreground/10 bg-gradient-to-br from-primary/20 to-primary/5">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-invert mb-12 max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {content}
              </p>

              {takeaways.length > 0 && (
                <>
                  <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
                    Key Takeaways
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    {takeaways.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-primary">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">
                Conclusion
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The conclusion summarizes the main points and provides
                actionable insights for readers to implement in their own work.
              </p>
            </div>

            <div className="mb-12 rounded-xl border border-foreground/10 bg-background/50 p-6">
              <h3 className="mb-2 font-semibold text-foreground">
                About the Author
              </h3>
              <p className="text-sm text-muted-foreground">
                {post.author} is a contributor to femmyDigital&apos;s blog,
                sharing insights about modern web development, architecture, and
                best practices.
              </p>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <BlogGrid
            posts={relatedPosts}
            title="Related Articles"
            description="Read more articles in this category"
            columns={3}
          />
        )}

        <CTASection
          title="Have a Question or Topic Suggestion?"
          description="We love hearing from our readers. Get in touch with feedback or topic ideas for future articles."
          cta={{ label: "Contact us", href: "/contact" }}
        />
      </main>
      <Footer />
    </div>
  );
}
