import {
  dummyAdminProducts,
  dummyInventory,
  dummyResumes,
  getStockStatus,
} from "@/lib/admin-data";

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

function buildBakeryContext() {
  const lowStock = dummyInventory.filter((i) => getStockStatus(i) !== "healthy");
  const newResumes = dummyResumes.filter((r) => r.status === "new");
  const published = dummyAdminProducts.filter((p) => p.status === "published");

  return {
    publishedCount: published.length,
    productNames: published.slice(0, 8).map((p) => p.name),
    lowStock: lowStock.map((i) => `${i.name} (${i.stock} ${i.unit})`),
    newApplications: newResumes.map((r) => `${r.fullName} — ${r.position}`),
    outlets: "30+",
    hq: "South Khulshi HQ, Chattogram",
  };
}

function localBakeryReply(message: string): string {
  const q = message.toLowerCase();
  const ctx = buildBakeryContext();

  if (/hello|hi\b|hey|salam|assalam/.test(q)) {
    return `Assalamualaikum — I'm AIBee, your K Bakery desk assistant at ${ctx.hq}. Ask me about products, stock, resumes, or how to use this admin.`;
  }

  if (/stock|inventory|low|alert|flour|cream|butter/.test(q)) {
    if (ctx.lowStock.length === 0) {
      return "All tracked ingredients look healthy right now. Keep an eye on the Inventory page before the weekend rush.";
    }
    return `Stock to watch:\n• ${ctx.lowStock.join("\n• ")}\n\nOpen Inventory to restock before morning bake.`;
  }

  if (/resume|job|applicant|hire|career|hr/.test(q)) {
    if (ctx.newApplications.length === 0) {
      return "No new applications waiting. Checked resumes live under Resumes in the sidebar.";
    }
    return `New applications awaiting review:\n• ${ctx.newApplications.join("\n• ")}\n\nGo to Resumes to shortlist or reject.`;
  }

  if (/product|cake|catalogue|catalog|menu|price/.test(q)) {
    return `You have ${ctx.publishedCount} published products. Top of the list: ${ctx.productNames.slice(0, 5).join(", ")}. Manage them under Products.`;
  }

  if (/outlet|branch|store|chattogram|khulshi/.test(q)) {
    return `K Bakery runs ${ctx.outlets} outlets across Chattogram. HQ is ${ctx.hq}. Dashboard shows the live overview.`;
  }

  if (/help|what can|how do|guide/.test(q)) {
    return `I can help with:\n• Product catalogue questions\n• Inventory / low-stock alerts\n• Job applications (resumes)\n• Quick admin navigation tips\n\nTry: "Which items are low stock?"`;
  }

  return `Got it. Based on today's desk data: ${ctx.publishedCount} published products, ${ctx.lowStock.length} stock alert${ctx.lowStock.length === 1 ? "" : "s"}, and ${ctx.newApplications.length} new application${ctx.newApplications.length === 1 ? "" : "s"}. Ask about stock, products, or resumes for specifics.`;
}

async function openAiReply(
  messages: ChatMessage[],
  apiKey: string,
): Promise<string> {
  const ctx = buildBakeryContext();
  const system = `You are AIBee, the in-house AI desk assistant for K Bakery admin (South Khulshi HQ, Chattogram). Be concise, warm, and practical. Prefer short bullet points. Use Bangladeshi bakery context. Never invent prices or stock numbers beyond this snapshot:

Published products (${ctx.publishedCount}): ${ctx.productNames.join(", ") || "none"}
Low stock: ${ctx.lowStock.join("; ") || "none"}
New applications: ${ctx.newApplications.join("; ") || "none"}
Outlets: ${ctx.outlets}

Help with admin navigation: Dashboard, Products, Resumes, Inventory.`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      temperature: 0.5,
      max_tokens: 400,
      messages: [
        { role: "system", content: system },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || `OpenAI error ${res.status}`);
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error("Empty AI response");
  return text;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      message?: string;
      history?: ChatMessage[];
    };

    const message = body.message?.trim();
    if (!message) {
      return Response.json({ error: "Message is required." }, { status: 400 });
    }

    const history = (body.history ?? []).slice(-8);
    const messages: ChatMessage[] = [
      ...history.filter(
        (m) =>
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim().length > 0,
      ),
      { role: "user", content: message },
    ];

    const apiKey = process.env.OPENAI_API_KEY;
    let reply: string;
    let provider: "openai" | "local" = "local";

    if (apiKey) {
      try {
        reply = await openAiReply(messages, apiKey);
        provider = "openai";
      } catch {
        reply = localBakeryReply(message);
        provider = "local";
      }
    } else {
      // Small delay so the UI typing state feels natural
      await new Promise((r) => setTimeout(r, 450 + Math.random() * 350));
      reply = localBakeryReply(message);
    }

    return Response.json({ reply, provider });
  } catch {
    return Response.json(
      { error: "Could not generate a reply. Try again." },
      { status: 500 },
    );
  }
}
