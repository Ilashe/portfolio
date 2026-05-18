"use client";

import Image from "next/image";

const stats = [
  { value: "3",   label: "AWS Certifications" },
  { value: "5+",  label: "Years Experience"   },
  { value: "20+", label: "Projects Delivered" },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 lg:py-24 overflow-hidden">

      {/* Subtle surface tint */}
      <div className="absolute inset-0 bg-surface/20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Section label ── */}
        <div className="flex items-center gap-4 mb-10 reveal">
          <div className="gold-line" />
          <span className="font-body text-2xs text-gold tracking-[0.35em] uppercase">About Me</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
          <span className="font-body text-2xs text-cream-faint tracking-[0.2em] uppercase">02</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">

          {/* ── LEFT — Photo ── */}
          <div className="reveal-x">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">

              {/* Offset decorative border */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-gold/15" />
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 border border-gold/6" />

              {/* Photo */}
              <div className="relative w-full h-full overflow-hidden border border-white/5">
                <Image
                  src="/images/about.jpg"
                  alt="Ilashe Benjamin Joseph"
                  fill
                  className="object-cover z-10"
                  priority
                />
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gold/50 z-20" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gold/50 z-20" />
              </div>
            </div>
          </div>

          {/* ── RIGHT — Bio ── */}
          <div className="space-y-10">

            {/* Heading */}
            <div className="reveal" data-delay="100">
              <h2
                className="font-display font-bold text-cream leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
              >
                The Engineer Behind<br />
                <span className="text-gradient-gold">the Architecture</span>
              </h2>
            </div>

            {/* Bio */}
            <div className="space-y-5 reveal" data-delay="200">
              <p className="font-body text-cream-dim leading-relaxed text-[0.92rem]">
                BSc. Actuarial Science graduate from the University of Benin, a background that
                trained me to think in systems, quantify risk, and make precise, data-driven
                decisions. That foundation drives how I approach every engineering challenge as an
                AWS Certified Solutions Architect and DevOps Engineer, with hands-on experience
                designing cloud infrastructure, building CI/CD pipelines, deploying high-availability
                applications, and implementing infrastructure as code with Terraform and Docker.
              </p>
              <p className="font-body text-cream-dim leading-relaxed text-[0.92rem]">
                I bring deep practical experience in HubSpot engineering: building integrated form
                systems, automating CRM workflows, configuring ticket pipelines, and writing custom
                Python solutions that eliminated expensive HubSpot seat license costs. I also
                develop with Claude Code and Agentic AI, build full-stack web applications with
                Next.js, React, and TypeScript, design Zapier, Typeform, and Power Automate
                workflows, administer KnowBe4 security awareness programs and TelemetryTV digital
                signage, and hold a professional background in telecommunications engineering and
                Certified Risk Management.
              </p>
            </div>

            {/* Divider */}
            <div className="gold-line-full reveal" data-delay="280" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 reveal" data-delay="360">
              {stats.map(({ value, label }) => (
                <div key={label} className="group">
                  <div
                    className="font-display font-bold text-gold leading-none mb-1"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
                  >
                    {value}
                  </div>
                  <div className="font-body text-2xs text-cream-faint uppercase tracking-[0.18em] leading-tight">{label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 reveal" data-delay="440">
              {["AWS", "DevOps", "HubSpot", "Claude Code", "Cloud Architecture", "IaC", "CI/CD", "Next.js", "Python", "Risk Management", "Telecom Engineering"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 font-body text-2xs text-cream-faint border border-white/8 hover:border-gold/30 hover:text-gold transition-all duration-300 tracking-[0.12em] uppercase cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
