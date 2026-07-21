# 兩兩探戈 Tango.two — 品牌網站重製

依「高級感網站重製規格」文件實作的 Next.js 15 + TypeScript 網站。
視覺採 editorial quiet luxury，以 Logo 的 Tango Crimson `#A2124C` 為唯一品牌主軸（規格 §7）。

## 開發

```bash
npm install
npm run dev          # 開發伺服器
npm run build        # 產線建置（目前全站 24 頁皆為靜態預先產生）
npm run build:pages  # GitHub Pages 用建置（含 /tango-two-website basePath）
```

## 部署

- Repo：https://github.com/arther2000/tango-two-website
- 線上網址：https://arther2000.github.io/tango-two-website/
- 方式：`npm run build:pages` 產出 `out/`，push 至 `gh-pages` 分支（含 `.nojekyll`）。
- 注意：靜態匯出 + `images.unoptimized` 模式下 next/image 不會自動加 basePath，
  圖片路徑一律經 `src/lib/paths.ts` 的 `withBase()` 處理。
- 未來若綁自訂網域（custom domain），將 `NEXT_PUBLIC_BASE_PATH` 留空重建即可。

## 結構

```
src/
├── app/                  頁面（App Router，對應規格 §5 sitemap）
│   ├── page.tsx          首頁（§6 全部區塊）
│   ├── trial/            初次體驗（§9.1）
│   ├── classes/          課程總覽 + [slug] 詳情（§9.2–9.3）
│   ├── schedule/         課表
│   ├── events/           活動列表 + [slug] 詳情（§9.4，含活動典藏）
│   ├── about/            品牌故事 + instructors 師資
│   ├── journal/          探戈誌 + FAQ hub
│   ├── studio-rental/    空間租借
│   ├── shop/             商店入口（結帳導向既有電商後台，§12）
│   ├── contact/          交通與聯繫
│   ├── legal/[slug]/     隱私權／條款／退款政策（內容待品牌方提供）
│   └── globals.css       Design tokens（色彩、字級、版面、動效，§7–8）
├── components/           Header／Footer／MobileBar／Reveal／Photo
└── data/                 結構化內容（Course／Event／Instructor 模型，§10）
```

## 已實作的規格重點

- 桌機導覽 + 右側「查看課表／預約體驗」；手機全螢幕選單與底部固定操作列（查看課表・LINE 諮詢・預約體驗）。
- 首頁單一 H1、每頁最多兩個主要 CTA、按鈕為真實文字元件（非圖片）。
- JSON-LD：LocalBusiness/DanceSchool、Course、Event、Person、FAQPage。
- 進場動效與 hover 皆支援 `prefers-reduced-motion`；全站鍵盤可操作、focus 可見。
- 已結束活動自動列入「活動典藏」，不顯示報名 CTA。

## 上線前必須處理（規格 §14、§18）

1. **影像**：已從原官網（tangotwo.info）搬遷 20 張品牌照片至 `public/images/`，以 `next/image` 呈現並套用低飽和暖色調渲染（`.photo--img`，規格 §7.5）。首頁 Hero 目前使用 1269px 寬素材，正式上線建議向品牌方索取 ≥2400px 原始檔重新輸出；照片肖像權與攝影授權仍須依 §14 向品牌方確認。
2. **資料確認**：`src/data/` 內的課程時段、活動日期、師資名單、價格、LINE／社群連結、Email 皆為示意，須逐項向品牌方確認。
3. **表單**：初體驗表單目前僅前端示意，需接 Server Action／API + 垃圾訊息防護 + 事件追蹤。
4. **法務頁**：`/legal/*` 條文內容待品牌方提供。
5. **301 redirect mapping**：舊站 URL（§18 稽核表）需在部署平台設定轉址。
6. **CMS**：資料層已按 §10 模型結構化，可平移至 Sanity／Payload 或既有電商後台 API。
