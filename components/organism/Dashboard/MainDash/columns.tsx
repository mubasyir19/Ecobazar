"use client";

import { Order } from "@/types/order";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "orderCode",
    header: "order id",
  },
  {
    accessorKey: "createdAt",
    header: "date",
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt);
      return date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },
  },
  {
    accessorKey: "totalPrice",
    header: "total",
    cell: ({ row }) => {
      const price = row.original.totalPrice ?? 0;
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
    },
  },
  // {
  //   accessorKey: "status",
  //   header: "STATUS",
  // },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => {
      return (
        <Link
          href={`/order/${row.original.id}`}
          className="text-small text-primary font-medium"
        >
          View Details
        </Link>
      );
    },
  },
];
