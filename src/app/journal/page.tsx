import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { journalPosts, faqItems } from "@/data/journal";

export const metadata: Metadata = {
  title: "探戈誌",
  description:
    "兩兩探戈的內容誌：探戈歷史文化、音樂、舞會禮儀、術語與 Podcast，以及寫給新手的 FAQ。",
};

// 探戈誌（規格 §6.10）：整合 Podcast、術語、歷史文化、舞會、音樂與 FAQ
export default function JournalPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Journal</span>
          <h1 className="display-lg">探戈誌</h1>
          <p className="lead text-col">
            音樂、文化、舞會與新手指南——探戈的世界，從閱讀也能走進來。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="grid-3">
            {journalPosts.map((post) => (
              <article key={post.slug} className="card">
                <div className="card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".75rem" }}>
                    <span className="tag tag--outline">{post.category}</span>
                    <span className="caption">{post.readMinutes} 分鐘</span>
                  </div>
                  <h2 className="heading-sm" style={{ fontSize: "1.25rem" }}>{post.title}</h2>
                  <p style={{ color: "var(--warm-gray)", marginTop: ".6rem" }}>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <hr className="rule" style={{ margin: "5rem 0 3rem" }} />
            <span className="eyebrow">New to tango?</span>
            <h2 className="heading-md">新手 FAQ</h2>
            <div style={{ marginTop: "1.5rem", maxWidth: "48em" }}>
              {faqItems.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <div className="faq-answer">{item.a}</div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
