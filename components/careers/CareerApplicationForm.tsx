"use client";

import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import {
  ACCEPTED_CV_TYPES,
  careerPositions,
  MAX_CV_SIZE_MB,
} from "@/lib/careers";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
}

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  position: "",
  experience: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-brown/15 bg-cream/80 px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-yellow-dark focus:bg-cream focus:outline-none focus:ring-2 focus:ring-yellow/30";

const labelClass = "mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-brown";

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function CareerApplicationForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<FormState>(initialForm);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    setError(null);
  };

  const validateFile = (file: File): string | null => {
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    const validExt = ["pdf", "doc", "docx"].includes(ext);
    const validType =
      !file.type ||
      ACCEPTED_CV_TYPES.includes(file.type as (typeof ACCEPTED_CV_TYPES)[number]);

    if (!validExt && !validType) {
      return "Please upload a PDF or Word document (.pdf, .doc, .docx).";
    }
    if (file.size > MAX_CV_SIZE_MB * 1024 * 1024) {
      return `File must be under ${MAX_CV_SIZE_MB} MB.`;
    }
    return null;
  };

  const handleFile = useCallback((file: File | null) => {
    if (!file) {
      setCvFile(null);
      return;
    }
    const fileError = validateFile(file);
    if (fileError) {
      setError(fileError);
      setCvFile(null);
      return;
    }
    setCvFile(file);
    setError(null);
  }, []);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      setError("Please attach your CV to continue.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="career-slip relative overflow-hidden rounded-[1.75rem] bg-cream p-8 text-center shadow-card ring-1 ring-brown/10 sm:p-10">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green/15 text-green-dark">
          <Icon name="check" className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-serif text-2xl font-bold text-ink">
          Application received
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Thank you, {form.fullName.split(" ")[0] || "there"}. Our team will
          review your CV and reach out within 5 working days.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-8"
          onClick={() => {
            setSubmitted(false);
            setForm(initialForm);
            setCvFile(null);
            setError(null);
          }}
        >
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="career-slip relative overflow-hidden rounded-[1.75rem] bg-cream shadow-card ring-1 ring-brown/10"
      noValidate
    >
      {/* Perforated tear-line — signature bakery receipt detail */}
      <div className="career-slip__perforation" aria-hidden />

      <div className="relative px-6 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-12">
        <div className="flex items-start justify-between gap-4 border-b border-dashed border-brown/20 pb-5">
          <div>
            <p className="font-script text-2xl text-green">Application slip</p>
            <h3 className="mt-0.5 font-serif text-xl font-bold text-ink">
              Join the K Bakery team
            </h3>
          </div>
          <span className="shrink-0 rounded-full bg-yellow/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brown">
            Hiring
          </span>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="fullName" className={labelClass}>
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="Your full name"
              className={fieldClass}
              value={form.fullName}
              onChange={update("fullName")}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@email.com"
              className={fieldClass}
              value={form.email}
              onChange={update("email")}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="01XXXXXXXXX"
              className={fieldClass}
              value={form.phone}
              onChange={update("phone")}
            />
          </div>

          <div>
            <label htmlFor="position" className={labelClass}>
              Position
            </label>
            <select
              id="position"
              name="position"
              required
              className={cn(fieldClass, "appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat")}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B4226' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              }}
              value={form.position}
              onChange={update("position")}
            >
              <option value="" disabled>
                Select a role
              </option>
              {careerPositions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="experience" className={labelClass}>
              Experience
            </label>
            <select
              id="experience"
              name="experience"
              required
              className={cn(fieldClass, "appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat")}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B4226' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              }}
              value={form.experience}
              onChange={update("experience")}
            >
              <option value="" disabled>
                Years of experience
              </option>
              <option value="0-1">0 – 1 year</option>
              <option value="1-3">1 – 3 years</option>
              <option value="3-5">3 – 5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>
              Tell us about yourself
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="A few lines about your skills, passion for baking, or why K Bakery feels right for you."
              className={cn(fieldClass, "resize-y min-h-[6rem]")}
              value={form.message}
              onChange={update("message")}
            />
          </div>
        </div>

        {/* CV upload — parchment envelope zone */}
        <div className="mt-6">
          <span className={labelClass}>Upload CV</span>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                inputRef.current?.click();
              }
            }}
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed px-5 py-8 text-center transition-all duration-300",
              dragOver
                ? "border-yellow-dark bg-yellow/10 shadow-warm"
                : cvFile
                  ? "border-green bg-green/5"
                  : "border-brown/25 bg-sand/40 hover:border-yellow-dark hover:bg-yellow/5",
            )}
          >
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />

            {cvFile ? (
              <div className="flex flex-col items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-green/15 text-green-dark">
                  <Icon name="file" className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-ink">{cvFile.name}</p>
                  <p className="mt-1 text-xs text-muted">
                    {formatFileSize(cvFile.size)} · Click to replace
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-yellow/20 text-brown transition-colors group-hover:bg-yellow/35">
                  <Icon name="upload" className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-ink">
                    Drop your CV here, or browse
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    PDF or Word · Max {MAX_CV_SIZE_MB} MB
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {error && (
          <p className="mt-4 text-sm font-medium text-brown" role="alert">
            {error}
          </p>
        )}

        <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
          Submit application
        </Button>
      </div>
    </form>
  );
}
