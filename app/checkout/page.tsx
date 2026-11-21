"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { formatPrice, products } from "@/lib/products";

export default function CheckoutPage() {
  const router = useRouter();
  const product = products[0];
  const [quantity, setQuantity] = useState("1");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const quantityNumber = Number(quantity);
  const displayQuantity =
    Number.isInteger(quantityNumber) && quantityNumber > 0 ? quantityNumber : 1;
  const total = product.price * displayQuantity;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setErrors({});
    setFormError("");

    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      address: String(data.get("address") ?? ""),
      area: String(data.get("area") ?? ""),
      landmark: String(data.get("landmark") ?? ""),
      pincode: String(data.get("pincode") ?? ""),
      state: String(data.get("state") ?? ""),
      country: String(data.get("country") ?? ""),
      quantity: Number(quantity),
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);

      if (response.status === 201 && result?.orderId) {
        router.push(
          `/confirmation?orderId=${encodeURIComponent(result.orderId)}`,
        );
        return;
      }

      if (response.status === 400 && result && typeof result === "object") {
        const fieldErrors = Object.fromEntries(
          Object.entries(result).filter(([key]) => key !== "error"),
        ) as Record<string, string>;

        if (Object.keys(fieldErrors).length > 0) {
          setErrors(fieldErrors);
        } else {
          setFormError("Please check your details and try again.");
        }
        return;
      }

      setFormError("Something went wrong. Please try again.");
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <p className="text-sm text-plum">Step 2 of 3</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Checkout</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <form className="space-y-5" noValidate onSubmit={handleSubmit}>
          <section className="rounded-2xl border border-ink/10 bg-white p-6">
            <h2 className="text-sm font-medium">Contact</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field
                label="Full name"
                name="name"
                autoComplete="name"
                placeholder="Riley Chen"
                error={errors.name}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="riley@example.com"
                error={errors.email}
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 9876543210"
                error={errors.phone}
                className="sm:col-span-2"
              />
            </div>
          </section>

          <section className="rounded-2xl border border-ink/10 bg-white p-6">
            <h2 className="text-sm font-medium">Shipping</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field
                label="Address"
                name="address"
                autoComplete="address-line1"
                placeholder="House no., building, street"
                error={errors.address}
                className="sm:col-span-2"
              />
              <Field
                label="Area"
                name="area"
                autoComplete="address-line2"
                placeholder="Locality or area"
                error={errors.area}
              />
              <Field
                label="Landmark (optional)"
                name="landmark"
                placeholder="Near..."
                error={errors.landmark}
              />
              <div className="grid gap-4 sm:col-span-2 sm:grid-cols-3">
                <Field
                  label="Pincode"
                  name="pincode"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="411001"
                  error={errors.pincode}
                />
                <Field
                  label="State"
                  name="state"
                  autoComplete="address-level1"
                  placeholder="Maharashtra"
                  error={errors.state}
                />
                <Field
                  label="Country"
                  name="country"
                  autoComplete="country-name"
                  placeholder="India"
                  error={errors.country}
                />
              </div>
            </div>
          </section>

          {formError && <p className="text-sm text-red-600">{formError}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-deep-plum px-6 py-3.5 text-sm font-medium text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Placing order" : "Place order"}
          </button>
        </form>

        <aside className="h-fit rounded-2xl border border-ink/10 bg-white p-6">
          <h2 className="text-sm font-medium">Order summary</h2>
          <div className="mt-4 flex items-start justify-between gap-4 text-sm">
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="mt-1 text-plum">
                Qty {displayQuantity} · {product.tagline}
              </p>
            </div>
            <p>{formatPrice(product.price)}</p>
          </div>

          <div className="mt-6 border-t border-ink/10 pt-4">
            <label htmlFor="quantity" className="text-sm font-medium">
              Quantity
            </label>
            <div
              className={
                "mt-1.5 inline-flex items-stretch overflow-hidden rounded-xl border bg-white " +
                (errors.quantity ? "border-red-400" : "border-ink/15")
              }
            >
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() =>
                  setQuantity(String(Math.max(1, displayQuantity - 1)))
                }
                disabled={displayQuantity <= 1}
                className="grid w-10 place-items-center text-lg text-ink transition hover:bg-soft-plum disabled:cursor-not-allowed disabled:text-plum/30"
              >
                -
              </button>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min={1}
                max={10}
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                className={
                  "w-14 border-x bg-white py-2.5 text-center text-sm text-ink outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none " +
                  (errors.quantity ? "border-red-300" : "border-ink/15")
                }
              />
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() =>
                  setQuantity(String(Math.min(10, displayQuantity + 1)))
                }
                disabled={displayQuantity >= 10}
                className="grid w-10 place-items-center text-lg text-ink transition hover:bg-soft-plum disabled:cursor-not-allowed disabled:text-plum/30"
              >
                +
              </button>
            </div>
            {errors.quantity && (
              <p className="mt-1.5 text-xs text-red-600">{errors.quantity}</p>
            )}
          </div>

          <dl className="mt-6 space-y-2 border-t border-ink/10 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-plum">Subtotal</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-plum">Shipping</dt>
              <dd>Free</dd>
            </div>
            <div className="flex justify-between border-t border-ink/10 pt-3 font-medium">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-plum">
            This is a demo checkout. No payment is taken and no data is stored.
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
  error?: string;
  className?: string;
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  error,
  className,
}: FieldProps) {
  return (
    <label className={"block text-sm " + (className ?? "")}>
      <span className="font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        className={
          "mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-ink outline-none transition placeholder:text-plum/50 " +
          (error
            ? "border-red-400 bg-red-50/40 focus:border-red-500"
            : "border-ink/15 bg-white focus:border-ink/40")
        }
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </label>
  );
}
