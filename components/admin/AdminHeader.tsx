import { Icon } from "@/components/ui/Icon";

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export function AdminHeader({ title, subtitle, action }: AdminHeaderProps) {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className="flex flex-col gap-4 border-b border-brown/10 bg-cream/80 px-5 py-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
          {today}
        </p>
        <h1 className="mt-1 font-serif text-2xl font-bold text-ink sm:text-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm text-muted">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        {action}
        <div className="flex items-center gap-3 rounded-2xl bg-sand/80 px-3 py-2 ring-1 ring-brown/10">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-green/15 text-green-dark">
            <Icon name="user" className="h-4 w-4" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-ink">Admin</p>
            <p className="text-[11px] text-muted">South Khulshi HQ</p>
          </div>
        </div>
      </div>
    </header>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  hint: string;
  tone?: "default" | "warning" | "success";
  icon: "cake" | "users" | "package" | "store" | "cart";
}

const toneStyles = {
  default: "bg-cream ring-brown/10",
  warning: "bg-yellow/10 ring-yellow/30",
  success: "bg-green/10 ring-green/25",
};

const iconTone = {
  default: "bg-yellow/20 text-brown",
  warning: "bg-yellow/25 text-yellow-dark",
  success: "bg-green/20 text-green-dark",
};

export function StatCard({
  label,
  value,
  hint,
  tone = "default",
  icon,
}: StatCardProps) {
  return (
    <article
      className={`admin-stat rounded-2xl p-5 ring-1 ${toneStyles[tone]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`grid h-10 w-10 place-items-center rounded-xl ${iconTone[tone]}`}
        >
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <p className="font-serif text-3xl font-bold text-ink">{value}</p>
      </div>
      <p className="mt-4 text-sm font-bold text-ink">{label}</p>
      <p className="mt-1 text-xs text-muted">{hint}</p>
    </article>
  );
}
