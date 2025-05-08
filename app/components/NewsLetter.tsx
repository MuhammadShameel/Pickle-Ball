import React from "react";
import Image from "next/image";

import Paddle from "../../public/assets/images/subscribe-section-paddle.png";

const NewsLetter = () => {
  return (
    <>
      <section className="mt-100 px-3 sm:px-3.5 md:px-5 bg-dark-green">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between text-white relative">
            <div className="w-full lg:w-2/5 relative z-1 ">
              <div className="pt-7 md:pt-10 lg:py-10 text-center lg:text-left">
                {" "}
                <h2 className="font-h1 leading-[80.769%] uppercase">
                  Subscribe to our newsletter
                </h2>
              </div>
            </div>

            <div className="w-full lg:w-2/6 relative z-1">
              <div className="text-center lg:text-left mt-3.5 md:mt-6 lg:mt-0">
                <p className="text-[#FFFFFF] font-light leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer eros lectus, euismod et maximus.
                </p>
                <form action="" method="post">
                  <div className="flex mt-6 rounded-[6px] overflow-hidden">
                    <input
                      placeholder="Enter Email"
                      type="text"
                      className="w-full outline-none! px-3.5 md:px-6 py-2.5 md:py-3.5"
                      style={{ background: "rgba(255, 255, 255, 0.20)" }}
                    />
                    <button className="btn-white  cursor-pointer rounded-l-none! p-2.5 md:p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.4299 5.93018L20.4999 12.0002L14.4299 18.0702"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.5 12H20.33"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="img-wrapper lg:absolute bottom-0 left-1/2 lg:-translate-x-1/2 -z-0 lg:h-[80%] xl:h-full mt-3.5 lg:mt-0">
              <Image src={Paddle} className="h-full! " alt=""></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
