import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { events, getEvent } from "@/data/events";
import { getInstructor } from "@/data/instructors";
import { site } from "@/data/site";

// 活動詳情頁（規格 §9.4）：已結束活動保留內容但移除購買 CTA
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  return { title: event.title, description: event.summary };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const ended = event.status === "已結束";
  const teachers = event.instructorSlugs
    .map((s) => getInstructor(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  // Event 結構化資料（規格 §11）
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary,
    startDate: event.startAt,
    eventStatus: ended
      ? "https://schema.org/EventCancelled"
      : "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.venue,
      address: site.address,
    },
    organizer: { "@type": "Organization", name: "兩兩探戈 Tango.two" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="page-hero">
        <div className="container">
          <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <span className="tag">{event.type}</span>
            <span className="tag tag--outline" style={{ color: "rgba(247,242,237,.7)", borderColor: "rgba(247,242,237,.3)" }}>
              {event.status}
            </span>
          </div>
          <h1 className="display-lg text-col">{event.title}</h1>
          <p className="lead">{event.dateLabel}・{event.venue}</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <Photo label={event.title} ratio="ratio-4x5" src={event.heroImage} />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="heading-md">關於這場活動</h2>
            <p style={{ marginTop: "1.25rem" }}>{event.description}</p>

            {teachers.length > 0 && (
              <>
                <h3 className="heading-sm" style={{ marginTop: "2.5rem" }}>師資</h3>
                <ul style={{ listStyle: "none", marginTop: ".75rem" }}>
                  {teachers.map((t) => (
                    <li key={t.slug} style={{ padding: ".6rem 0", borderBottom: "1px solid var(--hairline)" }}>
                      {t.nameZh} {t.nameEn}・{t.role}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {event.scheduleBlocks.length > 0 && (
              <>
                <h3 className="heading-sm" style={{ marginTop: "2.5rem" }}>活動時程</h3>
                <ul className="meta-list" style={{ marginTop: ".75rem" }}>
                  {event.scheduleBlocks.map((block) => (
                    <li key={block.time}>
                      <span>{block.time}</span>
                      <span>{block.title}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <ul className="meta-list" style={{ marginTop: "2.5rem" }}>
              {event.language && (
                <li>
                  <span>語言</span>
                  <span>{event.language}</span>
                </li>
              )}
              <li>
                <span>地點</span>
                <span>{event.venue}・{site.address}</span>
              </li>
              <li>
                <span>票價</span>
                <span>{event.price}</span>
              </li>
            </ul>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {ended ? (
                <Link href="/events" className="btn btn-primary">
                  查看近期活動
                </Link>
              ) : (
                <>
                  <a href={site.lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    透過 LINE 報名
                  </a>
                  <Link href="/events" className="btn btn-outline">
                    所有活動
                  </Link>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
