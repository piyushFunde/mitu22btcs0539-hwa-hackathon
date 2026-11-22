import Link from "next/link";
import { DogAvatar } from "@/components/dog-avatar";
import { FeatureMarquee } from "@/components/feature-marquee";
import { ProductCard } from "@/components/product-card";
import { formatPrice, products } from "@/lib/products";

const rays = [-120, 200, 400, 600, 800, 1120];

const avatarVariants = ["tan", "brown", "cream"] as const;

function StencilWord({ text }: { text: string }) {
  return (
    <span aria-hidden="true" className="inline-flex gap-[0.25em]">
      {text.split("").map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="stencil-letter tracking-normal"
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export default function HomePage() {
  const product = products[0];

  return (
    <div className="flex flex-col gap-4 py-4">
      <section className="relative mx-4 overflow-hidden rounded-[36px] border border-ink/10 bg-[linear-gradient(to_bottom,#E4D0EA_0%,#EBDDEF_45%,#F8F1F9_100%)]">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {rays.map((x) => (
            <line
              key={x}
              x1="500"
              y1="600"
              x2={x}
              y2="0"
              stroke="#ffffff"
              strokeOpacity="0.6"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

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

        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-14 pt-24 sm:pt-28">
          <h1 className="max-w-3xl text-4xl font-semibold uppercase tracking-tight sm:text-6xl">
            Mealtime, slowed down
          </h1>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-3 text-sm font-medium uppercase tracking-[0.25em] text-plum sm:text-base">
            <span className="sr-only">Clockwork</span>
            <StencilWord text="CLOCKWORK" />
            <span>Forage tower</span>
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum">
            A wind-up puzzle that releases your dog&apos;s food in small doses
            over about three hours. Just a nose, a puzzle, and a little
            patience.
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

          <div className="mt-10 flex items-center gap-4">
            <div className="flex shrink-0 -space-x-3">
              {avatarVariants.map((variant) => (
                <span
                  key={variant}
                  className="size-11 overflow-hidden rounded-full ring-2 ring-[#EADDEE]"
                >
                  <DogAvatar variant={variant} />
                </span>
              ))}
            </div>
            <p className="max-w-[22rem] text-[13px] leading-snug text-plum">
              Tested on 120+ curious noses. 3 hours of quiet engagement without
              screens or batteries.
            </p>
          </div>
        </div>
      </section>

      <FeatureMarquee />

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
