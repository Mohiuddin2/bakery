"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import type { NutritionFact, ProductFAQ } from "@/lib/products";

type TabKey = "description" | "ingredients" | "nutrition" | "faqs";

interface ProductTabsProps {
  description: string;
  longDescription: string;
  ingredients: string;
  nutrition: NutritionFact[];
  faqs: ProductFAQ[];
}

const tabs: { key: TabKey; label: string }[] = [
  { key: "description", label: "Description" },
  { key: "ingredients", label: "Ingredients" },
  { key: "nutrition", label: "Nutritional Info" },
  { key: "faqs", label: "FAQ" },
];

export function ProductTabs({
  description,
  longDescription,
  ingredients,
  nutrition,
  faqs,
}: ProductTabsProps) {
  const [active, setActive] = useState<TabKey>("description");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="rounded-3xl bg-cream shadow-card ring-1 ring-sand/60">
      <div className="flex flex-wrap gap-1 border-b border-sand/80 p-2 sm:gap-2 sm:p-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={cn(
              "rounded-full px-4 py-2.5 text-sm font-semibold transition-all",
              active === tab.key
                ? "bg-yellow text-ink shadow-sm"
                : "text-muted hover:bg-sand/60 hover:text-ink",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6 sm:p-8">
        {active === "description" && (
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p className="text-lg font-medium text-ink">{description}</p>
            {longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}

        {active === "ingredients" && (
          <p className="whitespace-pre-line text-base leading-relaxed text-muted">
            {ingredients}
          </p>
        )}

        {active === "nutrition" && (
          <div className="overflow-x-auto">
            <p className="mb-4 text-sm text-muted">
              Serving size: 1 portion · Percentage daily intakes are based on an
              average adult diet of 8,700 kJ.
            </p>
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th className="pb-3 pr-4 font-semibold"> </th>
                  <th className="pb-3 pr-4 font-semibold">Per serving</th>
                  <th className="pb-3 pr-4 font-semibold">% Daily</th>
                  <th className="pb-3 font-semibold">Per 100g</th>
                </tr>
              </thead>
              <tbody>
                {nutrition.map((row) => (
                  <tr key={row.label} className="border-b border-sand/60 text-muted">
                    <td className="py-3 pr-4 font-medium text-ink">{row.label}</td>
                    <td className="py-3 pr-4">{row.perServing}</td>
                    <td className="py-3 pr-4">{row.dailyIntake ?? "—"}</td>
                    <td className="py-3">{row.per100g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {active === "faqs" && (
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl ring-1 ring-sand/80"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 bg-sand/40 px-5 py-4 text-left font-semibold text-ink transition hover:bg-sand/70"
                  >
                    {faq.question}
                    <Icon
                      name={isOpen ? "minus" : "plus"}
                      className="h-5 w-5 shrink-0 text-brown"
                    />
                  </button>
                  {isOpen && (
                    <p className="border-t border-sand/60 px-5 py-4 text-base leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
