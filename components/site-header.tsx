import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-full bg-stone-900 text-xs text-stone-50">
            DT
          </span>
          Dog Tower
        </Link>
        <nav className="flex items-center gap-5 text-sm text-stone-600">
          <Link href="/" className="transition hover:text-stone-900">
            Shop
          </Link>
          <Link href="/product" className="transition hover:text-stone-900">
            Product
          </Link>
          <Link href="/checkout" className="transition hover:text-stone-900">
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
}
