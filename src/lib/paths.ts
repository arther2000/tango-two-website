// 靜態匯出 + unoptimized 模式下，next/image 不會自動為 src 加上 basePath，
// 因此圖片路徑一律經過 withBase() 處理（NEXT_PUBLIC_BASE_PATH 於建置時注入）。
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path: string) {
  return `${BASE_PATH}${path}`;
}
