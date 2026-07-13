"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { adminNav } from "@/lib/admin-data";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="admin-sidebar flex w-full flex-col border-b border-cream/10 bg-brown-dark lg:fixed lg:inset-y-0 lg:z-40 lg:w-64 lg:border-b-0 lg:border-r">
      <div className="px-5 py-5 lg:px-6">
        <Link href="/admin" aria-label="Admin home" className="inline-block">
          <Image
            src="/logo-admin.png"
            alt=""
            width={150}
            height={50}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow/80">
          Admin
        </p>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-col lg:overflow-visible lg:px-4 lg:pb-0">
        {adminNav.map((item) => {
          const active =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex shrink-0 items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 lg:px-4 lg:py-3",
                active
                  ? "bg-yellow text-ink shadow-warm"
                  : "text-cream/75 hover:bg-cream/10 hover:text-cream",
              )}
            >
              <Icon name={item.icon} className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto hidden border-t border-cream/10 p-4 lg:block">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-cream/60 transition-colors hover:bg-cream/10 hover:text-cream"
        >
          <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
          Back to storefront
        </Link>
      </div>
    </aside>
  );
}
