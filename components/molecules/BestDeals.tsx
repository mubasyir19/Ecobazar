import { formatPrice } from "@/helpers/formatPrice";
import { Eye, Handbag, Heart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface BestDealsProps {
  productId?: string;
  imageLink?: string;
  name?: string;
  price?: number;
  rating?: number;
  discount?: number;
  bestSale?: boolean;
}

export default function BestDeals({
  productId,
  imageLink,
  name,
  price,
  rating,
  discount,
}: BestDealsProps) {
  return (
    <div className="border-gray-1 hover:border-primary hover:shadow-hard-primary col-span-2 row-span-2 h-full border bg-white transition-all duration-200 hover:shadow-md">
      <div className="relative">
        <Image
          src={`${imageLink}`}
          width={525}
          height={446}
          alt="product"
          className=""
        />
        <div className="absolute top-6 left-6 flex items-center gap-2"></div>
        <div className="absolute bottom-6 left-1/2 flex w-full -translate-x-1/2 items-center gap-2 px-6">
          <div className="group hover:bg-primary bg-gray-05 flex items-center justify-center rounded-full p-3 transition-all duration-200">
            <Heart className="text-gray-9 size-5 group-hover:text-white" />
          </div>
          <button className="bg-primary hover:bg-hard-primary flex flex-1 cursor-pointer items-center justify-center gap-3 rounded-full py-3.5 text-white transition-all duration-200">
            <span className="text-small font-semibold text-white">
              Add to cart
            </span>
            <Handbag className="size-3.5 text-white" />
          </button>
          <div className="group hover:bg-primary bg-gray-05 flex items-center justify-center rounded-full p-3 transition-all duration-200">
            <Eye className="text-gray-9 size-5 group-hover:text-white" />
          </div>
        </div>
      </div>
      <div className="px-6 py-2">
        <p className="text-large text-hard-primary text-center">{name}</p>
        <div className="mt-2 flex items-center justify-center gap-1">
          <p className="text-gray-9 text-xxl font-medium">
            {formatPrice(discount as number)}
          </p>
          <p className="text-gray-4 text-xxl line-through">
            {formatPrice(price as number)}
          </p>
        </div>
        <div className="mt-2 flex items-center justify-center gap-1">
          <div className="flex items-center gap-0.5">
            <Star className="text-warning size-3 overflow-hidden" />
            <Star className="text-warning size-3 overflow-hidden" />
            <Star className="text-warning size-3 overflow-hidden" />
            <Star className="text-warning size-3 overflow-hidden" />
          </div>
          <p className="text-gray-5 text-tiny">(524) Feedback</p>
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
}
