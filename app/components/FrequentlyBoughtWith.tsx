import Link from "next/link";
import React from "react";

const FrequentlyBoughtWith = ({ className = "" }) => {
  return (
    <>
      <div
        className={`grid grid-cols-1 ${className} gap-y-2.5 md:gap-y-4 gap-x-5`}
      >
        <div className="flex flex-row justify-between gap-2.5">
          <div className="flex flex-row gap-3.5 items-start md:items-center justify-start ">
            <div className="img-wrapper min-w-[70px] md:min-w-[90px] lg:min-w-[100px] aspect-square rounded-[10px] overflow-hidden ">
              <img
                src="../../public/assets/images/product.png"
                alt="demo"
                className="w-full! h-full! object-cover"
                width={100}
                height={100}
              />
            </div>
            <div className="">
              <Link href={"/"} className="hover:underline transition-all">
                <p className="product-name fs-18 text-[#808080] leading-normal">
                  Bread 'n Butter Paddle
                </p>
              </Link>
              <p className="text-black font-bold! leading-normal mt-1 md:mt-3">
                74.99 $
              </p>
            </div>
          </div>
          <div className=" flex items-center">
            <input
              type="checkbox"
              className="checkbox border-2  border-[#1E503F] w-[20px]! h-[20px]!"
              id="one"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2.5">
          <div className="flex flex-row gap-3.5 items-start md:items-center justify-start ">
            <div className="img-wrapper min-w-[70px] md:min-w-[90px] lg:min-w-[100px] aspect-square rounded-[10px] overflow-hidden ">
              <img
                src="../../public/assets/images/product.png"
                alt="demo"
                className="w-full! h-full! object-cover"
                width={100}
                height={100}
              />
            </div>
            <div className="">
              <Link href={"/"} className="hover:underline transition-all">
                <p className="product-name fs-18 text-[#808080] leading-normal">
                  Bread 'n Butter Paddle
                </p>
              </Link>
              <p className="text-black font-bold! leading-normal mt-1 md:mt-3">
                74.99 $
              </p>
            </div>
          </div>
          <div className=" flex items-center">
            <input
              type="checkbox"
              className="checkbox border-2  border-[#1E503F] w-[20px]! h-[20px]!"
              id="one"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2.5">
          <div className="flex flex-row gap-3.5 items-start md:items-center justify-start ">
            <div className="img-wrapper min-w-[70px] md:min-w-[90px] lg:min-w-[100px] aspect-square rounded-[10px] overflow-hidden ">
              <img
                src="../../public/assets/images/product.png"
                alt="demo"
                className="w-full! h-full! object-cover"
                width={100}
                height={100}
              />
            </div>
            <div className="">
              <Link href={"/"} className="hover:underline transition-all">
                <p className="product-name fs-18 text-[#808080] leading-normal">
                  Bread 'n Butter Paddle
                </p>
              </Link>
              <p className="text-black font-bold! leading-normal mt-1 md:mt-3">
                74.99 $
              </p>
            </div>
          </div>
          <div className=" flex items-center">
            <input
              type="checkbox"
              className="checkbox border-2  border-[#1E503F] w-[20px]! h-[20px]!"
              id="one"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2.5">
          <div className="flex flex-row gap-3.5 items-start md:items-center justify-start ">
            <div className="img-wrapper min-w-[70px] md:min-w-[90px] lg:min-w-[100px] aspect-square rounded-[10px] overflow-hidden ">
              <img
                src="../../public/assets/images/product.png"
                alt="demo"
                className="w-full! h-full! object-cover"
                width={100}
                height={100}
              />
            </div>
            <div className="">
              <Link href={"/"} className="hover:underline transition-all">
                <p className="product-name fs-18 text-[#808080] leading-normal">
                  Bread 'n Butter Paddle
                </p>
              </Link>
              <p className="text-black font-bold! leading-normal mt-1 md:mt-3">
                74.99 $
              </p>
            </div>
          </div>
          <div className=" flex items-center">
            <input
              type="checkbox"
              className="checkbox border-2  border-[#1E503F] w-[20px]! h-[20px]!"
              id="one"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentlyBoughtWith;
