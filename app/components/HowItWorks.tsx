import React from "react";
import Image from "next/image";
import paddle from "../../public/assets/images/hiw-paddle-img.png";
import btnArrow from "../../public/assets/btn-white-arrow.svg";

const HowItWorks = () => {
  return (
    <div className="container mx-auto mt-[100px] px-4">
      <h2
        className="leading-[70px] text-black"
        style={{ letterSpacing: "-1.3px" }}
      >
        How It Works <br /> A Simple Process
      </h2>

      {/* Flex container */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        {/* Left column - takes ~58.33% (7/12) on lg */}
        <div className="lg:w-7/12 w-12/12  rounded-lg">
          <Image
            src={paddle}
            alt="Paddle illustration"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right column - takes ~41.66% (5/12) on lg */}
        <div className="w-full lg:w-5/12 rounded-lg text-center lg:text-start ">
          <div className=" flex lg:flex-row flex-col items-start gap-4 max-w-lg">
            {/* Number */}
            <div className="text-center mx-auto [leading-trim:both] [text-edge:cap] [-webkit-text-stroke:1px_#000] font-Allotrope text-[100px] font-bold not-italic leading-none">
              1
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-Allotrope text-black leading-[40px]">
                CHOOSE A PADDLE DESIGN
              </h3>
              <p className=" mt-3.5">
                Pick from House Pickleball’s designs or start from scratch.
              </p>
            </div>
          </div>
          <hr className="h-px bg-[rgba(0,0,0,0.2)] my-6 border-none" />
          <div className=" flex lg:flex-row flex-col items-start gap-4 max-w-lg">
            {/* Number */}
            <div className="text-center mx-auto [leading-trim:both] [text-edge:cap] [-webkit-text-stroke:1px_#000] font-Allotrope text-[100px] font-bold not-italic leading-none">
              1
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl text-black font-Allotrope leading-[40px]">
                CHOOSE A PADDLE DESIGN
              </h3>
              <p className=" mt-3.5">
                Pick from House Pickleball’s designs or start from scratch.
              </p>
            </div>
          </div>
          <hr className="h-px bg-[rgba(0,0,0,0.2)] my-6 border-none" />

          <div className=" flex lg:flex-row flex-col items-start gap-4 max-w-lg">
            {/* Number */}
            <div className="text-center mx-auto [leading-trim:both] [text-edge:cap] [-webkit-text-stroke:1px_#000] font-Allotrope text-[100px] font-bold not-italic leading-none">
              1
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl text-black font-Allotrope leading-[40px]">
                CHOOSE A PADDLE DESIGN
              </h3>
              <p className=" mt-3.5">
                Pick from House Pickleball’s designs or start from scratch.
              </p>
            </div>
          </div>
          <button className="btn btn-secondary flex mx-auto items-center gap-2.5 leading-normal mt-7 cursor-pointer">
            Start Designing
            <div className="icon-wrapper">
              <Image
                src={btnArrow}
                alt="Arrow svg"
                width={40} // Adjust width as needed
                height={40} // Adjust height as needed
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
