// Course 內容模型（規格 §10）
// 注意（規格 §14）：課程時段、價格、名額與報名規則皆為示意內容，
// 上線前必須向品牌方確認最新資料，並串接實際報名／付款後台。

export type CourseLevel = "初次體驗" | "初級" | "中級" | "進階" | "不限程度";
export type CourseFormat = "團體課" | "私人課" | "工作坊";

export type Course = {
  slug: string;
  title: string;
  level: CourseLevel;
  format: CourseFormat;
  summary: string;
  description: string;
  learn: string[];
  suitable: string[];
  instructorSlugs: string[];
  weekday: string;
  time: string;
  duration: string;
  price: string;
  capacity: string;
  status: "報名中" | "候補中" | "已額滿";
  notes: string[];
  image: string;
};

export const courses: Course[] = [
  {
    slug: "trial",
    image: "/images/couple-portrait.jpg",
    title: "初次體驗課",
    level: "初次體驗",
    format: "團體課",
    summary: "給第一次接觸阿根廷探戈的你。從走路、擁抱與音樂開始。",
    description:
      "不需要任何舞蹈經驗，也不必自備舞伴。在一堂課的時間裡，老師會帶你從最基本的走路與重心開始，感受擁抱的距離，並在音樂裡完成你的第一段探戈對話。",
    learn: ["探戈的基本站姿與走路", "擁抱的距離與連結", "跟著音樂完成簡單的即興移動"],
    suitable: ["完全沒有舞蹈經驗的人", "想找一項雙人興趣的人", "對音樂與身體覺察好奇的人"],
    instructorSlugs: ["i-fan-wu"],
    weekday: "每週六",
    time: "14:00–15:30",
    duration: "90 分鐘",
    price: "體驗價請洽 LINE 諮詢",
    capacity: "小班制",
    status: "報名中",
    notes: [
      "穿著方便活動的服裝即可，不需要探戈舞鞋。",
      "建議提早 10 分鐘到教室熟悉環境。",
      "課程異動將於 LINE 官方帳號公告。",
    ],
  },
  {
    slug: "beginner",
    image: "/images/class-lecture.webp",
    title: "初級課程",
    level: "初級",
    format: "團體課",
    summary: "循序建立身體、擁抱與音樂的基礎，走進探戈的語言。",
    description:
      "以 8 週為一期的循環課程。從走路、重心轉換與擁抱開始，逐步加入方向變化與基礎步伐結構，建立即興對話需要的身體基礎。",
    learn: ["穩定的軸線與重心轉換", "開放與閉合擁抱", "基礎步伐與方向變化", "聆聽音樂的節奏與樂句"],
    suitable: ["完成初次體驗的學生", "想穩定打好基礎的初學者"],
    instructorSlugs: ["i-fan-wu", "agustin-chu"],
    weekday: "每週三",
    time: "19:30–21:00",
    duration: "8 週・每堂 90 分鐘",
    price: "課程費用請洽 LINE 諮詢",
    capacity: "限額小班",
    status: "報名中",
    notes: ["不需自備舞伴，課堂中會輪換練習。", "可補課，詳見報名說明。"],
  },
  {
    slug: "regular",
    image: "/images/dance-red-light.jpg",
    title: "常態課程",
    level: "中級",
    format: "團體課",
    summary: "深化連結、音樂性與即興能力，讓探戈成為生活的一部分。",
    description:
      "針對已具備基礎的學生，深入探索即興結構、音樂詮釋與舞會實戰。每期主題不同，涵蓋不同樂團風格與步伐語彙。",
    learn: ["即興結構與組合", "不同樂團的音樂詮釋", "舞會禮儀與實戰", "與不同舞伴的連結調整"],
    suitable: ["完成初級課程的學生", "已有探戈經驗、想持續精進的舞者"],
    instructorSlugs: ["agustin-chu"],
    weekday: "每週四",
    time: "19:30–21:00",
    duration: "每期 8 週・每堂 90 分鐘",
    price: "課程費用請洽 LINE 諮詢",
    capacity: "限額小班",
    status: "報名中",
    notes: ["建議搭配週末練習時段。", "儲值制學生可折抵，詳見會員方案。"],
  },
  {
    slug: "private",
    image: "/images/stage-performance.jpg",
    title: "私人課程",
    level: "不限程度",
    format: "私人課",
    summary: "依照個人目標、身體狀態與學習節奏量身設計。",
    description:
      "一對一或一對二的客製化課程。無論你想從零開始、突破瓶頸，或為表演與比賽準備，老師會依你的目標與身體狀態設計專屬的學習路徑。",
    learn: ["依個人目標客製", "細緻的身體與擁抱調整", "彈性安排上課時間"],
    suitable: ["時間彈性有限的人", "想加速進步或突破瓶頸的舞者", "準備表演或比賽的舞者"],
    instructorSlugs: ["i-fan-wu", "agustin-chu"],
    weekday: "時間預約制",
    time: "依約定",
    duration: "每堂 60 分鐘",
    price: "方案請洽 LINE 諮詢",
    capacity: "1–2 人",
    status: "報名中",
    notes: ["請於一週前預約時段。", "取消與改期政策詳見報名說明。"],
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}
