"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMedium } from "react-icons/fa6";

const contactInfo = [
  {
    label: "Email",
    value: "bengilashe@gmail.com",
    href: "mailto:bengilashe@gmail.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+234 810 027 5673",
    href: "tel:+2348100275673",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 2h3l1.5 3.5-2 1.2a7.8 7.8 0 003.8 3.8l1.2-2L13 10v3a1 1 0 01-1 1C5.3 14 0 8.7 0 2a1 1 0 011-1h1z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ilashe-joseph",
    href: "https://linkedin.com/in/ilashe-joseph-524b90233",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M3 5.5v5M3 3v.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
        <path d="M6 10.5V7.5a1.5 1.5 0 013 0v3M6 5.5v5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Ilashe",
    href: "https://github.com/Ilashe",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1a6 6 0 00-1.9 11.7c.3.05.4-.13.4-.3v-1.1c-1.67.36-2.02-.8-2.02-.8-.27-.7-.67-.88-.67-.88-.55-.37.04-.37.04-.37.6.04.93.62.93.62.54.93 1.42.66 1.76.5.06-.39.21-.66.38-.81-1.33-.15-2.73-.67-2.73-2.97 0-.66.23-1.2.62-1.62-.06-.15-.27-.77.06-1.6 0 0 .5-.16 1.65.62A5.75 5.75 0 017 5.38c.51 0 1.02.07 1.5.2 1.14-.78 1.65-.62 1.65-.62.33.83.12 1.45.06 1.6.39.42.62.96.62 1.62 0 2.31-1.4 2.82-2.74 2.97.22.19.41.56.41 1.12v1.66c0 .17.11.35.41.3A6 6 0 007 1z" stroke="currentColor" strokeWidth="0.8" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Medium",
    value: "medium.com/@bengilashe",
    href: "https://medium.com/@bengilashe",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <ellipse cx="4.5" cy="7" rx="3.5" ry="4.5" stroke="currentColor" strokeWidth="1.1"/>
        <ellipse cx="10" cy="7" rx="1.5" ry="4" stroke="currentColor" strokeWidth="1.1"/>
        <line x1="13" y1="3" x2="13" y2="11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
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
    <section id="contact" className="relative py-16 lg:py-24 overflow-hidden">

      <div className="absolute inset-0 bg-surface/15" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10 reveal">
          <div className="gold-line" />
          <span className="font-body text-2xs text-gold tracking-[0.35em] uppercase">Get In Touch</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
          <span className="font-body text-2xs text-cream-faint tracking-[0.2em] uppercase">08</span>
        </div>

        <div className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-10">
          <h2
            className="font-display font-bold text-cream leading-[1.0] tracking-tight reveal"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            Let&apos;s Work<br />
            <span className="text-gradient-gold">Together</span>
          </h2>
          <p className="font-body text-cream-dim text-sm leading-relaxed max-w-xs text-right reveal" data-delay="100">
            Open to new projects, consulting engagements, and long-term collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">

          {/* Left — info */}
          <div className="space-y-0 reveal" data-delay="80">

            <div className="space-y-0 mb-10">
              {contactInfo.map((item, i) => (
                <div
                  key={item.label}
                  className="group border-t border-white/[0.05] last:border-b py-5 flex items-center gap-5"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="text-gold/40 group-hover:text-gold/70 transition-colors duration-300 flex-shrink-0">
                    {item.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-body text-2xs text-cream-faint/50 tracking-[0.2em] uppercase mb-0.5">
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-body text-xs text-cream-dim group-hover:text-cream transition-colors duration-300 truncate block"
                    >
                      {item.value}
                    </a>
                  </div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="flex-shrink-0 text-gold/0 group-hover:text-gold/50 transition-colors duration-300"
                  >
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 px-5 py-4 border border-white/[0.05] bg-surface/50">
              <div className="relative flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-50" />
              </div>
              <span className="font-body text-xs text-cream-dim/70 tracking-[0.08em]">
                Available for new projects and engagements
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="space-y-4 reveal" data-delay="160">

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-body text-2xs text-cream-faint/50 tracking-[0.25em] uppercase">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-surface border border-white/10 focus:border-gold/50 text-cream font-body text-sm px-4 py-3 focus:outline-none placeholder:text-cream-faint/30 tracking-wide transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-body text-2xs text-cream-faint/50 tracking-[0.25em] uppercase">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-surface border border-white/10 focus:border-gold/50 text-cream font-body text-sm px-4 py-3 focus:outline-none placeholder:text-cream-faint/30 tracking-wide transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-2xs text-cream-faint/50 tracking-[0.25em] uppercase">
                Subject
              </label>
              <input
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What can I help you with?"
                className="w-full bg-surface border border-white/10 focus:border-gold/50 text-cream font-body text-sm px-4 py-3 focus:outline-none placeholder:text-cream-faint/30 tracking-wide transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <label className="font-body text-2xs text-cream-faint/50 tracking-[0.25em] uppercase">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or idea..."
                className="w-full bg-surface border border-white/10 focus:border-gold/50 text-cream font-body text-sm px-4 py-3 focus:outline-none placeholder:text-cream-faint/30 tracking-wide resize-none transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative px-10 py-4 border border-gold/40 hover:border-gold text-cream font-body text-xs tracking-[0.3em] uppercase transition-all duration-400 disabled:opacity-40 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="absolute inset-0 bg-gold/0 group-hover:bg-gold/8 transition-colors duration-400" />
                <span className="relative flex items-center gap-3">
                  {status === "loading" ? (
                    <>
                      <span className="w-3 h-3 border border-gold/50 border-t-gold rounded-full animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </span>
              </button>

              {status === "success" && (
                <p className="font-body text-xs text-emerald-400/80 tracking-[0.1em]">
                  Message sent. I&apos;ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="font-body text-xs text-red-400/80 tracking-[0.1em]">
                  Something went wrong. Email me directly.
                </p>
              )}
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}
