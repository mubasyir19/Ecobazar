import {
  ChevronDown,
  Handbag,
  Heart,
  MapPin,
  PhoneCall,
  Search,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  group: "Home" | "Menu";
}

export default function Navbar({ group }: NavbarProps) {
  const bgClass = {
    Home: "bg-gray-9",
    Menu: "bg-white",
  };

  const hoverColor =
    group === "Home" ? "group-hover:text-white" : "group-hover:text-primary";

  return (
    <nav className="">
      <div className="border-gray-1 border-b py-2">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="text-gray-6 size-5" />
            <p className="text-tiny text-gray-6">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Select>
              <SelectTrigger className="text-tiny w-fit">
                <SelectValue placeholder="Lang" />
              </SelectTrigger>
              <SelectContent className="text-tiny">
                <SelectItem value="light" className="text-tiny">
                  Eng
                </SelectItem>
                <SelectItem value="dark" className="text-tiny">
                  Ind
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="text-tiny w-fit">
                <SelectValue placeholder="IDR" />
              </SelectTrigger>
              <SelectContent className="text-tiny">
                <SelectItem value="light" className="text-tiny">
                  IDR
                </SelectItem>
                <SelectItem value="dark" className="text-tiny">
                  USD
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="text-gray-6 text-large">|</div>
            <div>
              <p className="text-tiny text-gray-6 flex items-center gap-1">
                <Link href={`#`}>Sign In</Link> /<Link href={`#`}>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between py-5">
        <div className="flex items-center gap-2">
          <Image
            src={`/images/logo.png`}
            width={32}
            height={29}
            alt="logo"
            className=""
          />
          <h5 className="text-green-gray-9 text-heading-5 font-medium">
            Ecobazar
          </h5>
        </div>
        <div className="">
          <div className="border-gray-1 flex items-center overflow-hidden rounded-md border bg-white">
            {/* Icon */}
            <div className="text-gray-9 px-4">
              <Search className="size-5" />
            </div>
            {/* Input */}
            <input
              type="text"
              placeholder="Search"
              className="py-py-2.5 text-small flex-1 px-2 text-gray-700 outline-none"
            />
            {/* Button */}
            <button className="bg-primary hover:bg-hard-primary cursor-pointer gap-2 rounded-r-sm px-6 py-2.5 text-xs font-semibold text-white">
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Heart className="text-gray-9 size-6" />
          <div className="text-gray-6 text-large">|</div>
          <div className="relative">
            <Handbag className="text-gray-9 size-6" />
          </div>
          <div className="">
            <p className="text-tiny text-gray-7">Shopping cart:</p>
            <p className="text-small text-gray-9 font-medium">$57.00</p>
          </div>
        </div>
      </div>
      <div className={`border-gray-1 w-full border ${bgClass[group]} py-4`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <ul className="flex items-center gap-8">
            <li className="group flex cursor-pointer items-center gap-1">
              <span
                className={`text-gray-4 text-small font-medium transition-all duration-150 ${hoverColor}`}
              >
                Home
              </span>
              <ChevronDown
                className={`text-gray-4 size-4 transition-all duration-150 ${hoverColor}`}
              />
            </li>
            <li className="group flex cursor-pointer items-center gap-1">
              <span
                className={`text-gray-4 text-small font-medium transition-all duration-150 ${hoverColor}`}
              >
                Shop
              </span>
              <ChevronDown
                className={`text-gray-4 size-4 transition-all duration-150 ${hoverColor}`}
              />
            </li>
            <li className="group flex cursor-pointer items-center gap-1">
              <span
                className={`text-gray-4 text-small font-medium transition-all duration-150 ${hoverColor}`}
              >
                Pages
              </span>
              <ChevronDown
                className={`text-gray-4 size-4 transition-all duration-150 ${hoverColor}`}
              />
            </li>
            <li className="group flex cursor-pointer items-center gap-1">
              <span
                className={`text-gray-4 text-small font-medium transition-all duration-150 ${hoverColor}`}
              >
                Blog
              </span>
              <ChevronDown
                className={`text-gray-4 size-4 transition-all duration-150 ${hoverColor}`}
              />
            </li>
            <li className="group flex cursor-pointer items-center gap-1">
              <span
                className={`text-gray-4 text-small font-medium transition-all duration-150 ${hoverColor}`}
              >
                About Us
              </span>
              <ChevronDown
                className={`text-gray-4 size-4 transition-all duration-150 ${hoverColor}`}
              />
            </li>
            <li className="group flex cursor-pointer items-center gap-1">
              <span
                className={`text-gray-4 text-small font-medium transition-all duration-150 ${hoverColor}`}
              >
                Contact Us
              </span>
              <ChevronDown
                className={`text-gray-4 size-4 transition-all duration-150 ${hoverColor}`}
              />
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <PhoneCall className="size-5 text-white" />
            <p className="text-small font-medium text-white">(219) 555-0114</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
