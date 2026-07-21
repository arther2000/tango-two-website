import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70svh" }}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="display-lg text-col">
          這一步走出了舞池之外。
        </h1>
        <p className="lead text-col">
          你要找的頁面不存在或已經搬家了。回到首頁，我們再跳一次。
        </p>
        <div className="hero-ctas">
          <Link href="/" className="btn btn-primary">
            回到首頁
          </Link>
          <Link href="/classes" className="btn btn-outline">
            探索課程
          </Link>
        </div>
      </div>
    </section>
  );
}
