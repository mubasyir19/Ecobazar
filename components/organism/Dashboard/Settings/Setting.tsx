"use client";

import Subscribe from "@/components/molecules/Subscribe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useRef, useState } from "react";

export default function SettingDash() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>("");

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <div>
      <section className="border-gray-1 rounded-lg border">
        <div className="flex items-center justify-between px-6 py-4">
          <p className="text-gray-9 text-xl font-medium">Account Settings</p>
        </div>
        <form className="border-gray-1 border-t p-6">
          <div className="flex w-full flex-row gap-6">
            <div className="w-4/7 space-y-4">
              <div className="group-input">
                <label className="text-gray-9 text-small">Fist name</label>
                <Input
                  type="text"
                  placeholder="First name"
                  className="mt-1.5"
                />
              </div>
              <div className="group-input">
                <label className="text-gray-9 text-small">Last name</label>
                <Input type="text" placeholder="Last name" className="mt-1.5" />
              </div>
              <div className="group-input">
                <label className="text-gray-9 text-small">Email</label>
                <Input
                  type="email"
                  placeholder="example@mail.com"
                  className="mt-1.5"
                />
              </div>
              <div className="group-input">
                <label className="text-gray-9 text-small">Phone Number</label>
                <Input
                  type="email"
                  placeholder="example@mail.com"
                  className="mt-1.5"
                />
              </div>
            </div>
            <div className="flex w-3/7 items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                {/* Preview Image */}
                <div className="bg-gray-05 h-56 w-56 overflow-hidden rounded-full">
                  {preview ? (
                    <Image
                      src={preview}
                      width={300}
                      height={300}
                      alt="Profile Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Button */}
                <button
                  onClick={handleClick}
                  type="button"
                  className="cursor-pointer rounded-full border-2 border-green-500 px-7 py-2 text-sm font-semibold text-green-500 transition-all hover:bg-green-500 hover:text-white"
                >
                  Choose Image
                </button>

                {/* Hidden Input */}
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Button variant={"fill"} size={"sm"}>
              Save Changes
            </Button>
          </div>
        </form>
      </section>
      <section className="border-gray-1 mt-6 rounded-lg border">
        <div className="flex items-center justify-between px-6 py-4">
          <p className="text-gray-9 text-xl font-medium">Billing Address</p>
        </div>
        <form className="border-gray-1 space-y-4 border-t p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="group-input">
              <label className="text-gray-9 text-small">Fist name</label>
              <Input type="text" placeholder="First name" className="mt-1.5" />
            </div>
            <div className="group-input">
              <label className="text-gray-9 text-small">Last name</label>
              <Input type="text" placeholder="Last name" className="mt-1.5" />
            </div>
            <div className="group-input">
              <label className="text-gray-9 text-small">
                Company Name <span className="text-gray-50">(Optional)</span>
              </label>
              <Input
                type="text"
                placeholder="Company name"
                className="mt-1.5"
              />
            </div>
          </div>
          <div className="">
            <div className="group-input">
              <label className="text-gray-9 text-small">Street Address</label>
              <Input type="text" placeholder="First name" className="mt-1.5" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full">
              <label className="text-gray-9 text-small mb-2 block">
                Country / Region
              </label>
              <Select>
                <SelectTrigger className="text-tiny w-full">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectGroup className="text-tiny">
                    <SelectLabel className="text-tiny">Fruits</SelectLabel>
                    <SelectItem value="apple" className="text-tiny">
                      Apple
                    </SelectItem>
                    <SelectItem value="banana" className="text-tiny">
                      Banana
                    </SelectItem>
                    <SelectItem value="blueberry" className="text-tiny">
                      Blueberry
                    </SelectItem>
                    <SelectItem value="grapes" className="text-tiny">
                      Grapes
                    </SelectItem>
                    <SelectItem value="pineapple" className="text-tiny">
                      Pineapple
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <label className="text-gray-9 text-small mb-2 block">
                States
              </label>
              <Select>
                <SelectTrigger className="text-tiny w-full">
                  <SelectValue placeholder="Select states" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup className="text-tiny">
                    <SelectLabel className="text-tiny">Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <div className="group-input">
                <label className="text-gray-9 text-small">Zip Code</label>
                <Input type="text" placeholder="Zip Code" className="mt-1.5" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="group-input">
              <label className="text-gray-9 text-small">Email</label>
              <Input
                type="email"
                placeholder="example@mail.com"
                className="mt-1.5"
              />
            </div>
            <div className="group-input">
              <label className="text-gray-9 text-small">Phone</label>
              <Input
                type="text"
                placeholder="Phone number"
                className="mt-1.5"
              />
            </div>
          </div>
          <div className="mt-6">
            <Button variant={"fill"} size={"sm"}>
              Save Changes
            </Button>
          </div>
        </form>
      </section>
      <section className="border-gray-1 mt-6 rounded-lg border">
        <div className="flex items-center justify-between px-6 py-4">
          <p className="text-gray-9 text-xl font-medium">Change Password</p>
        </div>
        <form className="border-gray-1 space-y-4 border-t p-6">
          <div className="group-input">
            <label className="text-gray-9 text-small">Current Password</label>
            <Input
              type="password"
              placeholder="Current Password"
              className="mt-1.5"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="group-input">
              <label className="text-gray-9 text-small">New Password</label>
              <Input
                type="password"
                placeholder="New password"
                className="mt-1.5"
              />
            </div>
            <div className="group-input">
              <label className="text-gray-9 text-small">Confirm Password</label>
              <Input
                type="password"
                placeholder="Confirm password"
                className="mt-1.5"
              />
            </div>
          </div>
          <div className="mt-6">
            <Button variant={"fill"} size={"sm"}>
              Change Password
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
