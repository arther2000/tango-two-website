import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "商店",
  description:
    "兩兩探戈選品：阿根廷探戈舞鞋、舞衣與生活選品。歡迎預約到店試穿。",
};

// 商店（規格 §12：若保留 EasyStore，作為交易後台由新站連結）
// 注意：此頁為選品入口示意；實際商品、價格與結帳應連往品牌方確認的電商後台。
export default function ShopPage() {
  const categories = [
    {
      title: "舞鞋",
      image: "/images/shop-shoes.jpg",
      desc: "為軸轉與貼地走路而生的探戈舞鞋。歡迎預約到店試穿，找到最適合你腳型的一雙。",
    },
    {
      title: "舞衣",
      image: "/images/shop-dress.jpg",
      desc: "為擁抱與轉身設計的舞衣選品，兼顧線條、彈性與舞會的儀式感。",
    },
    {
      title: "生活選品",
      image: "/images/shop-food-table.webp",
      desc: "來自阿根廷的瑪黛茶與食品選物，把布宜諾斯艾利斯的日常帶回家。",
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Shop</span>
          <h1 className="display-lg">商店</h1>
          <p className="lead text-col">
            舞鞋、舞衣與來自阿根廷的生活選品。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="grid-3">
            {categories.map((c) => (
              <article key={c.title} className="card">
                <div className="card-media">
                  <Photo label={c.title} ratio="ratio-4x5" src={c.image} />
                </div>
                <div className="card-body">
                  <h2 className="heading-sm">{c.title}</h2>
                  <p style={{ color: "var(--warm-gray)", marginTop: ".5rem" }}>{c.desc}</p>
                </div>
              </article>
            ))}
          </Reveal>
          <Reveal delay={120}>
            <p style={{ marginTop: "3rem", color: "var(--warm-gray)", maxWidth: "40em" }}>
              線上選購與結帳將導向兩兩探戈的線上商店；到店試穿與商品詢問，歡迎透過 LINE 預約。
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <a href={site.lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                LINE 詢問商品
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
