import Link from "next/link";
import { site } from "@/data/site";

// 手機固定操作列（規格 §5）：查看課表・LINE 諮詢・預約體驗
export default function MobileBar() {
  return (
    <nav className="mobile-bar" aria-label="快速操作">
      <Link href="/schedule">查看課表</Link>
      <a href={site.lineUrl} target="_blank" rel="noopener noreferrer">
        LINE 諮詢
      </a>
      <Link href="/trial" className="bar-primary">
        預約體驗
      </Link>
    </nav>
  );
}
