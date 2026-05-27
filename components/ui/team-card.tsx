import { TeamMember } from "@/lib/data/types";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-background/50 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {/* Avatar placeholder */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/30 to-primary/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-2 text-5xl">👤</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and role */}
        <h3 className="text-lg font-semibold text-foreground">
          {member.name}
        </h3>
        <p className="mb-3 text-sm text-primary font-medium">{member.role}</p>

        {/* Bio */}
        <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
          {member.bio}
        </p>

        {/* Socials */}
        {member.socials && (
          <div className="flex gap-3">
            {Object.entries(member.socials).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              if (!Icon || !url) return null;
              return (
                <Link
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10"
                >
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
