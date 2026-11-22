import Link from "next/link";
import { FooterLegal } from "@/components/footer-legal";
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

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#20263e] px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 text-lg font-semibold text-white"
            >
              <span className="grid size-8 place-items-center rounded-full bg-white/10 text-white">
                <PawIcon className="size-4" />
              </span>
              Slowbowl
            </Link>
            <p className="mt-4 leading-relaxed text-[#CDBFD3]">
              Thoughtful mechanical dog enrichment. Built to turn mealtime into
              hours of calm, focused foraging without batteries, wires or Wi-Fi.
            </p>
            <span className="mt-5 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[#CDBFD3]">
              Crafted for Hack While Away 2026
            </span>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-white">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#CDBFD3] transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-white">
              Customer care
            </h3>
            <ul className="mt-4 space-y-2.5">
              {careLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#CDBFD3] transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <FooterLegal />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#CDBFD3]/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Slowbowl. All rights reserved.</p>
          <p>Battery-free by design.</p>
        </div>
      </div>
    </footer>
  );
}
