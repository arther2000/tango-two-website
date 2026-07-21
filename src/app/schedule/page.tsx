import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { courses } from "@/data/courses";
import { getInstructor } from "@/data/instructors";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "課表",
  description:
    "兩兩探戈本週課表：初級課程、常態課程、初次體驗與私人課時段一覽。台中市西區美村路一段743號3樓。",
};

// 課表頁（規格 §5 手機操作列入口）
// 注意（§14）：時段為示意資料，上線前需向品牌方確認並改由 CMS 管理。
export default function SchedulePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Weekly schedule</span>
          <h1 className="display-lg">課表</h1>
          <p className="lead text-col">
            每週的課程與練習時段。報名或詢問名額，請透過 LINE 與我們聯繫。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="table-scroll">
              <table className="data-table">
                <caption className="caption" style={{ textAlign: "left", paddingBottom: "1rem" }}>
                  最新時段以 LINE 官方帳號公告為準
                </caption>
                <thead>
                  <tr>
                    <th scope="col">時間</th>
                    <th scope="col">課程</th>
                    <th scope="col">程度</th>
                    <th scope="col">老師</th>
                    <th scope="col">狀態</th>
                    <th scope="col" aria-label="操作" />
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => {
                    const teachers = course.instructorSlugs
                      .map((s) => getInstructor(s)?.nameZh)
                      .filter(Boolean)
                      .join("、");
                    return (
                      <tr key={course.slug}>
                        <td>
                          {course.weekday}
                          <br />
                          <span className="caption">{course.time}</span>
                        </td>
                        <td>
                          <strong>{course.title}</strong>
                        </td>
                        <td>{course.level}</td>
                        <td>{teachers || "依公告"}</td>
                        <td>
                          <span
                            className={`tag ${course.status === "報名中" ? "tag--status-open" : "tag--status-closed"}`}
                          >
                            {course.status}
                          </span>
                        </td>
                        <td>
                          <Link
                            href={course.slug === "trial" ? "/trial" : `/classes/${course.slug}`}
                            className="arrow-link"
                          >
                            詳情 <span aria-hidden="true">→</span>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={site.lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                LINE 詢問名額
              </a>
              <Link href="/trial" className="btn btn-outline">
                第一次來？預約初體驗
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
