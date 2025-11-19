"use client";

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
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="flex items-stretch gap-6 py-8">
        <div className="border-gray-1 w-72 rounded-lg border py-2">
          <div className="px-5 py-4">
            <p className="text-gray-9 text-xl font-medium">Navigation</p>
          </div>
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <div
                key={i}
                className={`flex items-center gap-2.5 border-l px-2.5 py-4`}
              ></div>
            );
          })}
        </div>
        <div className="flex-1 bg-emerald-300"></div>
      </div>
    </div>
  );
}
