"use client";

import ProductCard from "@/components/molecules/ProductCard";
import Subscribe from "@/components/molecules/Subscribe";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dummyProducts } from "@/helpers/dataCategory";
import { useBreadcrumb } from "@/hooks/Breadcrumb/useBreadcrumb";
import { House } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ShopPage() {
  const breadcrumbItems = useBreadcrumb();

  return (
    <div>
      <div className="bg-[url('/images/breadcrumbs.webp')] bg-cover bg-center">
        <Breadcrumb className="mx-auto max-w-[1440px] py-8">
          <BreadcrumbList>
            <BreadcrumbLink asChild>
              <Link href={`/`}>
                <House className="text-gray-6 size-5" />
              </Link>
            </BreadcrumbLink>
            {breadcrumbItems.map((item, i) => {
              const isLast = i === breadcrumbItems.length - 1;

              return (
                <React.Fragment key={i}>
                  {/* Separator */}
                  <BreadcrumbSeparator className="mx-0.5 text-gray-400" />

                  {/* Breadcrumb Item */}
                  <BreadcrumbItem>
                    {isLast ? (
                      // Last item → green
                      <BreadcrumbPage className="text-primary font-medium">
                        {item.label}
                      </BreadcrumbPage>
                    ) : (
                      // Middle / initial → gray and link
                      <BreadcrumbLink asChild>
                        <a
                          href={item.href}
                          className="hover:text-gray-7 text-gray-6"
                        >
                          {item.label}
                        </a>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="text-tiny w-fit">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="text-tiny">
                <SelectItem value="light" className="text-tiny">
                  Eng
                </SelectItem>
                <SelectItem value="dark" className="text-tiny">
                  Ind
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="text-tiny w-fit">
                <SelectValue placeholder="Select Price" />
              </SelectTrigger>
              <SelectContent className="text-tiny">
                <SelectItem value="light" className="text-tiny">
                  Eng
                </SelectItem>
                <SelectItem value="dark" className="text-tiny">
                  Ind
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="text-tiny w-fit">
                <SelectValue placeholder="Select Rating" />
              </SelectTrigger>
              <SelectContent className="text-tiny">
                <SelectItem value="light" className="text-tiny">
                  Eng
                </SelectItem>
                <SelectItem value="dark" className="text-tiny">
                  Ind
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="text-tiny w-fit">
                <SelectValue placeholder="Sort by: Latest" />
              </SelectTrigger>
              <SelectContent className="text-tiny">
                <SelectItem value="light" className="text-tiny">
                  Eng
                </SelectItem>
                <SelectItem value="dark" className="text-tiny">
                  Ind
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="text-tiny w-fit">
                <SelectValue placeholder="Show: 16" />
              </SelectTrigger>
              <SelectContent className="text-tiny">
                <SelectItem value="light" className="text-tiny">
                  Eng
                </SelectItem>
                <SelectItem value="dark" className="text-tiny">
                  Ind
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] pb-14">
        <div className="grid grid-cols-4 gap-6">
          {dummyProducts.slice(0, 8).map((item, i) => (
            <ProductCard
              key={i}
              productId={item.id}
              imageLink={item.imageProduct}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <Subscribe />
    </div>
  );
}
