import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { formatPrice, products } from "@/lib/products";

const stats = [
  { value: "~3 hrs", label: "per wind" },
  { value: "12", label: "treat chambers" },
  { value: "0", label: "batteries needed" },
];

const marqueeItems = [
  "Slow feeding",
  "12 treat chambers",
  "~3 hours per wind",
  "No batteries",
  "Medium & large dogs",
];

export default function HomePage() {
  const product = products[0];

  return (
    <div className="flex flex-col gap-4 py-4">
      <section className="relative mx-4 overflow-hidden rounded-[36px] border border-ink/10 bg-[linear-gradient(to_bottom,#E4D0EA_0%,#EBDDEF_45%,#F8F1F9_100%)]">
        <div className="pointer-events-none absolute left-1/2 top-[-1px] w-[560px] max-w-full -translate-x-1/2">
          <svg
            viewBox="0 0 560 60"
            aria-hidden="true"
            className="block h-auto w-full"
          >
            <path
              d="M0 0H560L520 48Q520 60 508 60H52Q40 60 40 48Z"
              fill="#EFE6F1"
            />
          </svg>
          <span className="absolute inset-x-0 top-[18px] text-center text-xs font-medium uppercase tracking-[0.25em] text-ink">
            Slowbowl
          </span>
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-14 pt-24 sm:pt-28">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Keep your dog busy for hours. No batteries.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum">
            The Clockwork Forage Tower is a wind-up puzzle that releases your
            dog&apos;s food in small doses over about three hours. Just a nose,
            a puzzle, and a little patience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/checkout"
              className="rounded-full bg-deep-plum px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-ink"
            >
              Shop now — {formatPrice(product.price)}
            </Link>
            <Link
              href="/product"
              className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-medium uppercase tracking-wide text-ink transition hover:bg-soft-plum"
            >
              Explore specs
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-center"
              >
                <p className="text-2xl font-semibold text-amber-700">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-amber-800">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-4 overflow-hidden rounded-[36px] border border-ink/10 bg-soft-plum py-4">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center"
              aria-hidden={group === 1}
            >
              {marqueeItems.map((item) => (
                <span
                  key={item}
                  className="flex items-center whitespace-nowrap text-xs font-medium uppercase tracking-[0.25em] text-plum"
                >
                  <span className="px-6">{item}</span>
                  <span aria-hidden="true">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-4 overflow-hidden rounded-[36px] border border-ink/10 bg-soft-plum">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              The shop
            </h2>
            <p className="text-sm text-plum">One product, made properly.</p>
          </div>
          <div className="mt-8 grid max-w-sm gap-5">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
