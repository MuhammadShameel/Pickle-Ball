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
import Paddle from "../../public/assets/images/subscribe-section-paddle.png";
import btnArrowWhite from "../../public/assets/btn-white-arrow.svg";

import mainVideoThumbnail from "../../public/assets/main-video-thumbnail.jpg";

import pickleBall from "../../public/assets/pickle-ball.png";

import PaddlePink from "../../public/assets/paddle-pink.png";
import Star from "../../public/assets/star.svg";
import BlankStar from "../../public/assets/blank-star.svg";

import VideoOneThumbnail from "../../public/assets/video-one-thumbnail.webp";

import UserImage from "../../public/assets/user-image.png";
import ReviewImageOne from "../../public/assets/review-image-one.png";
import ReviewImageTwo from "../../public/assets/review-image-two.png";

import TradePaddle from "../../public/assets/trade-paddle.png";

import ItsAboutCommunity from "../../public/assets/its-about-community.png";

import HowitWorks from "../../public/assets/images/how-it-works.jpg";

import TradePickleBall from "../../public/assets/images/trade-pickle-ball.png";

// import Footer from "./Footer";

const Landing = () => {
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
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col justify-center bg-dark-green border border-red-500">
            <div className="xl:w-4/5 2xl:w-3/5 px-5 lg:ps-10 xl:ps-20 py-20 sm:py-22 md:py-24 lg:py-12 text-center lg:text-left">
              <h1 className="text-white uppercase leading-[80.769%]">
                Your paddle, Your Rules
              </h1>
              <p className="leading-normal text-light mt-2.5 md:mt-3.5">
                Personalize your{" "}
                <span className="text-white"> pickleball paddle </span> with
                <span className="text-white"> Paddle ID </span> and stand out on
                the court.
              </p>
              <button className="btn btn-secondary  leading-normal mt-6 sm:mt-7 md:mt-9 cursor-pointer">
                Let's Cook
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-3  border border-red-500 bg-pink">
            <Image
              className="mx-auto"
              src={pickleBall}
              alt="Paddle illustration"
            />
          </div>
        </div>
      </section>

      {/* how it work  */}
      <section className="mt-80 ">
        <div className="mx-auto mb-3.5 sm:mb-6">
          <h2 className="text-center leading-[100%] text-black capitalize">
            HOW IT WORKS
          </h2>
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

          <div className="w-full lg:w-1/2 bg-light-green">
            <div className="text-center py-[65px] px-[80px] lg:text-start flex flex-col justify-center items-start h-full ">
              <div className="flex lg:flex-row flex-col items-start sm-mx-auto  gap-5 pb-6 ">
                <div className="mx-auto">
                  <h2 className=" mt-[-48] mb-[-48] text-[130px]! text-black font-bold">
                    1
                  </h2>
                </div>
                <div>
                  <h2 className="font-Allotrope  font-bold text-black leading-14">
                    CHOOSE A PADDLE DESIGN
                  </h2>
                  <p className="text-[rgba(0, 0, 0, 0.80)] mt-3.5">
                    Pick from House Pickleball’s designs or start from scratch.
                  </p>
                </div>
              </div>
              <hr className="w-full text-[#00000033]" />
              <div className="flex lg:flex-row flex-col items-start sm-mx-auto gap-5 pt-6 pb-6 ">
                <div className="mx-auto">
                  <h2 className=" mt-[-48] mb-[-48] text-[130px]! text-black font-bold">
                    2
                  </h2>
                </div>
                <div>
                  <h2 className="font-Allotrope  font-bold text-black leading-14">
                    Customize with Paddle ID
                  </h2>
                  <p className="text-[rgba(0, 0, 0, 0.80)] mt-3.5">
                    Add colors, patterns, text, logos, and grips.
                  </p>
                </div>
              </div>
              <hr className="w-full text-[#00000033]" />
              <div className="flex lg:flex-row flex-col items-start sm-mx-auto border- gap-5 pb-6 pt-6 ">
                <div className="mx-auto">
                  <h2 className=" mt-[-48] mb-[-48] text-[130px]! text-black font-bold">
                    3
                  </h2>
                </div>
                <div>
                  <h2 className="font-Allotrope  font-bold text-black leading-14">
                    Order & Play
                  </h2>
                  <p className="text-[rgba(0, 0, 0, 0.80)] mt-3.5">
                    Get your custom pickleball racquet delivered & dominate.
                  </p>
                </div>
              </div>
              <button className="btn btn-primary flex items-center sm-mx-auto gap-2.5 leading-normal mt-2.5 cursor-pointer">
                Start Designing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* featured paddles section */}
      <section className="mt-80 px-3 sm:px-3.5 md:px-5 featured-section">
        <div className="mb-3.5 sm:mb-6">
          <h2 className="text-center text-black leading-[100%] uppercase">
            Our Best Sellers
          </h2>
        </div>
        <div className="">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
          >
            <SwiperSlide>
              <div className="card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden">
                <div className="card-header relative">
                  <div className="img-wrapper text-center">
                    <Image
                      className="w-full! h-full! object-contain"
                      src={PaddlePink}
                      alt="Paddle Pink Version"
                      width={354} // Adjust width as needed
                      height={354} // Adjust height as needed
                    />
                  </div>
                  <div className="colors flex flex-col absolute top-1/2 right-0">
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
                  <div className="rating flex items-center gap-2.5">
                    <div className="rating-stars flex items-center">
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </div>
                    <p className="text-[14px]! text-[#0009] leading-[1rem]">
                      10 reviews
                    </p>
                  </div>
                  <p className="text-black mt-2.5 leading-normal">
                    Bread 'n Butter Paddle
                  </p>
                  <h3 className="text-black leading-[95.238%] mt-2.5 font-semibold!">
                    74.99 $
                  </h3>
                  <div className="flex flex-col mt-6 gap-2.5">
                    <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                      Customize
                    </button>
                    <button className="btn style-2 btn-secondary leading-tight cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden">
                <div className="card-header relative">
                  <div className="img-wrapper text-center">
                    <Image
                      className="w-full! h-full! object-contain"
                      src={PaddlePink}
                      alt="Paddle Pink Version"
                      width={354} // Adjust width as needed
                      height={354} // Adjust height as needed
                    />
                  </div>
                  <div className="colors flex flex-col absolute top-1/2 right-0">
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
                  <div className="rating flex items-center gap-2.5">
                    <div className="rating-stars flex items-center">
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </div>
                    <p className="text-[14px]! text-[#0009] leading-[1rem]">
                      10 reviews
                    </p>
                  </div>
                  <p className="text-black mt-2.5 leading-normal">
                    Bread 'n Butter Paddle
                  </p>
                  <h3 className="text-black leading-[95.238%] mt-2.5 font-semibold!">
                    74.99 $
                  </h3>
                  <div className="flex flex-col mt-6 gap-2.5">
                    <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                      Customize
                    </button>
                    <button className="btn style-2 btn-secondary leading-tight cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden">
                <div className="card-header relative">
                  <div className="img-wrapper text-center">
                    <Image
                      className="w-full! h-full! object-contain"
                      src={PaddlePink}
                      alt="Paddle Pink Version"
                      width={354} // Adjust width as needed
                      height={354} // Adjust height as needed
                    />
                  </div>
                  <div className="colors flex flex-col absolute top-1/2 right-0">
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
                  <div className="rating flex items-center gap-2.5">
                    <div className="rating-stars flex items-center">
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </div>
                    <p className="text-[14px]! text-[#0009] leading-[1rem]">
                      10 reviews
                    </p>
                  </div>
                  <p className="text-black mt-2.5 leading-normal">
                    Bread 'n Butter Paddle
                  </p>
                  <h3 className="text-black leading-[95.238%] mt-2.5 font-semibold!">
                    74.99 $
                  </h3>
                  <div className="flex flex-col mt-6 gap-2.5">
                    <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                      Customize
                    </button>
                    <button className="btn style-2 btn-secondary leading-tight cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden">
                <div className="card-header relative">
                  <div className="img-wrapper text-center">
                    <Image
                      className="w-full! h-full! object-contain"
                      src={PaddlePink}
                      alt="Paddle Pink Version"
                      width={354} // Adjust width as needed
                      height={354} // Adjust height as needed
                    />
                  </div>
                  <div className="colors flex flex-col absolute top-1/2 right-0">
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
                  <div className="rating flex items-center gap-2.5">
                    <div className="rating-stars flex items-center">
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </div>
                    <p className="text-[14px]! text-[#0009] leading-[1rem]">
                      10 reviews
                    </p>
                  </div>
                  <p className="text-black mt-2.5 leading-normal">
                    Bread 'n Butter Paddle
                  </p>
                  <h3 className="text-black leading-[95.238%] mt-2.5 font-semibold!">
                    74.99 $
                  </h3>
                  <div className="flex flex-col mt-6 gap-2.5">
                    <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                      Customize
                    </button>
                    <button className="btn style-2 btn-secondary leading-tight cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden">
                <div className="card-header relative">
                  <div className="img-wrapper text-center">
                    <Image
                      className="w-full! h-full! object-contain"
                      src={PaddlePink}
                      alt="Paddle Pink Version"
                      width={354} // Adjust width as needed
                      height={354} // Adjust height as needed
                    />
                  </div>
                  <div className="colors flex flex-col absolute top-1/2 right-0">
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
                  <div className="rating flex items-center gap-2.5">
                    <div className="rating-stars flex items-center">
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </div>
                    <p className="text-[14px]! text-[#0009] leading-[1rem]">
                      10 reviews
                    </p>
                  </div>
                  <p className="text-black mt-2.5 leading-normal">
                    Bread 'n Butter Paddle
                  </p>
                  <h3 className="text-black leading-[95.238%] mt-2.5 font-semibold!">
                    74.99 $
                  </h3>
                  <div className="flex flex-col mt-6 gap-2.5">
                    <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                      Customize
                    </button>
                    <button className="btn style-2 btn-secondary leading-tight cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden">
                <div className="card-header relative">
                  <div className="img-wrapper text-center">
                    <Image
                      className="w-full! h-full! object-contain"
                      src={PaddlePink}
                      alt="Paddle Pink Version"
                      width={354} // Adjust width as needed
                      height={354} // Adjust height as needed
                    />
                  </div>
                  <div className="colors flex flex-col absolute top-1/2 right-0">
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
                  <div className="rating flex items-center gap-2.5">
                    <div className="rating-stars flex items-center">
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </div>
                    <p className="text-[14px]! text-[#0009] leading-[1rem]">
                      10 reviews
                    </p>
                  </div>
                  <p className="text-black mt-2.5 leading-normal">
                    Bread 'n Butter Paddle
                  </p>
                  <h3 className="text-black leading-[95.238%] mt-2.5 font-semibold!">
                    74.99 $
                  </h3>
                  <div className="flex flex-col mt-6 gap-2.5">
                    <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                      Customize
                    </button>
                    <button className="btn style-2 btn-secondary leading-tight cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* accesories section  */}
      <section className="mt-80 px-3 sm:px-3.5 md:px-5 accessories-section">
        <div className="container mx-auto">
          <div className="mb-3.5 sm:mb-6">
            <h2 className="text-center leading-[100%] text-black uppercase">
              Explore All Categories
            </h2>
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
      <section className="mt-80 bigger-section">
        <div className="mb-3.5 sm:mb-6">
          <h2 className="uppercase text-black text-center leading-[100%]">
            It's Bigger than paddles
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col justify-center bg-pink border border-red-500">
            <div className="xl:w-5/5 2xl:w-4/5 px-5 lg:ps-10 xl:ps-20 py-20 sm:py-22 md:py-24 lg:py-12 text-center lg:text-left">
              <h2 className="font-h1 text-black uppercase leading-[80.769%]">
                It’s About Community
              </h2>
              <p className="leading-normal text-grey mt-2.5 md:mt-3.5">
                At House, we don’t just sell paddles—we build culture. A team
                who loves the game, play hard, and show up for each other on and
                off the court.
              </p>
              <p className="mt-3.5">
                We’re here for the ones who rally with strangers, who make the
                game look good, who turn a court into a community. When you rock
                House, you're repping a brand that’s repping the future of
                Pickleball.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 border border-red-500">
            <Swiper
              className="h-full"
              modules={[Pagination, Autoplay]}
              spaceBetween={15}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide className="h-full">
                <div className="h-full">
                  <div className="img-wrapper h-full overflow-hidden aspect-1/1">
                    <Image
                      className="w-full! h-full! object-cover"
                      src={ItsAboutCommunity}
                      alt="It's About Community"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="h-full">
                <div className="h-full">
                  <div className="img-wrapper h-full overflow-hidden aspect-1/1">
                    <Image
                      className="w-full! h-full! object-cover"
                      src={ItsAboutCommunity}
                      alt="It's About Community"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* testimonials section */}
      <section className="mt-80 px-3 sm:px-3.5 md:px-5 testimonial-section">
        <div className="container mx-auto">
          <div className="mb-3.5 sm:mb-6">
            <h2 className="uppercase text-black text-center leading-[100%]">
              Testimonials
            </h2>
          </div>
          <div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={8}
              slidesPerView={1}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 18,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 22,
                },
              }}
              // autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="card rounded-[10px] bg-white shadow p-5">
                  <div className="image-wrapper w-[55px] h-[55px] rounded-full overflow-hidden">
                    <Image
                      className="w-full! h-full! object-cover"
                      src={UserImage}
                      alt="Peter Kalua"
                      width={55} // Adjust width as needed
                      height={55} // Adjust height as needed
                    />
                  </div>

                  <div className="flex justify-between items-center mt-2.5">
                    <h4 className="text-2xl leading-normal text-black">
                      Peter Kalua
                    </h4>
                    <div className="rating-stars flex items-center">
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={24} // Adjust width as needed
                        height={24} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </div>
                  </div>
                  <p className="fs-18 mt-2 leading-normal text-[#333333]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer eros lectus, euismod et maximus non, egestas non
                    nunc. Integer eros lectus, euismod et maximus non, egestas .
                  </p>

                  <div className="review-images grid grid-cols-2 gap-2.5 mt-2.5 sm:mt-5 lg:mt-7">
                    <div className="img-wrapper aspect-square w-full rounded-[10px] overflow-hidden">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={ReviewImageOne}
                        alt="Review Image"
                        width={182} // Adjust width as needed
                        height={182} // Adjust height as needed
                      />
                    </div>
                    <div className="img-wrapper aspect-square w-full rounded-[10px] overflow-hidden">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={ReviewImageTwo}
                        alt="Review Image"
                        width={182} // Adjust width as needed
                        height={182} // Adjust height as needed
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card rounded-[10px] bg-white shadow p-5">
                  <div className="image-wrapper w-[55px] h-[55px] rounded-full overflow-hidden">
                    <Image
                      className="w-full! h-full! object-cover"
                      src={UserImage}
                      alt="Peter Kalua"
                      width={55} // Adjust width as needed
                      height={55} // Adjust height as needed
                    />
                  </div>

                  <div className="flex justify-between items-center mt-2.5">
                    <h4 className="text-2xl leading-normal text-black">
                      Peter Kalua
                    </h4>
                    <div className="rating-stars flex items-center">
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={24} // Adjust width as needed
                        height={24} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </div>
                  </div>
                  <p className="fs-18 mt-2 leading-normal text-[#333333]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer eros lectus, euismod et maximus non, egestas non
                    nunc. Integer eros lectus, euismod et maximus non, egestas .
                  </p>

                  <div className="review-images grid grid-cols-2 gap-2.5 mt-2.5 sm:mt-5 lg:mt-7">
                    <div className="img-wrapper aspect-square w-full rounded-[10px] overflow-hidden">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={ReviewImageOne}
                        alt="Review Image"
                        width={182} // Adjust width as needed
                        height={182} // Adjust height as needed
                      />
                    </div>
                    <div className="img-wrapper aspect-square w-full rounded-[10px] overflow-hidden">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={ReviewImageTwo}
                        alt="Review Image"
                        width={182} // Adjust width as needed
                        height={182} // Adjust height as needed
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card rounded-[10px] bg-white shadow p-5">
                  <div className="image-wrapper w-[55px] h-[55px] rounded-full overflow-hidden">
                    <Image
                      className="w-full! h-full! object-cover"
                      src={UserImage}
                      alt="Peter Kalua"
                      width={55} // Adjust width as needed
                      height={55} // Adjust height as needed
                    />
                  </div>

                  <div className="flex justify-between items-center mt-2.5">
                    <h4 className="text-2xl leading-normal text-black">
                      Peter Kalua
                    </h4>
                    <div className="rating-stars flex items-center">
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={24} // Adjust width as needed
                        height={24} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </div>
                  </div>
                  <p className="fs-18 mt-2 leading-normal text-[#333333]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer eros lectus, euismod et maximus non, egestas non
                    nunc. Integer eros lectus, euismod et maximus non, egestas .
                  </p>

                  <div className="review-images grid grid-cols-2 gap-2.5 mt-2.5 sm:mt-5 lg:mt-7">
                    <div className="img-wrapper aspect-square w-full rounded-[10px] overflow-hidden">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={ReviewImageOne}
                        alt="Review Image"
                        width={182} // Adjust width as needed
                        height={182} // Adjust height as needed
                      />
                    </div>
                    <div className="img-wrapper aspect-square w-full rounded-[10px] overflow-hidden">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={ReviewImageTwo}
                        alt="Review Image"
                        width={182} // Adjust width as needed
                        height={182} // Adjust height as needed
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card rounded-[10px] bg-white shadow p-5">
                  <div className="image-wrapper w-[55px] h-[55px] rounded-full overflow-hidden">
                    <Image
                      className="w-full! h-full! object-cover"
                      src={UserImage}
                      alt="Peter Kalua"
                      width={55} // Adjust width as needed
                      height={55} // Adjust height as needed
                    />
                  </div>

                  <div className="flex justify-between items-center mt-2.5">
                    <h4 className="text-2xl leading-normal text-black">
                      Peter Kalua
                    </h4>
                    <div className="rating-stars flex items-center">
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={24} // Adjust width as needed
                        height={24} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={Star}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        className="w-[24px]! h-[24px]!"
                        src={BlankStar}
                        alt="Star"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </div>
                  </div>
                  <p className="fs-18 mt-2 leading-normal text-[#333333]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer eros lectus, euismod et maximus non, egestas non
                    nunc. Integer eros lectus, euismod et maximus non, egestas .
                  </p>

                  <div className="review-images grid grid-cols-2 gap-2.5 mt-2.5 sm:mt-5 lg:mt-7">
                    <div className="img-wrapper aspect-square w-full rounded-[10px] overflow-hidden">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={ReviewImageOne}
                        alt="Review Image"
                        width={182} // Adjust width as needed
                        height={182} // Adjust height as needed
                      />
                    </div>
                    <div className="img-wrapper aspect-square w-full rounded-[10px] overflow-hidden">
                      <Image
                        className="w-full! h-full! object-cover"
                        src={ReviewImageTwo}
                        alt="Review Image"
                        width={182} // Adjust width as needed
                        height={182} // Adjust height as needed
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* our blog section */}
      <section className="mt-80">
        <div className="mb-3.5 sm:mb-6">
          <h2 className="uppercase text-black text-center leading-[100%]">
            Our Blog
          </h2>
        </div>
        <BlogSlide />
      </section>

      {/* trade your paddle section */}
      <section className="mt-80">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col justify-center bg-dark-green border border-red-500">
            <div className="xl:w-5/5 2xl:w-4/5 px-5 lg:ps-10 xl:ps-20 py-20 sm:py-22 md:py-24 lg:py-12 text-center lg:text-left">
              <h2 className="font-h1 text-white uppercase leading-[80.769%]">
                Trade Your Paddle, Get $50 Toward a New One.
              </h2>

              <button className="btn btn-white  leading-normal mt-6 sm:mt-7 md:mt-9 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-3  border border-red-500 bg-pink">
            <Image
              className="mx-auto"
              src={TradePickleBall}
              alt="Paddle illustration"
            />
          </div>
        </div>
      </section>

      {/* Subscribe  */}
      {/* <section className="mt-80 bg-dark-green">
        <div className="container mx-auto">
          <div className="flex text-white">
            <div className="py-10">
              {" "}
              <h2 className="font-h1 leading-[105px] uppercase">
                Subscribe to our newsletter
              </h2>
            </div>
            <Image src={Paddle} alt=""></Image>
            <div className="py-[107px]">
              {" "}
              <p className="text-[#FFFFFF] font-light leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                eros lectus, euismod et maximus.
              </p>
              <input type="text" className="bg-red-300 w-full rounded-[6px]" />
            </div>
            <button>abc</button>
            <div className="py-[107px]">
              {" "}
              <p className="text-[#FFFFFF] font-light leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                eros lectus, euismod et maximus.
              </p>
              <input type="text" className="bg-[rgba(255, 255, 255, 0.20)] " />
            </div>
          </div>
        </div>
      </section> */}

      {/* footer start */}
      <FooterSection />
    </>
  );
};

export default Landing;
