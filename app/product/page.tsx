import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { formatPrice, products } from "@/lib/products";
import { HowItWorks } from "@/components/how-it-works";

export const metadata: Metadata = {
  title: "Clockwork Forage Tower",
};

export default function ProductPage() {
  const product = products[0];

  return (
    <div className="py-4">
      <div className="mx-4 overflow-hidden rounded-[36px] border border-ink/10 bg-soft-plum">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <Link
            href="/"
            className="text-sm text-plum transition hover:text-ink"
          >
            ← Back to shop
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
              <Image
                src="/tower-product.png"
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-plum">
                {product.tagline}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                {product.name}
              </h1>
              <p className="mt-4 text-2xl">{formatPrice(product.price)}</p>
              <p className="mt-5 leading-relaxed text-plum">
                {product.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-plum">
                {product.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="text-plum/50">—</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link
                href="/checkout"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-deep-plum px-6 py-3.5 text-sm font-medium text-white transition hover:bg-ink sm:w-auto"
              >
                Buy now
              </Link>
              <p className="mt-3 text-xs text-plum">
                Free shipping across India.
              </p>
            </div>
          </div>

          <HowItWorks />
        </div>
      </div>
    </div>
  );
}
