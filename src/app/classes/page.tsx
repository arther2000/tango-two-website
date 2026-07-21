import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { courses } from "@/data/courses";
import { getInstructor } from "@/data/instructors";

export const metadata: Metadata = {
  title: "課程總覽",
  description:
    "兩兩探戈的阿根廷探戈課程：初次體驗、初級課程、常態課程與私人課。程度、時段與報名狀態一目了然。",
};

// 課程列表頁（規格 §9.2）：卡片直接顯示程度、老師、時段與狀態
export default function ClassesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Classes</span>
          <h1 className="display-lg">課程總覽</h1>
          <p className="lead text-col">
            從第一次的走路與擁抱，到即興與音樂的深處——
            每個階段，都有適合你的課。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="grid-2">
            {courses.map((course) => {
              const teachers = course.instructorSlugs
                .map((s) => getInstructor(s)?.nameZh)
                .filter(Boolean)
                .join("、");
              return (
                <Link
                  key={course.slug}
                  href={course.slug === "trial" ? "/trial" : `/classes/${course.slug}`}
                  className="card"
                  style={{ display: "block" }}
                >
                  <div className="card-media">
                    <Photo label={course.title} ratio="ratio-16x9" src={course.image} />
                  </div>
                  <div className="card-body">
                    <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: ".75rem" }}>
                      <span className="tag">{course.level}</span>
                      <span className="tag tag--outline">{course.format}</span>
                      <span
                        className={`tag ${course.status === "報名中" ? "tag--status-open" : "tag--status-closed"}`}
                      >
                        {course.status}
                      </span>
                    </div>
                    <h2 className="heading-sm">{course.title}</h2>
                    <p style={{ color: "var(--warm-gray)", margin: ".5rem 0 1rem" }}>
                      {course.summary}
                    </p>
                    <ul className="meta-list">
                      <li>
                        <span>老師</span>
                        <span>{teachers || "依活動公告"}</span>
                      </li>
                      <li>
                        <span>時間</span>
                        <span>
                          {course.weekday} {course.time}
                        </span>
                      </li>
                      <li>
                        <span>費用</span>
                        <span>{course.price}</span>
                      </li>
                    </ul>
                    <span className="arrow-link" style={{ marginTop: "1.25rem" }}>
                      課程詳情 <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </Reveal>

          <Reveal delay={120}>
            <div style={{ marginTop: "4rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/schedule" className="btn btn-outline">
                查看本週課表
              </Link>
              <Link href="/trial" className="btn btn-primary">
                還沒開始過？預約初體驗
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
