"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let frame = 0;
    let running = false;

    const maxY = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const tick = () => {
      currentY += (targetY - currentY) * 0.1;

      if (Math.abs(targetY - currentY) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        running = false;
        frame = 0;
        return;
      }

      window.scrollTo(0, currentY);
      frame = requestAnimationFrame(tick);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;

      event.preventDefault();

      if (!running) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }

      const unit =
        event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? window.innerHeight
            : 1;

      targetY = Math.min(Math.max(targetY + event.deltaY * unit, 0), maxY());

      if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      if (running) {
        if (Math.abs(window.scrollY - currentY) > 2) {
          running = false;
          if (frame) cancelAnimationFrame(frame);
          frame = 0;
          currentY = window.scrollY;
          targetY = window.scrollY;
        }
        return;
      }

      currentY = window.scrollY;
      targetY = window.scrollY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
