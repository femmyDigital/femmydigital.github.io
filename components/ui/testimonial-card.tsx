import { Testimonial } from "@/lib/data/types";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative rounded-xl border border-foreground/10 bg-background/50 p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Star rating */}
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={16} className="fill-primary text-primary" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-base italic text-foreground">
          &quot;{testimonial.quote}&quot;
        </blockquote>

        {/* Author info */}
        <div className="flex items-center gap-3">
          {/* Avatar  */}
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
            {testimonial.image ? (
              <img src={testimonial.image} alt="" />
            ) : (
              testimonial.author.charAt(0)
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {testimonial.author}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role} at {testimonial.company}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial?.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
