"use client";

import { useEffect, useRef, useState } from "react";

const legalLinkClass =
  "cursor-pointer text-[#CDBFD3] transition underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CDBFD3]";

export function FooterLegal() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openModal = () => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;

    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-wider text-white">
        Safety &amp; Legal
      </h3>
      <ul className="mt-4 space-y-2 text-xs leading-relaxed text-[#CDBFD3]/80">
        <li>BPA-Free &amp; Food-Grade Silicone</li>
        <li>Supervised Play Advisory</li>
        <li>
          <button type="button" onClick={openModal} className={legalLinkClass}>
            Privacy Policy
          </button>
        </li>
        <li>
          <button type="button" onClick={openModal} className={legalLinkClass}>
            Terms of Service
          </button>
        </li>
      </ul>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4"
          onWheel={(event) => event.stopPropagation()}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-title"
            aria-describedby="legal-desc"
            className="relative w-full max-w-lg rounded-3xl border border-ink/10 bg-soft-plum p-6 shadow-[0_24px_60px_-24px_rgba(45,24,51,0.5)] sm:p-8"
          >
            <h2
              id="legal-title"
              className="text-2xl font-semibold tracking-tight text-ink"
            >
              Slowbowl
            </h2>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-plum">
              Privacy &amp; Terms Notice
            </p>
            <div
              id="legal-desc"
              className="mt-5 space-y-4 text-sm leading-relaxed text-plum"
            >
              <p>
                <span className="font-semibold text-ink">Privacy:</span> We
                respect your privacy. No personal information, phone numbers, or
                addresses entered during checkout are stored in a persistent
                database or shared with third parties. All submissions are
                processed in-memory for hackathon evaluation only.
              </p>
              <p>
                <span className="font-semibold text-ink">Terms:</span> The
                Clockwork Forage Tower is an experimental concept engineered for
                the Hack While Away 2026 hackathon. No real financial charges are
                made, and orders placed on this demo website are simulated.
              </p>
              <p>
                <span className="font-semibold text-ink">Pet Safety:</span>{" "}
                Always supervise your pet during their initial foraging sessions.
                Inspect silicone components periodically for signs of chew
                damage.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-deep-plum px-5 py-2 text-xs text-white transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
