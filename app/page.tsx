import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pb-14 pt-16 sm:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
          Dog Tower
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Mealtime, slowed down.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
          The Clockwork Forage Tower is a wind-up puzzle that releases your
          dog&apos;s food in small doses over about three hours. No batteries,
          no fuss — just a nose, a puzzle, and a little patience.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/product"
            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
          >
            Shop the tower
          </Link>
          <Link
            href="/checkout"
            className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
          >
            Go to checkout
          </Link>
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
