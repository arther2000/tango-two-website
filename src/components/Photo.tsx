import Image from "next/image";

// 品牌影像元件。
// 有 src 時：以 next/image 呈現，並套用暖色調渲染（CSS .photo--img，規格 §7.5 低飽和暖色）。
// 無 src 時：顯示漸層佔位，待補拍後替換。
export default function Photo({
  label,
  ratio = "ratio-4x5",
  className = "",
  src,
  priority = false,
}: {
  label: string;
  ratio?: "ratio-4x5" | "ratio-3x4" | "ratio-16x9" | "ratio-1x1" | "";
  className?: string;
  src?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <figure className={`photo photo--img ${ratio} ${className}`.trim()}>
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
      </figure>
    );
  }
  return (
    <div
      className={`photo ${ratio} ${className}`.trim()}
      role="img"
      aria-label={`影像佔位：${label}`}
    >
      <span>{label}</span>
    </div>
  );
}
