import { Service } from "./types";

export const services: Service[] = [
  {
    id: "cms",
    title: "Content Management System",
    description:
      "Content Management System with less or no code using CMS technologies",
    longDescription:
      "We build responsive, cross device websites, stores and marketplaces using content management system, relying on these technologies to create seamless, prebuilt platform with less or no code. And also take care of deployment and updates.",
    icon: "💻",
    features: [
      "Wordpress",
      "Elementor Builder",
      "Shopify",
      "SEO optimization",
      "Wix",
      "Marketplace",
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Full-stack web applications built with modern technologies",
    longDescription:
      "We build responsive, performant web applications using the latest frameworks and best practices. From concept to deployment, we handle the entire development lifecycle with attention to detail and user experience.",
    icon: "🌐",
    features: [
      "React & Next.js applications",
      "Responsive design",
      "Performance optimization",
      "SEO optimization",
      "Accessibility compliance",
      "Cross-browser testing",
    ],
  },
  {
    id: "saas",
    title: "SaaS Development",
    description: "Scalable software-as-a-service platforms",
    longDescription:
      "We specialize in building SaaS products that scale. Our expertise includes multi-tenant architectures, subscription management, analytics dashboards, and everything needed to launch a successful SaaS product.",
    icon: "📊",
    features: [
      "Multi-tenant architecture",
      "User authentication & authorization",
      "Payment integration",
      "Analytics dashboards",
      "API development",
      "Cloud deployment",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "User interfaces that are beautiful and performant",
    longDescription:
      "We create stunning user interfaces that are intuitive, accessible, and performant. Using React, TypeScript, and Tailwind CSS, we build interfaces that users love.",
    icon: "✨",
    features: [
      "Component architecture",
      "State management",
      "Animation & transitions",
      "Mobile-first design",
      "Figma to code",
      "Design system creation",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Robust APIs and server infrastructure",
    longDescription:
      "Our backend expertise ensures your application is fast, secure, and scalable. We work with Node.js, databases, and cloud infrastructure to build reliable systems.",
    icon: "⚙️",
    features: [
      "RESTful API design",
      "Database design & optimization",
      "Authentication & security",
      "Caching strategies",
      "Microservices architecture",
      "Real-time systems",
    ],
  },
  {
    id: "api",
    title: "API Integration",
    description: "Connect your systems with third-party APIs",
    longDescription:
      "We integrate your applications with third-party services and build custom APIs that connect disparate systems. From payment processors to data providers, we handle complex integrations.",
    icon: "🔌",
    features: [
      "Third-party API integration",
      "Custom API development",
      "Webhooks & real-time updates",
      "Data synchronization",
      "Error handling & retry logic",
      "Rate limiting & throttling",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    description: "Infrastructure and continuous deployment",
    longDescription:
      "We set up and manage your infrastructure, CI/CD pipelines, and deployment processes. Our approach ensures fast, reliable deployments with minimal downtime.",
    icon: "🚀",
    features: [
      "CI/CD pipeline setup",
      "Docker containerization",
      "Cloud deployment (AWS, Vercel)",
      "Database migrations",
      "Monitoring & logging",
      "Disaster recovery",
    ],
  },
];
