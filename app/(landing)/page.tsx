import BestDeals from "@/components/molecules/BestDeals";
import CategoryCard from "@/components/molecules/CategoryCard";
import CountdownTimerV2 from "@/components/molecules/CountdownTimer";
import NewsCard from "@/components/molecules/NewsCard";
import ProductCard from "@/components/molecules/ProductCard";
import Subscribe from "@/components/molecules/Subscribe";
import { Button } from "@/components/ui/button";
import { categories, dummyProducts } from "@/helpers/dataCategory";
import { blogs } from "@/helpers/dataNews";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(23, 59, 59, 999);

  return (
    <div className="">
      <div className="mx-auto max-w-[1440px]">
        <div className="bg-green-gray-05 mt-7 rounded-lg">
          <div className="flex items-center p-24">
            <div className="shrink-0">
              <p className="text-primary text-small font-medium uppercase">
                WELCOME TO ECOBAZAR
              </p>
              <h1 className="text-display-1 text-gray-9 mt-2 leading-none font-semibold">
                Fresh & Healthy <br /> Organic Food
              </h1>
              <div className="mt-7">
                <h5 className="text-heading-5 text-gray-9">
                  Sale up to{" "}
                  <span className="text-warning font-semibold">30% OFF</span>
                </h5>
                <p className="text-small text-gray-5 mt-3">
                  Free shipping on all your order. we deliver, you enjoy
                </p>
              </div>
              <div className="mt-8">
                <Button variant={"fill"} size={"md"}>
                  Shop now <ArrowRight className="size-5" />
                </Button>
              </div>
            </div>
            <div className="">
              <Image
                src={`/images/banner/vege-banner.webp`}
                width={819.17}
                height={503}
                alt="logo"
                className="w-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto -mt-16 grid max-w-7xl grid-cols-4 gap-5 rounded-lg bg-white p-10 shadow-2xl">
          <div className="flex items-center gap-4">
            <Image
              src={`/icons/delivery-truck.svg`}
              width={80}
              height={80}
              alt="deliver"
              className="size-10"
            />
            <div className="space-y-1">
              <p className="text-gray-9 text-medium font-semibold">
                Free Shipping
              </p>
              <p className="text-gray-4 text-small">
                Free shipping on all your order
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={`/icons/headphones.svg`}
              width={80}
              height={80}
              alt="deliver"
              className="size-10"
            />
            <div className="space-y-1">
              <p className="text-gray-9 text-medium font-semibold">
                Customer Support 24/7
              </p>
              <p className="text-gray-4 text-small">
                Instant access to Support
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={`/icons/shopping-bag.svg`}
              width={80}
              height={80}
              alt="deliver"
              className="size-10"
            />
            <div className="space-y-1">
              <p className="text-gray-9 text-medium font-semibold">
                100% Secure Payment
              </p>
              <p className="text-gray-4 text-small">
                We ensure your money is save
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={`/icons/package.svg`}
              width={80}
              height={80}
              alt="deliver"
              className="size-10"
            />
            <div className="space-y-1">
              <p className="text-gray-9 text-medium font-semibold">
                Money-Back Guarantee
              </p>
              <p className="text-gray-4 text-small">
                30 Days Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px]">
        <div className="space-y-12 pt-24">
          <div className="flex items-center justify-between">
            <h5 className="text-gray-9 text-heading-5 font-semibold">
              Popular Categories
            </h5>
            <Link
              href={`#`}
              className="text-primary text-medium flex items-center gap-2 font-medium"
            >
              <span>View all</span>
              <ArrowRight className="size-5" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-6 gap-6">
            {categories.map((cat, i) => (
              <CategoryCard
                key={i}
                id={cat.id}
                name={cat.name}
                slug={cat.slug}
                imageLink={cat.imageLink}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px]">
        <div className="space-y-12 pt-24">
          <div className="flex items-center justify-between">
            <h5 className="text-gray-9 text-heading-5 font-semibold">
              Popular Products
            </h5>
            <Link
              href={`#`}
              className="text-primary text-medium flex items-center gap-2 font-medium"
            >
              <span>View all</span>
              <ArrowRight className="size-5" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-5 gap-0">
            {dummyProducts.slice(0, 10).map((product, i) => (
              <ProductCard
                key={i}
                imageLink={product.imageProduct}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px]">
        <div className="py-24">
          <div className="grid grid-cols-3 justify-items-center gap-6">
            <div className="relative w-full">
              <Image
                src={`/images/promo/promo1.webp`}
                width={424}
                height={536}
                alt="promo"
                className="w-full rounded-md"
              />
              <div className="absolute inset-0 top-8">
                <p className="text-gray-1 text-center text-sm font-medium uppercase">
                  Best Deals
                </p>
                <h3 className="text-heading-3 text-center font-semibold text-white">
                  Sale of the Month
                </h3>
                <div className="flex items-center justify-center">
                  <CountdownTimerV2 targetDate={targetDate} />
                </div>
                <div className="mx-auto mt-7 flex w-full items-center justify-center">
                  <Button variant={"border"} size={"md"}>
                    Shop Now <ArrowRight className="size-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <Image
                src={`/images/promo/promo2.webp`}
                width={424}
                height={536}
                alt="promo"
                className="w-full rounded-md"
              />
              <div className="absolute inset-0 top-8">
                <p className="text-gray-1 text-center text-sm font-medium uppercase">
                  85% Fat Free
                </p>
                <h3 className="text-heading-3 text-center font-semibold text-white">
                  Low-Fat Meat
                </h3>
                <p className="text-gray-1 mt-3 text-center text-xl">
                  Started at{" "}
                  <span className="text-warning font-semibold">$79.99</span>
                </p>
                <div className="mx-auto mt-7 flex w-full items-center justify-center">
                  <Button variant={"border"} size={"md"}>
                    Shop Now <ArrowRight className="size-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <Image
                src={`/images/promo/promo3.webp`}
                width={424}
                height={536}
                alt="promo"
                className="w-full rounded-md"
              />
              <div className="absolute inset-0 top-8">
                <p className="text-gray-9 text-small text-center font-medium uppercase">
                  Summer Sale
                </p>
                <h3 className="text-heading-3 text-gray-9 text-center font-semibold">
                  100% Fresh Fruit
                </h3>
                <p className="text-gray-9 mt-3 text-center text-xl">
                  Up to{" "}
                  <span className="bg-gray-9 text-warning rounded-md px-3 py-1.5 font-semibold">
                    64% OFF
                  </span>
                </p>
                <div className="mx-auto mt-7 flex w-full items-center justify-center">
                  <Button variant={"border"} size={"md"}>
                    Shop Now <ArrowRight className="size-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-05 py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center justify-between">
            <h5 className="text-gray-9 text-heading-5 font-semibold">
              Hot Deals
            </h5>
            <Link
              href={`#`}
              className="text-primary text-medium flex items-center gap-2 font-medium"
            >
              <span>View all</span>
              <ArrowRight className="size-5" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-5 gap-0">
            <BestDeals
              productId={dummyProducts[0].id}
              imageLink={dummyProducts[0].imageProduct}
              name={dummyProducts[0].name}
              price={dummyProducts[0].price}
              rating={5}
              discount={8000}
            />
            {dummyProducts.slice(1, 10).map((product, i) => (
              <ProductCard
                key={i}
                imageLink={product.imageProduct}
                name={product.name}
                price={product.price}
              />
            ))}
            {dummyProducts.slice(0, 2).map((product, i) => (
              <ProductCard
                key={i}
                imageLink={product.imageProduct}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] pt-14">
        <div className="flex w-full justify-end rounded-xl bg-[url('/images/discount.webp')] bg-cover bg-center">
          {/* <div className=""></div> */}
          <div className="py-14 pl-24">
            <p className="text-medium text-white uppercase">SUMMER SALE</p>
            <h1 className="text-heading-1">
              <span className="text-warning font-semibold">37%</span>
              <span className="text-white">OFF</span>
            </h1>
            <p className="text-medium mt-2 w-3/4 text-white/60">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>
            <Button variant={"fill"} size={"md"} className="mt-7">
              Shop now <ArrowRight className="size-5" />
            </Button>
          </div>
          {/* <Image
            src={`/images/discount.webp`}
            width={1320}
            height={358}
            alt=""
            className="rounded-lg"
          /> */}
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] pt-14">
        <div className="flex items-center justify-between">
          <h5 className="text-gray-9 text-heading-5 font-semibold">
            Featured Products
          </h5>
          <Link
            href={`#`}
            className="text-primary text-medium flex items-center gap-2 font-medium"
          >
            <span>View all</span>
            <ArrowRight className="size-5" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-5 gap-0">
          {dummyProducts.slice(0, 5).map((product, i) => (
            <ProductCard
              key={i}
              imageLink={product.imageProduct}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] py-14">
        <div className="flex items-center justify-center">
          <h5 className="text-gray-9 text-heading-5 font-semibold">
            Latest News
          </h5>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {blogs.slice(0, 3).map((item, i) => (
            <NewsCard
              key={i}
              newsId={item.id}
              thumbnail={item.thumbnail as string}
              title={item.title}
              category={item.category.name}
              author={item.author as string}
              totalComment={2}
            />
          ))}
        </div>
      </div>
      <Subscribe />
    </div>
  );
}
