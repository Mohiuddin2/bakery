import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

interface ProductBreadcrumbProps {
  sectionLabel: string;
  sectionHref: string;
  productName: string;
}

export function ProductBreadcrumb({
  sectionLabel,
  sectionHref,
  productName,
}: ProductBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition hover:text-yellow-dark">
            Home
          </Link>
        </li>
        <li aria-hidden className="text-sand">
          /
        </li>
        <li>
          <Link href="/#popular" className="transition hover:text-yellow-dark">
            Products
          </Link>
        </li>
        <li aria-hidden className="text-sand">
          /
        </li>
        <li>
          <Link href={sectionHref} className="transition hover:text-yellow-dark">
            {sectionLabel}
          </Link>
        </li>
        <li aria-hidden className="text-sand">
          /
        </li>
        <li className="font-medium text-ink">{productName}</li>
      </ol>
    </nav>
  );
}
