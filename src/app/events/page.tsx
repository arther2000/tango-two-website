import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { upcomingEvents, archivedEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "活動與舞會",
  description:
    "兩兩探戈的米隆加舞會、音樂文化講座與國際大師工作坊。查看近期活動與報名狀態。",
};

// 活動列表頁（規格 §9.4）：清楚標示狀態；已結束活動移入典藏
export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Events & Milongas</span>
          <h1 className="display-lg">活動與舞會</h1>
          <p className="lead text-col">
            探戈，在課堂之外繼續發生——米隆加、講座與國際大師的相遇。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="heading-md">近期活動</h2>
          </Reveal>
          <Reveal className="grid-2" delay={100}>
            {upcomingEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className="card"
                style={{ display: "block", marginTop: "2rem" }}
              >
                <div className="card-body">
                  <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: ".75rem" }}>
                    <span className="tag">{event.type}</span>
                    <span
                      className={`tag ${event.status === "報名中" ? "tag--status-open" : "tag--status-closed"}`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <p className="caption" style={{ color: "var(--tango-crimson)" }}>
                    {event.dateLabel}
                  </p>
                  <h3 className="heading-sm" style={{ margin: ".35rem 0 .6rem" }}>
                    {event.title}
                  </h3>
                  <p style={{ color: "var(--warm-gray)" }}>{event.summary}</p>
                  <span className="arrow-link" style={{ marginTop: "1rem" }}>
                    活動詳情與報名 <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>

          <Reveal delay={140}>
            <hr className="rule" style={{ margin: "5rem 0 3rem" }} />
            <h2 className="heading-md">活動典藏</h2>
            <p className="lead" style={{ marginTop: ".5rem" }}>
              曾經在兩兩發生的活動記錄。
            </p>
            <ul style={{ listStyle: "none", marginTop: "1.5rem", maxWidth: "44em" }}>
              {archivedEvents.map((event) => (
                <li
                  key={event.slug}
                  style={{ padding: "1rem 0", borderBottom: "1px solid var(--hairline)" }}
                >
                  <Link href={`/events/${event.slug}`} style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                    <span>{event.title}</span>
                    <span className="caption">{event.dateLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
