"use client";

const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS EC2", "AWS VPC", "AWS RDS", "AWS S3", "AWS CloudFront",
      "AWS Lambda", "API Gateway", "Bedrock", "QuickSight", "Lex",
      "AWS SES", "DynamoDB", "Azure", "Vercel",
    ],
  },
  {
    title: "DevOps & Automation",
    skills: [
      "Docker", "Terraform", "CI/CD Pipelines", "GitHub Actions",
      "Linux", "Nginx", "Bash Scripting", "Zapier", "Jira", "HubSpot", "Typeform", "Power Automate", "OpenClaw", "Claude Code",
    ],
  },
  {
    title: "Development",
    skills: [
      "Next.js", "React", "TypeScript", "Tailwind CSS",
      "Python", "PowerShell", "RESTful APIs", "MySQL",
    ],
  },
  {
    title: "Security & Operations",
    skills: [
      "KnowBe4", "Network Diagnostics", "CCTV Systems",
      "TelemetryTV", "Risk Management", "Agile / Scrum",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface/20" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 relative">
          <span className="section-number">04</span>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-body">
              Technical Skills
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-cream">
            Skills & Stack
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-surface border border-gold/10 p-6 hover:border-gold/25 transition-colors duration-300"
            >
              <div className="mb-6 pb-4 border-b border-gold/10">
                <h3 className="font-display font-bold text-cream text-sm uppercase tracking-widest leading-tight">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-body text-cream-dim border border-gold/15 hover:border-gold/40 hover:text-gold transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
