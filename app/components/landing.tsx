"use client";
import React from "react";
import Image from "next/image";
import "../styles/index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import BlogSlide from "./BlogSlide";
import FooterSection from "./Footer";

import btnArrow from "../../public/assets/btn-black-arrow.svg";
import ArrowRight from "../../public/assets/images/arrow-right.svg";
import btnArrowWhite from "../../public/assets/btn-white-arrow.svg";

import mainVideoThumbnail from "../../public/assets/main-video-thumbnail.jpg";

import pickleBall from "../../public/assets/pickle-ball.png";

import PaddlePink from "../../public/assets/paddle-pink.png";

import VideoOneThumbnail from "../../public/assets/video-one-thumbnail.webp";

import TradePaddle from "../../public/assets/trade-paddle.png";

import HowitWorks from "../../public/assets/images/how-it-works.jpg";

import TradePickleBall from "../../public/assets/images/trade-pickle-ball.png";
import NewsLetter from "./NewsLetter";
import Testimonials from "./Testimonials";
import Community from "./Community";

// import Footer from "./Footer";

const Landing = () => {
  const productVariantId = "gid://shopify/ProductVariant/1234567890"; // replace with your real variant ID

  return (
    <>
      {/* HERO VIDEO SECTION */}
      <section>
        <div className="relative">
          <div className="video-thumbnail">
            <Image
              src={mainVideoThumbnail}
              alt="Thumbnail"
              className="w-full! h-full! object-cover"
            />
          </div>
        </div>
      </section>

      {/* YOUR PADDLE YOUR RULES */}
      <section className="px-3 sm:px-3.5 md:px-5">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="w-full xl:w-1/2 flex flex-col justify-center ">
            <div className="xl:w-5/5 2xl:w-4/5 px-5 lg:pe-0 lg:ps-5 xl:ps-20 py-20 sm:py-22 md:py-24 lg:py-12 text-center lg:text-left">
              <h1 className="text-green uppercase leading-[80.769%]">
                YOUR HOUSE FOR ALL THINGS PICKLEBALL
              </h1>
              <p className="leading-normal mt-2.5 md:mt-3.5">
                CUSTOM DESIGNS WELCOME
              </p>
              <button className="btn btn-primary  leading-normal mt-6 sm:mt-7 md:mt-9 cursor-pointer">
                Let's Cook
              </button>
            </div>
          </div>
          <div className="w-full xl:w-1/2 p-3  ">
            <Image
              className="mx-auto"
              src={pickleBall}
              alt="Paddle illustration"
            />
          </div>
        </div>
      </section>

      {/* how it work  */}
      <section className="mt-100 ">
        <div className="mx-auto mb-3.5 sm:mb-6">
          <h3 className="text-center leading-[100%] text-black uppercase font-wide">
            LET'S RUN IT
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row accessories-section">
          <div className="w-full lg:w-1/2">
            <div className="img-wrapper w-full h-full aspect-square">
              <Image
                src={HowitWorks}
                alt="how it works"
                className="w-full! h-full! object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center bg-light-green">
            <div className="xl:w-5/5 2xl:w-4/5 p-5 lg:ps-10 xl:ps-20 sm:py-22 md:py-24 lg:py-12 text-center lg:text-left">
              <div className="flex lg:flex-row flex-col items-center lg:items-start gap-2.5 md:gap-5 pb-2.5 md:pb-6 ">
                <div className="">
                  <h2 className="font-h1 text-black font-bold! leading-[80%]">
                    1
                  </h2>
                </div>
                <div>
                  <h2 className="font-Allotrope  font-bold text-black leading-[100%] uppercase">
                    CHOOSE A PADDLE DESIGN
                  </h2>
                  <p className="text-[#243322] mt-1 md:mt-3.5">
                    Pick from House Pickleball’s designs or start from scratch.
                  </p>
                </div>
              </div>
              <hr className="w-full text-[#00000033]" />
              <div className="flex lg:flex-row flex-col items-center lg:items-start  gap-2.5 md:gap-5 py-2.5 md:py-6 ">
                <div className="">
                  <h2 className="font-h1 text-black font-bold! leading-[80%]">
                    2
                  </h2>
                </div>
                <div>
                  <h2 className="font-Allotrope  font-bold text-black leading-[100%] uppercase">
                    GLOW UP YOUR GAME
                  </h2>
                  <p className="text-[#243322] mt-1 md:mt-3.5">
                    Add colors, patterns, text, logos, and grips.
                  </p>
                </div>
              </div>
              <hr className="w-full text-[#00000033]" />
              <div className="flex lg:flex-row flex-col items-center lg:items-start gap-2.5 md:gap-5  pt-2.5 md:pt-6">
                <div className="">
                  <h2 className="font-h1 text-black font-bold! leading-[80%]">
                    3
                  </h2>
                </div>
                <div>
                  <h2 className="font-Allotrope  font-bold text-black leading-[100%] uppercase">
                    GET YOUR CUSTOM PADDLE
                  </h2>
                  <p className="text-[#243322] mt-1 md:mt-3.5">
                    Get your custom pickleball racquet delivered & dominate.
                  </p>
                  <div className="mt-6 md:mt-7 lg:mt-8 flex justify-center lg:justify-start">
                    <button className="btn btn-primary flex items-center  gap-2.5 leading-normal cursor-pointer ">
                      Start Designing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* featured paddles section */}
      <section className="mt-100 px-3 sm:px-3.5 md:px-5 featured-section">
        <div className="container mx-auto">
          <div className="mb-3.5 sm:mb-6">
            <h3 className="text-center leading-[100%] text-black uppercase font-wide">
              Our Best Sellers
            </h3>
          </div>
          <div>
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 22,
                },
              }}
            >
              <SwiperSlide>
                <div className="card flex flex-col p-2.5 sm:p-3.5 md:p-5 rounded-[10px] border border-[#0000001a] overflow-hidden">
                  <div className="card-header relative">
                    <div className="img-wrapper w-full aspect-square text-center">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={PaddlePink}
                        alt="Paddle Pink Version"
                        width={372} // Adjust width as needed
                        height={372} // Adjust height as needed
                      />
                    </div>
                    <div className="colors flex flex-col absolute bottom-0 right-0">
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-green block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color active cursor-pointer transition-all">
                        <span className="bg-dark-pink block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-black block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-purple block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-sky block w-full h-full rounded-full"></span>
                      </button>
                    </div>
                  </div>
                  <div className="card-body mt-2.5">
                    <p className="text-black leading-normal">
                      Bread 'n Butter Paddle
                    </p>
                    <h3 className="text-black leading-[95.238%] mt-2.5 font-normal! font-wide">
                      74.99 $
                    </h3>
                    <div className="mt-3.5 md:mt-5 lg:mt-6 flex flex-col-reverse xl:flex-row  gap-1.5 md:gap-2 lg:gap-2.5">
                      <a
                        className="btn style-2 btn-primary text-center leading-normal cursor-pointer w-full"
                        href="/"
                      >
                        Add to Cart
                      </a>
                      <a
                        className="btn style-2 btn-outline-green text-center leading-normal cursor-pointer w-full"
                        href="#"
                      >
                        Customize
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card flex flex-col p-2.5 sm:p-3.5 md:p-5 rounded-[10px] border border-[#0000001a] overflow-hidden">
                  <div className="card-header relative">
                    <div className="img-wrapper w-full aspect-square text-center">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={PaddlePink}
                        alt="Paddle Pink Version"
                        width={372} // Adjust width as needed
                        height={372} // Adjust height as needed
                      />
                    </div>
                    <div className="colors flex flex-col absolute bottom-0 right-0">
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-green block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color active cursor-pointer transition-all">
                        <span className="bg-dark-pink block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-black block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-purple block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-sky block w-full h-full rounded-full"></span>
                      </button>
                    </div>
                  </div>
                  <div className="card-body mt-2.5">
                    <p className="text-black leading-normal">
                      Bread 'n Butter Paddle
                    </p>
                    <h3 className="text-black leading-[95.238%] mt-2.5 font-normal! font-wide">
                      74.99 $
                    </h3>
                    <div className="mt-3.5 md:mt-5 lg:mt-6 flex flex-col-reverse xl:flex-row  gap-1.5 md:gap-2 lg:gap-2.5">
                      <a
                        className="btn style-2 btn-primary text-center leading-normal cursor-pointer w-full"
                        href="/"
                      >
                        Add to Cart
                      </a>
                      <a
                        className="btn style-2 btn-outline-green text-center leading-normal cursor-pointer w-full"
                        href="#"
                      >
                        Customize
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card flex flex-col p-2.5 sm:p-3.5 md:p-5 rounded-[10px] border border-[#0000001a] overflow-hidden">
                  <div className="card-header relative">
                    <div className="img-wrapper w-full aspect-square text-center">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={PaddlePink}
                        alt="Paddle Pink Version"
                        width={372} // Adjust width as needed
                        height={372} // Adjust height as needed
                      />
                    </div>
                    <div className="colors flex flex-col absolute bottom-0 right-0">
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-green block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color active cursor-pointer transition-all">
                        <span className="bg-dark-pink block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-black block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-purple block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-sky block w-full h-full rounded-full"></span>
                      </button>
                    </div>
                  </div>
                  <div className="card-body mt-2.5">
                    <p className="text-black leading-normal">
                      Bread 'n Butter Paddle
                    </p>
                    <h3 className="text-black leading-[95.238%] mt-2.5 font-normal! font-wide">
                      74.99 $
                    </h3>
                    <div className="mt-3.5 md:mt-5 lg:mt-6 flex flex-col-reverse xl:flex-row  gap-1.5 md:gap-2 lg:gap-2.5">
                      <a
                        className="btn style-2 btn-primary text-center leading-normal cursor-pointer w-full"
                        href="/"
                      >
                        Add to Cart
                      </a>
                      <a
                        className="btn style-2 btn-outline-green text-center leading-normal cursor-pointer w-full"
                        href="#"
                      >
                        Customize
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card flex flex-col p-2.5 sm:p-3.5 md:p-5 rounded-[10px] border border-[#0000001a] overflow-hidden">
                  <div className="card-header relative">
                    <div className="img-wrapper w-full aspect-square text-center">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={PaddlePink}
                        alt="Paddle Pink Version"
                        width={372} // Adjust width as needed
                        height={372} // Adjust height as needed
                      />
                    </div>
                    <div className="colors flex flex-col absolute bottom-0 right-0">
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-green block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color active cursor-pointer transition-all">
                        <span className="bg-dark-pink block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-black block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-purple block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-sky block w-full h-full rounded-full"></span>
                      </button>
                    </div>
                  </div>
                  <div className="card-body mt-2.5">
                    <p className="text-black leading-normal">
                      Bread 'n Butter Paddle
                    </p>
                    <h3 className="text-black leading-[95.238%] mt-2.5 font-normal! font-wide">
                      74.99 $
                    </h3>
                    <div className="mt-3.5 md:mt-5 lg:mt-6 flex flex-col-reverse xl:flex-row  gap-1.5 md:gap-2 lg:gap-2.5">
                      <a
                        className="btn style-2 btn-primary text-center leading-normal cursor-pointer w-full"
                        href="/"
                      >
                        Add to Cart
                      </a>
                      <a
                        className="btn style-2 btn-outline-green text-center leading-normal cursor-pointer w-full"
                        href="#"
                      >
                        Customize
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* accesories section  */}
      <section className="mt-100 px-3 sm:px-3.5 md:px-5 accessories-section">
        <div className="container mx-auto">
          <div className="mb-3.5 sm:mb-6">
            <h3 className="text-center leading-[100%] text-black uppercase font-wide">
              Explore All Categories
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-2.5 md:gap-4 lg:gap-5">
            <div className="card lg:h-[500px]  h-[350px] justify-end p-2.5 sm:p-3 rounded-[10px] flex flex-col ">
              <button className="btn btn-white w-full py-2.5! text-center leading-normal cursor-pointer">
                Paddles
              </button>
            </div>

            <div className="card lg:h-[500px]  h-[350px] justify-end p-2.5 sm:p-3 rounded-[10px] flex flex-col">
              <button className="btn btn-white w-full py-2.5! text-center leading-normal cursor-pointer">
                Paddles
              </button>
            </div>

            <div className="card lg:h-[500px]  h-[350px] justify-end p-2.5 sm:p-3 rounded-[10px] flex flex-col">
              <button className="btn btn-white w-full py-2.5! text-center leading-normal cursor-pointer">
                Paddles
              </button>
            </div>

            <div className="card lg:h-[500px]  h-[350px] justify-end p-2.5 sm:p-3 rounded-[10px] flex flex-col">
              <button className="btn btn-white w-full py-2.5! text-center leading-normal cursor-pointer">
                Paddles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IT'S BIGGER THAN PADDLES */}
      <section className="mt-100 bigger-section">
        <div className="mb-3.5 sm:mb-6">
          <h3 className="uppercase text-black text-center leading-[100%] font-wide">
            It's Bigger than paddles
          </h3>
        </div>
        <Community />
      </section>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* our blog section */}
      <section className="mt-100">
        <div className="mb-3.5 sm:mb-6">
          <h3 className="uppercase text-black text-center leading-[100%] font-wide">
            Our Blog
          </h3>
        </div>
        <BlogSlide />
      </section>

      {/* Subscribe  */}
      <NewsLetter />

      {/* trade your paddle section */}
      <section className="mt-100 px-3 sm:px-3.5 md:px-5">
        <div className="container mx-auto">
          <div className="sm:w-4/5 mx-auto ">
            <div className="flex flex-col items-center">
              <h2 className="font-h1 uppercase leading-[80.769%] text-center text-black">
                Trade Your Paddle, Get $50 Toward a New One.
              </h2>
              <button className="btn btn-primary leading-normal mt-6 sm:mt-7 md:mt-9 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <FooterSection className="mt-100" />
    </>
  );
};

export default Landing;
