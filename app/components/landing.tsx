"use client";
import React from "react";
import Image from "next/image";
import "../styles/index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import BlogSlide from "./BlogSlide";
import FooterSection from "./Footer";

import btnArrow from "../../public/assets/btn-black-arrow.svg";
import btnArrowWhite from "../../public/assets/btn-white-arrow.svg";

import mainVideoThumbnail from "../../public/assets/main-video-thumbnail.jpg";

import PaddlePink from "../../public/assets/paddle-pink.png";
import Star from "../../public/assets/star.svg";
import BlankStar from "../../public/assets/blank-star.svg";

import VideoOneThumbnail from "../../public/assets/video-one-thumbnail.webp";

import UserImage from "../../public/assets/user-image.png";
import ReviewImageOne from "../../public/assets/review-image-one.png";
import ReviewImageTwo from "../../public/assets/review-image-two.png";

import TradePaddle from "../../public/assets/trade-paddle.png";
// import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      {/* hero section start */}
      <section className="hero-section px-5">
        <div className="img-wrapper">
          <Image
            src={mainVideoThumbnail}
            alt="Thumbnail"
            className="w-full! h-full! object-cover"
          />
        </div>
      </section>

      {/* how it work  */}
      <section className="mt-80 ">
      <div className=" mx-auto"><h2 className="text-center leading-0 text-black capitalize">HOW IT WORKS</h2></div>
        <div className="flex flex-col lg:flex-row gap-6 mt-10">
          <div className="w-full lg:w-1/2">
            <div className="img-wrapper w-full h-auto aspect-square">
              {/* <Image
                src={paddle}
                alt="Paddle illustration"
                className="w-full! h-full! object-cover"
              /> */}
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
              <hr  className="w-full text-[#00000033]"/>
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
              <hr  className="w-full text-[#00000033]"/>
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
              <button className="btn btn-primary flex items-center gap-2.5 leading-normal mt-2.5 cursor-pointer">
                Start Designing
              </button>
              {/* <div className=" flex lg:flex-row flex-col items-start gap-5">
                <span className="font-Allotrope text-[130px] font-bold leading-0 text-black">
                  1
                </span>

                <div>
                  <h2 className="font-Allotrope  font-bold text-black leading-[40px]">
                    CHOOSE A PADDLE DESIGN
                  </h2>
                  <p className=" mt-3.5">
                    Pick from House Pickleball’s designs or start from scratch.
                  </p>
                </div>
              </div>
              <hr className="h-px bg-[rgba(0, 0, 0, 0.20)] my-7 border-none" /> */}
              {/* <div className="flex lg:flex-row flex-col items-start gap-5">
                <span className="font-Allotrope text-[130px] font-bold leading-none text-black">
                  2
                </span>

                <div>
                  <h2 className="text-black uppercase font-Allotrope leading-[40px]">
                    Customize with Paddle ID
                  </h2>
                  <p className=" mt-3.5">Add colors, patterns, and text.</p>
                </div>
              </div>
              <hr className="h-px bg-[rgba(0,0,0,0.2)] my-7 border-none" />

              <div className="flex lg:flex-row flex-col items-start gap-5">
                <span className="font-Allotrope text-[130px] font-bold leading-none text-black">
                  3
                </span>

                <div>
                  <h2 className="text-black uppercase font-Allotrope leading-[40px]">
                    Order & Play
                  </h2>
                  <p className=" mt-3.5">
                    Get your custom pickleball racquet delivered and dominate
                    the court.
                  </p>
                </div>
              </div>
              <button className="btn btn-secondary flex items-center gap-2.5 leading-normal mt-10 cursor-pointer">
                Start Designing
                <div className="icon-wrapper">
                  <Image
                    src={btnArrowWhite}
                    alt="Arrow svg"
                    width={40} // Adjust width as needed
                    height={40} // Adjust height as needed
                  />
                </div>
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* featured paddles section */}
      <section className="mt-80 px-5 featured-section">
        <div className="w-1/3 mx-auto">
          <h2 className="text-center text-black leading-[107.692%] tracking-[-1.3px]">
            Featured Paddles Our Best Sellers
          </h2>
        </div>
        <div className="mt-6">
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
      <section className="mt-80 px-5 accessories-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div className=" bg-black text-white  lg:px-[84px] lg:py-[164px] px-[30px] py-[92px] rounded-4xl flex flex-col items-center justify-center text-center ">
              <h3 className="font-Allotrope uppercase leading-[95.238%] mb-[5px]">
                Paddles
              </h3>
              <p className="text-[#d0d2d2] fs-18">
                Our paddles are rigorously tested for quality, and we stand
                behind every product with a hassle-free return policy.
              </p>
              <button className="btn btn-primary flex items-center gap-2.5 leading-normal mt-6 cursor-pointer">
                View All
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
            <div className=" bg-black text-white  lg:px-[84px] lg:py-[164px] px-[30px] py-[92px] rounded-4xl flex flex-col items-center justify-center text-center ">
              <h3 className="font-Allotrope uppercase leading-[95.238%] mb-[5px]">
                Accessories
              </h3>
              <p className="text-[#d0d2d2] fs-18">
                Our paddles are rigorously tested for quality, and we stand
                behind every product with a hassle-free return policy.
              </p>
              <button className="btn btn-primary flex items-center gap-2.5 leading-normal mt-6 cursor-pointer">
                View All
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
            <div className=" bg-black text-white  lg:px-[84px] lg:py-[164px] px-[30px] py-[92px] rounded-4xl flex flex-col items-center justify-center text-center ">
              <h3 className="font-Allotrope uppercase leading-[95.238%] mb-[5px]">
                Sets
              </h3>
              <p className="text-[#d0d2d2] fs-18">
                Our paddles are rigorously tested for quality, and we stand
                behind every product with a hassle-free return policy.
              </p>
              <button className="btn btn-primary flex items-center gap-2.5 leading-normal mt-6 cursor-pointer">
                View All
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
            <div className=" bg-black text-white  lg:px-[84px] lg:py-[164px] px-[30px] py-[92px] rounded-4xl flex flex-col items-center justify-center text-center ">
              <h3 className="font-Allotrope uppercase leading-[95.238%] mb-[5px]">
                Gear
              </h3>
              <p className="text-[#d0d2d2] fs-18">
                Our paddles are rigorously tested for quality, and we stand
                behind every product with a hassle-free return policy.
              </p>
              <button className="btn btn-primary flex items-center gap-2.5 leading-normal mt-6 cursor-pointer">
                View All
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
      </section>

      {/* slide video section */}
      <section className="mt-80 px-5">
        <div className="container mx-auto">
          <div className="flex items-center gap-16">
            <div className="w-2/3">
              <h2 className="text-black leading-[107.692%] tracking-[-1.3px]">
                Why House Pickleball? It’s About Community
              </h2>
              <div className="pe-26">
                <p className="mt-6">
                  At House, it's about more than high-quality paddles—it's about
                  joining a thriving community of players who share your
                  passion.
                </p>
                <p className="mt-7">
                  We're not just here to sell paddles; we're here to get people
                  on the court, connecting and enjoying the game. When you
                  choose House, you become part of something bigger - a movement
                  obsessed with spreading the love for Pickleball.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <Swiper
                modules={[Scrollbar]}
                spaceBetween={15}
                slidesPerView={1.2}
                scrollbar={{
                  el: ".custom-scrollbar",
                  draggable: true,
                  hide: false,
                }}
              >
                <SwiperSlide>
                  <div className="relative">
                    {/* Image Wrapper */}
                    <div className="img-wrapper w-auto h-full aspect-[3/4]">
                      <Image
                        className="w-full! h-full! object-cover rounded-4xl overflow-hidden"
                        src={VideoOneThumbnail}
                        alt="Video Thumbnail"
                        width={400} // Adjust width as needed
                        height={523} // Adjust height as needed
                      />
                    </div>

                    {/* Icon Wrapper */}
                    <div className="icon-wrapper absolute top-1/2 left-1/2 -translate-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="none"
                        viewBox="0 0 100 100"
                      >
                        {/* ✅ Remove foreignObject if you're not embedding HTML properly */}
                        <circle
                          cx="50"
                          cy="50"
                          r="50"
                          fill="#fff"
                          fillOpacity="0.3"
                          data-figma-bg-blur-radius="9"
                        />

                        {/* ✅ Play Button */}
                        <path
                          fill="#000"
                          fillOpacity="0.5"
                          d="M65.5 47.402c2 1.155 2 4.041 0 5.196l-21 12.124c-2 1.155-4.5-.288-4.5-2.598V37.876c0-2.31 2.5-3.753 4.5-2.598z"
                        />

                        {/* ✅ ClipPath (Remove from <div>, Use SVG Elements Instead) */}
                        <defs>
                          <clipPath id="bgblur_0_256_14254_clip_path">
                            <circle cx="50" cy="50" r="50" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    <div className="img-wrapper w-auto h-full aspect-[3/4]">
                      <Image
                        className="w-full! h-full! object-cover rounded-4xl overflow-hidden"
                        src={VideoOneThumbnail}
                        alt="Video Thumbnail"
                        width={400}
                        height={523}
                      />
                    </div>
                    <div className="icon-wrapper absolute top-1/2 left-1/2 -translate-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="none"
                        viewBox="0 0 100 100"
                      >
                        {/* ✅ Blur Effect inside SVG */}
                        <circle
                          cx="50"
                          cy="50"
                          r="50"
                          fill="#fff"
                          fillOpacity="0.3"
                        />

                        {/* ✅ Play Button */}
                        <path
                          fill="#000"
                          fillOpacity="0.5"
                          d="M65.5 47.402c2 1.155 2 4.041 0 5.196l-21 12.124c-2 1.155-4.5-.288-4.5-2.598V37.876c0-2.31 2.5-3.753 4.5-2.598z"
                        />

                        {/* ✅ ClipPath Definition */}
                        <defs>
                          <clipPath id="bgblur_0_256_14254_clip_path">
                            <circle cx="50" cy="50" r="50" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="relative">
                    <div className="img-wrapper w-auto h-full aspect-[3/4]">
                      <Image
                        className="w-full! h-full! object-cover rounded-4xl overflow-hidden"
                        src={VideoOneThumbnail}
                        alt="Video Thumbnail"
                        width={400}
                        height={523}
                      />
                    </div>
                    <div className="icon-wrapper absolute top-1/2 left-1/2 -translate-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="none"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="50"
                          fill="#fff"
                          fillOpacity="0.3"
                        />

                        <path
                          fill="#000"
                          fillOpacity="0.5"
                          d="M65.5 47.402c2 1.155 2 4.041 0 5.196l-21 12.124c-2 1.155-4.5-.288-4.5-2.598V37.876c0-2.31 2.5-3.753 4.5-2.598z"
                        />

                        {/* ✅ No duplicate <defs>, keeps your SVG structure clean */}
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="custom-scrollbar mt-6 h-3.5 rounded-[10px] bg-[#F5F5F5]"></div>
        </div>
      </section>

      {/* testimonials section */}
      <section className="mt-80 px-5 overflow-x-clip testimonial-section">
        <div className="w-1/3 mx-auto">
          <h2 className="text-center text-black leading-[107.692%] tracking-[-1.3px]">
            Testimonials What Our Clients Say About Us
          </h2>
        </div>
        <div className="mt-24">
          <Swiper spaceBetween={20} slidesPerView={5}>
            <SwiperSlide>
              <div className="card rounded-[20px] bg-white shadow p-5">
                <div className="user-image-wrapper rounded-[28px] overflow-hidden -mt-[25%]">
                  <Image
                    className="w-full! h-full! object-cover"
                    src={UserImage}
                    alt="Peter Kalua"
                    width={132} // Adjust width as needed
                    height={132} // Adjust height as needed
                  />
                </div>

                <div className="flex justify-between items-center mt-6">
                  <h4 className="text-2xl text-black">Peter Kalua</h4>
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
                <p className="text-lg! mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer eros lectus, euismod et maximus non, egestas non nunc.
                  Integer eros lectus, euismod et maximus non, egestas .
                </p>

                <div className="review-images grid grid-cols-2 gap-2.5 mt-9">
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
              <div className="card rounded-[20px] bg-white shadow p-5">
                <div className="user-image-wrapper rounded-[28px] overflow-hidden -mt-[25%]">
                  <Image
                    className="w-full! h-full! object-cover"
                    src={UserImage}
                    alt="Peter Kalua"
                    width={132} // Adjust width as needed
                    height={132} // Adjust height as needed
                  />
                </div>

                <div className="flex justify-between items-center mt-6">
                  <h4 className="text-2xl text-black">Peter Kalua</h4>
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
                <p className="text-lg! mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer eros lectus, euismod et maximus non, egestas non nunc.
                  Integer eros lectus, euismod et maximus non, egestas .
                </p>

                <div className="review-images grid grid-cols-2 gap-2.5 mt-9">
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
              <div className="card rounded-[20px] bg-white shadow p-5">
                <div className="user-image-wrapper rounded-[28px] overflow-hidden -mt-[25%]">
                  <Image
                    className="w-full! h-full! object-cover"
                    src={UserImage}
                    alt="Peter Kalua"
                    width={132} // Adjust width as needed
                    height={132} // Adjust height as needed
                  />
                </div>

                <div className="flex justify-between items-center mt-6">
                  <h4 className="text-2xl text-black">Peter Kalua</h4>
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
                <p className="text-lg! mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer eros lectus, euismod et maximus non, egestas non nunc.
                  Integer eros lectus, euismod et maximus non, egestas .
                </p>

                <div className="review-images grid grid-cols-2 gap-2.5 mt-9">
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
              <div className="card rounded-[20px] bg-white shadow p-5">
                <div className="user-image-wrapper rounded-[28px] overflow-hidden -mt-[25%]">
                  <Image
                    className="w-full! h-full! object-cover"
                    src={UserImage}
                    alt="Peter Kalua"
                    width={132} // Adjust width as needed
                    height={132} // Adjust height as needed
                  />
                </div>

                <div className="flex justify-between items-center mt-6">
                  <h4 className="text-2xl text-black">Peter Kalua</h4>
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
                <p className="text-lg! mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer eros lectus, euismod et maximus non, egestas non nunc.
                  Integer eros lectus, euismod et maximus non, egestas .
                </p>

                <div className="review-images grid grid-cols-2 gap-2.5 mt-9">
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
              <div className="card rounded-[20px] bg-white shadow p-5">
                <div className="user-image-wrapper rounded-[28px] overflow-hidden -mt-[25%]">
                  <Image
                    className="w-full! h-full! object-cover"
                    src={UserImage}
                    alt="Peter Kalua"
                    width={132} // Adjust width as needed
                    height={132} // Adjust height as needed
                  />
                </div>

                <div className="flex justify-between items-center mt-6">
                  <h4 className="text-2xl text-black">Peter Kalua</h4>
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
                <p className="text-lg! mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer eros lectus, euismod et maximus non, egestas non nunc.
                  Integer eros lectus, euismod et maximus non, egestas .
                </p>

                <div className="review-images grid grid-cols-2 gap-2.5 mt-9">
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
              <div className="card rounded-[20px] bg-white shadow p-5">
                <div className="user-image-wrapper rounded-[28px] overflow-hidden -mt-[25%]">
                  <Image
                    className="w-full! h-full! object-cover"
                    src={UserImage}
                    alt="Peter Kalua"
                    width={132} // Adjust width as needed
                    height={132} // Adjust height as needed
                  />
                </div>

                <div className="flex justify-between items-center mt-6">
                  <h4 className="text-2xl text-black">Peter Kalua</h4>
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
                <p className="text-lg! mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer eros lectus, euismod et maximus non, egestas non nunc.
                  Integer eros lectus, euismod et maximus non, egestas .
                </p>

                <div className="review-images grid grid-cols-2 gap-2.5 mt-9">
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
      </section>

      {/* our blog section */}
      <section className="mt-80 px-5">
        <div className="container mx-auto">
          <div className="w-1/2">
            <h2 className="text-black leading-[107.692%] tracking-[-1.3px]">
              Our Blog Tips, Tournaments & Custom Paddle Insights
            </h2>
          </div>
          <BlogSlide />
        </div>
      </section>

      {/* trade your paddle section */}
      <section className="mt-80 px-5">
        <div className="container mx-auto">
          <div className="flex items-center gap-18">
            <div className="w-1/2">
              <h2 className="text-black leading-[107.692%] tracking-[-1.3px]">
                Trade Your Paddle, Get $75 Toward a New One.
              </h2>
              <ul className="mt-7 list-disc ms-7 leading-normal">
                <li>Like New: $75 Gift Card</li>
                <li>Used: $50 Gift Card</li>
                <li>Heavily Used: $25 Gift Card</li>
              </ul>

              <button className="btn btn-secondary flex items-center gap-2.5 leading-normal mt-8 cursor-pointer">
                Learn More
                <div className="icon-wrapper">
                  <Image
                    src={btnArrowWhite}
                    alt="Arrow svg"
                    width={40} // Adjust width as needed
                    height={40} // Adjust height as needed
                  />
                </div>
              </button>
            </div>
            <div className="w-1/2">
              <Image
                src={TradePaddle}
                alt="Trade Your Paddle"
                width={634} // Adjust width as needed
                height={567} // Adjust height as needed
              />
            </div>
          </div>
        </div>
      </section>

      {/* footer start */}
      <FooterSection />
    </>
  );
};

export default Landing;
