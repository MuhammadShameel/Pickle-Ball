"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import RatingDistribution from "./RatingDistribution";
import "swiper/css";

import "../styles/product-details.css";

import ProductPreview from "../../public/assets/images/product-preview.png";
import Star from "../../public/assets/star.svg";
import BlankStar from "../../public/assets/blank-star.svg";
import Avatar from "../../public/assets/images/avatar.png";

const colorVariants = [
  "FD85C8",
  "237862",
  "000000",
  "7863E2",
  "408FE9",
  "B4C354",
];

const accordionData = [
  {
    id: 1,
    header: "Pickleball Paddle Description",
    body: "We design intuitive mobile apps and web pages that elevate user experiences and drive engagement. Our team blends creativity with functionality to craft seamless, user-centric digital solutions tailored to your needs.",
  },
  {
    id: 2,
    header: "Pickleball Paddle Features",
    body: "We design intuitive mobile apps and web pages that elevate user experiences and drive engagement. Our team blends creativity with functionality to craft seamless, user-centric digital solutions tailored to your needs.",
  },
  {
    id: 3,
    header: "Pickleball Paddle Specifications",
    body: "We design intuitive mobile apps and web pages that elevate user experiences and drive engagement. Our team blends creativity with functionality to craft seamless, user-centric digital solutions tailored to your needs.",
  },
];

const reviews = [
  {
    id: "one",
    username: "CatLover92",
    date: "22 Jul",
    profileImage: "",
    rate: 3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros lectus, euismod et maximus non, egestas non nunc. Integer eros lectus, euismod et maximus non, egestas non nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros lectus, euismod et maximus non, egestas non nunc. Integer eros lectus, euismod et maximus non, egestas non nunc.",
  },
];

const starCounts: [number, number, number, number, number] = [0, 0, 0, 7, 80];

