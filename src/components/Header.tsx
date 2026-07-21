"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="兩兩探戈 Tango.two 首頁">
            <span className="brand-en">Tango.two</span>
            <span className="brand-zh">兩兩探戈</span>
          </Link>

          <nav className="main-nav" aria-label="主導覽">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Link href="/schedule" className="schedule-link">
              查看課表
            </Link>
            <Link href="/trial" className="btn btn-primary">
              預約體驗
            </Link>
            <button
              className="menu-toggle"
              aria-label="開啟選單"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="全站選單">
          <button
            className="menu-close"
            aria-label="關閉選單"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <nav aria-label="行動版導覽">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/shop">商店</Link>
            <Link href="/schedule">查看課表</Link>
            <Link href="/contact">交通與聯繫</Link>
          </nav>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/trial" className="btn btn-primary" style={{ width: "100%" }}>
              預約第一次體驗
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
