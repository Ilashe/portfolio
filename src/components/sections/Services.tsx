"use client";

import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Cloud Infrastructure Design",
    description:
      "Architect scalable, secure, and cost-optimized AWS infrastructure tailored to your application's needs, including VPCs, subnets, security groups, IAM policies, and more.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    tags: ["AWS", "VPC", "Terraform"],
  },
  {
    number: "02",
    title: "DevOps & CI/CD Automation",
    description:
      "Design and implement automated deployment pipelines with GitHub Actions, Docker, and Terraform to reduce release cycles and eliminate human error from your delivery process.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    tags: ["Docker", "GitHub Actions", "Terraform"],
  },
  {
    number: "03",
    title: "AWS Architecture Consulting",
    description:
      "Expert guidance on AWS service selection, cost optimization, well-architected reviews, and migration strategies for cloud-first organizations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    tags: ["AWS", "Cost Optimization", "Migration"],
  },
  {
    number: "04",
    title: "Security Awareness (KnowBe4)",
    description:
      "Full KnowBe4 platform administration, including phishing simulations, training campaigns, and security awareness programs that build a stronger security culture across your organization.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    tags: ["KnowBe4", "Phishing", "Training"],
  },
  {
    number: "05",
    title: "Web Development & Integrations",
    description:
      "Build and integrate modern web applications with Next.js, REST APIs, HubSpot, Zapier, and third-party platforms to streamline your workflows.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80",
    tags: ["Next.js", "HubSpot", "APIs"],
  },
  {
    number: "06",
    title: "Workflow Automation",
    description:
      "Design and build end-to-end automation workflows using Power Automate, Zapier, HubSpot, and custom integrations to eliminate repetitive manual tasks, connect your tools, and keep your business running without constant human input.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    tags: ["Power Automate", "Zapier", "HubSpot", "Integrations"],
  },
  {
    number: "07",
    title: "Technical Consulting",
    description:
      "Strategic technology advisory for startups and growing businesses, covering infrastructure planning, stack recommendations, vendor evaluation, and risk management.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    tags: ["Strategy", "Risk", "Advisory"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 relative">
          <span className="section-number">07</span>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-body">
              What I Offer
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-cream">
            Services
          </h2>
          <p className="font-body text-cream-dim mt-4 max-w-xl leading-relaxed">
            End-to-end cloud and engineering services, from architecture design to production deployment.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative overflow-hidden bg-bg"
              style={{ minHeight: "360px" }}
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 opacity-30 group-hover:opacity-50"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/20" />

              {/* Gold left border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <span className="font-display text-5xl font-bold text-gold/15 group-hover:text-gold/25 transition-colors duration-300 leading-none mb-4 select-none">
                  {service.number}
                </span>
                <h3 className="font-display font-bold text-cream text-xl mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="font-body text-cream-dim/70 text-sm leading-relaxed mb-5 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-body text-gold/60 border border-gold/20 tracking-wide group-hover:border-gold/40 group-hover:text-gold/80 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
