"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMedium } from "react-icons/fa6";

const contactInfo = [
  {
    icon: <FaEnvelope size={18} />,
    iconColor: "#EA4335",
    label: "Email",
    value: "bengilashe@gmail.com",
    href: "mailto:bengilashe@gmail.com",
  },
  {
    icon: <FaPhone size={16} />,
    iconColor: "#25D366",
    label: "Phone",
    value: "+234 810 027 5673",
    href: "tel:+2348100275673",
  },
  {
    icon: <FaLinkedin size={20} />,
    iconColor: "#0A66C2",
    label: "LinkedIn",
    value: "linkedin.com/in/ilashe-joseph-524b90233",
    href: "https://linkedin.com/in/ilashe-joseph-524b90233",
  },
  {
    icon: <FaGithub size={20} />,
    iconColor: "#e6edf3",
    label: "GitHub",
    value: "github.com/Ilashe",
    href: "https://github.com/Ilashe",
  },
  {
    icon: <FaMedium size={20} />,
    iconColor: "#ffffff",
    label: "Medium",
    value: "medium.com/@bengilashe",
    href: "https://medium.com/@bengilashe",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface/20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 relative">
          <span className="section-number">08</span>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-body">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-cream">
            Let&apos;s Work Together
          </h2>
          <p className="font-body text-cream-dim mt-4 max-w-xl leading-relaxed">
            Have a project in mind? Looking for a cloud architect or DevOps engineer?
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Contact Info */}
          <div className="space-y-6">
            {contactInfo.map(({ icon, iconColor, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 group">
                <div
                  className="w-10 h-10 bg-surface border border-gold/15 flex items-center justify-center shrink-0"
                  style={{ color: iconColor }}
                >
                  {icon}
                </div>
                <div>
                  <div className="font-body text-xs text-cream-dim/50 uppercase tracking-widest mb-1">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-body text-cream/80 hover:text-gold transition-colors duration-200 text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="font-body text-cream/80 text-sm">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability indicator */}
            <div className="mt-8 flex items-center gap-3 p-4 border border-gold/15 bg-surface">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-body text-sm text-cream-dim">
                Available for new projects and consulting engagements
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-xs text-cream-dim/60 uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-surface border border-gold/15 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors duration-200 placeholder:text-cream-dim/30"
                />
              </div>
              <div>
                <label className="block font-body text-xs text-cream-dim/60 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-surface border border-gold/15 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors duration-200 placeholder:text-cream-dim/30"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-xs text-cream-dim/60 uppercase tracking-widest mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
                className="w-full bg-surface border border-gold/15 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors duration-200 placeholder:text-cream-dim/30"
              />
            </div>

            <div>
              <label className="block font-body text-xs text-cream-dim/60 uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full bg-surface border border-gold/15 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors duration-200 placeholder:text-cream-dim/30 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-gold text-bg font-body font-semibold tracking-wide hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="font-body text-sm text-green-400 text-center">
                Message sent successfully. I&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-body text-sm text-red-400 text-center">
                Something went wrong. Please email directly at bengilashe@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
