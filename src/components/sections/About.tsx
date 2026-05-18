"use client";

import Image from "next/image";

const stats = [
  { value: "3", label: "AWS Certifications" },
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface/30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20 relative">
          <span className="section-number">02</span>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-body">About Me</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-cream">
            The Engineer Behind the Architecture
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Photo */}
          <div className="relative">
            {/* ⬅ REPLACE WITH YOUR PHOTO: place image at /public/images/about.jpg */}
            <div className="relative aspect-[4/5] max-w-md">
              {/* Gold offset border */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-gold/30" />
              <div className="relative w-full h-full overflow-hidden bg-surface-2 border border-gold/15">
                <Image
                  src="/images/about.jpg"
                  alt="Ilashe Benjamin Joseph"
                  fill
                  className="object-cover z-10"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right — Bio & Stats */}
          <div className="space-y-8">
            <div className="space-y-5 font-body text-cream-dim leading-relaxed text-base">
              <p>
                BSc. Actuarial Science graduate from the University of Benin, a background that
                trained me to think in systems, quantify risk, and make precise, data-driven
                decisions. That foundation drives how I approach every engineering challenge as an
                AWS Certified Solutions Architect and DevOps Engineer, with hands-on experience
                designing cloud infrastructure, building CI/CD pipelines, deploying high-availability
                applications, and implementing infrastructure as code with Terraform and Docker.
              </p>
              <p>
                I bring deep practical experience in HubSpot engineering: building integrated form
                systems, automating CRM workflows, configuring ticket pipelines, and writing custom
                Python solutions that eliminated expensive HubSpot seat license costs. I also
                develop with Claude Code and Agentic AI, build full-stack web applications with
                Next.js, React, and TypeScript, design Zapier and Typeform automations, administer
                KnowBe4 security awareness programs and TelemetryTV digital signage, and hold a
                professional background in telecommunications engineering and Certified Risk
                Management.
              </p>
            </div>

            {/* Divider */}
            <div className="gold-line-full" />

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-surface border border-gold/10 p-5 hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="font-display text-3xl font-bold text-gold">{value}</div>
                  <div className="font-body text-sm text-cream-dim mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["AWS", "DevOps", "HubSpot", "Claude Code", "Cloud Architecture", "IaC", "CI/CD", "Next.js", "Python", "Risk Management", "Telecom Engineering"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-body text-gold/80 border border-gold/20 tracking-wide"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
