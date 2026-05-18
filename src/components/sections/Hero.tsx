"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const roles = [
  "AWS Solutions Architect",
  "DevOps Engineer",
  "AWS Cloud Professional",
  "Infrastructure Builder",
  "Web Developer",
  "HubSpot Engineering",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.08) 0%, transparent 60%), #070B14",
      }}
    >
      {/* Mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-body">
                  Cloud & Infrastructure
                </span>
              </div>

              <p className="font-display text-2xl lg:text-3xl font-bold text-cream tracking-[0.18em] uppercase">
                Ilashe Benjamin Joseph
              </p>

              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-[1.05]">
                Architecting Cloud{" "}
                <span className="text-gradient-gold">Infrastructure</span>{" "}
                That Scales
              </h1>
            </div>

            <div className="h-8 flex items-center">
              <span className="font-body text-xl text-cream-dim">
                {displayed}
                <span className="animate-pulse text-gold">|</span>
              </span>
            </div>

            <p className="font-body text-cream-dim text-base leading-relaxed max-w-md">
              AWS Solutions Architect · DevOps Engineer · AWS Certified · Web Developer · HubSpot Engineering
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-bg font-body font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors duration-200"
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/files/joseph-ilashe-cv.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/60 text-gold font-body font-semibold text-sm tracking-wide hover:border-gold hover:bg-gold/10 transition-all duration-200"
              >
                Download CV
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v7m0 0l-3-3m3 3l3-3M4 13h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-4 border-t border-gold/10">
              {[
                ["3+", "AWS Certs"],
                ["5+", "Years Exp"],
                ["20+", "Projects"],
              ].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="font-display text-2xl font-bold text-gold">{num}</div>
                  <div className="font-body text-xs text-cream-dim uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Image with soft edge blur via mask */}
              <div
                className="relative w-80 h-[480px] lg:w-[420px] lg:h-[560px]"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 88% 92% at 50% 42%, black 38%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 88% 92% at 50% 42%, black 38%, transparent 100%)",
                }}
              >
                <Image
                  src="/images/profile.png"
                  alt="Ilashe Benjamin Joseph"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-8 -right-4 lg:-right-8 bg-surface border border-gold/30 px-4 py-3 gold-glow">
                <div className="text-gold text-xs font-body font-semibold tracking-widest uppercase">AWS Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-dim/40">
        <span className="text-xs font-body tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent" />
      </div>
    </section>
  );
}
