import Link from "next/link";
import { PawIcon } from "@/components/icons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-ink/10 bg-mist/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-full bg-deep-plum text-white">
            <PawIcon className="size-4" />
          </span>
          Slowbowl
        </Link>
        <nav className="flex items-center gap-5 text-sm text-ink">
          <Link href="/" className="transition hover:text-plum">
            Home
          </Link>
          <Link href="/product" className="transition hover:text-plum">
            Product
          </Link>
          <Link href="/checkout" className="transition hover:text-plum">
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
}
