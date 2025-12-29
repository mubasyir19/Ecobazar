"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface CategoryCardProps {
  id: string;
  name: string;
  slug: string;
  imageLink: string;
}

export default function CategoryCard({
  id,
  name,
  slug,
  imageLink,
}: CategoryCardProps) {
  const router = useRouter();

  return (
    <div
      id={id}
      onClick={() => router.push(`/categories/${slug}`)}
      className="border-gray-1 group hover:border-primary hover:shadow-hard-primary cursor-pointer rounded-md border bg-white pt-4 pb-6 transition-all duration-200 hover:shadow-lg"
    >
      <Image
        src={`${imageLink}`}
        width={190}
        height={130}
        alt={name}
        className="mx-auto"
      />
      <p className="text-large text-gray-9 group-hover:text-hard-primary mt-4 text-center font-medium">
        {name}
      </p>
    </div>
  );
}
