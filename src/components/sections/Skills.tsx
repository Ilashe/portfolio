"use client";

const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    num: "01",
    skills: [
      "AWS EC2", "AWS VPC", "AWS RDS", "AWS S3", "AWS CloudFront",
      "AWS Lambda", "API Gateway", "Bedrock", "QuickSight", "Lex",
      "AWS SES", "DynamoDB", "Azure", "Vercel",
    ],
  },
  {
    title: "DevOps & Automation",
    num: "02",
    skills: [
      "Docker", "Terraform", "CI/CD Pipelines", "GitHub Actions",
      "Linux", "Nginx", "Bash Scripting", "Zapier", "Jira",
      "HubSpot", "Typeform", "Power Automate", "OpenClaw", "Claude Code",
    ],
  },
  {
    title: "Development",
    num: "03",
    skills: [
      "Next.js", "React", "TypeScript", "Tailwind CSS",
      "Python", "PowerShell", "RESTful APIs", "MySQL",
    ],
  },
  {
    title: "Security & Operations",
    num: "04",
    skills: [
      "KnowBe4", "Network Diagnostics", "CCTV Systems",
      "TelemetryTV", "Risk Management", "Agile / Scrum",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 lg:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex items-center gap-4 mb-10 reveal">
          <div className="gold-line" />
          <span className="font-body text-2xs text-gold tracking-[0.35em] uppercase">Technical Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
          <span className="font-body text-2xs text-cream-faint tracking-[0.2em] uppercase">04</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 mb-10 reveal" data-delay="80">
          <h2
            className="font-display font-bold text-cream leading-[1.0] tracking-tight lg:w-1/2"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            Skills &<br />
            <span className="text-gradient-gold">Stack</span>
          </h2>
          <p className="font-body text-cream-dim text-sm leading-relaxed lg:w-1/2 lg:pt-3 max-w-md">
            A multi-disciplinary stack spanning cloud infrastructure, automation, engineering, and operations.
          </p>
        </div>

        {/* ── Skill rows ── */}
        <div className="space-y-0">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="group reveal border-t border-white/[0.05] last:border-b hover:bg-white/[0.01] transition-colors duration-500"
              data-delay={`${i * 80}`}
            >
              <div className="py-7 lg:py-8 grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-10 items-start">

                {/* Category name */}
                <div className="flex items-start gap-4">
                  <span className="font-body text-2xs text-gold/40 tracking-[0.2em] mt-1 hidden lg:block">{group.num}</span>
                  <h3 className="font-display font-bold text-cream text-base lg:text-lg leading-tight group-hover:text-gold transition-colors duration-400">
                    {group.title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 font-body text-2xs text-cream-dim border border-white/6 hover:border-gold/35 hover:text-gold transition-all duration-250 tracking-[0.1em] cursor-default"
                    >
                      {skill}
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
