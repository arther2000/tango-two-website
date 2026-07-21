import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "交通與聯繫",
  description:
    "兩兩探戈 Tango.two 位於台中市西區美村路一段743號3樓。LINE 官方帳號、Email 與社群聯絡方式。",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="display-lg">交通與聯繫</h1>
          <p className="lead text-col">
            有任何關於課程、活動或空間的問題，歡迎隨時與我們聯繫。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <h2 className="heading-md">找到我們</h2>
            <ul className="meta-list" style={{ marginTop: "1.5rem" }}>
              <li>
                <span>地址</span>
                <span>{site.address}</span>
              </li>
              <li>
                <span>Email</span>
                <span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </li>
              <li>
                <span>LINE</span>
                <span>
                  <a href={site.lineUrl} target="_blank" rel="noopener noreferrer">
                    官方帳號（最快回覆）
                  </a>
                </span>
              </li>
              <li>
                <span>社群</span>
                <span>
                  <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a>
                  {" ・ "}
                  <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
                </span>
              </li>
            </ul>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={site.lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                加入 LINE 諮詢
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                在 Google Maps 開啟
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            {/* 上線時可替換為 Google Maps embed（需同意管理控制第三方內容，規格 §12） */}
            <div className="photo ratio-1x1" role="img" aria-label="地圖佔位：台中市西區美村路一段743號3樓">
              <span>Map — {site.address}</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
