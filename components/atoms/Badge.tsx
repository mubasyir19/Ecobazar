import React from "react";

interface BadgeProps {
  text: string;
  type: "Discount" | "BestSale";
  percentDiscount?: number;
}

export default function Badge({ text, type, percentDiscount }: BadgeProps) {
  let bgColorClass = "";
  if (type === "Discount") {
    // Jika Discount, background merah
    bgColorClass = "bg-danger";
  } else if (type === "BestSale") {
    // Jika BestSale (Best Deals), background biru
    bgColorClass = "bg-[#2388FF]";
  }

  const displayText =
    type === "Discount" && percentDiscount
      ? `${percentDiscount}% OFF` // Tampilkan diskon jika ada persentase
      : text;

  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-semibold text-white ${bgColorClass}`}
    >
      {displayText}
    </span>
  );
}
