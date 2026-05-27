import { Service } from "@/lib/data/types";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <div
      className={`group relative rounded-xl border border-foreground/10 p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${
        featured ? "bg-primary/5 lg:col-span-2" : "bg-background/50"
      }`}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Icon */}
        <div className="text-4xl">{service.icon}</div>

        {/* Title and description */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-foreground">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {service.description}
          </p>
        </div>

        {/* Features list */}
        <ul className="flex flex-col gap-2">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-1 w-1 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn more link */}
        <div className="mt-2 flex items-center gap-2 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
          Learn more
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}
