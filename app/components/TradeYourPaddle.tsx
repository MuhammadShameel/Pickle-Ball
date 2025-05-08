import React from "react";
import Image from "next/image";
import FooterSection from "./Footer";

import Paddle from "../../public/assets/images/benefits-paddle.png";

const TradeYourPaddle = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="mt-2 px-3 sm:px-3.5 md:px-5">
        <div className="container mx-auto">
          <div className="">
            <div className="flex flex-col items-center">
              <div className="w-full xl:w-2/3">
                <h1 className="text-green uppercase leading-[80.769%] text-center">
                  Trade Your Paddle
                </h1>
              </div>

              <p className="leading-normal mt-4 text-center">
                Welcome to the House Pickleball Paddle Buyback Program! Trade in
                your old paddles and get a rebate on our new House MAX paddle.
                Help us promote sustainability while enjoying the latest in
                paddle technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-100">
        <div className="mb-3.5 sm:mb-6">
          <h3 className="uppercase text-black text-center leading-[100%] font-wide">
            How It Works
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col justify-center bg-dark-green ">
            <div className="xl:w-5/5 2xl:w-4/5 p-5 lg:ps-10 xl:ps-20 sm:py-22 md:py-24 lg:py-12 text-center lg:text-left">
              <div className="flex lg:flex-row flex-col items-center lg:items-start gap-2.5 md:gap-5 pb-2.5 md:pb-6 ">
                <div className="">
                  <h2 className="font-h1 text-light-green font-bold! leading-[80%]">
                    1
                  </h2>
                </div>
                <div>
                  <h2 className="font-Allotrope  font-bold text-white leading-[100%] uppercase">
                    Fill Out the Form
                  </h2>
                  <p className="text-[#D2DCD9] mt-1 md:mt-3.5">
                    Complete the buyback form below to register your paddle for
                    the program.
                  </p>
                </div>
              </div>
              <hr className="w-full text-[#4B7365]" />
              <div className="flex lg:flex-row flex-col items-center lg:items-start  gap-2.5 md:gap-5 py-2.5 md:py-6 ">
                <div className="">
                  <h2 className="font-h1 text-light-green font-bold! leading-[80%]">
                    2
                  </h2>
                </div>
                <div>
                  <h2 className="font-Allotrope  font-bold text-white leading-[100%] uppercase">
                    Send Us Your Paddle
                  </h2>
                  <p className="text-[#D2DCD9] mt-1 md:mt-3.5">
                    Ship your old paddle to us using the provided return label.
                  </p>
                </div>
              </div>
              <hr className="w-full text-[#4B7365]" />
              <div className="flex lg:flex-row flex-col items-center lg:items-start gap-2.5 md:gap-5  pt-2.5 md:pt-6">
                <div className="">
                  <h2 className="font-h1 text-light-green font-bold! leading-[80%]">
                    3
                  </h2>
                </div>
                <div>
                  <h2 className="font-Allotrope  font-bold text-white leading-[100%] uppercase">
                    Receive Your Rebate
                  </h2>
                  <p className="text-[#D2DCD9] mt-1 md:mt-3.5">
                    Once we receive your paddle, we’ll send you a rebate code
                    for $50 off your new House MAX paddle.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-pink">
            <div className="xl:w-5/5 p-5 lg:px-10 xl:px-20  sm:py-22 md:py-24 lg:py-12">
              <h2 className="uppercase text-black leading-[100%] text-center">
                Paddle Buyback Form
              </h2>
              <form
                action=""
                method="post"
                className="flex flex-col gap-3.5 sm:gap-5 mt-7.5 sm:mt-9 md:mt-12.5"
              >
                <div className="flex gap-2.5">
                  <div className="flex flex-col w-full gap-0.5">
                    <label
                      htmlFor="firstName"
                      className="fs-18 text-[#332929] leading-normal"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input-field bg-[rgba(0,0,0,0.07)] border-0!"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-0.5">
                    <label
                      htmlFor="lastName"
                      className="fs-18 text-[#332929] leading-normal"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input-field bg-[rgba(0,0,0,0.07)] border-0!"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-0.5">
                  <label
                    htmlFor="contactNumber"
                    className="fs-18 text-[#332929] leading-normal"
                  >
                    Contact Number
                  </label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="input-field bg-[rgba(0,0,0,0.07)] border-0!"
                  />
                </div>
                <div className="flex flex-col w-full gap-0.5">
                  <label
                    htmlFor="emailAddress"
                    className="fs-18 text-[#332929] leading-normal"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="input-field bg-[rgba(0,0,0,0.07)] border-0!"
                  />
                </div>

                <button className="btn btn-white text-black! leading-normal cursor-pointer text-center shadow-sm mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col justify-center bg-light-green">
            <div className="xl:w-5/5 2xl:w-4/5 px-5  xl:ps-20 py-20 sm:py-22 md:py-24 lg:py-12 text-center lg:text-left">
              <h2 className="font-h1 text-black uppercase leading-[80.769%]">
                Benefits
              </h2>
              <ul className="leading-normal text-grey mt-3.5 md:mt-6 lg:list-disc lg:ps-6 flex flex-col items-center lg:items-start gap-3.5">
                <li>
                  <span className="font-bold! block lg:inline-block">
                    Save Money:
                  </span>
                  Get a discount on the latest House MAX paddle.
                </li>
                <li>
                  <span className="font-bold! block lg:inline-block">
                    Promote Sustainability:{" "}
                  </span>
                  Your old paddle will be refurbished and donated to community
                  programs.
                </li>
                <li>
                  <span className="font-bold! block lg:inline-block">
                    Easy Process:
                  </span>{" "}
                  Simple steps to participate and enjoy your new paddle.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-3  ">
            <Image className="mx-auto" src={Paddle} alt="Paddle" />
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <FooterSection />
    </>
  );
};

export default TradeYourPaddle;
