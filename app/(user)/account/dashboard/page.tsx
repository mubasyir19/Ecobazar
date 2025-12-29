"use client";

import AppBreadcrumb from "@/components/molecules/AppBreadCrumb";
import MainDash from "@/components/organism/Dashboard/MainDash/MainDash";
import OrderHistory from "@/components/organism/Dashboard/OrderHistory/OrderHistory";
import { useBreadcrumb } from "@/hooks/Breadcrumb/useBreadcrumb";
import {
  Handbag,
  Heart,
  LayoutDashboard,
  LogOut,
  RefreshCw,
  Settings,
} from "lucide-react";
import { useState } from "react";

const tabs = [
  {
    name: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "orderHistory",
    label: "Order History",
    icon: RefreshCw,
  },
  {
    name: "wishlist",
    label: "Wishlist",
    icon: Heart,
  },
  {
    name: "shoppingCart",
    label: "Shopping Cart",
    icon: Handbag,
  },
  {
    name: "settings",
    label: "Settings",
    icon: Settings,
  },
  {
    name: "logout",
    label: "Logout",
    icon: LogOut,
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const breadcrumbItems = useBreadcrumb();

  const handleClickTab = (name: string) => {
    setActiveTab(name);
  };

  const renderContentTab = () => {
    switch (activeTab) {
      case "dashboard":
        return <MainDash />;
      case "orderHistory":
        return <OrderHistory />;
      case "wishlist":
        return <></>;
      case "shoppingCart":
        return <></>;
      case "settings":
        return <></>;
      case "logout":
        return <></>;
      default:
        return <></>;
    }
  };

  return (
    <div className="">
      <AppBreadcrumb items={breadcrumbItems} />
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-stretch gap-6 py-8">
          <div className="border-gray-1 h-fit w-72 rounded-lg border py-2">
            <div className="px-5 py-4">
              <p className="text-gray-9 text-xl font-medium">Navigation</p>
            </div>
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <div
                  key={i}
                  onClick={() => handleClickTab(tab.name)}
                  className={`group hover:bg-green-gray-05 hover:border-primary flex cursor-pointer items-center gap-2.5 border-l-2 px-4 py-4 transition-all duration-300 ${activeTab === tab.name ? "border-primary bg-green-gray-05" : "border-transparent"}`}
                >
                  <Icon
                    className={`group-hover:text-gray-9 size-5 transition-all duration-300 group-hover:font-medium ${activeTab === tab.name ? "text-gray-9 font-medium" : "text-gray-6"}`}
                  />
                  <p
                    className={`text-medium group-hover:text-gray-9 transition-all duration-300 group-hover:font-medium ${activeTab === tab.name ? "text-gray-9 font-medium" : "text-gray-6"}`}
                  >
                    {tab.label}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex-1">{renderContentTab()}</div>
        </div>
      </div>
    </div>
  );
}
