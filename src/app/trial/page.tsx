import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { faqItems } from "@/data/journal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "初次體驗",
  description:
    "第一次跳阿根廷探戈？兩兩探戈的初體驗課從走路、擁抱與音樂開始。無需舞蹈基礎，不必自備舞伴，台中西區教室小班引導。",
};

// 初次體驗頁（規格 §9.1）
// 順序：價值主張 → 適合對象 → 體驗流程 → 時段選擇 → 費用 → FAQ → 報名表單 → LINE 備援
export default function TrialPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">First experience</span>
          <h1 className="display-lg text-col">
            第一次跳探戈，
            <br />
            比你想像的更自在。
          </h1>
          <p className="lead text-col">
            不需要舞蹈基礎，不必自備舞伴。在一堂課的時間裡，
            從走路與擁抱開始，完成你的第一段探戈對話。
          </p>
        </div>
      </section>

      {/* 適合對象 */}
      <section className="section--tight section">
        <div className="container grid-2">
          <Reveal>
            <h2 className="heading-md">這堂課適合你，如果——</h2>
            <ul style={{ listStyle: "none", marginTop: "1.5rem" }}>
              {[
                "你完全沒有舞蹈經驗，想找一個溫柔的開始。",
                "你被探戈的音樂與文化吸引，想親身感受。",
                "你想練習身體覺察，找回與自己相處的方式。",
                "你想認識新朋友，體驗健康自在的社交。",
              ].map((item) => (
                <li
                  key={item}
                  style={{ padding: ".85rem 0", borderBottom: "1px solid var(--hairline)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Photo label="體驗課氛圍" ratio="ratio-4x5" src="/images/class-lecture.webp" />
          </Reveal>
        </div>
      </section>

      {/* 體驗流程 */}
      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="heading-md">體驗流程</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="steps" style={{ marginTop: "3rem" }}>
              <div className="step">
                <h3 className="heading-sm">預約時段</h3>
                <p style={{ color: "rgba(247,242,237,.7)", marginTop: ".5rem" }}>
                  透過下方表單或 LINE 選擇適合你的體驗時間。
                </p>
              </div>
              <div className="step">
                <h3 className="heading-sm">來到教室</h3>
                <p style={{ color: "rgba(247,242,237,.7)", marginTop: ".5rem" }}>
                  {site.address}。穿著方便活動的服裝與穩定的鞋子即可。
                </p>
              </div>
              <div className="step">
                <h3 className="heading-sm">開始跳舞</h3>
                <p style={{ color: "rgba(247,242,237,.7)", marginTop: ".5rem" }}>
                  90 分鐘的引導：走路、擁抱、音樂，以及你的第一段探戈。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 時段與費用 */}
      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <h2 className="heading-md">近期體驗時段</h2>
            {/* 注意（§14）：時段與費用為示意，上線前需向品牌方確認並改為 CMS 結構化資料 */}
            <ul className="meta-list" style={{ marginTop: "1.5rem" }}>
              <li>
                <span>團體體驗課</span>
                <span>每週六 14:00–15:30</span>
              </li>
              <li>
                <span>私人體驗課</span>
                <span>時間預約制</span>
              </li>
              <li>
                <span>費用</span>
                <span>請透過 LINE 諮詢最新體驗方案</span>
              </li>
              <li>
                <span>地點</span>
                <span>{site.address}</span>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="heading-md">新手最常問</h2>
            <div style={{ marginTop: "1rem" }}>
              {faqItems.slice(0, 4).map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <div className="faq-answer">{item.a}</div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 報名表單（§9.1：只收必要資訊） */}
      <section className="section section--white" id="register">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Reserve your spot</span>
            <h2 className="heading-md">預約你的第一堂探戈</h2>
            <p className="lead" style={{ marginTop: ".75rem" }}>
              填寫表單後，我們會在一個工作天內與你確認時段。
            </p>
          </Reveal>
          <Reveal delay={100}>
            {/* 上線時應改為 Server Action + 垃圾訊息防護 + 成功事件追蹤（規格 §12） */}
            <form
              className="form-grid text-col"
              style={{ marginTop: "2.5rem" }}
              action="#"
              method="post"
            >
              <div className="grid-2">
                <div className="form-field">
                  <label htmlFor="name">姓名 *</label>
                  <input id="name" name="name" type="text" required autoComplete="name" />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">電話或 LINE ID *</label>
                  <input id="phone" name="phone" type="text" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="grid-2">
                <div className="form-field">
                  <label htmlFor="slot">想參加的時段 *</label>
                  <select id="slot" name="slot" required defaultValue="">
                    <option value="" disabled>
                      請選擇
                    </option>
                    <option>週六團體體驗課 14:00–15:30</option>
                    <option>私人體驗課（另約時間）</option>
                    <option>還不確定，先諮詢</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="experience">是否有舞蹈經驗</label>
                  <select id="experience" name="experience" defaultValue="none">
                    <option value="none">完全沒有</option>
                    <option value="some">有其他舞蹈經驗</option>
                    <option value="tango">學過探戈</option>
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="note">備註</label>
                <textarea id="note" name="note" rows={3} />
              </div>
              <label className="form-check">
                <input type="checkbox" name="consent" required />
                <span>我同意兩兩探戈依隱私權政策使用以上資訊與我聯繫。</span>
              </label>
              <div>
                <button type="submit" className="btn btn-primary">
                  送出預約
                </button>
              </div>
            </form>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ marginTop: "2.5rem", color: "var(--warm-gray)" }}>
              不想填表單？也可以直接{" "}
              <a
                href={site.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link"
              >
                加入 LINE 諮詢 <span aria-hidden="true">→</span>
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