const ProductDetails = () => {
  const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const toggleAccordion = (id: number) =>
    setOpenAccordion((prev) => (prev === id ? null : id));

  return (
    <>
      <section className="px-3 sm:px-3.5 md:px-5 pt-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 pe-18 ">
              <div className="product-gallery sticky top-5">
                <div className="img-wrapper product-image-preview-wrapper w-full aspect-square rounded-[10px] overflow-hidden">
                  <Image
                    src={ProductPreview}
                    alt="Product Preview Image"
                    width={567}
                    height={567}
                    className="w-full! h-full! object-cover"
                  />
                </div>
                <div className="product-thumbnails mt-3.5  items-center gap-2.5">
                  <Swiper
                    className="h-full"
                    modules={[Scrollbar]}
                    spaceBetween={10}
                    slidesPerView="auto"
                    freeMode={true}
                    mousewheel={true}
                    resistanceRatio={0}
                  >
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                      <SwiperSlide key={i} className="h-full w-auto!">
                        <div className="img-wrapper w-[134px] aspect-square rounded-[10px] overflow-hidden">
                          <Image
                            src={ProductPreview}
                            alt="Product Preview Image"
                            width={134}
                            height={134}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 ">
              <h2 className="uppercase text-black leading-[100%]">
                Bread 'n Butter Paddle
              </h2>
              <div className="rating flex items-center gap-1 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Image
                    key={i}
                    src={i < 3 ? Star : BlankStar}
                    alt={i < 3 ? "Filled star" : "Empty star"}
                    width={30}
                    height={30}
                  />
                ))}
                <p className="text-[14px]! text-[#0009] leading-[1rem]">
                  10 reviews
                </p>
              </div>
              <div className="flex flex-row flex-wrap gap-2 mt-7">
                {colorVariants.map((hex, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveColorIndex(i)}
                    className={`w-[70px] aspect-square cursor-pointer rounded-full  border transition-all ${
                      activeColorIndex === i
                        ? "border-black p-3"
                        : "border-transparent p-0"
                    }`}
                  >
                    <span
                      className="rounded-full h-full w-full block transition-all"
                      style={{ backgroundColor: `#${hex}` }}
                    ></span>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-7 border-t border-[#CCCCCC]">
                <span className="leading-normal text-[#808080] block">
                  Total
                </span>
                <h2 className="font-h1 text-black leading-[80.769%]">
                  74.99 $
                </h2>
              </div>
              <div className="mt-7 flex flex-row gap-x-2.5">
                <a
                  className="btn style-2 btn-outline-green text-center leading-normal cursor-pointer w-full"
                  href="#"
                >
                  Customize
                </a>
                <a
                  className="btn style-2 btn-primary text-center leading-normal cursor-pointer w-full"
                  href="/"
                >
                  Add to Cart
                </a>
              </div>

              <div className="mt-7 accordion-container">
                <div id="accordion-collapse">
                  {accordionData.map((item) => (
                    <div key={item.id} className="accordion">
                      <p className="text-black leading-normal">
                        <button
                          type="button"
                          className="flex items-center justify-between w-full cursor-pointer py-5 md:py-7 border-b border-[#CCCCCC]"
                          onClick={() => toggleAccordion(item.id)}
                          aria-expanded={openAccordion === item.id}
                          aria-controls={`accordion-collapse-body-${item.id}`}
                        >
                          {item.header}
                          <svg
                            className={`transition-transform duration-200 w-[16px] md:w-[20px] ${
                              openAccordion === item.id ? "rotate-45" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 1L12 23"
                              stroke="#1E503F"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            <path
                              d="M1 12L23 12"
                              stroke="#1E503F"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </p>

                      <div
                        id={`accordion-collapse-body-${item.id}`}
                        className={`grid transition-all duration-300 ease-in-out ${
                          openAccordion === item.id
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pt-3.5">
                            <p className="fs-18 text-black leading-normal">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 ">
                <p className="text-[#808080] leading-normal mb-3.5">
                  Frequently bought With{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW SECTION */}
      <section className="px-3 sm:px-3.5 md:px-5 mt-100">
        <div className="container mx-auto">
          <div>
            <h2 className="text-black leading-[100%] uppercase ">
              Reviews and Rating
            </h2>
            <div className="mt-5 md:mt-7 lg:mt-8.5">
              <div className="rounded-[10px] bg-[#F6F6F6] p-5 md:p-9 lg:p-11 xl:px-15 xl:py-12.5">
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-y-7.5">
                  <div className="lg:border-r border-[#C5C5C5] flex-1 flex items-center lg:pe-5">
                    <div className="flex items-center gap-1 md:gap-4 2xl:gap-5">
                      <h2 className="font-h1 text-black leading-[80.769%]">
                        4.9
                      </h2>
                      <div className="flex flex-col  gap-1 md:gap-3">
                        <div className="total-rating-stars flex items-center gap-1 md:gap-1.5 2xl:gap-2.5">
                          <div className="star-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                            >
                              <path
                                d="M28.6052 7.3125L32.2719 14.6458C32.7719 15.6667 34.1052 16.6458 35.2302 16.8333L41.876 17.9375C46.126 18.6458 47.126 21.7292 44.0635 24.7708L38.8969 29.9375C38.0219 30.8125 37.5427 32.5 37.8135 33.7083L39.2927 40.1042C40.4594 45.1667 37.7719 47.125 33.2927 44.4792L27.0635 40.7917C25.9385 40.125 24.0844 40.125 22.9385 40.7917L16.7094 44.4792C12.251 47.125 9.5427 45.1458 10.7094 40.1042L12.1885 33.7083C12.4594 32.5 11.9802 30.8125 11.1052 29.9375L5.93853 24.7708C2.89686 21.7292 3.87603 18.6458 8.12603 17.9375L14.7719 16.8333C15.876 16.6458 17.2094 15.6667 17.7094 14.6458L21.376 7.3125C23.376 3.33333 26.626 3.33333 28.6052 7.3125Z"
                                fill="#FF9900"
                              />
                            </svg>
                          </div>
                          <div className="star-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                            >
                              <path
                                d="M28.6052 7.3125L32.2719 14.6458C32.7719 15.6667 34.1052 16.6458 35.2302 16.8333L41.876 17.9375C46.126 18.6458 47.126 21.7292 44.0635 24.7708L38.8969 29.9375C38.0219 30.8125 37.5427 32.5 37.8135 33.7083L39.2927 40.1042C40.4594 45.1667 37.7719 47.125 33.2927 44.4792L27.0635 40.7917C25.9385 40.125 24.0844 40.125 22.9385 40.7917L16.7094 44.4792C12.251 47.125 9.5427 45.1458 10.7094 40.1042L12.1885 33.7083C12.4594 32.5 11.9802 30.8125 11.1052 29.9375L5.93853 24.7708C2.89686 21.7292 3.87603 18.6458 8.12603 17.9375L14.7719 16.8333C15.876 16.6458 17.2094 15.6667 17.7094 14.6458L21.376 7.3125C23.376 3.33333 26.626 3.33333 28.6052 7.3125Z"
                                fill="#FF9900"
                              />
                            </svg>
                          </div>
                          <div className="star-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                            >
                              <path
                                d="M28.6052 7.3125L32.2719 14.6458C32.7719 15.6667 34.1052 16.6458 35.2302 16.8333L41.876 17.9375C46.126 18.6458 47.126 21.7292 44.0635 24.7708L38.8969 29.9375C38.0219 30.8125 37.5427 32.5 37.8135 33.7083L39.2927 40.1042C40.4594 45.1667 37.7719 47.125 33.2927 44.4792L27.0635 40.7917C25.9385 40.125 24.0844 40.125 22.9385 40.7917L16.7094 44.4792C12.251 47.125 9.5427 45.1458 10.7094 40.1042L12.1885 33.7083C12.4594 32.5 11.9802 30.8125 11.1052 29.9375L5.93853 24.7708C2.89686 21.7292 3.87603 18.6458 8.12603 17.9375L14.7719 16.8333C15.876 16.6458 17.2094 15.6667 17.7094 14.6458L21.376 7.3125C23.376 3.33333 26.626 3.33333 28.6052 7.3125Z"
                                fill="#FF9900"
                              />
                            </svg>
                          </div>
                          <div className="star-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                            >
                              <path
                                d="M28.6052 7.3125L32.2719 14.6458C32.7719 15.6667 34.1052 16.6458 35.2302 16.8333L41.876 17.9375C46.126 18.6458 47.126 21.7292 44.0635 24.7708L38.8969 29.9375C38.0219 30.8125 37.5427 32.5 37.8135 33.7083L39.2927 40.1042C40.4594 45.1667 37.7719 47.125 33.2927 44.4792L27.0635 40.7917C25.9385 40.125 24.0844 40.125 22.9385 40.7917L16.7094 44.4792C12.251 47.125 9.5427 45.1458 10.7094 40.1042L12.1885 33.7083C12.4594 32.5 11.9802 30.8125 11.1052 29.9375L5.93853 24.7708C2.89686 21.7292 3.87603 18.6458 8.12603 17.9375L14.7719 16.8333C15.876 16.6458 17.2094 15.6667 17.7094 14.6458L21.376 7.3125C23.376 3.33333 26.626 3.33333 28.6052 7.3125Z"
                                fill="#FF9900"
                              />
                            </svg>
                          </div>
                          <div className="star-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                            >
                              <path
                                d="M28.6052 7.3125L32.2719 14.6458C32.7719 15.6667 34.1052 16.6458 35.2302 16.8333L41.876 17.9375C46.126 18.6458 47.126 21.7292 44.0635 24.7708L38.8969 29.9375C38.0219 30.8125 37.5427 32.5 37.8135 33.7083L39.2927 40.1042C40.4594 45.1667 37.7719 47.125 33.2927 44.4792L27.0635 40.7917C25.9385 40.125 24.0844 40.125 22.9385 40.7917L16.7094 44.4792C12.251 47.125 9.5427 45.1458 10.7094 40.1042L12.1885 33.7083C12.4594 32.5 11.9802 30.8125 11.1052 29.9375L5.93853 24.7708C2.89686 21.7292 3.87603 18.6458 8.12603 17.9375L14.7719 16.8333C15.876 16.6458 17.2094 15.6667 17.7094 14.6458L21.376 7.3125C23.376 3.33333 26.626 3.33333 28.6052 7.3125Z"
                                fill="#FF9900"
                              />
                            </svg>
                          </div>
                        </div>
                        <p className="text-black">87 reviews</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:border-r border-[#C5C5C5] flex-1 self-stretch  lg:px-5">
                    <div className="max-w-[260px] mx-auto">
                      <RatingDistribution
                        counts={starCounts}
                        barSize="h-2"
                        barColor="bg-dark-green"
                        trackColor="bg-[#EAEAEA]"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-end lg:ps-5">
                    <div>
                      <button className="btn btn-primary leading-normal  cursor-pointer">
                        Write A Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7.5 sm:mt-9 md:mt-12.5">
            <div className="p-8.5 review border border-red-500">
              <div className="review-header">
                <div className="border border-red-500 flex flex-row items-center gap-x-4">
                  <div className="img-wrapper rounded-full overflow-hidden border border-red-500">
                    <Image
                      src={Avatar}
                      width={70}
                      height={70}
                      alt="Avatar Image"
                      className="w-full! h-full! object-cover"
                    />
                  </div>
                  <div className="border border-red-500 flex flex-row items-center gap-4">
                    <div className="username">
                      <p className="text-[#323232] leading-normal">
                        CatLover92
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="6"
                        viewBox="0 0 5 6"
                        fill="none"
                      >
                        <circle
                          cx="2.20983"
                          cy="3.02672"
                          r="2.15709"
                          fill="#323232"
                        />
                      </svg>
                    </div>
                    <div className="review-date">
                      <p className="text-[#323232] leading-normal"> 22 Jul</p>
                    </div>
                  </div>
                </div>
                <div className="review-stars">
                  <div className="star-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <path
                        d="M28.6052 7.3125L32.2719 14.6458C32.7719 15.6667 34.1052 16.6458 35.2302 16.8333L41.876 17.9375C46.126 18.6458 47.126 21.7292 44.0635 24.7708L38.8969 29.9375C38.0219 30.8125 37.5427 32.5 37.8135 33.7083L39.2927 40.1042C40.4594 45.1667 37.7719 47.125 33.2927 44.4792L27.0635 40.7917C25.9385 40.125 24.0844 40.125 22.9385 40.7917L16.7094 44.4792C12.251 47.125 9.5427 45.1458 10.7094 40.1042L12.1885 33.7083C12.4594 32.5 11.9802 30.8125 11.1052 29.9375L5.93853 24.7708C2.89686 21.7292 3.87603 18.6458 8.12603 17.9375L14.7719 16.8333C15.876 16.6458 17.2094 15.6667 17.7094 14.6458L21.376 7.3125C23.376 3.33333 26.626 3.33333 28.6052 7.3125Z"
                        fill="#FF9900"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
