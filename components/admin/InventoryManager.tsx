"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import {
  getStockStatus,
  type InventoryItem,
  type StockStatus,
} from "@/lib/admin-data";

interface InventoryManagerProps {
  initialItems: InventoryItem[];
}

const stockStyles: Record<StockStatus, string> = {
  healthy: "bg-green/15 text-green-dark",
  low: "bg-yellow/20 text-yellow-dark",
  critical: "bg-brown/15 text-brown",
};

const stockBar: Record<StockStatus, string> = {
  healthy: "bg-green",
  low: "bg-yellow",
  critical: "bg-brown",
};

export function InventoryManager({ initialItems }: InventoryManagerProps) {
  const [items, setItems] = useState(initialItems);
  const [category, setCategory] = useState<string>("all");

  const categories = useMemo(
    () => ["all", ...new Set(items.map((i) => i.category))],
    [items],
  );

  const filtered =
    category === "all"
      ? items
      : items.filter((i) => i.category === category);

  const lowCount = items.filter(
    (i) => getStockStatus(i) !== "healthy",
  ).length;

  const adjustStock = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, stock: Math.max(0, item.stock + delta) }
          : item,
      ),
    );
  };

  return (
    <div className="space-y-6">
      {lowCount > 0 && (
        <div className="flex items-start gap-3 rounded-2xl bg-yellow/10 px-5 py-4 ring-1 ring-yellow/25">
          <Icon name="package" className="mt-0.5 h-5 w-5 shrink-0 text-yellow-dark" />
          <div>
            <p className="text-sm font-bold text-ink">
              {lowCount} item{lowCount > 1 ? "s" : ""} need restocking
            </p>
            <p className="mt-0.5 text-xs text-muted">
              Review low and critical stock levels below.
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all",
              category === cat
                ? "bg-ink text-cream"
                : "bg-cream text-muted ring-1 ring-brown/15 hover:text-ink",
            )}
          >
            {cat === "all" ? "All categories" : cat}
          </button>
        ))}
      </div>

      <div className="admin-panel overflow-hidden rounded-2xl bg-cream ring-1 ring-brown/10">
        <div className="overflow-x-auto">
          <table className="admin-table w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-brown/10 bg-sand/50 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                <th className="px-5 py-3.5">Item</th>
                <th className="px-5 py-3.5">SKU</th>
                <th className="px-5 py-3.5">Stock</th>
                <th className="px-5 py-3.5">Level</th>
                <th className="px-5 py-3.5">Supplier</th>
                <th className="px-5 py-3.5">Adjust</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => {
                const status = getStockStatus(item);
                const pct = Math.min(
                  100,
                  Math.round((item.stock / (item.minStock * 2)) * 100),
                );

                return (
                  <tr
                    key={item.id}
                    className="border-b border-brown/8 transition-colors last:border-0 hover:bg-sand/30"
                  >
                    <td className="px-5 py-4">
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="text-xs text-muted">{item.category}</p>
                    </td>
                    <td className="px-5 py-4 font-mono text-xs text-muted">
                      {item.sku}
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-ink">
                        {item.stock}{" "}
                        <span className="font-normal text-muted">{item.unit}</span>
                      </p>
                      <p className="text-xs text-muted">
                        Min {item.minStock} {item.unit}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide",
                          stockStyles[status],
                        )}
                      >
                        {status}
                      </span>
                      <div className="mt-2 h-1.5 w-24 overflow-hidden rounded-full bg-sand">
                        <div
                          className={cn("h-full rounded-full", stockBar[status])}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </td>
                    <td className="px-5 py-4 text-muted">{item.supplier}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => adjustStock(item.id, -5)}
                          className="grid h-8 w-8 place-items-center rounded-lg bg-sand text-ink ring-1 ring-brown/10 transition-colors hover:bg-brown/10"
                          aria-label="Decrease stock"
                        >
                          <Icon name="minus" className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => adjustStock(item.id, 5)}
                          className="grid h-8 w-8 place-items-center rounded-lg bg-yellow/25 text-brown ring-1 ring-yellow/30 transition-colors hover:bg-yellow/40"
                          aria-label="Increase stock"
                        >
                          <Icon name="plus" className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
