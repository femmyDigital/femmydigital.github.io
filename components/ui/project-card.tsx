import { PortfolioProject } from "@/lib/data/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { log } from "console";

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <div className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-background/50 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        {/* Image placeholder with gradient */}
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={project.image} alt="" />
            {/* <div className="text-center">
              <div className="mb-2 text-4xl">📁</div>
              <p className="text-sm text-muted-foreground">Project Image</p>
            </div> */}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category badge */}
          <div className="mb-3 inline-block">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="mb-4 flex flex-wrap gap-2 ">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="rounded-md bg-background/90 px-2 py-1 text-xs text-muted-foreground border border-foreground/5 transition-colors duration-300 hover:text-foreground bg-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="flex items-center gap-2 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
            View project
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
