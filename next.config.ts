import type { NextConfig } from "next";

// 靜態匯出（GitHub Pages 部署）。全站皆為靜態頁，next/image 改為 unoptimized。
// basePath 由部署腳本以 PAGES_BASE_PATH 環境變數注入（Pages 專案網址為 /<repo>/）。
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.PAGES_BASE_PATH || "",
};

export default nextConfig;
