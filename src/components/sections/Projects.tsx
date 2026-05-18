"use client";

import Image from "next/image";

const projects = [
  {
    title: "Serverless Web App Pipeline",
    description:
      "Designed and deployed a fully serverless submission pipeline on AWS. Users fill out a web form that hits a REST endpoint on API Gateway, which triggers a Lambda function that validates the payload, writes the record to a DynamoDB table with a timestamp and unique ID, then fires a second Lambda to send a confirmation email via SES. No servers to manage, it scales to zero when idle, and every submission is durably stored and acknowledged in under two seconds.",
    tech: ["API Gateway", "Lambda", "DynamoDB", "SES"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    slug: "serverless-pipeline",
    logos: null,
  },
  {
    title: "High-Availability WordPress on AWS",
    description:
      "Architected a production-grade WordPress environment built for resilience. Set up a custom VPC with public and private subnets across two Availability Zones, launched EC2 instances behind an Application Load Balancer, and moved the database entirely off the web server onto an RDS MySQL instance with Multi-AZ standby for automatic failover. WordPress media is offloaded to S3 and served through CloudFront, removing load from the instances. The result is an environment that survives an AZ outage without downtime and scales horizontally by simply adding instances to the target group.",
    tech: ["EC2", "RDS", "VPC", "ALB", "CloudFront", "WordPress"],
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&w=900&q=80",
    slug: "ha-wordpress",
    logos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        alt: "AWS",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
        alt: "WordPress",
      },
    ],
  },
  {
    title: "AWS Bedrock RAG System",
    description:
      "Built a Retrieval-Augmented Generation pipeline on AWS so users can query their own documents using natural language. Source documents are uploaded to S3, chunked, embedded, and indexed into a Bedrock Knowledge Base backed by a vector store. A Lambda function handles incoming questions, retrieves the most relevant chunks, and passes them as context to a Bedrock foundation model to generate a grounded answer. This eliminates hallucinations and keeps every response anchored to the organization's actual data.",
    tech: ["AWS Bedrock", "RAG", "Lambda", "S3", "Knowledge Base"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80",
    slug: "bedrock-rag",
    logos: null,
  },
  {
    title: "Blue/Green Nginx Deployment",
    description:
      "Implemented a zero-downtime deployment strategy using two identical environments, Blue (live) and Green (staging), running side by side on Linux. Nginx acts as the traffic router; a Bash script updates the upstream block to point to the active environment and reloads Nginx without dropping a single connection. New releases are deployed to the idle environment, smoke-tested, then cut over instantly. Rolling back is a one-line command. The same script is wired into the CI/CD pipeline so every passing build deploys automatically.",
    tech: ["Nginx", "Linux", "Bash", "CI/CD"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=80",
    slug: "blue-green",
    logos: null,
  },
  {
    title: "Static Site: S3 + CloudFront",
    description:
      "Provisioned a production static hosting stack entirely on AWS. Built site assets are pushed to a private S3 bucket configured as the origin. Direct public access is blocked, and only CloudFront can read from the bucket via an Origin Access Control policy. A CloudFront distribution caches content at edge locations worldwide for low-latency global delivery. The custom domain is managed in Route 53 with an A-record alias pointing to the distribution, and an ACM certificate handles HTTPS. Cache invalidations run automatically on every deploy so visitors always get the latest build.",
    tech: ["S3", "CloudFront", "Route 53", "ACM", "OAC"],
    image: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?auto=format&fit=crop&w=900&q=80",
    slug: "static-site",
    logos: null,
  },
  {
    title: "Nexus Social",
    description:
      "Built as part of the NexuCentri team, a SaaS platform that lets users draft, schedule, and publish content across multiple social media accounts from a single dashboard. The frontend and API routes are built with Next.js, with Supabase powering the database, authentication, and real-time updates. Scheduled posts are enqueued using QStash, which holds each job until the target time and delivers it to a Next.js API endpoint that fires the publish request to every connected platform. Scheduled posts survive server restarts with no always-on background worker required.",
    tech: ["Next.js", "Supabase", "QStash", "TypeScript"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80",
    slug: "nexus-social",
    logos: null,
  },
  {
    title: "NexuLens",
    description:
      "Built a fully client-side tool that helps organizations identify and recover money wasted on unused Microsoft 365 licenses. Admins export their M365 usage report as a CSV and drop it into NexuLens. The file is parsed entirely in the browser with no data leaving the user's machine. The tool cross-references each user's last active date, assigned license SKU, and service usage across Teams, Exchange, SharePoint, and OneDrive to flag dormant accounts and underutilized paid tiers. The output is a clear breakdown of how many licenses can be downgraded or removed, with an estimated monthly savings figure attached.",
    tech: ["Next.js", "TypeScript", "M365", "React"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    slug: "nexulens",
    logos: null,
  },
  {
    title: "HubSpot Round Robin: $5,800/mo Saved",
    description:
      "Engineered a custom Python-based Round Robin assignment system to replace HubSpot's paid seat feature, saving the organization $5,800 every month ($100 per person across 58 employees). When a form is submitted, the system automatically rotates and assigns the ticket to the next available employee and triggers an instant notification, fully replicating enterprise HubSpot functionality at zero license cost.",
    tech: ["Python", "HubSpot API", "Automation", "Workflows", "Cost Optimization"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    slug: "hubspot-round-robin",
    logos: null,
  },
  {
    title: "HubSpot Integrated Form System",
    description:
      "Built a unified internal form system where department-specific forms surface dynamically based on the user's selection. Integrated every form directly into HubSpot, activating dedicated pipelines per form type and building workflows for submission alerts, ticket pipeline status updates, and numerous other triggers. The system is used by both internal employees and external users, with all data flowing back into the organization's HubSpot CRM.",
    tech: ["HubSpot", "Typeform", "CRM Pipelines", "Workflows", "Automation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    slug: "hubspot-form-system",
    logos: null,
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="group relative overflow-hidden border border-gold/10 hover:border-gold/30 transition-colors duration-300 flex flex-col"
      style={{ minHeight: "340px" }}
    >
      {/* Background image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Permanent dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/40" />

      {/* Hover shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 60%)" }}
      />

      {/* Gold top bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Platform logos (top-right corner) */}
      {project.logos && (
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          {project.logos.map((logo) => (
            <div
              key={logo.alt}
              className="w-8 h-8 bg-bg/80 backdrop-blur-sm border border-gold/20 flex items-center justify-center p-1"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={24}
                height={24}
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      )}

      {/* Content pinned to bottom */}
      <div className="relative mt-auto p-6 flex flex-col gap-3">
        <h3 className="font-display font-bold text-cream text-lg leading-snug">
          {project.title}
        </h3>
        <p className="font-body text-cream-dim/70 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs font-body text-gold/70 border border-gold/15 tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Full description overlay on hover */}
      <div className="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="w-full h-full bg-gradient-to-t from-bg via-bg/97 to-bg/80 flex flex-col justify-end p-6 gap-3">
          <h3 className="font-display font-bold text-cream text-lg leading-snug">
            {project.title}
          </h3>
          <p className="font-body text-cream-dim text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs font-body text-gold/70 border border-gold/15 tracking-wide"
              >
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
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 relative">
          <span className="section-number">05</span>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-body">
              Featured Work
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-cream">
            Featured Projects
          </h2>
          <p className="font-body text-cream-dim mt-4 max-w-xl text-base leading-relaxed">
            Real infrastructure and applications built in production environments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
