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
          Everyday goods for good dogs.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
          Beds, toys, and trail gear built for the dogs who make our days
          better. Small batch, honest materials, no fuss.
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
              The collection
            </h2>
            <p className="text-sm text-stone-500">
              Three things we would buy ourselves.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
