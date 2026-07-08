import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-5 text-center">
      <h1 className="font-serif text-4xl font-semibold text-ink">Product Not Found</h1>
      <p className="mt-4 max-w-md text-muted">
        We couldn&apos;t find that bakery item. Browse our full range on the
        homepage.
      </p>
      <Link
        href="/#popular"
        className="mt-8 inline-flex rounded-full bg-yellow px-8 py-4 text-sm font-semibold text-ink transition hover:bg-yellow-dark"
      >
        View All Products
      </Link>
    </main>
  );
}
