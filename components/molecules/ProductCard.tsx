import { formatPrice } from "@/helpers/formatPrice";
import { Handbag, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  productId?: string;
  imageLink?: string;
  name?: string;
  price?: number;
  rating?: number;
  discount?: number;
  bestSale?: boolean;
}

export default function ProductCard({
  productId,
  imageLink,
  name,
  price,
  rating,
}: ProductCardProps) {
  return (
    <div className="border-gray-1 hover:border-primary hover:shadow-hard-primary border bg-white transition-all duration-200 hover:shadow-md">
      <Image
        src={`${imageLink}`}
        width={264}
        height={240}
        alt="product"
        className="w-full object-cover"
      />
      <div className="flex items-center justify-between p-3">
        <div className="">
          <p className="text-small text-gray-7">{name}</p>
          <div className="flex items-center gap-1">
            <p className="text-gray-9 text-medium font-medium">
              {formatPrice(price as number)}
            </p>
            <p className="text-gray-4 text-medium font-medium line-through">
              $20.99
            </p>
          </div>
          <div className="mt-1.5 flex items-center gap-0.5">
            <Star className="text-warning size-3 overflow-hidden" />
            <Star className="text-warning size-3 overflow-hidden" />
            <Star className="text-warning size-3 overflow-hidden" />
            <Star className="text-warning size-3 overflow-hidden" />
          </div>
        </div>
        <div className="">
          <div className="bg-gray-05 group hover:bg-primary flex size-10 items-center justify-center rounded-full transition-all duration-200">
            <Handbag className="text-gray-9 size-5 group-hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
