"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";

function useTilt(maxTilt = 8) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * maxTilt * 2;
    const ry = (px - 0.5) * maxTilt * 2;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--glow", "1");
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    el.style.setProperty("--glow", "0");
  }

  return { ref, onMouseMove, onMouseLeave };
}

const projects = [
  {
    title: "Serverless Web App Pipeline",
    description: "Designed and deployed a fully serverless submission pipeline on AWS. Users fill out a web form that hits a REST endpoint on API Gateway, which triggers a Lambda function that validates the payload, writes the record to a DynamoDB table with a timestamp and unique ID, then fires a second Lambda to send a confirmation email via SES. No servers to manage, it scales to zero when idle, and every submission is durably stored and acknowledged in under two seconds.",
    tech: ["API Gateway", "Lambda", "DynamoDB", "SES"],
    image: "/images/projects/serverless-pipeline.jpg",
    slug: "serverless-pipeline",
    featured: true,
  },
  {
    title: "HubSpot Round Robin: $5,800/mo Saved",
    description: "Engineered a custom Python-based Round Robin assignment system to replace HubSpot's paid seat feature, saving the organization $5,800 every month ($100 per person across 58 employees). When a form is submitted, the system automatically rotates and assigns the ticket to the next available employee and triggers an instant notification, fully replicating enterprise HubSpot functionality at zero license cost.",
    tech: ["Python", "HubSpot API", "Automation", "Workflows", "Cost Optimization"],
    image: "/images/projects/hubspot-round-robin.jpg",
    slug: "hubspot-round-robin",
    featured: false,
  },
  {
    title: "AWS Bedrock RAG System",
    description: "Built a Retrieval-Augmented Generation pipeline on AWS so users can query their own documents using natural language. Source documents are uploaded to S3, chunked, embedded, and indexed into a Bedrock Knowledge Base backed by a vector store. A Lambda function handles incoming questions, retrieves the most relevant chunks, and passes them as context to a Bedrock foundation model to generate a grounded answer. This eliminates hallucinations and keeps every response anchored to the organization's actual data.",
    tech: ["AWS Bedrock", "RAG", "Lambda", "S3", "Knowledge Base"],
    image: "/images/projects/bedrock-rag.jpg",
    slug: "bedrock-rag",
    featured: false,
  },
  {
    title: "HubSpot Integrated Form System",
    description: "Built a unified internal form system where department-specific forms surface dynamically based on the user's selection. Integrated every form directly into HubSpot, activating dedicated pipelines per form type and building workflows for submission alerts, ticket pipeline status updates, and numerous other triggers. The system is used by both internal employees and external users, with all data flowing back into the organization's HubSpot CRM.",
    tech: ["HubSpot", "Typeform", "CRM Pipelines", "Workflows", "Automation"],
    image: "/images/projects/hubspot-form-system.jpg",
    slug: "hubspot-form-system",
    featured: false,
  },
  {
    title: "High-Availability WordPress on AWS",
    description: "Architected a production-grade WordPress environment built for resilience. Set up a custom VPC with public and private subnets across two Availability Zones, launched EC2 instances behind an Application Load Balancer, and moved the database entirely off the web server onto an RDS MySQL instance with Multi-AZ standby for automatic failover. WordPress media is offloaded to S3 and served through CloudFront, removing load from the instances.",
    tech: ["EC2", "RDS", "VPC", "ALB", "CloudFront", "WordPress"],
    image: "/images/projects/ha-wordpress.jpg",
    slug: "ha-wordpress",
    featured: false,
  },
  {
    title: "Blue/Green Nginx Deployment",
    description: "Implemented a zero-downtime deployment strategy using two identical environments, Blue (live) and Green (staging), running side by side on Linux. Nginx acts as the traffic router; a Bash script updates the upstream block to point to the active environment and reloads Nginx without dropping a single connection. New releases are deployed to the idle environment, smoke-tested, then cut over instantly.",
    tech: ["Nginx", "Linux", "Bash", "CI/CD"],
    image: "/images/projects/blue-green.jpg",
    slug: "blue-green",
    featured: false,
  },
  {
    title: "Static Site: S3 + CloudFront",
    description: "Provisioned a production static hosting stack entirely on AWS. Built site assets are pushed to a private S3 bucket configured as the origin. Direct public access is blocked, and only CloudFront can read from the bucket via an Origin Access Control policy. A CloudFront distribution caches content at edge locations worldwide for low-latency global delivery.",
    tech: ["S3", "CloudFront", "Route 53", "ACM", "OAC"],
    image: "/images/projects/static-site.jpg",
    slug: "static-site",
    featured: false,
  },
  {
    title: "Nexus Social",
    description: "Built as part of the NexuCentri team, a SaaS platform that lets users draft, schedule, and publish content across multiple social media accounts from a single dashboard. The frontend and API routes are built with Next.js, with Supabase powering the database, authentication, and real-time updates. Scheduled posts survive server restarts with no always-on background worker required.",
    tech: ["Next.js", "Supabase", "QStash", "TypeScript"],
    image: "/images/projects/nexus-social.jpg",
    slug: "nexus-social",
    featured: false,
  },
  {
    title: "NexuLens",
    description: "Built a fully client-side tool that helps organizations identify and recover money wasted on unused Microsoft 365 licenses. Admins export their M365 usage report as a CSV and drop it into NexuLens. The file is parsed entirely in the browser with no data leaving the user's machine. The tool flags dormant accounts and underutilized paid tiers with an estimated monthly savings figure attached.",
    tech: ["Next.js", "TypeScript", "M365", "React"],
    image: "/images/projects/nexulens.jpg",
    slug: "nexulens",
    featured: false,
  },
];

