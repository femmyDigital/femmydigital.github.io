import { BlogPost } from "@/lib/data/types";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group flex flex-col overflow-hidden rounded-xl border border-foreground/10 bg-background/50 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 h-full">
        {/* Image placeholder */}
        <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <img src={post.image} alt="" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-6 flex-grow">
          {/* Category badge */}
          <div className="inline-flex w-fit">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">
            {post.description}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-foreground/5">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              {post.readingTime} min
            </div>
          </div>

          {/* Link */}
          <div className="flex items-center gap-2 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1 mt-2">
            Read article
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
