"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type Role = "user" | "assistant";

interface Message {
  id: string;
  role: Role;
  content: string;
}

const SUGGESTIONS = [
  "Which items are low stock?",
  "Any new job applications?",
  "How many products are published?",
];

const WELCOME: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Assalamualaikum — I'm AIBee, your K Bakery desk assistant. Ask about stock, products, resumes, or how to use this admin.",
};

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function AdminChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open, busy]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 180);
      return () => clearTimeout(t);
    }
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    const userMsg: Message = { id: uid(), role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setBusy(true);

    try {
      const history = [...messages, userMsg]
        .filter((m) => m.id !== "welcome")
        .slice(-8)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/admin/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });

      const data = (await res.json()) as { reply?: string; error?: string };
      const reply =
        data.reply ??
        data.error ??
        "I couldn't reach the oven desk. Try again in a moment.";

      setMessages((prev) => [
        ...prev,
        { id: uid(), role: "assistant", content: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          content: "Connection dropped. Check your network and try again.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {/* Panel */}
      <div
        className={cn(
          "pointer-events-auto origin-bottom-right overflow-hidden rounded-3xl bg-cream shadow-[0_28px_60px_-24px_rgba(42,27,18,0.55)] ring-1 ring-brown/15 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open
            ? "h-[min(32rem,calc(100vh-7rem))] w-[min(22.5rem,calc(100vw-2.5rem))] scale-100 opacity-100"
            : "pointer-events-none h-0 w-0 scale-90 opacity-0",
        )}
        aria-hidden={!open}
      >
        {open && (
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="relative overflow-hidden bg-brown-dark px-4 py-3.5 text-cream">
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 12% 20%, rgba(246,180,44,0.45), transparent 42%), radial-gradient(circle at 88% 0%, rgba(127,180,57,0.25), transparent 40%)",
                }}
                aria-hidden
              />
              <div className="relative flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow text-ink shadow-warm">
                  <Icon name="wheat" className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-base font-bold leading-tight">
                    AIBee
                  </p>
                  <p className="text-[11px] text-cream/70">
                    AI desk · South Khulshi HQ
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  className="grid h-8 w-8 place-items-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20"
                >
                  <Icon name="close" className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={listRef}
              className="flex-1 space-y-3 overflow-y-auto bg-[linear-gradient(180deg,#FFF9EF_0%,#F6E8CE_100%)] px-3.5 py-4"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[88%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm",
                      m.role === "user"
                        ? "rounded-br-md bg-brown text-cream"
                        : "rounded-bl-md bg-cream text-ink ring-1 ring-brown/10",
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {busy && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-cream px-3.5 py-3 ring-1 ring-brown/10">
                    <span className="admin-chat-dot h-1.5 w-1.5 rounded-full bg-brown" />
                    <span className="admin-chat-dot h-1.5 w-1.5 rounded-full bg-brown [animation-delay:120ms]" />
                    <span className="admin-chat-dot h-1.5 w-1.5 rounded-full bg-brown [animation-delay:240ms]" />
                  </div>
                </div>
              )}

              {messages.length <= 1 && !busy && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => void send(s)}
                      className="rounded-full bg-cream/90 px-3 py-1.5 text-[11px] font-semibold text-brown ring-1 ring-brown/15 transition hover:bg-yellow/30 hover:text-ink"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={onSubmit}
              className="border-t border-brown/10 bg-cream p-3"
            >
              <div className="flex items-center gap-2 rounded-2xl bg-sand/70 p-1.5 ring-1 ring-brown/10 focus-within:ring-yellow/50">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask the desk…"
                  disabled={busy}
                  className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-sm text-ink outline-none placeholder:text-muted disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  aria-label="Send message"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-yellow text-ink transition hover:bg-yellow-light disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Icon name="send" className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* FAB */}
      <button
        type="button"
        aria-label={open ? "Close AIBee chat" : "Open AIBee chat"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "admin-chat-fab pointer-events-auto grid h-14 w-14 place-items-center rounded-full text-ink shadow-warm transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow",
          open ? "bg-brown text-cream" : "bg-yellow",
        )}
      >
        <Icon name={open ? "close" : "chat"} className="h-6 w-6" />
      </button>
    </div>
  );
}
