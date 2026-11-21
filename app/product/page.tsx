import Link from "next/link";
import type { Metadata } from "next";
import { formatPrice, products } from "@/lib/products";
import { PawIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "The Tower Bed",
};

export default function ProductPage() {
  const product = products[0];

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <Link
        href="/"
        className="text-sm text-stone-500 transition hover:text-stone-900"
      >
        ← Back to shop
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="grid aspect-square place-items-center rounded-3xl bg-gradient-to-br from-stone-100 to-stone-200">
          <PawIcon className="size-24 text-stone-300" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
            {product.tagline}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl">{formatPrice(product.price)}</p>
          <p className="mt-5 leading-relaxed text-stone-600">
            {product.description}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-stone-600">
            {product.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="text-stone-400">—</span>
                {detail}
              </li>
            ))}
          </ul>
          <Link
            href="/checkout"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-stone-900 px-6 py-3.5 text-sm font-medium text-stone-50 transition hover:bg-stone-700 sm:w-auto"
          >
            Buy now
          </Link>
          <p className="mt-3 text-xs text-stone-500">
            Free shipping on orders over $75.
          </p>
        </div>
      </div>
    </div>
  );
}
