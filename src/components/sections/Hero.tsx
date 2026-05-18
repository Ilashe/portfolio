"use client";

import { useEffect, useState, useRef } from "react";
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

const marqueeItems = [
  "AWS", "DevOps", "HubSpot", "Claude Code", "Terraform", "Docker",
  "Next.js", "Python", "CI/CD", "Cloud Architecture", "Power Automate",
  "Agentic AI", "IaC", "Risk Management",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const spotlightRef = useRef<HTMLDivElement>(null);

  /* Typewriter */
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 75);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  /* Spotlight follow */
  useEffect(() => {
    const section = spotlightRef.current;
    if (!section) return;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      section.style.setProperty("--sx", `${x}px`);
      section.style.setProperty("--sy", `${y}px`);
    };
    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      ref={spotlightRef}
      className="relative min-h-screen flex flex-col overflow-hidden noise"
      style={{
        background: "radial-gradient(ellipse 90% 70% at 60% -5%, rgba(201,168,76,0.06) 0%, transparent 55%), #070B14",
        "--sx": "50%",
        "--sy": "50%",
      } as React.CSSProperties}
    >
      {/* Spotlight layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: "radial-gradient(600px circle at var(--sx) var(--sy), rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Vertical side line left */}
      <div className="absolute top-0 bottom-0 left-[6vw] w-px bg-gradient-to-b from-transparent via-gold/8 to-transparent hidden lg:block" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative flex-1 max-w-[1440px] mx-auto w-full px-6 lg:px-14 pt-28 pb-12 flex flex-col">

        {/* Top label row */}
        <div className="flex items-center justify-between mb-10 lg:mb-14">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="gold-line" />
            <span className="font-body text-2xs text-gold tracking-[0.35em] uppercase">Cloud &amp; Infrastructure</span>
          </div>
          <span className="font-body text-2xs text-cream-faint tracking-[0.25em] uppercase animate-fade-in">
            Portfolio 2026
          </span>
        </div>

        {/* Hero grid */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-0 flex-1 items-center">

          {/* LEFT — Typography */}
          <div className="flex flex-col justify-center">

            {/* Ghost large name behind */}
            <div className="relative mb-2 lg:mb-0">
              <span
                className="text-outline font-display font-bold leading-none select-none absolute -top-8 left-0 hidden lg:block"
                style={{ fontSize: "clamp(5rem, 13vw, 12rem)" }}
                aria-hidden
              >
                CLOUD
              </span>
            </div>

            {/* Name */}
            <p
              className="font-display font-bold text-cream leading-none tracking-tight animate-fade-up"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
            >
              Ilashe Benjamin Joseph
            </p>

            {/* Main heading */}
            <h1
              className="font-display font-bold leading-[0.95] tracking-tight mt-3 mb-8 animate-fade-up"
              style={{ fontSize: "clamp(3.2rem, 8vw, 7.5rem)", animationDelay: "80ms" }}
            >
              <span className="text-gradient-gold">Architecting</span>
              <br />
              <span className="text-cream">Cloud</span>
              <br />
              <span className="text-cream opacity-80">Infrastructure.</span>
            </h1>

            {/* Thin divider + typewriter */}
            <div className="flex items-center gap-5 mb-8 animate-fade-up" style={{ animationDelay: "160ms" }}>
              <div className="w-8 h-px bg-gold/40 flex-shrink-0" />
              <div className="h-7 flex items-center">
                <span className="font-body text-base lg:text-lg text-cream-dim">
                  {displayed}
                  <span className="animate-pulse text-gold ml-0.5">|</span>
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "240ms" }}>
              <Link
                href="#projects"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-bg font-body font-semibold text-xs tracking-[0.18em] uppercase hover:bg-gold-light transition-all duration-300"
              >
                View My Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/files/joseph-ilashe-cv.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold font-body font-semibold text-xs tracking-[0.18em] uppercase hover:border-gold hover:bg-gold/8 transition-all duration-300"
              >
                Download CV
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 2v7m0 0L4 6.5m2.5 2.5L9 6.5M2.5 11h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex gap-10 animate-fade-up" style={{ animationDelay: "320ms" }}>
              {[["3+", "AWS Certs"], ["5+", "Years Exp"], ["20+", "Projects"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-gold leading-none">{num}</div>
                  <div className="font-body text-2xs text-cream-faint uppercase tracking-[0.2em] mt-1.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Portrait */}
          <div className="hidden lg:flex justify-end items-center pl-12">
            <div className="relative">
              {/* Accent frame behind photo */}
              <div className="absolute -inset-3 border border-gold/10" style={{ transform: "rotate(1.5deg)" }} />
              <div className="absolute -inset-6 border border-gold/5" style={{ transform: "rotate(-1deg)" }} />

              {/* Photo */}
              <div
                className="relative w-[340px] h-[480px] xl:w-[400px] xl:h-[550px] overflow-hidden"
                style={{
                  maskImage: "radial-gradient(ellipse 90% 95% at 50% 44%, black 40%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 90% 95% at 50% 44%, black 40%, transparent 100%)",
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

              {/* AWS badge chip */}
              <div className="absolute bottom-6 -left-10 bg-surface-2 border border-gold/25 px-4 py-2.5 gold-glow flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-glow-pulse" />
                <span className="font-body text-2xs text-gold tracking-[0.25em] uppercase font-semibold">AWS Certified</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── MARQUEE STRIP ── */}
      <div className="relative border-t border-white/[0.04] overflow-hidden py-3.5">
        <div className="animate-marquee flex items-center gap-0">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6 px-6">
              <span className="font-body text-2xs text-cream-faint tracking-[0.2em] uppercase whitespace-nowrap">{item}</span>
              <span className="w-1 h-1 rounded-full bg-gold/30 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-16 right-8 flex flex-col items-center gap-2 text-cream-dim/30 hidden lg:flex">
        <div className="w-px h-14 bg-gradient-to-b from-gold/30 to-transparent" />
        <span className="font-body text-2xs tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</span>
      </div>
    </section>
  );
}
