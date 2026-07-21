import type { Metadata } from "next";
import { notFound } from "next/navigation";

// 政策頁（規格 §6.12 / §18）：實際條文內容須由品牌方提供並經確認後填入。
const pages: Record<string, { title: string; body: string }> = {
  privacy: {
    title: "隱私權政策",
    body: "本頁內容待品牌方提供正式隱私權政策條文。上線前必須完成，說明個人資料的蒐集、使用、保存與當事人權利。",
  },
  terms: {
    title: "服務條款",
    body: "本頁內容待品牌方提供正式服務條款。上線前必須完成，涵蓋課程報名、活動參與與商品購買之權利義務。",
  },
  refund: {
    title: "退款與取消政策",
    body: "本頁內容待品牌方提供正式退款與取消政策，並確認符合課程與活動的實際情境（規格 §18）。",
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return { title: page.title };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="display-lg">{page.title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container text-col">
          <p style={{ color: "var(--warm-gray)" }}>{page.body}</p>
        </div>
      </section>
    </>
  );
}
