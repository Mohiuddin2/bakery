"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { StatCard } from "@/components/admin/AdminHeader";
import { cn } from "@/lib/utils";
import {
  adminProductCategories,
  getProductStockLevel,
  parsePriceNumber,
  type AdminProduct,
  type AdminProductStatus,
  type ProductStockLevel,
} from "@/lib/admin-data";

interface ProductManagerProps {
  initialProducts: AdminProduct[];
}

const fieldClass =
  "w-full rounded-xl border border-brown/15 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-yellow-dark focus:outline-none focus:ring-2 focus:ring-yellow/25";

const stockLabels: Record<ProductStockLevel, string> = {
  in_stock: "In stock",
  low: "Low stock",
  out_of_stock: "Out of stock",
};

const stockStyles: Record<ProductStockLevel, string> = {
  in_stock: "bg-green/15 text-green-dark",
  low: "bg-yellow/20 text-yellow-dark",
  out_of_stock: "bg-brown/15 text-brown",
};

export function ProductManager({ initialProducts }: ProductManagerProps) {
  const [products, setProducts] = useState(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);
  const [imageName, setImageName] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | AdminProductStatus>(
    "all",
  );
  const [form, setForm] = useState<{
    name: string;
    category: string;
    price: string;
    stock: string;
    tag: string;
    status: AdminProductStatus;
  }>({
    name: "",
    category: adminProductCategories[0],
    price: "",
    stock: "",
    tag: "",
    status: "draft" as AdminProductStatus,
  });

  const stats = useMemo(() => {
    const inStock = products.filter((p) => p.stock > 0).length;
    const lowStock = products.filter(
      (p) => getProductStockLevel(p) === "low",
    ).length;
    const soldThisMonth = products.reduce((sum, p) => sum + p.soldThisMonth, 0);
    const revenueThisMonth = products.reduce(
      (sum, p) => sum + p.soldThisMonth * parsePriceNumber(p.price),
      0,
    );

    return { inStock, lowStock, soldThisMonth, revenueThisMonth };
  }, [products]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => {
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      const matchesStatus =
        statusFilter === "all" || p.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [products, search, statusFilter]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stock = Number(form.stock) || 0;
    const newProduct: AdminProduct = {
      id: `prd-${Date.now()}`,
      sku: `NEW-${Date.now().toString().slice(-4)}`,
      name: form.name,
      category: form.category,
      price: form.price.startsWith("৳") ? form.price : `৳ ${form.price}`,
      tag: form.tag || undefined,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
      status: form.status,
      stock,
      minStock: Math.max(5, Math.floor(stock * 0.3)),
      soldTotal: 0,
      soldThisMonth: 0,
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    setProducts((prev) => [newProduct, ...prev]);
    setForm({
      name: "",
      category: adminProductCategories[0],
      price: "",
      stock: "",
      tag: "",
      status: "draft",
    });
    setImageName(null);
    setSaved(true);
    setShowForm(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {saved && (
        <div className="flex items-center gap-2 rounded-xl bg-green/15 px-4 py-3 text-sm font-semibold text-green-dark ring-1 ring-green/20">
          <Icon name="check" className="h-4 w-4" />
          Product saved to catalogue (UI preview only)
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon="cake"
          label="Total products"
          value={products.length}
          hint={`${products.filter((p) => p.status === "published").length} published`}
        />
        <StatCard
          icon="package"
          label="In stock"
          value={stats.inStock}
          hint={`${stats.lowStock} low stock alert${stats.lowStock !== 1 ? "s" : ""}`}
          tone={stats.lowStock > 0 ? "warning" : "success"}
        />
        <StatCard
          icon="store"
          label="Sold this month"
          value={stats.soldThisMonth.toLocaleString()}
          hint="Units across all products"
        />
        <StatCard
          icon="cart"
          label="Revenue this month"
          value={`৳ ${stats.revenueThisMonth.toLocaleString()}`}
          hint="Estimated from unit sales"
          tone="success"
        />
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative max-w-sm flex-1">
            <Icon
              name="store"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              placeholder="Search name, SKU, category…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-brown/15 bg-cream py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-muted/60 focus:border-yellow-dark focus:outline-none focus:ring-2 focus:ring-yellow/25"
            />
          </div>
          <div className="flex gap-2">
            {(["all", "published", "draft"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatusFilter(s)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-bold capitalize transition-all",
                  statusFilter === s
                    ? "bg-ink text-cream"
                    : "bg-cream text-muted ring-1 ring-brown/15 hover:text-ink",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <Button type="button" onClick={() => setShowForm((v) => !v)}>
          <Icon name="plus" className="h-4 w-4" />
          {showForm ? "Close form" : "Add product"}
        </Button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="admin-panel rounded-2xl bg-cream p-6 ring-1 ring-brown/10 sm:p-8"
        >
          <h2 className="font-serif text-xl font-bold text-ink">Add product</h2>
          <p className="mt-1 text-sm text-muted">
            Create a new catalogue item with opening stock.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="admin-label">Product name</label>
              <input
                required
                className={fieldClass}
                placeholder="e.g. Rose Pistachio Slice"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="admin-label">Category</label>
              <select
                className={fieldClass}
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
              >
                {adminProductCategories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="admin-label">Price (৳)</label>
              <input
                required
                className={fieldClass}
                placeholder="350"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </div>
            <div>
              <label className="admin-label">Opening stock (units)</label>
              <input
                required
                type="number"
                min={0}
                className={fieldClass}
                placeholder="24"
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
              />
            </div>
            <div>
              <label className="admin-label">Tag (optional)</label>
              <input
                className={fieldClass}
                placeholder="New, Bestseller, Seasonal"
                value={form.tag}
                onChange={(e) => setForm({ ...form, tag: e.target.value })}
              />
            </div>
            <div>
              <label className="admin-label">Status</label>
              <select
                className={fieldClass}
                value={form.status}
                onChange={(e) =>
                  setForm({
                    ...form,
                    status: e.target.value as AdminProductStatus,
                  })
                }
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="admin-label">Product image</label>
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-brown/20 bg-sand/40 px-4 py-8 transition-colors hover:border-yellow-dark hover:bg-yellow/5">
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) =>
                    setImageName(e.target.files?.[0]?.name ?? null)
                  }
                />
                <Icon name="upload" className="h-6 w-6 text-brown" />
                <p className="mt-2 text-sm font-semibold text-ink">
                  {imageName ?? "Drop image or browse"}
                </p>
                <p className="mt-1 text-xs text-muted">JPG, PNG · Max 5 MB</p>
              </label>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Button type="submit">Save product</Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      )}

      <div className="admin-panel overflow-hidden rounded-2xl bg-cream ring-1 ring-brown/10">
        <div className="overflow-x-auto">
          <table className="admin-table w-full min-w-[960px] text-left text-sm">
            <thead>
              <tr className="border-b border-brown/10 bg-sand/50 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                <th className="px-5 py-3.5">Product</th>
                <th className="px-5 py-3.5">Price</th>
                <th className="px-5 py-3.5">Stock</th>
                <th className="px-5 py-3.5">Sold</th>
                <th className="px-5 py-3.5">Revenue</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Updated</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => {
                const stockLevel = getProductStockLevel(product);
                const revenue = product.soldThisMonth * parsePriceNumber(product.price);

                return (
                  <tr
                    key={product.id}
                    className="border-b border-brown/8 transition-colors last:border-0 hover:bg-sand/30"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg ring-1 ring-brown/10">
                          <Image
                            fill
                            className="object-cover"
                            alt={product.name}
                            src={product.image}
                            sizes="44px"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-ink">{product.name}</p>
                          <p className="text-xs text-muted">
                            {product.sku} · {product.category}
                          </p>
                          {product.tag && (
                            <span className="mt-1 inline-block rounded-full bg-yellow/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brown">
                              {product.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 font-semibold text-ink">
                      {product.price}
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-ink">
                        {product.stock}{" "}
                        <span className="font-normal text-muted">units</span>
                      </p>
                      <span
                        className={cn(
                          "mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                          stockStyles[stockLevel],
                        )}
                      >
                        {stockLabels[stockLevel]}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-ink">
                        {product.soldThisMonth}{" "}
                        <span className="font-normal text-muted">this mo.</span>
                      </p>
                      <p className="text-xs text-muted">
                        {product.soldTotal.toLocaleString()} all time
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-ink">
                        ৳ {revenue.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted">this month</p>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide",
                          product.status === "published"
                            ? "bg-green/15 text-green-dark"
                            : "bg-brown/10 text-brown",
                        )}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-muted">{product.updatedAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <p className="px-5 py-10 text-center text-sm text-muted">
            No products match your search.
          </p>
        )}
      </div>
    </div>
  );
}
