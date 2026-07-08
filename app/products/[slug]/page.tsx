import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductTabs } from "@/components/product/ProductTabs";
import { ProductBreadcrumb } from "@/components/product/ProductBreadcrumb";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import {
  getAllProductSlugs,
  getProductBySlug,
  getRelatedProducts,
  type ProductSection,
} from "@/lib/products";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data";

const sectionAnchors: Record<ProductSection, string> = {
  popular: "/#popular",
  cakes: "/#cakes",
  sweets: "/#sweets",
  "new-arrivals": "/#offers",
};

const tagTone: Record<string, string> = {
  Bestseller: "bg-yellow text-ink",
  Signature: "bg-yellow text-ink",
  Hot: "bg-brown text-cream",
  New: "bg-green text-cream",
  Premium: "bg-ink text-cream",
  Custom: "bg-green text-cream",
  Seasonal: "bg-green text-cream",
  Traditional: "bg-brown text-cream",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — ${site.name}`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(slug);

  return (
    <>
      <Navbar />
      <main className="bg-cream pt-28 md:pt-32">
        <Container className="pb-16">
          <ProductBreadcrumb
            sectionLabel={product.sectionLabel}
            sectionHref={sectionAnchors[product.section]}
            productName={product.name}
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ProductGallery images={product.images} name={product.name} />

            <div>
              <div className="flex flex-wrap items-center gap-3">
                {product.tag && (
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide",
                      tagTone[product.tag] ?? "bg-yellow text-ink",
                    )}
                  >
                    {product.tag}
                  </span>
                )}
                <span className="rounded-full bg-green/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-green-dark">
                  Featured
                </span>
              </div>

              <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
                {product.name}
              </h1>

              {product.rating && (
                <div className="mt-4 flex items-center gap-1 text-yellow">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className={cn("h-5 w-5", i >= product.rating! && "text-sand")}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-muted">
                    Customer favourite
                  </span>
                </div>
              )}

              <p className="mt-6 text-3xl font-bold text-brown">{product.price}</p>

              <p className="mt-6 text-base leading-relaxed text-muted">
                {product.description}
              </p>

              {product.tip && (
                <div className="mt-6 rounded-2xl bg-yellow/15 px-5 py-4 ring-1 ring-yellow/30">
                  <p className="text-sm font-bold text-brown">Tip</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {product.tip}
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                  <Icon name="phone" className="h-5 w-5" />
                  Order by Phone
                </Button>
                <Button variant="secondary" size="lg" href="/#categories">
                  <Icon name="store" className="h-5 w-5" />
                  Find Your Local Bakery
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted">
                Purchase in-bakery, or call for delivery. Contact your bakery for
                product availability and local prices.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <ProductTabs
              description={product.description}
              longDescription={product.longDescription}
              ingredients={product.ingredients}
              nutrition={product.nutrition}
              faqs={product.faqs}
            />
          </div>
        </Container>

        <RelatedProducts products={related} />
      </main>
      <Footer />
    </>
  );
}
