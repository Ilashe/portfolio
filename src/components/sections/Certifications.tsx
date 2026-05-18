"use client";

import Image from "next/image";

const certs = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    badgeType: "credly",
    bg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    accent: "#FF9900",
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    badge: "https://images.credly.com/size/340x340/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
    badgeType: "credly",
    bg: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80",
    accent: "#FF9900",
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Udemy (AWS SAA Prep)",
    badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    badgeType: "credly",
    bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    accent: "#FF9900",
  },
  {
    name: "Agentic AI DevOps with Claude Code",
    issuer: "Udemy",
    badge: "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67d31dd7aa394792257596c5_webclip.png",
    badgeType: "logo",
    bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    accent: "#CC785C",
  },
  {
    name: "KnowBe4 Platform Administration",
    issuer: "KnowBe4",
    badge: "https://www.knowbe4.com/hs-fs/hubfs/knowbe4-logo-black-orange-rgb-1.png",
    badgeType: "logo",
    bg: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
    accent: "#F26522",
  },
  {
    name: "TelemetryTV Digital Signage",
    issuer: "TelemetryTV",
    badge: "https://files.readme.io/59e62e5-small-telemetry_appicon_256.png",
    badgeType: "logo",
    bg: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&w=600&q=80",
    accent: "#6C63FF",
  },
  {
    name: "Certified Risk Management Professional",
    issuer: "IHRCD",
    badge: "https://images.credly.com/size/340x340/images/7af2b6ad-5a08-4584-9514-d0a2a12a3932/DRI_CRMP.png",
    badgeType: "credly",
    bg: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    accent: "#C9A84C",
  },
  {
    name: "Project Management: Slack & Asana",
    issuer: "AQ-SKILL",
    badge: "https://www.aqskill.org/wp-content/themes/eduma-child/assets/v2/img/aqskill-light.svg",
    badgeType: "logo",
    bg: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=600&q=80",
    accent: "#36C5F0",
  },
  {
    name: "Data Analysis with Microsoft Excel",
    issuer: "AQ-SKILL",
    badge: "https://www.aqskill.org/wp-content/themes/eduma-child/assets/v2/img/aqskill-light.svg",
    badgeType: "logo",
    bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    accent: "#217346",
  },
  {
    name: "OpenClaw Certification",
    issuer: "OpenClaw",
    badge: "https://upload.wikimedia.org/wikipedia/commons/3/36/Openclaw-logo-text-dark.svg",
    badgeType: "logo",
    bg: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80",
    accent: "#E63946",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 relative">
          <span className="section-number">03</span>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-body">
              Credentials
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-cream">
            Certifications & Credentials
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="group relative overflow-hidden border border-gold/10 hover:border-gold/30 transition-colors duration-300"
              style={{ minHeight: "260px" }}
            >
              {/* Background image */}
              <Image
                src={cert.bg}
                alt={cert.name}
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 opacity-20 group-hover:opacity-30"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/40" />

              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: cert.accent }}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col p-6 gap-4">
                {/* Badge / Logo */}
                <div className="h-14 flex items-center">
                  {cert.badge && cert.badgeType === "credly" && (
                    <div className="relative w-14 h-14 shrink-0">
                      <Image
                        src={cert.badge}
                        alt={`${cert.name} badge`}
                        fill
                        className="object-contain drop-shadow-lg"
                        sizes="56px"
                      />
                    </div>
                  )}
                  {cert.badge && cert.badgeType === "logo" && (
                    <div className="relative h-10 w-32 shrink-0">
                      <Image
                        src={cert.badge}
                        alt={`${cert.issuer} logo`}
                        fill
                        className="object-contain object-left"
                        sizes="128px"
                        unoptimized
                      />
                    </div>
                  )}
                  {cert.badgeType === "none" && (
                    <div
                      className="w-14 h-14 border-2 flex items-center justify-center shrink-0"
                      style={{ borderColor: cert.accent }}
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          stroke={cert.accent}
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  <h3 className="font-body font-semibold text-cream text-sm leading-snug mb-1.5">
                    {cert.name}
                  </h3>
                  <p className="font-body text-xs tracking-wide" style={{ color: cert.accent + "bb" }}>
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-3 border-t border-gold/10 flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: cert.accent }}
                  />
                  <span className="text-xs text-cream-dim/50 font-body tracking-wide">Credential</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
