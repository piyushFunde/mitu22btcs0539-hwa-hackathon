import Link from "next/link";
import type { Metadata } from "next";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Order confirmed",
};

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string | string[] }>;
}) {
  const params = await searchParams;
  const orderId =
    typeof params.orderId === "string" ? params.orderId : undefined;

  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <div className="mx-auto grid size-14 place-items-center rounded-full bg-stone-900 text-stone-50">
        <CheckIcon className="size-6" />
      </div>
      <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
        Order confirmed
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        You are all set.
      </h1>
      {orderId && (
        <p className="mt-3 inline-block max-w-full rounded-full bg-stone-200/70 px-4 py-1.5 font-mono text-sm text-stone-700">
          <span className="break-all">Order #{orderId}</span>
        </p>
      )}
      <p className="mt-4 leading-relaxed text-stone-600">
        Thanks for shopping with Slowbowl. A confirmation is on its way to
        your inbox, and your order will ship within two business days.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
        >
          Back to the shop
        </Link>
        <Link
          href="/product"
          className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
        >
          Browse the product
        </Link>
      </div>
    </div>
  );
}
