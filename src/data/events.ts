// Event 內容模型（規格 §10）
// 注意（規格 §14）：以下活動日期、內容與狀態皆為示意資料，
// 上線前必須向品牌方確認是否有效；過期活動應自動移入典藏（§6.8）。

export type TangoEvent = {
  slug: string;
  title: string;
  type: "舞會" | "講座" | "大師工作坊" | "文化活動";
  dateLabel: string; // 顯示用日期（實際上線應使用 ISO 日期 + 自動狀態）
  startAt: string; // ISO
  venue: string;
  instructorSlugs: string[];
  language?: string;
  price: string;
  status: "報名中" | "候補中" | "已額滿" | "已結束";
  summary: string;
  description: string;
  heroImage: string;
  scheduleBlocks: { time: string; title: string }[];
};

export const events: TangoEvent[] = [
  {
    slug: "milonga-dos-2026-08",
    heroImage: "/images/milonga-couple-warm.jpg",
    title: "兩兩米隆加 Milonga Dos",
    type: "舞會",
    dateLabel: "2026 年 8 月・週六晚間",
    startAt: "2026-08-15T19:30:00+08:00",
    venue: "兩兩探戈教室",
    instructorSlugs: [],
    price: "票價請洽 LINE 諮詢",
    status: "報名中",
    summary: "每月一次的居家感舞會。木地板、暖燈與經典探戈音樂，歡迎各程度舞者。",
    description:
      "米隆加（Milonga）是探戈舞者的社交舞會。兩兩的米隆加以「探戈客廳」為概念，保留擁抱的溫度與音樂的層次。新手可以先來感受氣氛，舞會前設有暖身導引時段。",
    scheduleBlocks: [
      { time: "19:00", title: "入場・新手暖身導引" },
      { time: "19:30", title: "舞會開始" },
      { time: "22:30", title: "La Cumparsita・結束曲" },
    ],
  },
  {
    slug: "music-talk-2026-09",
    heroImage: "/images/live-music-piano.webp",
    title: "探戈音樂講座：聽懂黃金年代",
    type: "講座",
    dateLabel: "2026 年 9 月・週日下午",
    startAt: "2026-09-06T14:00:00+08:00",
    venue: "兩兩探戈教室",
    instructorSlugs: ["fernando-waisberg"],
    language: "西語講述・中文翻譯",
    price: "票價請洽 LINE 諮詢",
    summary: "從 D'Arienzo 到 Pugliese，用耳朵走一遍探戈的黃金年代。",
    status: "報名中",
    description:
      "探戈的即興建立在音樂之上。本講座從樂團編制、年代風格與詩歌文本切入，帶你聽懂舞會中最常出現的樂團與曲目，讓身體的回應有音樂的根據。",
    scheduleBlocks: [
      { time: "14:00", title: "講座：黃金年代的樂團地圖" },
      { time: "15:30", title: "聆聽與提問" },
      { time: "16:00", title: "自由交流" },
    ],
  },
  {
    slug: "master-workshop-archive",
    heroImage: "/images/event-master-workshop.png",
    title: "Carlos Rivarola 大師工作坊",
    type: "大師工作坊",
    dateLabel: "已結束・活動典藏",
    startAt: "2025-11-08T10:00:00+08:00",
    venue: "兩兩探戈教室",
    instructorSlugs: [],
    price: "—",
    status: "已結束",
    summary: "阿根廷探戈名師 Carlos Rivarola 訪台工作坊，感謝所有參與的舞者。",
    description:
      "阿根廷探戈大師 Carlos Rivarola 帶來的訪台工作坊已圓滿結束。完整回顧與照片請見活動典藏；近期活動請回到活動列表查看。",
    scheduleBlocks: [],
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}

export const upcomingEvents = events.filter((e) => e.status !== "已結束");
export const archivedEvents = events.filter((e) => e.status === "已結束");
