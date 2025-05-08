"use client";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "../styles/custompaddle.css";

import ImageCarousel from "../../public/assets/images/image-carousol.png";
import Testimonials from "./Testimonials";
import FooterSection from "./Footer";

const CustomPaddle = () => {
  return (
    <>
      {/* CUSTOM PADDLE */}
      <section className="mt-2 px-3 sm:px-3.5 md:px-5">
        <div className="container mx-auto">
          <div className="">
            <div className="flex flex-col items-center">
              <div className="w-full xl:w-2/3">
                <h1 className="text-green uppercase leading-[80.769%] text-center">
                  Corporate Collabs
                </h1>
              </div>

              <p className="leading-normal mt-4 text-center">
                Whether it's a brand collaboration, corporate gift or a fun way
                to celebrate a milestone, we provide a fast and easy custom
                pickleball paddle experience.
              </p>

              <div className="mt-4.5 sm:mt-6 md:mt-8 lg:mt-10 flex flex-row justify-center flex-wrap gap-2.5 sm:gap-3.5 md:gap-5">
                <div className="p-2.5 sm:p-4 md:p-5 shadow-sm bg-white rounded-[6px]">
                  <p className="leading-normal">
                    <span className="font-bold!">25</span> Paddles Minimum
                  </p>
                </div>
                <div className="p-2.5 sm:p-4 md:p-5 shadow-sm bg-white rounded-[6px]">
                  <p className="leading-normal">
                    <span className="font-bold!">14+</span> Day Lead Time
                  </p>
                </div>
                <div className="p-2.5 sm:p-4 md:p-5 shadow-sm bg-white rounded-[6px]">
                  <p className="leading-normal">
                    <span className="font-bold!">Free</span> Paddle Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE CAROUSEL */}
      <section className="mt-100 image-carousel">
        <div className="w-full">
          <Swiper
            className="h-full"
            modules={[Autoplay, FreeMode]}
            spaceBetween={10}
            slidesPerView="auto"
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4500}
            allowTouchMove={false}
            simulateTouch={false}
            breakpoints={{
              768: {
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-auto!">
              <div className="img-wrapper w-[180px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={ImageCarousel}
                  alt="Image Carousel"
                  width={350}
                  height={350}
                  className="object-cover w-full! h-full!"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-100 bigger-section">
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
                    Inquire
                  </h2>
                  <p className="text-[#D2DCD9] mt-1 md:mt-3.5">
                    Select the quantity of paddles you would like and submit any
                    logo or artwork files you may have.
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
                    Design
                  </h2>
                  <p className="text-[#D2DCD9] mt-1 md:mt-3.5">
                    The House Pickleball Design Team will work with you to
                    create 2-3 digital mockups within 48 hours.
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
                    Deliver
                  </h2>
                  <p className="text-[#D2DCD9] mt-1 md:mt-3.5">
                    Your custom paddles will be shipped straight to your front
                    door, ready to enjoy!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-pink">
            <div className="xl:w-5/5 p-5 lg:px-10 xl:px-20  sm:py-22 md:py-24 lg:py-12">
              <form
                action=""
                method="post"
                className="flex flex-col gap-3.5 sm:gap-5"
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
                <div className="flex flex-col w-full gap-0.5">
                  <label
                    htmlFor="query"
                    className="fs-18 text-[#332929] leading-normal"
                  >
                    Query
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows={10}
                    className="textarea-field bg-[rgba(0,0,0,0.07)]"
                  ></textarea>
                </div>
                <button className="btn btn-white text-black! leading-normal cursor-pointer text-center shadow-sm">
                  Get Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* FOOTER SECTION */}
      <FooterSection className="mt-100" />
    </>
  );
};

export default CustomPaddle;
