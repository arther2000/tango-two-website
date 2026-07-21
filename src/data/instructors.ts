// Instructor 內容模型（規格 §10）
// 注意（規格 §14）：現任師資名單、中英文名稱、簡介與肖像
// 皆為示意內容，上線前必須向品牌方確認。

export type Instructor = {
  slug: string;
  nameZh: string;
  nameEn: string;
  role: string;
  specialties: string[];
  bioShort: string;
  bioLong: string;
  portrait: string;
};

export const instructors: Instructor[] = [
  {
    slug: "i-fan-wu",
    portrait: "/images/instructor-ifan.jpg",
    nameZh: "依凡",
    nameEn: "I-Fan Wu",
    role: "創辦人・主教師",
    specialties: ["擁抱與連結", "音樂性", "初學者引導"],
    bioShort: "相信探戈是一場傾聽的練習——先聽見自己，才能真正回應對方。",
    bioLong:
      "兩兩探戈創辦人。多年深耕台中阿根廷探戈教學，並持續往返布宜諾斯艾利斯進修。她的課堂重視身體覺察與擁抱的品質，引導學生從走路與呼吸開始，慢慢建立屬於自己的探戈語言。",
  },
  {
    slug: "agustin-chu",
    portrait: "/images/instructor-agustin.jpg",
    nameZh: "阿古",
    nameEn: "Agustin Chu",
    role: "常態課程教師",
    specialties: ["即興結構", "引導與跟隨", "舞會實戰"],
    bioShort: "把複雜的技巧拆解成清楚的身體語言，讓即興變得自然。",
    bioLong:
      "長期投入阿根廷探戈的教學與表演，擅長將即興的結構拆解為清楚、可以練習的身體語言。課堂氛圍溫暖直接，特別受初中級學生喜愛。",
  },
  {
    slug: "fernando-waisberg",
    portrait: "/images/instructor-fernando.jpg",
    nameZh: "費南多",
    nameEn: "Fernando Waisberg",
    role: "客座師資・音樂文化",
    specialties: ["探戈音樂", "文化講座", "米隆加"],
    bioShort: "從音樂與歷史出發，帶你聽懂探戈裡的每一次呼吸。",
    bioLong:
      "來自阿根廷的探戈音樂與文化講者，長期與兩兩探戈合作舉辦音樂講座與文化活動，帶領台灣舞者從樂團、年代與詩歌理解探戈音樂的層次。",
  },
];

export function getInstructor(slug: string) {
  return instructors.find((i) => i.slug === slug);
}
