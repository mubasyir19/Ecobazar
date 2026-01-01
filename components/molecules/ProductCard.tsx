import { formatPrice } from "@/helpers/formatPrice";
import { Handbag, Heart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface ProductCardProps {
  productId?: string;
  imageLink?: string;
  name?: string;
  price?: number;
  rating?: number;
  discount?: number;
  bestSale?: boolean;
  description: string;
  skuCode: string;
  categoryProduct: string;
}

export default function ProductCard({
  productId,
  imageLink,
  name,
  price,
  rating,
  description,
  skuCode,
  categoryProduct,
}: ProductCardProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="border-gray-1 hover:border-primary hover:shadow-hard-primary cursor-pointer border bg-white transition-all duration-200 hover:shadow-md">
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
        </DialogTrigger>
        <DialogContent className="p-10 sm:max-w-[425px] md:max-w-3/4">
          <DialogTitle></DialogTitle>
          {/* <p>test product quick view</p> */}
          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <Image
                src={`${imageLink}`}
                width={264}
                height={240}
                alt="product"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="">
              <div className="flex items-center gap-4">
                <h1 className="text-heading-4 text-gray-9 font-semibold">
                  {name}
                </h1>
                <span className="bg-primary/10 text-primary rounded-md px-3 py-1.5 text-xs">
                  In Stock
                </span>
              </div>
              <div className="my-3 flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5">
                    <Star className="text-warning size-4 overflow-hidden" />
                    <Star className="text-warning size-4 overflow-hidden" />
                    <Star className="text-warning size-4 overflow-hidden" />
                    <Star className="text-warning size-4 overflow-hidden" />
                  </div>
                  <p className="text-small text-gray-6">4 reviews</p>
                </div>
                <p>•</p>
                <p className="text-small">
                  <span className="text-gray-8 font-medium">SKU:</span>{" "}
                  <span className="text-gray-6">{skuCode}</span>
                </p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-gray-4 text-xl font-medium line-through">
                  {formatPrice(20000)}
                </p>
                <p className="text-hard-primary text-xl font-semibold">
                  {formatPrice(price as number)}
                </p>
              </div>
              <hr className="border-gray-05 my-6 w-full border" />
              <p className="text-small text-gray-5">{description}</p>
              <hr className="border-gray-05 my-6 w-full border" />
              <div className="flex items-center gap-3">
                <div className="border-gray-1 flex items-center gap-3 rounded-full border p-1.5">
                  <button className="text-gray-9 bg-gray-05 flex size-6 cursor-pointer items-center justify-center rounded-full text-center">
                    -
                  </button>
                  <p className="text-small text-gray-9">5</p>
                  <button className="text-gray-9 bg-gray-05 flex size-6 cursor-pointer items-center justify-center rounded-full text-center">
                    +
                  </button>
                </div>
                <button className="bg-primary text-small hover:bg-hard-primary flex-1 cursor-pointer rounded-full py-2 text-center text-white transition-all duration-200">
                  Add to Cart
                </button>
                <button className="bg-primary/10 flex size-9 cursor-pointer items-center justify-center rounded-full">
                  <Heart className="text-primary size-4" />
                </button>
              </div>
              <hr className="border-gray-05 my-6 w-full border" />
              <p className="text-gray-9 text-small">
                <span className="font-medium">Category: </span>{" "}
                <span className="text-gray-6">{categoryProduct}</span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
