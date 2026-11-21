import Link from "next/link";
import type { Metadata } from "next";
import { formatPrice, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  const product = products[0];
  const total = product.price;

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <p className="text-sm text-stone-500">Step 2 of 3</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Checkout</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <form className="space-y-5">
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-sm font-medium">Contact</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field
                label="Full name"
                name="name"
                autoComplete="name"
                placeholder="Riley Chen"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="riley@example.com"
              />
            </div>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-sm font-medium">Shipping</h2>
            <div className="mt-4 grid gap-4">
              <Field
                label="Address"
                name="address"
                autoComplete="street-address"
                placeholder="12 Maple Street"
              />
              <div className="grid gap-4 sm:grid-cols-3">
                <Field
                  label="City"
                  name="city"
                  autoComplete="address-level2"
                  placeholder="Portland"
                />
                <Field
                  label="State"
                  name="state"
                  autoComplete="address-level1"
                  placeholder="OR"
                />
                <Field
                  label="ZIP"
                  name="zip"
                  autoComplete="postal-code"
                  placeholder="97205"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-sm font-medium">Payment</h2>
            <div className="mt-4 grid gap-4">
              <Field
                label="Card number"
                name="card"
                inputMode="numeric"
                autoComplete="cc-number"
                placeholder="4242 4242 4242 4242"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Expiry"
                  name="expiry"
                  autoComplete="cc-exp"
                  placeholder="MM / YY"
                />
                <Field
                  label="CVC"
                  name="cvc"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  placeholder="123"
                />
              </div>
            </div>
          </section>

          <Link
            href="/confirmation"
            className="inline-flex w-full items-center justify-center rounded-full bg-stone-900 px-6 py-3.5 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
          >
            Place order
          </Link>
        </form>

        <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-sm font-medium">Order summary</h2>
          <div className="mt-4 flex items-start justify-between gap-4 text-sm">
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="mt-1 text-stone-500">
                Qty 1 · {product.tagline}
              </p>
            </div>
            <p>{formatPrice(product.price)}</p>
          </div>
          <dl className="mt-6 space-y-2 border-t border-stone-200 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-stone-500">Subtotal</dt>
              <dd>{formatPrice(product.price)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone-500">Shipping</dt>
              <dd>Free</dd>
            </div>
            <div className="flex justify-between border-t border-stone-200 pt-3 font-medium">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-stone-500">
            This is a demo checkout. No card is charged and no data is stored.
          </p>
        </aside>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "numeric" | "email" | "tel" | "url" | "search";
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
}: FieldProps) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-stone-700">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="mt-1.5 w-full rounded-xl border border-stone-300 bg-stone-50 px-3.5 py-2.5 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:bg-white"
      />
    </label>
  );
}
