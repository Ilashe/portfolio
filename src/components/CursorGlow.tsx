"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = glowRef.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;
    let visible = false;

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        visible = true;
        el!.style.opacity = "1";
      }
    }

    function loop() {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el!.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`;
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[440px] h-[440px] rounded-full pointer-events-none z-[60] opacity-0 transition-opacity duration-700 mix-blend-multiply hidden lg:block"
      style={{
        background: "radial-gradient(circle, rgba(156,122,42,0.10) 0%, transparent 70%)",
      }}
      aria-hidden
    />
  );
}
