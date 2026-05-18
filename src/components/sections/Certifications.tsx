"use client";

import Image from "next/image";

const certs = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    badgeType: "credly",
    accent: "#FF9900",
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    badge: "https://images.credly.com/size/340x340/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
    badgeType: "credly",
    accent: "#FF9900",
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Udemy (AWS SAA Prep)",
    badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    badgeType: "credly",
    accent: "#FF9900",
  },
  {
    name: "Agentic AI DevOps with Claude Code",
    issuer: "Udemy",
    badge: "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67d31dd7aa394792257596c5_webclip.png",
    badgeType: "logo",
    accent: "#CC785C",
  },
  {
    name: "KnowBe4 Platform Administration",
    issuer: "KnowBe4",
    badge: "https://www.knowbe4.com/hs-fs/hubfs/knowbe4-logo-black-orange-rgb-1.png",
    badgeType: "logo",
    accent: "#F26522",
  },
  {
    name: "TelemetryTV Digital Signage",
    issuer: "TelemetryTV",
    badge: "https://files.readme.io/59e62e5-small-telemetry_appicon_256.png",
    badgeType: "logo",
    accent: "#6C63FF",
  },
  {
    name: "Certified Risk Management Professional",
    issuer: "IHRCD",
    badge: "https://images.credly.com/size/340x340/images/7af2b6ad-5a08-4584-9514-d0a2a12a3932/DRI_CRMP.png",
    badgeType: "credly",
    accent: "#C9A84C",
  },
  {
    name: "Project Management: Slack & Asana",
    issuer: "AQ-SKILL",
    badge: "https://www.aqskill.org/wp-content/themes/eduma-child/assets/v2/img/aqskill-light.svg",
    badgeType: "logo",
    accent: "#36C5F0",
  },
  {
    name: "Data Analysis with Microsoft Excel",
    issuer: "AQ-SKILL",
    badge: "https://www.aqskill.org/wp-content/themes/eduma-child/assets/v2/img/aqskill-light.svg",
    badgeType: "logo",
    accent: "#217346",
  },
  {
    name: "OpenClaw Certification",
    issuer: "OpenClaw",
    badge: "https://upload.wikimedia.org/wikipedia/commons/3/36/Openclaw-logo-text-dark.svg",
    badgeType: "logo",
    accent: "#E63946",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-16 lg:py-24 overflow-hidden">

      <div className="absolute inset-0 bg-surface/15" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex items-center gap-4 mb-10 reveal">
          <div className="gold-line" />
          <span className="font-body text-2xs text-gold tracking-[0.35em] uppercase">Credentials</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
          <span className="font-body text-2xs text-cream-faint tracking-[0.2em] uppercase">03</span>
        </div>

        <h2
          className="font-display font-bold text-cream leading-[1.0] tracking-tight mb-8 reveal"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          data-delay="80"
        >
          Certifications &<br />
          <span className="text-gradient-gold">Credentials</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {certs.map((cert, i) => (
            <div
              key={cert.name}
              className="group relative bg-surface border border-white/[0.04] hover:border-white/10 transition-all duration-400 p-5 flex flex-col gap-4 reveal"
              data-delay={`${i * 50}`}
              style={{ borderTop: `1px solid ${cert.accent}20` }}
            >
              {/* Accent top line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: cert.accent }}
              />

              {/* Badge */}
              <div className="h-12 flex items-center">
                {cert.badgeType === "credly" && cert.badge && (
                  <div className="relative w-12 h-12">
                    <Image
                      src={cert.badge}
                      alt={cert.name}
                      fill
                      className="object-contain drop-shadow-md"
                      sizes="48px"
                    />
                  </div>
                )}
                {cert.badgeType === "logo" && cert.badge && (
                  <div className="relative h-8 w-24">
                    <Image
                      src={cert.badge}
                      alt={cert.issuer}
                      fill
                      className="object-contain object-left"
                      sizes="96px"
                      unoptimized
                    />
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="mt-auto">
                <h3 className="font-body font-semibold text-cream text-xs leading-snug mb-1 group-hover:text-gold-light transition-colors duration-300">
                  {cert.name}
                </h3>
                <p
                  className="font-body text-2xs tracking-wide"
                  style={{ color: cert.accent + "90" }}
                >
                  {cert.issuer}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
