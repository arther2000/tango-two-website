// 全站共用資訊
// 注意（規格 §14）：地址、營業時間、社群連結、LINE 網址等
// 上線前必須向品牌方確認最新資料。

export const site = {
  nameZh: "兩兩探戈",
  nameEn: "Tango.two",
  tagline: "在一個擁抱的距離裡，聽見音樂，也重新遇見自己。",
  taglineEn: "Tango is a conversation without words.",
  address: "台中市西區美村路一段 743 號 3 樓",
  city: "台中市",
  // 官方 LINE 加好友連結（取自原官網，2026-07-21 驗證：301 → line.me/R/ti/p/@209pvkmm）
  lineUrl: "https://lin.ee/1x9v4T1",
  facebookUrl: "https://www.facebook.com/tangotwo",
  instagramUrl: "https://www.instagram.com/tango.two",
  email: "hello@tangotwo.info",
  // 空間使用狀況：兩兩探戈官方公開日曆（來源同原站 piano-room-rent 頁的嵌入，
  // 已驗證為公開狀態，僅顯示忙碌時段）。
  calendarEmbedUrl:
    "https://calendar.google.com/calendar/embed?src=tangotwo.taichung%40gmail.com&ctz=Asia%2FTaipei&hl=zh_TW&mode=MONTH&showTitle=0&showPrint=0&showTz=0&showCalendars=0",
  metaTitle: "兩兩探戈 Tango.two｜台中阿根廷探戈課程與初體驗",
  metaDescription:
    "兩兩探戈 Tango.two 是台中的專業阿根廷探戈教室，提供新手體驗、常態課程、私人課、舞會與文化活動。無需舞蹈基礎，也不必自備舞伴。",
} as const;

export const navItems = [
  { label: "課程", href: "/classes" },
  { label: "初次體驗", href: "/trial" },
  { label: "活動與舞會", href: "/events" },
  { label: "關於兩兩", href: "/about" },
  { label: "探戈誌", href: "/journal" },
  { label: "空間租借", href: "/studio-rental" },
] as const;