function FeaturedCard({ project }: { project: typeof projects[0] }) {
  const tilt = useTilt(4);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="group relative overflow-hidden bg-surface-2 border border-black/10 hover:border-gold/30 shadow-sm will-change-transform"
      style={{ "--glow": 0, transition: "border-color 0.5s ease, transform 0.25s ease-out" } as React.CSSProperties}
    >
      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          opacity: "var(--glow, 0)",
          background: "radial-gradient(500px circle at var(--mx,50%) var(--my,50%), rgba(201,168,76,0.08), transparent 70%)",
        }}
      />
      <div className="grid lg:grid-cols-[1fr_1fr] min-h-[420px]">

        {/* Image side */}
        <div className="relative overflow-hidden min-h-[260px] lg:min-h-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-2/60 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-2/80 to-transparent lg:hidden" />

          {/* Featured label */}
          <div className="absolute top-5 left-5 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="font-body text-2xs text-gold tracking-[0.25em] uppercase">Featured</span>
          </div>
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-end p-8 lg:p-10">
          <div className="font-display text-6xl font-bold text-black/[0.04] leading-none mb-4 select-none">01</div>
          <h3 className="font-display font-bold text-cream text-2xl lg:text-3xl leading-tight mb-4 group-hover:text-gold-light transition-colors duration-400">
            {project.title}
          </h3>
          <p className="font-body text-cream-dim/70 text-sm leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 font-body text-2xs text-gold/60 border border-gold/15 tracking-[0.1em] group-hover:border-gold/30 group-hover:text-gold/80 transition-all duration-300">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
      {/* Bottom gold line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600" />
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const tilt = useTilt(6);
  return (
    <div className="reveal" style={{ minHeight: "320px" }} data-delay={`${index * 60}`}>
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="group relative overflow-hidden bg-surface border border-black/10 hover:border-gold/25 shadow-sm flex flex-col h-full will-change-transform"
      style={{ "--glow": 0, transition: "border-color 0.5s ease, transform 0.25s ease-out" } as React.CSSProperties}
    >
      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          opacity: "var(--glow, 0)",
          background: "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), rgba(201,168,76,0.1), transparent 70%)",
        }}
      />
      {/* Background image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/20" />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Number */}
      <div className="absolute top-4 right-4 font-display text-4xl font-bold text-black/[0.05] select-none leading-none">
        {String(index + 2).padStart(2, "0")}
      </div>

      {/* Content */}
      <div className="relative mt-auto p-6 flex flex-col gap-3">
        <h3 className="font-display font-bold text-cream text-lg leading-snug group-hover:text-gold-light transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-body text-cream-dim/65 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 font-body text-2xs text-gold/55 border border-gold/12 tracking-[0.08em]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex items-center gap-4 mb-10 reveal">
          <div className="gold-line" />
          <span className="font-body text-2xs text-gold tracking-[0.35em] uppercase">Featured Work</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
          <span className="font-body text-2xs text-cream-faint tracking-[0.2em] uppercase">05</span>
        </div>

        <div className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-8">
          <h2
            className="font-display font-bold text-cream leading-[1.0] tracking-tight reveal"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            Featured<br />
            <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="font-body text-cream-dim text-sm leading-relaxed max-w-sm text-right reveal" data-delay="120">
            A selection of production work. These represent a fraction of the work delivered.
          </p>
        </div>

        {/* Featured card */}
        <div className="mb-6 reveal" data-delay="160">
          <FeaturedCard project={featured} />
        </div>

        {/* Rest grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
