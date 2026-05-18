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
  { label: "LinkedIn", href: "https://linkedin.com/in/ilashe-joseph-524b90233", icon: <FaLinkedin size={15} /> },
  { label: "GitHub", href: "https://github.com/Ilashe", icon: <FaGithub size={15} /> },
  { label: "Medium", href: "https://medium.com/@bengilashe", icon: <FaMedium size={15} /> },
  { label: "Email", href: "mailto:bengilashe@gmail.com", icon: <FaEnvelope size={14} /> },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">

      {/* Top strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <Link
            href="#hero"
            className="font-display font-bold text-cream text-lg tracking-[0.12em] hover:text-gold-light transition-colors duration-300 flex-shrink-0"
          >
            JIB<span className="text-gold">.</span>
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-2xs text-cream-dim hover:text-cream transition-colors duration-300 tracking-[0.22em] uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-cream-dim/60 hover:text-gold transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-2xs text-cream-dim/60 tracking-[0.15em]">
            &copy; 2026 Ilashe Benjamin Joseph. All rights reserved.
          </p>
          <p className="font-body text-2xs text-cream-dim/50 tracking-[0.12em]">
            AWS Solutions Architect &middot; DevOps Engineer &middot; HubSpot Engineer
          </p>
        </div>

      </div>
    </footer>
  );
}
