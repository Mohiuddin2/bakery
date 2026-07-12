"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import {
  formatAdminDateTime,
  type AdminResume,
  type ResumeStatus,
} from "@/lib/admin-data";

interface ResumeManagerProps {
  initialResumes: AdminResume[];
}

const statusStyles: Record<ResumeStatus, string> = {
  new: "bg-yellow/20 text-yellow-dark",
  reviewed: "bg-brown/10 text-brown",
  shortlisted: "bg-green/15 text-green-dark",
  rejected: "bg-ink/10 text-muted",
};

const statusOptions: ResumeStatus[] = [
  "new",
  "reviewed",
  "shortlisted",
  "rejected",
];

export function ResumeManager({ initialResumes }: ResumeManagerProps) {
  const [resumes, setResumes] = useState(initialResumes);
  const [filter, setFilter] = useState<ResumeStatus | "all">("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    filter === "all" ? resumes : resumes.filter((r) => r.status === filter);

  const updateStatus = (id: string, status: ResumeStatus) => {
    setResumes((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r)),
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {(["all", ...statusOptions] as const).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-bold capitalize transition-all",
              filter === s
                ? "bg-ink text-cream"
                : "bg-cream text-muted ring-1 ring-brown/15 hover:text-ink",
            )}
          >
            {s}
            {s !== "all" && (
              <span className="ml-1.5 opacity-70">
                ({resumes.filter((r) => r.status === s).length})
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((resume) => {
          const open = expanded === resume.id;
          return (
            <article
              key={resume.id}
              className="admin-panel overflow-hidden rounded-2xl bg-cream ring-1 ring-brown/10"
            >
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-yellow/20 font-serif text-sm font-bold text-brown">
                    {resume.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif text-lg font-bold text-ink">
                        {resume.fullName}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                          statusStyles[resume.status],
                        )}
                      >
                        {resume.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      Applied for{" "}
                      <span className="font-semibold text-ink">
                        {resume.position}
                      </span>
                      · {resume.experience.replace("-", "–")} years exp.
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {formatAdminDateTime(resume.submittedAt)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full border border-brown/15 bg-sand/50 px-3.5 py-2 text-xs font-bold text-ink transition-colors hover:bg-yellow/15"
                  >
                    <Icon name="file" className="h-3.5 w-3.5" />
                    {resume.cvFileName}
                  </button>
                  <button
                    type="button"
                    onClick={() => setExpanded(open ? null : resume.id)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-xs font-bold text-cream transition-colors hover:bg-brown"
                  >
                    {open ? "Hide" : "View"} details
                  </button>
                </div>
              </div>

              {open && (
                <div className="border-t border-brown/10 bg-sand/30 px-5 py-5 sm:px-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="admin-label">Email</p>
                      <p className="text-sm font-medium text-ink">
                        {resume.email}
                      </p>
                    </div>
                    <div>
                      <p className="admin-label">Phone</p>
                      <p className="text-sm font-medium text-ink">
                        {resume.phone}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="admin-label">Cover message</p>
                    <p className="text-sm leading-relaxed text-muted">
                      {resume.message}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                      Update status
                    </p>
                    {statusOptions.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => updateStatus(resume.id, status)}
                        className={cn(
                          "rounded-full px-3 py-1 text-[11px] font-bold capitalize transition-all",
                          resume.status === status
                            ? "bg-ink text-cream"
                            : "bg-cream text-muted ring-1 ring-brown/15 hover:text-ink",
                        )}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
