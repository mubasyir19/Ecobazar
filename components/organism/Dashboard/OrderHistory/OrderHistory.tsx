import React from "react";
import { DataTable } from "../MainDash/data-table";
import { columns } from "./columns";
import { dataOrder } from "@/helpers/dataOrder";

export default function OrderHistory() {
  return (
    <div>
      <section className="border-gray-1 rounded-lg border">
        <div className="flex items-center justify-between px-6 py-4">
          <p className="text-gray-9 text-xl font-medium">
            Recent Order History
          </p>
          {/* <div className="">
            <Link href={`#`} className="text-primary text-base font-medium">
              View All
            </Link>
          </div> */}
        </div>
        <div className="">
          <DataTable columns={columns} data={dataOrder} />
        </div>
      </section>
    </div>
  );
}
