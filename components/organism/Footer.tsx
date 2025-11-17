import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-9 pt-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex gap-28 pb-14">
          <div className="w-1/3">
            <div className="flex items-center gap-2">
              <Image
                src={`/images/logo.png`}
                width={32}
                height={29}
                alt="logo"
                className=""
              />
              <h5 className="text-heading-5 font-medium text-white">
                Ecobazar
              </h5>
            </div>
            <p className="text-gray-5 text-small mt-4 w-3/4">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <p className="text-small decoration-primary font-medium text-white underline decoration-2 underline-offset-8">
                (219) 555-0114
              </p>
              <p className="text-gray-5 text-small">or</p>
              <p className="text-small decoration-primary font-medium text-white underline decoration-2 underline-offset-8">
                Proxy@gmail.com
              </p>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-4">
            <div className="">
              <p className="text-medium font-mediums text-white">My Account</p>
              <ul className="mt-5 flex flex-col gap-3">
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  My Account
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Order History
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Shopping Cart
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Wishlist
                </Link>
              </ul>
            </div>
            <div className="">
              <p className="text-medium font-mediums text-white">Help</p>
              <ul className="mt-5 flex flex-col gap-3">
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Faqs
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Terms & Condition
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </ul>
            </div>
            <div className="">
              <p className="text-medium font-mediums text-white">Proxy</p>
              <ul className="mt-5 flex flex-col gap-3">
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  About
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Shop
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Product
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Track Order
                </Link>
              </ul>
            </div>
            <div className="">
              <p className="text-medium font-mediums text-white">Categories</p>
              <ul className="mt-5 flex flex-col gap-3">
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Fruit & Vegetables
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Meat & Fish
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Bread & Bakery
                </Link>
                <Link
                  href={`#`}
                  className="text-gray-5 text-small transition-all duration-200 hover:text-white"
                >
                  Beauty & Health
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-gray-5 flex items-center justify-between border-t py-7">
          <p className="text-gray-5 text-small">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <div className=""></div>
        </div>
      </div>
    </footer>
  );
}
