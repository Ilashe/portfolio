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
    <section id="experience" className="relative py-16 lg:py-24 overflow-hidden">

      <div className="absolute inset-0 bg-surface/15" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex items-center gap-4 mb-10 reveal">
          <div className="gold-line" />
          <span className="font-body text-2xs text-gold tracking-[0.35em] uppercase">Career</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
          <span className="font-body text-2xs text-cream-faint tracking-[0.2em] uppercase">06</span>
        </div>

        <h2
          className="font-display font-bold text-cream leading-[1.0] tracking-tight mb-10 reveal"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          data-delay="80"
        >
          Work<br />
          <span className="text-gradient-gold">Experience</span>
        </h2>

        {/* Entries */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group reveal border-t border-white/[0.05] last:border-b"
              data-delay={`${i * 100}`}
            >
              <div className="py-10 lg:py-12 grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-12">

                {/* Left — meta */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${exp.current ? "bg-gold animate-glow-pulse" : "bg-cream-faint/40"}`}
                    />
                    <h3 className="font-display font-bold text-cream text-xl lg:text-2xl leading-tight group-hover:text-gold-light transition-colors duration-400">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="font-body text-gold text-sm font-semibold tracking-wide pl-5">{exp.company}</p>
                  <div className="flex items-center gap-3 pl-5">
                    <span className="font-body text-2xs text-cream-faint tracking-[0.12em]">{exp.period}</span>
                    <span className="w-1 h-1 rounded-full bg-cream-faint/30" />
                    <span className="font-body text-2xs text-cream-faint tracking-[0.12em] uppercase">{exp.type}</span>
                    {exp.current && (
                      <span className="px-2 py-0.5 font-body text-2xs text-gold border border-gold/30 tracking-[0.12em] uppercase">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Right — points */}
                <ul className="space-y-3 pt-1">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <div className="w-px h-4 bg-gold/30 flex-shrink-0 mt-1" />
                      <span className="font-body text-cream-dim/75 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
