import Link from "next/link";
import { PawIcon } from "@/components/icons";

const productLinks = [
  { label: "Clockwork Forage Tower", href: "/product" },
  { label: "How The Escapement Works", href: "/product#how-it-works" },
  { label: "Replacement Parts & Lids", href: "/product" },
  { label: "Sizing & Breed Guide", href: "/product" },
];

const careLinks = [
  { label: "Free Shipping Across India", href: "/product" },
  { label: "Dishwasher Cleaning Guide", href: "/product" },
  { label: "FAQ & Returns", href: "/product#faqs" },
  { label: "Contact: support@slowbowl.dev", href: "mailto:support@slowbowl.dev" },
];

const safetyItems = [
  "BPA-Free & Food-Grade Silicone",
  "Supervised Play Advisory",
  "Privacy Policy",
  "Terms of Service",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white/70 px-6 py-14 backdrop-blur">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 text-lg font-semibold text-ink"
            >
              <span className="grid size-8 place-items-center rounded-full bg-deep-plum text-white">
                <PawIcon className="size-4" />
              </span>
              Slowbowl
            </Link>
            <p className="mt-4 leading-relaxed text-plum">
              Thoughtful mechanical dog enrichment. Built to turn mealtime into
              hours of calm, focused foraging without batteries, wires or Wi-Fi.
            </p>
            <span className="mt-5 inline-flex rounded-full border border-ink/10 bg-mist px-3 py-1 text-xs text-plum">
              Crafted for Hack While Away 2026
            </span>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-ink">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-plum transition hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-ink">
              Customer care
            </h3>
            <ul className="mt-4 space-y-2.5">
              {careLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-plum transition hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-ink">
              Safety &amp; Legal
            </h3>
            <ul className="mt-4 space-y-2 text-xs leading-relaxed text-plum/80">
              {safetyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-plum/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Slowbowl. All rights reserved.</p>
          <p>Battery-free by design.</p>
        </div>
      </div>
    </footer>
  );
}
