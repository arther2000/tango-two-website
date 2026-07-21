import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { instructors } from "@/data/instructors";

export const metadata: Metadata = {
  title: "師資團隊",
  description:
    "兩兩探戈的師資團隊：在地深耕的專業教師與國際客座名師，帶領你走進阿根廷探戈的世界。",
};

export default function InstructorsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Instructors</span>
          <h1 className="display-lg">師資團隊</h1>
          <p className="lead text-col">
            以專業引導，也以人的方式陪伴。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {instructors.map((t, i) => {
            // Person 結構化資料（規格 §11）
            const jsonLd = {
              "@context": "https://schema.org",
              "@type": "Person",
              name: t.nameEn,
              alternateName: t.nameZh,
              jobTitle: t.role,
              worksFor: { "@type": "Organization", name: "兩兩探戈 Tango.two" },
            };
            return (
              <Reveal key={t.slug}>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <article
                  className="grid-2"
                  style={{
                    alignItems: "center",
                    marginBottom: i === instructors.length - 1 ? 0 : "5rem",
                  }}
                >
                  <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                    <Photo label={`${t.nameZh} ${t.nameEn}`} ratio="ratio-4x5" src={t.portrait} />
                  </div>
                  <div>
                    <h2 className="heading-md">
                      {t.nameZh}{" "}
                      <span className="en-accent" style={{ fontSize: "1.4rem", color: "var(--warm-gray)" }}>
                        {t.nameEn}
                      </span>
                    </h2>
                    <p className="caption" style={{ margin: ".5rem 0 1.25rem" }}>{t.role}</p>
                    <p style={{ maxWidth: "36em" }}>{t.bioLong}</p>
                    <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                      {t.specialties.map((s) => (
                        <span key={s} className="tag tag--outline">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
