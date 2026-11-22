import Link from "next/link";
import { FooterLegal } from "@/components/footer-legal";
import { PawIcon } from "@/components/icons";

const footerLinks = [
  { label: "Product", href: "/product" },
  { label: "How It Works", href: "/product#how-it-works" },
  { label: "Safety & Limits", href: "/product#how-it-works" },
  { label: "Checkout", href: "/checkout" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white/60 px-6 backdrop-blur">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-ink/10 py-6 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-ink"
            >
              <span className="grid size-7 place-items-center rounded-full bg-deep-plum text-white">
                <PawIcon className="size-3.5" />
              </span>
              Slowbowl
            </Link>
            <span className="text-xs font-medium uppercase tracking-wider text-plum">
              100% Mechanical · Zero Batteries
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-plum transition hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <FooterLegal />
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 pb-8 text-xs text-plum/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Slowbowl · Designed for Hack While Away
            2026
          </p>
          <a
            href="mailto:support@slowbowl.com"
            className="transition hover:text-plum"
          >
            support@slowbowl.com
          </a>
          <p>Simulated checkout sandbox · No real transaction</p>
        </div>
      </div>
    </footer>
  );
}
