import { SocialIcon } from "react-social-icons";
import { Button } from "../ui/button";

export default function Subscribe() {
  return (
    <div className="bg-gray-05 py-10">
      <div className="mx-auto flex max-w-[1440px] items-center gap-28">
        <div className="">
          <p className="text-gray-9 text-xxl font-semibold">
            Subscribe our Newsletter
          </p>
          <p className="text-small text-gray-4 mt-1 w-3/4">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="flex items-center gap-10">
          <div className="">
            {/* input & button subscribe*/}
            <div className="border-gray-1 flex items-center overflow-hidden rounded-full border bg-white">
              <input
                type="text"
                placeholder="Your email address"
                className="placeholder:text-gray-5 placeholder:text-medium text-medium px-6 py-3.5 focus:outline-none"
              />
              <Button size={"md"} variant={"fill"}>
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* icon social media */}
            <SocialIcon
              network="facebook"
              bgColor="#00b207"
              fgColor="#ffffff"
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              network="twitter"
              bgColor="#00b207"
              fgColor="#ffffff"
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              network="pinterest"
              bgColor="#00b207"
              fgColor="#ffffff"
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              network="instagram"
              bgColor="#00b207"
              fgColor="#ffffff"
              style={{ height: 32, width: 32 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
