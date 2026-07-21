import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "關於兩兩",
  description:
    "兩兩探戈 Tango.two 的品牌故事：為什麼在台中建立一座探戈客廳？我們的教學哲學、國際連結與未來願景。",
};

// 關於頁（規格 §9.5）：時間軸與影像敘事，不寫成履歷堆疊
export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our story</span>
          <h1 className="display-lg text-col">
            兩個人，一個擁抱，
            <br />
            一座城市的探戈客廳。
          </h1>
          <p className="lead text-col">
            兩兩探戈 Tango.two——名字來自探戈最基本的單位：兩個人。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <h2 className="heading-md">為什麼是台中？</h2>
            <p style={{ marginTop: "1.25rem", maxWidth: "38em" }}>
              阿根廷探戈在世界各地的城市裡生長，而我們相信台中也值得一座
              屬於自己的探戈客廳——一個木地板、暖燈與音樂的空間，
              讓人們在忙碌的生活裡，找到與自己、與他人真實相處的時刻。
            </p>
            <p style={{ marginTop: "1.25rem", maxWidth: "38em" }}>
              從課程、舞會到文化講座，兩兩不只是教舞的地方。我們與國內外
              專業師資及阿根廷探戈名師合作，把布宜諾斯艾利斯的夜晚，
              一點一點帶進這座城市。
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Photo label="教室與社群" ratio="ratio-4x5" src="/images/community-talk.png" />
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Philosophy</span>
            <h2 className="heading-md text-col">我們的教學哲學</h2>
          </Reveal>
          <Reveal className="grid-3" delay={100}>
            {[
              ["即興，不是背誦", "探戈沒有固定舞序。我們教的是對話的能力，而不是排練的答案。"],
              ["擁抱，是一種尊重", "距離由雙方共同決定。覺察自己、聆聽對方，是課堂裡最重要的練習。"],
              ["音樂，是共同的語言", "從樂團、年代與詩歌認識音樂，讓身體的每一步都有根據。"],
            ].map(([title, body]) => (
              <div key={title} style={{ borderTop: "1px solid rgba(247,242,237,.15)", paddingTop: "1.5rem", marginTop: "2.5rem" }}>
                <h3 className="heading-sm">{title}</h3>
                <p style={{ color: "rgba(247,242,237,.7)", marginTop: ".6rem" }}>{body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <h2 className="heading-md">認識帶領你的人</h2>
            <p className="lead" style={{ margin: "1rem auto 2rem" }}>
              兩兩的師資團隊，以專業引導，也以人的方式陪伴。
            </p>
            <Link href="/about/instructors" className="btn btn-primary">
              師資團隊
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
