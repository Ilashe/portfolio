"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Cloud Infrastructure Design",
    description: "Architect scalable, secure, and cost-optimized AWS infrastructure tailored to your application's needs, including VPCs, subnets, security groups, IAM policies, and more.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    tags: ["AWS", "Azure", "Terraform"],
  },
  {
    number: "02",
    title: "DevOps & CI/CD Automation",
    description: "Design and implement automated deployment pipelines with GitHub Actions, Docker, and Terraform to reduce release cycles and eliminate human error from your delivery process.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    tags: ["Docker", "GitHub Actions", "Terraform"],
  },
  {
    number: "03",
    title: "AWS Architecture Consulting",
    description: "Expert guidance on AWS service selection, cost optimization, well-architected reviews, and migration strategies for cloud-first organizations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    tags: ["AWS", "Cost Optimization", "Migration"],
  },
  {
    number: "04",
    title: "Security Awareness (KnowBe4)",
    description: "Full KnowBe4 platform administration, including phishing simulations, training campaigns, and security awareness programs that build a stronger security culture across your organization.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    tags: ["KnowBe4", "Phishing", "Training"],
  },
  {
    number: "05",
    title: "Web Development & Integrations",
    description: "Build and integrate modern web applications with Next.js, REST APIs, HubSpot, Zapier, and third-party platforms to streamline your workflows.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80",
    tags: ["Next.js", "HubSpot", "APIs"],
  },
  {
    number: "06",
    title: "Workflow Automation",
    description: "Design and build end-to-end automation workflows using Power Automate, Zapier, HubSpot, and custom integrations to eliminate repetitive manual tasks, connect your tools, and keep your business running without constant human input.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    tags: ["Power Automate", "Zapier", "HubSpot", "Integrations"],
  },
  {
    number: "07",
    title: "Technical Consulting",
    description: "Strategic technology advisory for startups and growing businesses, covering infrastructure planning, stack recommendations, vendor evaluation, and risk management.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    tags: ["Strategy", "Risk", "Advisory"],
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-16 lg:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex items-center gap-4 mb-10 reveal">
          <div className="gold-line" />
          <span className="font-body text-2xs text-gold tracking-[0.35em] uppercase">What I Offer</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
          <span className="font-body text-2xs text-cream-faint tracking-[0.2em] uppercase">07</span>
        </div>

        <div className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-8">
          <h2
            className="font-display font-bold text-cream leading-[1.0] tracking-tight reveal"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            Services
          </h2>
          <p className="font-body text-cream-dim text-sm leading-relaxed max-w-xs text-right reveal" data-delay="100">
            End-to-end cloud and engineering services, from architecture design to production deployment.
          </p>
        </div>

        {/* Service rows — accordion */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="group reveal border-t border-white/[0.05] last:border-b cursor-pointer"
              data-delay={`${i * 60}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* Header row */}
              <div className="flex items-center justify-between py-6 lg:py-7 gap-6">
                <div className="flex items-center gap-6 lg:gap-10 flex-1 min-w-0">
                  <span className="font-body text-2xs text-cream-faint/50 tracking-[0.2em] flex-shrink-0 hidden sm:block">
                    {service.number}
                  </span>
                  <h3
                    className={`font-display font-bold leading-tight transition-colors duration-300 ${
                      active === i ? "text-gold" : "text-cream group-hover:text-gold-light"
                    }`}
                    style={{ fontSize: "clamp(1rem, 2.2vw, 1.5rem)" }}
                  >
                    {service.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="hidden sm:flex gap-2">
                    {service.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2.5 py-1 font-body text-2xs text-cream-faint/50 border border-white/5 tracking-[0.1em]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`w-6 h-6 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${active === i ? "border-gold/40 bg-gold/10 rotate-45" : "group-hover:border-gold/25"}`}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke={active === i ? "#C9A84C" : "#A8A49E"} strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              <div className={`overflow-hidden transition-all duration-500 ease-out ${active === i ? "max-h-80 opacity-100 pb-8" : "max-h-0 opacity-0"}`}>
                <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start pl-0 lg:pl-20">
                  <div className="space-y-4">
                    <p className="font-body text-cream-dim text-sm leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 font-body text-2xs text-gold/70 border border-gold/20 tracking-[0.12em] uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-40 overflow-hidden hidden lg:block">
                    <Image src={service.image} alt={service.title} fill className="object-cover opacity-50" sizes="300px" />
                    <div className="absolute inset-0 bg-gradient-to-r from-bg to-transparent" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
