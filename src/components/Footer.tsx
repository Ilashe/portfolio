"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaMedium } from "react-icons/fa6";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ilashe-joseph-524b90233",
    icon: <FaLinkedin size={20} />,
    color: "#0A66C2",
  },
  {
    label: "GitHub",
    href: "https://github.com/Ilashe",
    icon: <FaGithub size={20} />,
    color: "#e6edf3",
  },
  {
    label: "Medium",
    href: "https://medium.com/@bengilashe",
    icon: <FaMedium size={20} />,
    color: "#ffffff",
  },
  {
    label: "Email",
    href: "mailto:bengilashe@gmail.com",
    icon: <FaEnvelope size={18} />,
    color: "#EA4335",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Name */}
          <Link href="#hero" className="font-display text-xl font-bold text-cream tracking-wider">
            JIB<span className="text-gold">.</span>
          </Link>

          {/* Center — Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-xs text-cream-dim/50 hover:text-gold transition-colors duration-200 uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right — Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                style={{ color: "rgba(201,168,76,0.35)" }}
                className="transition-all duration-200 hover:scale-110"
                onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,168,76,0.35)")}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gold/5 text-center">
          <p className="font-body text-xs text-cream-dim/30 tracking-wide">
            © 2026 Ilashe Benjamin Joseph. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
