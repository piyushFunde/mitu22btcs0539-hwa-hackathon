import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

const stats = [
  { value: "~3 hrs", label: "per wind" },
  { value: "12", label: "treat chambers" },
  { value: "0", label: "batteries needed" },
];

const actions = [
  {
    emoji: "👃",
    title: "Nudge",
    text: "A gentle push starts the slow release.",
  },
  { emoji: "🔄", title: "Flip", text: "Tip it over to reset the puzzle." },
  {
    emoji: "🐾",
    title: "Slide",
    text: "Paws slide kibble toward the openings.",
  },
  { emoji: "⬆️", title: "Lift", text: "Lift the lid to reload the chambers." },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-4 overflow-hidden rounded-[36px] bg-gradient-to-b from-stone-50 to-[#F9F4FB]">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-16 sm:pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
            Slowbowl
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Keep your dog busy for hours. No batteries.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
            The Clockwork Forage Tower is a wind-up puzzle that releases your
            dog&apos;s food in small doses over about three hours. Just a nose,
            a puzzle, and a little patience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/product"
              className="rounded-full bg-amber-700 px-6 py-3 text-sm font-medium text-amber-50 transition hover:bg-amber-800"
            >
              Shop the tower
            </Link>
            <Link
              href="/checkout"
              className="rounded-full border border-amber-700 px-6 py-3 text-sm font-medium text-amber-800 transition hover:bg-amber-50"
            >
              Go to checkout
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

          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {actions.map((action) => (
              <div
                key={action.title}
                className="rounded-2xl border border-stone-200 bg-white/70 p-4 text-center"
              >
                <span className="text-2xl" aria-hidden="true">
                  {action.emoji}
                </span>
                <p className="mt-2 text-sm font-medium">{action.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-stone-600">
                  {action.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white/60">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              The shop
            </h2>
            <p className="text-sm text-stone-500">
              One product, made properly.
            </p>
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
