import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { courses } from "@/data/courses";
import { upcomingEvents } from "@/data/events";
import { instructors } from "@/data/instructors";
import { journalPosts } from "@/data/journal";
import { site } from "@/data/site";

// 首頁完整內容規格：§6
export default function HomePage() {
  const featuredCourses = courses.filter((c) =>
    ["trial", "regular", "private"].includes(c.slug)
  );
  const featuredPosts = journalPosts.slice(0, 3);

  return (
    <>
      {/* §6.2 Hero */}
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/images/hero-studio-dancers.webp"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-content">
          <p className="eyebrow" style={{ color: "var(--rose)" }}>
            Argentine Tango・Taichung
          </p>
          <h1 className="display-xl">
            在一個擁抱的距離裡，
            <br />
            重新遇見自己。
          </h1>
          <p className="lead">
            阿根廷探戈不只是舞步，而是一場關於傾聽、信任與當下的雙人對話。
            從台中開始，走進一個溫暖而自由的世界。
          </p>
          <div className="hero-ctas">
            <Link href="/trial" className="btn btn-primary">
              預約第一次體驗
            </Link>
            <Link href="/classes" className="btn btn-outline">
              探索課程
            </Link>
          </div>
          <p className="hero-trust">
            無需舞蹈基礎・不必自備舞伴・歡迎任何年齡開始
          </p>
        </div>
      </section>

      {/* §6.3 Brand Manifesto */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">More than steps</span>
            <h2 className="display-lg text-col">
              我們練習的不是舞步，
              <br />
              而是如何傾聽。
            </h2>
            <p className="lead" style={{ marginTop: "1.75rem" }}>
              阿根廷探戈是一種即興的雙人舞。沒有固定答案，只有每一次真實的邀請與回應。
              在音樂裡，我們練習覺察自己，也尊重眼前的另一個人。
            </p>
          </Reveal>
          <Reveal className="grid-3" delay={120}>
            {[
              ["覺察", "Awareness"],
              ["連結", "Connection"],
              ["自由", "Freedom"],
            ].map(([zh, en]) => (
              <div key={en} style={{ borderTop: "1px solid var(--hairline)", paddingTop: "1.5rem", marginTop: "3rem" }}>
                <h3 className="heading-sm">{zh}</h3>
                <p className="en-accent" style={{ color: "var(--warm-gray)" }}>{en}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* §6.4 First Experience */}
      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <span className="eyebrow">First time at Tango.two</span>
            <h2 className="display-lg text-col">
              第一次跳探戈，比你想像的更自在。
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="steps" style={{ marginTop: "3.5rem" }}>
              <div className="step">
                <h3 className="heading-sm">選擇體驗時間</h3>
                <p style={{ color: "rgba(247,242,237,.7)", marginTop: ".5rem" }}>
                  從近期的體驗時段中挑一個適合你的時間。
                </p>
              </div>
              <div className="step">
                <h3 className="heading-sm">輕鬆前來</h3>
                <p style={{ color: "rgba(247,242,237,.7)", marginTop: ".5rem" }}>
                  穿著方便活動的服裝來到教室，其他交給我們。
                </p>
              </div>
              <div className="step">
                <h3 className="heading-sm">完成第一段對話</h3>
                <p style={{ color: "rgba(247,242,237,.7)", marginTop: ".5rem" }}>
                  在老師引導下，完成你的第一段探戈對話。
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="caption" style={{ marginTop: "3rem", color: "rgba(247,242,237,.55)" }}>
              完全沒有舞蹈經驗也可以・不需要自己找舞伴・第一次可穿乾淨、穩定、方便轉身的鞋
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <Link href="/trial" className="btn btn-outline">
                查看初體驗方案
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* §6.5 Course Paths */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Find your path</span>
            <h2 className="display-lg">找到適合你的課程</h2>
          </Reveal>
          <Reveal className="grid-3" delay={100}>
            {featuredCourses.map((course) => (
              <Link
                key={course.slug}
                href={course.slug === "trial" ? "/trial" : `/classes/${course.slug}`}
                className="card"
                style={{ display: "block", marginTop: "3rem" }}
              >
                <div className="card-media">
                  <Photo label={course.title} ratio="ratio-4x5" src={course.image} />
                </div>
                <div className="card-body">
                  <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: ".75rem" }}>
                    <span className="tag">{course.level}</span>
                    <span className="tag tag--outline">{course.format}</span>
                  </div>
                  <h3 className="heading-sm">{course.title}</h3>
                  <p style={{ color: "var(--warm-gray)", margin: ".5rem 0 1rem" }}>
                    {course.summary}
                  </p>
                  <p className="caption">下一時段：{course.weekday} {course.time}</p>
                  <span className="arrow-link" style={{ marginTop: "1rem" }}>
                    了解課程 <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* §6.6 Atmosphere */}
      <section className="section section--white">
        <div className="container">
          <Reveal>
            <span className="eyebrow">The studio</span>
            <h2 className="display-lg">一座屬於台中的探戈客廳。</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="atmosphere-grid" style={{ marginTop: "3.5rem" }}>
              <Photo label="舞會中的擁抱" ratio="" src="/images/atmosphere-embrace-dark.webp" />
              <Photo label="木地板與暖燈" ratio="" src="/images/studio-wood-floor.webp" />
              <Photo label="米隆加之夜" ratio="" src="/images/milonga-couple-warm.jpg" />
              <Photo label="擁抱練習" ratio="" src="/images/embrace-close.jpg" />
              <Photo label="舞者身影" ratio="" src="/images/couple-portrait.jpg" />
              <Photo label="現場音樂" ratio="" src="/images/live-music-piano.webp" />
              <Photo label="活動與講座" ratio="" src="/images/event-crowd.webp" />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="stats-row">
              <div>
                <h3 className="heading-sm">台中專業</h3>
                <p style={{ color: "var(--warm-gray)" }}>阿根廷探戈教室</p>
              </div>
              <div>
                <h3 className="heading-sm">國際與在地</h3>
                <p style={{ color: "var(--warm-gray)" }}>專業師資合作</p>
              </div>
              <div>
                <h3 className="heading-sm">完整生態</h3>
                <p style={{ color: "var(--warm-gray)" }}>課程、舞會、文化活動與選品</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* §6.7 Instructors */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Instructors</span>
            <h2 className="display-lg text-col">
              以專業引導，也以人的方式陪伴。
            </h2>
          </Reveal>
          <Reveal className="grid-3" delay={100}>
            {instructors.map((t) => (
              <article key={t.slug} className="card" style={{ marginTop: "3rem" }}>
                <div className="card-media">
                  <Photo label={`${t.nameZh} 肖像`} ratio="ratio-3x4" src={t.portrait} />
                </div>
                <div className="card-body">
                  <h3 className="heading-sm">
                    {t.nameZh}{" "}
                    <span className="en-accent" style={{ fontSize: "1rem", color: "var(--warm-gray)" }}>
                      {t.nameEn}
                    </span>
                  </h3>
                  <p className="caption" style={{ margin: ".25rem 0 .75rem" }}>{t.role}</p>
                  <p style={{ color: "var(--warm-gray)" }}>{t.bioShort}</p>
                  <Link href="/about/instructors" className="arrow-link" style={{ marginTop: "1rem" }}>
                    認識老師 <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* §6.8 Events */}
      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Upcoming</span>
            <h2 className="display-lg text-col">探戈，在課堂之外繼續發生。</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid-2" style={{ marginTop: "3.5rem" }}>
              {upcomingEvents.slice(0, 3).map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="card"
                  style={{ background: "rgba(247,242,237,.04)", borderColor: "rgba(247,242,237,.12)" }}
                >
                  <div className="card-body">
                    <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: ".75rem" }}>
                      <span className="tag">{event.type}</span>
                      <span className="tag tag--outline" style={{ color: "rgba(247,242,237,.6)", borderColor: "rgba(247,242,237,.25)" }}>
                        {event.status}
                      </span>
                    </div>
                    <p className="caption" style={{ color: "var(--rose)" }}>{event.dateLabel}</p>
                    <h3 className="heading-sm" style={{ margin: ".35rem 0 .6rem", color: "var(--ivory)" }}>
                      {event.title}
                    </h3>
                    <p style={{ color: "rgba(247,242,237,.65)" }}>{event.summary}</p>
                    <span className="arrow-link" style={{ marginTop: "1rem", color: "var(--rose)" }}>
                      活動詳情 <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/events" className="btn btn-outline">
                所有活動
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* §6.9 Testimonials */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Voices</span>
            <h2 className="display-lg">學員故事</h2>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="pull-quote" style={{ marginTop: "3rem" }}>
              我原本以為自己沒有節奏感，後來才發現，探戈不是追上音樂，而是學會聽見自己。
              <footer className="caption" style={{ marginTop: "1.25rem" }}>
                — 初級班學員・學習一年（示意內容，發布前需取得本人同意）
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* §6.10 Journal */}
      <section className="section section--white">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Journal</span>
            <h2 className="display-lg">探戈誌</h2>
            <p className="lead" style={{ marginTop: "1rem" }}>
              音樂、文化、舞會與新手指南——探戈的世界，從閱讀也能走進來。
            </p>
          </Reveal>
          <Reveal className="grid-3" delay={100}>
            {featuredPosts.map((post) => (
              <Link key={post.slug} href="/journal" className="card" style={{ marginTop: "3rem", display: "block" }}>
                <div className="card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".75rem" }}>
                    <span className="tag tag--outline">{post.category}</span>
                    <span className="caption">{post.readMinutes} 分鐘</span>
                  </div>
                  <h3 className="heading-sm" style={{ fontSize: "1.25rem" }}>{post.title}</h3>
                  <p style={{ color: "var(--warm-gray)", marginTop: ".6rem" }}>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* §6.11 Final CTA */}
      <section className="section section--dark" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <h2 className="display-lg" style={{ maxWidth: "18em", marginInline: "auto" }}>
              你的第一支探戈，
              <br />
              不需要等到準備好。
            </h2>
            <p className="lead" style={{ margin: "1.5rem auto 0" }}>
              帶著好奇來就可以。其餘的，我們會陪你慢慢找到。
            </p>
            <div className="hero-ctas" style={{ justifyContent: "center" }}>
              <Link href="/trial" className="btn btn-primary">
                預約第一次體驗
              </Link>
              <a
                href={site.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                加入 LINE 詢問
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
