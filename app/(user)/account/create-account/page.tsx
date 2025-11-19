"use client";

import Subscribe from "@/components/molecules/Subscribe";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useBreadcrumb } from "@/hooks/Breadcrumb/useBreadcrumb";
import { House } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function RegisterAccountPage() {
  const breadcrumbItems = useBreadcrumb();

  return (
    <div className="">
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
      <div className="flex items-center justify-center py-20">
        <div className="w-1/4 rounded-xl bg-white p-6 shadow-lg">
          <h5 className="text-heading-5 text-center font-semibold text-gray-900">
            Create Account
          </h5>
          <form className="mt-5 space-y-3">
            <div className="group-input">
              <Input type="email" placeholder="Email" />
            </div>
            <div className="group-input">
              <Input type="password" placeholder="Password" />
            </div>
            <div className="group-input">
              <Input type="password" placeholder="Confirm Password" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-gray-6 text-small">
                  Accept all terms & Conditions
                </label>
              </div>
            </div>
            <div className="">
              <Button
                variant={"fill"}
                size={"sm"}
                type="submit"
                className="w-full"
              >
                Create Account
              </Button>
            </div>
          </form>
          <div className="mt-5">
            <p className="text-gray-6 text-small text-center">
              Already have account?{" "}
              <Link href={`#`} className="text-gray-9 font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
}
