"use client";

import React from "react";
import Link from "next/link";
import { House } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export type BreadcrumbItemType = {
  label: string;
  href?: string;
};

interface AppBreadcrumbProps {
  items: BreadcrumbItemType[];
}

export default function AppBreadcrumb({ items }: AppBreadcrumbProps) {
  return (
    <div className="bg-[url('/images/breadcrumbs.webp')] bg-cover bg-center">
      <Breadcrumb className="mx-auto max-w-[1440px] py-8">
        <BreadcrumbList>
          {/* Home */}
          <BreadcrumbLink asChild>
            <Link href="/">
              <House className="text-gray-6 size-5" />
            </Link>
          </BreadcrumbLink>

          {items.map((item, i) => {
            const isLast = i === items.length - 1;

            return (
              <React.Fragment key={i}>
                <BreadcrumbSeparator className="mx-0.5 text-gray-400" />

                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-primary font-medium">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        href={item.href ?? "#"}
                        className="text-gray-6 hover:text-gray-7"
                      >
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
