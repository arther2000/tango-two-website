// 探戈誌（整合原站 Podcast、術語、歷史文化、舞會、音樂與 FAQ，規格 §6.10）
// 文章內容為示意摘要；搬遷時應保留原站 URL 或建立 301 對應（規格 §13）。

export type JournalCategory =
  | "歷史文化"
  | "音樂"
  | "舞會"
  | "探戈術語"
  | "Podcast"
  | "新手 FAQ";

export type JournalPost = {
  slug: string;
  title: string;
  category: JournalCategory;
  readMinutes: number;
  excerpt: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "what-is-argentine-tango",
    title: "什麼是阿根廷探戈？從布宜諾斯艾利斯的街角說起",
    category: "歷史文化",
    readMinutes: 8,
    excerpt:
      "阿根廷探戈誕生於 19 世紀末的布宜諾斯艾利斯港區，是移民、鄉愁與即興交織出的雙人對話。它與國標探戈有什麼不同？",
  },
  {
    slug: "listening-to-golden-age",
    title: "聽懂黃金年代：舞會裡最常見的四大樂團",
    category: "音樂",
    readMinutes: 10,
    excerpt:
      "D'Arienzo 的節奏、Di Sarli 的抒情、Troilo 的層次、Pugliese 的戲劇性——認識它們，舞會裡的每一個 tanda 都會開始說話。",
  },
  {
    slug: "first-milonga-guide",
    title: "第一次去米隆加：舞會禮儀與 Cabeceo 完全指南",
    category: "舞會",
    readMinutes: 6,
    excerpt:
      "Cabeceo 是什麼？tanda 與 cortina 怎麼運作？第一次參加舞會前，先了解這些不成文的默契，你會自在許多。",
  },
  {
    slug: "tango-terminology-abrazo",
    title: "探戈術語：Abrazo，擁抱不只是姿勢",
    category: "探戈術語",
    readMinutes: 4,
    excerpt:
      "在探戈裡，擁抱（Abrazo）是所有溝通的起點。開放與閉合擁抱有什麼差別？為什麼我們說擁抱的品質決定舞的品質？",
  },
  {
    slug: "podcast-embrace-conversation",
    title: "Podcast：在擁抱裡對話——兩兩探戈的聲音頻道",
    category: "Podcast",
    readMinutes: 3,
    excerpt:
      "用聲音聊探戈：音樂、文化、舞會故事與學習心法。在各大 Podcast 平台搜尋「兩兩探戈」即可收聽。",
  },
];

export const faqItems: { q: string; a: string }[] = [
  {
    q: "完全沒有舞蹈經驗，可以學探戈嗎？",
    a: "可以。阿根廷探戈從走路開始，不需要任何舞蹈基礎。初次體驗課會由老師一步一步引導，多數學生都是零經驗開始的。",
  },
  {
    q: "需要自備舞伴嗎?",
    a: "不需要。課堂中會輪換練習，你會與不同的同學一起學習——這也是探戈社交文化的一部分。",
  },
  {
    q: "第一次上課要穿什麼？",
    a: "穿著方便活動的服裝即可。鞋子建議選擇乾淨、穩定、方便轉身的款式；之後若持續學習，再考慮購入探戈舞鞋。",
  },
  {
    q: "探戈舞鞋和一般舞鞋有什麼不同？",
    a: "探戈舞鞋的鞋底與重心設計利於軸轉與貼地走路。初學階段不需要急著購買，教室也提供舞鞋選品與試穿建議。",
  },
  {
    q: "擁抱的距離會不會很尷尬？",
    a: "擁抱是探戈的語言，也是可以調整的。從開放式擁抱開始，距離由雙方共同決定；課堂中老師會引導大家建立自在、互相尊重的連結。",
  },
  {
    q: "需要會西班牙文嗎？",
    a: "不需要。音樂與術語會在課堂中自然學到；想深入了解歌詞與文化的話，探戈誌與講座活動是很好的入口。",
  },
];
