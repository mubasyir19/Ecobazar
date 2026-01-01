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

export default function SignInPage() {
  const breadcrumbItems = useBreadcrumb();
  return (
    <div className="">
      <AppBreadcrumb items={breadcrumbItems} />
      <div className="flex items-center justify-center py-20">
        <div className="w-1/4 rounded-xl bg-white p-6 shadow-lg">
          <h5 className="text-heading-5 text-center font-semibold text-gray-900">
            Sign In
          </h5>
          <form className="mt-5 space-y-3">
            <div className="group-input">
              <Input type="email" placeholder="Email" />
            </div>
            <div className="group-input">
              <Input type="password" placeholder="Password" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-gray-6 text-small">
                  Remember me
                </label>
              </div>
              <Link href={`#`} className="text-gray-6 text-small">
                Forgot Password?
              </Link>
            </div>
            <div className="">
              <Button
                variant={"fill"}
                size={"sm"}
                type="submit"
                className="w-full"
              >
                Login
              </Button>
            </div>
          </form>
          <div className="mt-5">
            <p className="text-gray-6 text-small text-center">
              Don&apos;t have account?{" "}
              <Link
                href={`/account/create-account`}
                className="text-gray-9 font-medium"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
