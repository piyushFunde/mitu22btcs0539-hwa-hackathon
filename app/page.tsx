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

      <section className="border-t border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">
            How it works
          </h2>
          <p className="mt-2 max-w-xl text-stone-600">
            Wind it up, load it, and let your dog work for dinner.
          </p>

          <ol className="mt-8 grid gap-5 sm:grid-cols-3">
            <Step
              number="1"
              title="Load the tower"
              body="Fill the chamber with dry kibble and set the openings for your dog's food size."
            />
            <Step
              number="2"
              title="Wind the key"
              body="A few turns of the key set the mechanism running for about three hours."
            />
            <Step
              number="3"
              title="Let it forage"
              body="Kibble drops out in small doses while your dog noses, nudges, and waits."
            />
          </ol>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Safety &amp; limits
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600">
                <SafetyItem
                  title="Dry food only"
                  body="Wet food, treats, and very small pieces can jam the mechanism."
                />
                <SafetyItem
                  title="Medium and large dogs"
                  body="The tower is sized for bigger noses and mouths."
                />
                <SafetyItem
                  title="Supervise at first"
                  body="Watch the first few sessions until your dog gets the hang of it."
                />
                <SafetyItem
                  title="Not for destructive chewers"
                  body="This is a puzzle, not a chew toy."
                />
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight">FAQs</h3>
              <div className="mt-4 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
                <Faq
                  question="How long does one wind last?"
                  answer="About three hours, depending on the kibble size and how far the openings are set."
                />
                <Faq
                  question="Can I use treats or wet food?"
                  answer="No. Use dry kibble only — anything moist or very small can clog the mechanism."
                />
                <Faq
                  question="Can my dog use it alone?"
                  answer="After a few supervised sessions, yes. Just remember it is not a chew toy."
                />
                <Faq
                  question="How do I clean it?"
                  answer="Wipe the tower and base with a damp cloth. Do not submerge the wind-up mechanism."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Step({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <li className="rounded-2xl border border-stone-200 bg-white p-6">
      <span className="grid size-8 place-items-center rounded-full bg-stone-900 text-xs font-medium text-stone-50">
        {number}
      </span>
      <h3 className="mt-4 font-medium">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-stone-600">{body}</p>
    </li>
  );
}

function SafetyItem({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-stone-400" />
      <span>
        <span className="font-medium text-stone-800">{title}.</span> {body}
      </span>
    </li>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group px-5 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
        {question}
        <span className="text-lg text-stone-400 transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{answer}</p>
    </details>
  );
}
