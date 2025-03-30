import React from "react";
import Image from "next/image";
import paddle from "../../public/assets/images/hiw-paddle-img.png";
import btnArrow from "../../public/assets/btn-white-arrow.svg";
import btnArrowBlack from "../../public/assets/btn-black-arrow.svg";

const HowItWorks = () => {
  return (
    <div>
      {/* how it work  */}
      <section className="container mx-auto mt-[100px] px-4">
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
      </section>
      {/* accesories section  */}
      <section className="container mx-auto mt-[100px] px-4">
        <div className="flex flex-wrap gap-6">
          {/* Each box takes full width on mobile, half on lg (with gap accounted for) */}

          <div className="w-full lg:w-[calc(50%-12px)] bg-black text-white  lg:px-[85px] lg:py-[165px] px-[31px] py-[93px] text-center rounded-4xl ">
            <h3 className="text-xl font-normal font-Allotrope mb-[5px]">
              Paddles
            </h3>
            <p
              className="text-gray-600 font-Allotrope "
              style={{ fontSize: "18px " }}
            >
              Our paddles are rigorously tested for quality, and we stand behind
              every product with a hassle-free return policy.
            </p>
            <button className="btn btn-primary flex mx-auto items-center gap-2.5 leading-normal mt-9 cursor-pointer">
              View All
              <div className="icon-wrapper">
                <Image
                  src={btnArrowBlack}
                  alt="Arrow svg"
                  width={40} // Adjust width as needed
                  height={40} // Adjust height as needed
                />
              </div>
            </button>
          </div>
          <div className="w-full lg:w-[calc(50%-12px)] bg-black text-white  lg:px-[85px] lg:py-[165px] px-[31px] py-[93px] text-center rounded-4xl ">
            <h3 className="text-xl font-normal font-Allotrope mb-[5px]">
              Paddles
            </h3>
            <p
              className="text-gray-600 font-Allotrope "
              style={{ fontSize: "18px " }}
            >
              Our paddles are rigorously tested for quality, and we stand behind
              every product with a hassle-free return policy.
            </p>
            <button className="btn btn-primary flex mx-auto items-center gap-2.5 leading-normal mt-9 cursor-pointer">
              View All
              <div className="icon-wrapper">
                <Image
                  src={btnArrowBlack}
                  alt="Arrow svg"
                  width={40} // Adjust width as needed
                  height={40} // Adjust height as needed
                />
              </div>
            </button>
          </div>
          <div className="w-full lg:w-[calc(50%-12px)] bg-black text-white lg:px-[85px] lg:py-[165px] px-[31px] py-[93px] text-center rounded-4xl ">
            <h3 className="text-xl font-normal font-Allotrope mb-[5px]">
              Paddles
            </h3>
            <p
              className="text-gray-600 font-Allotrope "
              style={{ fontSize: "18px " }}
            >
              Our paddles are rigorously tested for quality, and we stand behind
              every product with a hassle-free return policy.
            </p>
            <button className="btn btn-primary flex mx-auto items-center gap-2.5 leading-normal mt-9 cursor-pointer">
              View All
              <div className="icon-wrapper">
                <Image
                  src={btnArrowBlack}
                  alt="Arrow svg"
                  width={40} // Adjust width as needed
                  height={40} // Adjust height as needed
                />
              </div>
            </button>
          </div>
          <div className="w-full lg:w-[calc(50%-12px)] bg-black text-white  lg:px-[85px] lg:py-[165px] px-[31px] py-[93px] text-center rounded-4xl ">
            <h3 className="text-xl font-normal font-Allotrope mb-[5px]">
              Paddles
            </h3>
            <p
              className="text-gray-600 font-Allotrope "
              style={{ fontSize: "18px " }}
            >
              Our paddles are rigorously tested for quality, and we stand behind
              every product with a hassle-free return policy.
            </p>
            <button className="btn btn-primary flex mx-auto items-center gap-2.5 leading-normal mt-9 cursor-pointer">
              View All
              <div className="icon-wrapper">
                <Image
                  src={btnArrowBlack}
                  alt="Arrow svg"
                  width={40} // Adjust width as needed
                  height={40} // Adjust height as needed
                />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer  */}
      <footer className="bg-white dark:bg-gray-900 mt-100 px-[80px] py-[49px] bg-green">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* About Us Section - Reduced width */}
            <div className="lg:w-1/4">
              <a href="/" className="flex items-center">
                <h3 className="self-center uppercase font-Allotrope text-2xl font-semibold whitespace-nowrap dark:text-white">
                  About Us
                </h3>
              </a>
              <p className="text-gray-400 mt-4" style={{ fontSize: "18px" }}>
                A job career refers to the long-term professional journey of an
                individual, encompassing various roles,
              </p>
            </div>

            {/* 4 Lists in Single Row */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Resources */}
              <div>
                <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Menu
                </p>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow us */}
              <div>
                <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Explore
                </p>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  <li>
                    <a href="#" className="hover:underline">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Help & Support
                </p>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  OFFICE LOCATION
                </p>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
