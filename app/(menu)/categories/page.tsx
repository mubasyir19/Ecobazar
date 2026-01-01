"use client";

import AppBreadcrumb from "@/components/molecules/AppBreadCrumb";
import CategoryCard from "@/components/molecules/CategoryCard";
import Subscribe from "@/components/molecules/Subscribe";
import { categories } from "@/helpers/dataCategory";
import { useBreadcrumb } from "@/hooks/Breadcrumb/useBreadcrumb";

export default function CategoryPage() {
  const breadcrumbItems = useBreadcrumb();

  return (
    <div>
      <AppBreadcrumb items={breadcrumbItems} />
      <div className="mx-auto max-w-[1440px]">
        <div className="pt-16 pb-24">
          <h5 className="text-gray-9 text-heading-5 font-semibold">
            Category Product
          </h5>
          <div className="mt-8 grid grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <CategoryCard
                key={i}
                id={cat.id}
                name={cat.name}
                slug={cat.slug}
                imageLink={cat.imageLink}
              />
            ))}
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
}
