import Link from "next/link";
import React from "react";

export default function MainDash() {
  return (
    <div className="">
      <section className="flex w-full flex-row gap-6">
        <div className="border-gray-1 flex w-4/7 items-center justify-center rounded-lg border p-8">
          <div className="">
            {/* <Image
              src={`#`}
              width={500}
              height={500}
              alt="photo profile"
              className="size-28 rounded-full"
            /> */}
            <div className="mx-auto size-28 rounded-full bg-gray-500"></div>
            <div className="mt-2 text-center">
              <p className="text-gray-9 text-xl font-medium">Dianne Russel</p>
              <p className="text-gray-5 text-sm">Customer</p>
            </div>
            <div className="mt-2.5 text-center">
              <Link href={`#`} className="text-primary text-base font-medium">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="border-gray-1 w-3/7 rounded-lg border p-8">
          <p className="text-gray-4 text-sm font-medium uppercase">
            BILLING ADDRESS
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-gray-9 text-lg font-medium">Dainne Russel</p>
            <p className="text-gray-6 text-sm">
              4140 Parker Rd. Allentown, New Mexico 31134
            </p>
            <p className="text-gray-9 text-base">dainne.ressell@gmail.com</p>
            <p className="text-gray-9 text-base">(671) 555-0110</p>
          </div>
          <div className="mt-5">
            <Link href={`#`} className="text-primary text-base font-medium">
              Edit Address
            </Link>
          </div>
        </div>
      </section>
      <section className="border-gray-1 mt-6 rounded-lg border">
        <div className="flex items-center justify-between px-6 py-4">
          <p className="text-gray-9 text-xl font-medium">
            Recent Order History
          </p>
          <div className="">
            <Link href={`#`} className="text-primary text-base font-medium">
              View All
            </Link>
          </div>
        </div>
        <div className=""></div>
      </section>
    </div>
  );
}
