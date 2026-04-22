import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/seo";

const host = siteUrl.toString().replace(/\/$/, "");

/**
 * AI / LLM crawlers we explicitly welcome. Listing them as their own rules
 * signals intent (vs. the default `*` allow) and future-proofs in case we
 * ever tighten the baseline rule.
 *
 * - GPTBot, ChatGPT-User, OAI-SearchBot: OpenAI (training + ChatGPT browsing)
 * - ClaudeBot, Claude-Web, anthropic-ai: Anthropic (Claude, claude.ai)
 * - PerplexityBot: Perplexity.ai answer engine
 * - Google-Extended: opt-in flag for Gemini / Google AI training
 * - Applebot-Extended: opt-in flag for Apple Intelligence training
 * - cohere-ai, MistralAI-User, Amazonbot: misc LLM vendors
 * - DuckAssistBot: DuckDuckGo AI answers
 * - Bytespider: ByteDance / Doubao
 */
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "cohere-ai",
  "MistralAI-User",
  "Amazonbot",
  "DuckAssistBot",
  "Bytespider",
  "FacebookBot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      })),
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
