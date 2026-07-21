import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: "1rem" }}>
              <span className="brand-en">Tango.two</span>
              <span className="brand-zh">兩兩探戈</span>
            </div>
            <p style={{ maxWidth: "22em" }}>{site.tagline}</p>
            <p className="en-accent" style={{ marginTop: "0.75rem", color: "rgba(240,146,166,.7)" }}>
              {site.taglineEn}
            </p>
          </div>

          <div>
            <h3>探索</h3>
            <ul>
              <li><Link href="/classes">課程總覽</Link></li>
              <li><Link href="/trial">初次體驗</Link></li>
              <li><Link href="/schedule">課表</Link></li>
              <li><Link href="/events">活動與舞會</Link></li>
              <li><Link href="/journal">探戈誌</Link></li>
            </ul>
          </div>

          <div>
            <h3>關於</h3>
            <ul>
              <li><Link href="/about">品牌故事</Link></li>
              <li><Link href="/about/instructors">師資團隊</Link></li>
              <li><Link href="/studio-rental">空間租借</Link></li>
              <li><Link href="/shop">商店</Link></li>
              <li><Link href="/contact">交通與聯繫</Link></li>
            </ul>
          </div>

          <div>
            <h3>聯繫我們</h3>
            <ul>
              <li>{site.address}</li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.lineUrl} target="_blank" rel="noopener noreferrer">
                  LINE 官方帳號
                </a>
              </li>
              <li>
                <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 兩兩探戈 Tango.two</p>
          <ul>
            <li><Link href="/legal/privacy">隱私權政策</Link></li>
            <li><Link href="/legal/terms">服務條款</Link></li>
            <li><Link href="/legal/refund">退款與取消政策</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
