import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { courses, getCourse } from "@/data/courses";
import { getInstructor } from "@/data/instructors";
import { site } from "@/data/site";

// 課程詳情頁（規格 §9.3）
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return { title: course.title, description: course.summary };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const teachers = course.instructorSlugs
    .map((s) => getInstructor(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  // Course 結構化資料（規格 §11）
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    provider: {
      "@type": "Organization",
      name: "兩兩探戈 Tango.two",
    },
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
            <span className="tag">{course.level}</span>
            <span className="tag tag--outline" style={{ color: "rgba(247,242,237,.7)", borderColor: "rgba(247,242,237,.3)" }}>
              {course.format}
            </span>
          </div>
          <h1 className="display-lg">{course.title}</h1>
          <p className="lead text-col">{course.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <h2 className="heading-md">關於這門課</h2>
            <p style={{ marginTop: "1.25rem", maxWidth: "40em" }}>{course.description}</p>

            <h3 className="heading-sm" style={{ marginTop: "3rem" }}>你會學到</h3>
            <ul style={{ listStyle: "none", marginTop: "1rem" }}>
              {course.learn.map((item) => (
                <li key={item} style={{ padding: ".7rem 0", borderBottom: "1px solid var(--hairline)" }}>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="heading-sm" style={{ marginTop: "3rem" }}>適合誰</h3>
            <ul style={{ listStyle: "none", marginTop: "1rem" }}>
              {course.suitable.map((item) => (
                <li key={item} style={{ padding: ".7rem 0", borderBottom: "1px solid var(--hairline)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="card">
              <div className="card-body">
                <h2 className="heading-sm">課程資訊</h2>
                <ul className="meta-list" style={{ marginTop: "1rem" }}>
                  <li>
                    <span>老師</span>
                    <span>
                      {teachers.map((t) => `${t.nameZh} ${t.nameEn}`).join("、") || "依公告"}
                    </span>
                  </li>
                  <li>
                    <span>時間</span>
                    <span>{course.weekday} {course.time}</span>
                  </li>
                  <li>
                    <span>時長</span>
                    <span>{course.duration}</span>
                  </li>
                  <li>
                    <span>地點</span>
                    <span>{site.address}</span>
                  </li>
                  <li>
                    <span>名額</span>
                    <span>{course.capacity}</span>
                  </li>
                  <li>
                    <span>費用</span>
                    <span>{course.price}</span>
                  </li>
                  <li>
                    <span>狀態</span>
                    <span>{course.status}</span>
                  </li>
                </ul>
                <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: ".75rem" }}>
                  <a href={site.lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    透過 LINE 報名
                  </a>
                  <Link href="/schedule" className="btn btn-outline">
                    查看完整課表
                  </Link>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <Photo label={course.title} ratio="ratio-4x5" src={course.image} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section--tight section section--white">
        <div className="container">
          <Reveal>
            <h2 className="heading-sm">注意事項與取消政策</h2>
            <ul style={{ listStyle: "none", marginTop: "1rem", maxWidth: "44em" }}>
              {course.notes.map((note) => (
                <li key={note} style={{ padding: ".6rem 0", borderBottom: "1px solid var(--hairline)", color: "var(--warm-gray)" }}>
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 手機固定報名按鈕（§9.3） */}
      <div className="sticky-register">
        <a href={site.lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          報名 {course.title}
        </a>
      </div>
    </>
  );
}
