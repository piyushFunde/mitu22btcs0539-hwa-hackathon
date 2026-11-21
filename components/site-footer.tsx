export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Dog Tower</p>
        <p>Thoughtfully made for dogs and their people.</p>
      </div>
    </footer>
  );
}
