export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  color?: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  image: string;
  images?: string[];
  technologies: string[];
  problem: string;
  solution: string;
  results: string;
  link?: string;
  caseStudy?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content?: string;
  takeaway?: string[];
  conclusion?: string;
  author: string;
  date: string;
  readingTime: number;
  category: string;
  image: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location?: string;
  company: string;
  image: string;
  rating: number;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  billing: "monthly" | "yearly";
  features: string[];
  cta: string;
  highlighted?: boolean;
}
