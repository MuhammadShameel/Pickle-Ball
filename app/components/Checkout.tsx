import React from "react";
import Image from "next/image";
import ShopPay from "../../public/assets/images/shop_pay_logo.png";
import Paypal from "../../public/assets/images/paypal_logo.png";
import GPay from "../../public/assets/images/g_pay_logo.png";

const Checkout = () => {
  return (
    <>
      <section className="px-3 sm:px-3.5 md:px-5 bg-[#F5F5F5]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-white">
              <div>
                <p className="text-center text-[#808080] leading-normal mb-2.5">
                  Express Checkout
                </p>
                <div className="flex flex-row gap-2.5">
                  <button className="bg-[#5A31F5] btn px-1! flex justify-center items-center w-full cursor-pointer">
                    <Image src={ShopPay} alt="Payment With Shop Pay" />
                  </button>
                  <button className="bg-[#FFC439] btn px-1! flex justify-center items-center w-full cursor-pointer">
                    <Image src={Paypal} alt="Payment With Paypal" />
                  </button>
                  <button className="bg-[#000000] btn px-1! flex justify-center items-center w-full cursor-pointer">
                    <Image src={GPay} alt="Payment With Google Pay" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
