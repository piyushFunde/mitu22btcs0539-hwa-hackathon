import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import { PawIcon } from "@/components/icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href="/product"
      className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-3 transition hover:border-stone-300 hover:shadow-sm"
    >
      <div className="grid aspect-[4/3] place-items-center rounded-xl bg-gradient-to-br from-stone-100 to-stone-200">
        <PawIcon className="size-10 text-stone-400 transition group-hover:text-stone-500" />
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-medium">{product.name}</h3>
          <span className="text-sm text-stone-500">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="mt-1 text-sm text-stone-500">{product.tagline}</p>
        <span className="mt-4 text-sm font-medium underline-offset-4 group-hover:underline">
          View product
        </span>
      </div>
    </Link>
  );
}
