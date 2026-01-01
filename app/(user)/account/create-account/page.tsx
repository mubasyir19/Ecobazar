"use client";

import AppBreadcrumb from "@/components/molecules/AppBreadCrumb";
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
      <AppBreadcrumb items={breadcrumbItems} />
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
              <Link href={`/account/login`} className="text-gray-9 font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
