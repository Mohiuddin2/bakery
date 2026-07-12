import Link from "next/link";
import { AdminHeader, StatCard } from "@/components/admin/AdminHeader";
import { Icon } from "@/components/ui/Icon";
import {
  dummyAdminProducts,
  dummyInventory,
  dummyResumes,
  formatAdminDateTime,
  getStockStatus,
} from "@/lib/admin-data";

export default function AdminDashboardPage() {
  const newResumes = dummyResumes.filter((r) => r.status === "new").length;
  const lowStock = dummyInventory.filter(
    (i) => getStockStatus(i) !== "healthy",
  ).length;
  const published = dummyAdminProducts.filter(
    (p) => p.status === "published",
  ).length;

  return (
    <>
      <AdminHeader
        title="Dashboard"
        subtitle="South Khulshi HQ — today's overview"
      />

      <div className="space-y-8 px-5 py-8 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon="cake"
            label="Published products"
            value={published}
            hint={`${dummyAdminProducts.length} total in catalogue`}
          />
          <StatCard
            icon="users"
            label="New applications"
            value={newResumes}
            hint="Awaiting HR review"
            tone="warning"
          />
          <StatCard
            icon="package"
            label="Low stock alerts"
            value={lowStock}
            hint="Items below minimum threshold"
            tone={lowStock > 0 ? "warning" : "success"}
          />
          <StatCard
            icon="store"
            label="Active outlets"
            value="30+"
            hint="Across Chattogram"
            tone="success"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="admin-panel rounded-2xl bg-cream p-6 ring-1 ring-brown/10">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-lg font-bold text-ink">
                Recent applications
              </h2>
              <Link
                href="/admin/resumes"
                className="text-xs font-bold text-brown hover:text-yellow-dark"
              >
                View all →
              </Link>
            </div>
            <ul className="mt-4 space-y-3">
              {dummyResumes.slice(0, 3).map((resume) => (
                <li
                  key={resume.id}
                  className="flex items-center justify-between rounded-xl bg-sand/40 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {resume.fullName}
                    </p>
                    <p className="text-xs text-muted">{resume.position}</p>
                  </div>
                  <p className="text-xs text-muted">
                    {formatAdminDateTime(resume.submittedAt)}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="admin-panel rounded-2xl bg-cream p-6 ring-1 ring-brown/10">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-lg font-bold text-ink">
                Stock alerts
              </h2>
              <Link
                href="/admin/inventory"
                className="text-xs font-bold text-brown hover:text-yellow-dark"
              >
                Manage inventory →
              </Link>
            </div>
            <ul className="mt-4 space-y-3">
              {dummyInventory
                .filter((i) => getStockStatus(i) !== "healthy")
                .slice(0, 4)
                .map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between rounded-xl bg-sand/40 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted">{item.sku}</p>
                    </div>
                    <p className="text-sm font-bold text-yellow-dark">
                      {item.stock} {item.unit}
                    </p>
                  </li>
                ))}
            </ul>
          </section>
        </div>

        <section className="admin-panel rounded-2xl bg-brown-dark p-6 text-cream sm:p-8">
          <p className="font-script text-2xl text-yellow-light">Quick actions</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/admin/products", label: "Add product", icon: "cake" as const },
              { href: "/admin/resumes", label: "Review CVs", icon: "users" as const },
              { href: "/admin/inventory", label: "Update stock", icon: "package" as const },
            ].map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="flex items-center gap-3 rounded-xl bg-cream/10 px-4 py-4 transition-all hover:bg-yellow hover:text-ink"
              >
                <Icon name={action.icon} className="h-5 w-5" />
                <span className="text-sm font-bold">{action.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
