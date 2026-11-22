import Link from "next/link";
import Image from "next/image";
import { DogAvatar } from "@/components/dog-avatar";
import { formatPrice, products } from "@/lib/products";

const marqueeItems = [
  "Slow feeding",
  "12 treat chambers",
  "~3 hours per wind",
  "No batteries",
  "Medium & large dogs",
];

const rays = [-120, 200, 400, 600, 800, 1120];

const avatarVariants = ["tan", "brown", "cream"] as const;

const productSpecs = [
  "~3 hours Mechanical Run",
  "12 Treat Chambers",
  "Dishwasher Safe Rings",
  "Medium & Large Dogs",
];

const dogBehaviours = [
  {
    title: "Scratched Doors",
    body: "Checking exits and pacing out of restlessness, searching for a task.",
  },
  {
    title: "Chewed Shoes & Trim",
    body: "Chewing triggers endorphins to soothe an under-stimulated brain.",
  },
  {
    title: "Dug-up Cushions",
    body: "Recreating natural foraging instincts on carpets and couches.",
  },
  {
    title: "Alert Barking",
    body: "Reacting to hallway footsteps because the mind had zero focused work.",
  },
];

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

      <section
        data-reveal
        className="venetian mx-4 overflow-hidden rounded-[36px] border border-ink/10 bg-soft-plum py-4"
      >
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

      <section
        aria-label="What does your dog do all day?"
        className="mx-4 rounded-[36px] border border-ink/10 bg-white px-6 py-14"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-widest text-plum">
            The 6-hour gap
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            What does your dog do while you&apos;re away?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-plum">
            Dogs are wired to search, sniff, and work for their food. When a
            bowl is emptied in 30 seconds, a dog has hours of mental energy left
            over — and a bored dog creates its own entertainment.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dogBehaviours.map((behaviour) => (
              <div
                key={behaviour.title}
                className="rounded-2xl border border-ink/10 bg-mist/50 p-5"
              >
                <h3 className="font-semibold text-ink">{behaviour.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum">
                  {behaviour.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-4 overflow-hidden rounded-[36px] border border-ink/10 bg-soft-plum">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Product</h2>
            <p className="text-sm text-plum">The Clockwork Forage Tower</p>
          </div>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div
              data-reveal
              className="venetian relative aspect-square overflow-hidden rounded-3xl bg-white"
            >
              <Image
                src="/tower-hero.png"
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-plum">
                Mechanical enrichment
              </p>
              <h3 className="mt-3 text-3xl font-bold text-ink">
                {product.name}
              </h3>
              <p className="mt-3 text-2xl font-semibold text-ink">
                {formatPrice(product.price)}
              </p>
              <p className="mt-5 leading-relaxed text-plum">
                A stackable 4-ring mechanical puzzle that dispenses meals over
                roughly 3 hours. Features nudge, flip, slide, and lift lids.
                100% mechanical escapement — no batteries, no screens.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {productSpecs.map((spec) => (
                  <li
                    key={spec}
                    className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-plum"
                  >
                    {spec}
                  </li>
                ))}
              </ul>
              <Link
                href="/product"
                className="mt-8 inline-flex rounded-full bg-deep-plum px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-ink"
              >
                Explore more
              </Link>
              <p className="mt-3 text-xs text-plum">
                Free shipping across India · 100% battery-free
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
