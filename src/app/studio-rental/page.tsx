import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "空間租借",
  description:
    "兩兩探戈的教室空間租借：木地板舞蹈空間與鋼琴房，適合舞蹈課程、排練、講座與小型活動。台中市西區。",
};

// 空間租借（整併原站 venue-for-rent / piano-room-rent / studio-introduction）
export default function StudioRentalPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Studio rental</span>
          <h1 className="display-lg">空間租借</h1>
          <p className="lead text-col">
            木地板、暖燈與好音場——讓這座探戈客廳，也成為你的創作與活動空間。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <Photo label="舞蹈空間" ratio="ratio-4x5" src="/images/studio-wood-floor.webp" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="heading-md">舞蹈空間</h2>
            <p style={{ marginTop: "1rem", maxWidth: "36em" }}>
              適合舞蹈課程、排練、身體工作坊、講座與小型聚會。
            </p>
            <ul className="meta-list" style={{ marginTop: "1.5rem" }}>
              <li>
                <span>地點</span>
                <span>{site.address}</span>
              </li>
              <li>
                <span>設備</span>
                <span>木地板・鏡面・音響・冷氣</span>
              </li>
              <li>
                <span>適合用途</span>
                <span>舞蹈・排練・工作坊・講座</span>
              </li>
              <li>
                <span>租借方式</span>
                <span>時段預約制，請洽 LINE 詢問檔期與費用</span>
              </li>
            </ul>
            <h2 className="heading-md" style={{ marginTop: "3rem" }}>鋼琴房</h2>
            <p style={{ marginTop: "1rem", maxWidth: "36em" }}>
              獨立琴房空間，適合練琴、教學與小型錄音需求。詳細設備與時段請洽詢。
            </p>
            <div style={{ marginTop: "2rem" }}>
              <a href={site.lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                洽詢檔期與費用
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
