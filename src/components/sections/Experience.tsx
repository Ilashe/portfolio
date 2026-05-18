"use client";

const experiences = [
  {
    role: "IT Consultant",
    company: "NexuCentri",
    period: "Feb 2026 – Present",
    type: "Remote",
    current: true,
    points: [
      "Website builds and custom web application development for clients",
      "Automation systems design and deployment using Zapier and custom integrations",
      "KnowBe4 security awareness platform administration",
      "API integrations including HubSpot, Vapi, and Zapier workflow automation",
    ],
  },
  {
    role: "Logistic Officer",
    company: "Glacique Africa",
    period: "Feb 2025 – Oct 2025",
    type: "On-site",
    current: false,
    points: [
      "Led cross-functional technical support team, achieving 99% customer satisfaction",
      "Reduced incident resolution time by 25% through process optimization",
      "Managed technical operations and coordinated with multiple departments",
      "Implemented structured issue-tracking workflows to improve team efficiency",
    ],
  },
  {
    role: "Freelance Telecoms Engineer",
    company: "Anchor Telecoms",
    period: "Sep 2017 – Jul 2020",
    type: "Field",
    current: false,
    points: [
      "Deployed and maintained 100+ telecom infrastructure sites across the region",
      "CCTV system installations and network diagnostics",
      "Reduced network downtime by 35% through proactive monitoring and fault resolution",
      "Provided technical consulting and field engineering support",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface/20" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 relative">
          <span className="section-number">06</span>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-body">
              Career
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-cream">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Gold vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />

          <div className="space-y-12 pl-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute -left-10 top-1.5 w-3 h-3 rounded-full border-2 ${
                    exp.current
                      ? "bg-gold border-gold animate-glow-pulse"
                      : "bg-bg border-gold/40"
                  }`}
                  style={{ left: "-2.75rem" }}
                />

                <div className="bg-surface border border-gold/10 p-7 hover:border-gold/25 transition-colors duration-300">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-display font-bold text-cream text-xl">{exp.role}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="font-body text-gold font-semibold text-sm">{exp.company}</span>
                        <span className="text-cream-dim/30">·</span>
                        <span className="font-body text-cream-dim/60 text-xs">{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="px-2.5 py-1 text-xs font-body bg-gold/10 text-gold border border-gold/30 tracking-wide">
                          Current
                        </span>
                      )}
                      <span className="font-body text-cream-dim/50 text-sm">{exp.period}</span>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 font-body text-cream-dim/70 text-sm leading-relaxed">
                        <span className="text-gold/60 mt-1.5 shrink-0">—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
