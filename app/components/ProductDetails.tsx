"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "flowbite";

import ProductPreview from "../../public/assets/images/product-preview.png";
import Star from "../../public/assets/star.svg";
import BlankStar from "../../public/assets/blank-star.svg";

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
            <div className="w-full lg:w-1/2 pe-18 border border-red-500">
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
            <div className="w-full lg:w-1/2 border border-red-500">
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
                          className="flex items-center justify-between w-full cursor-pointer py-7 border-b border-[#CCCCCC]"
                          onClick={() => toggleAccordion(item.id)}
                          aria-expanded={openAccordion === item.id}
                          aria-controls={`accordion-collapse-body-${item.id}`}
                        >
                          {item.header}
                          <svg
                            className={`transition-transform duration-200 ${
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
          <h2 className="text-black leading-[100%] uppercase ">
            Reviews and Rating
          </h2>
          <div className="mt-8">
            <div className="rounded-[10px] bg-[#F6F6F6] p-8">
              <p className="text-black leading-normal font-bold!">
                Rate this Backer and tell others what you think
              </p>
              <div className="flex gap-2 mt-6">
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <path
                      d="M39.5171 10.3368L44.5791 20.4608C45.2693 21.8701 47.1101 23.2219 48.6632 23.4807L57.838 25.0051C63.7053 25.983 65.0858 30.2396 60.8579 34.4388L53.7252 41.5716C52.5172 42.7795 51.8557 45.1092 52.2296 46.7774L54.2716 55.6071C55.8822 62.5961 52.172 65.2996 45.9884 61.6469L37.3888 56.5562C35.8357 55.6358 33.2759 55.6358 31.694 56.5562L23.0944 61.6469C16.9395 65.2996 13.2005 62.5673 14.8112 55.6071L16.8532 46.7774C17.2271 45.1092 16.5656 42.7795 15.3576 41.5716L8.22484 34.4388C4.0257 30.2396 5.37748 25.983 11.2448 25.0051L20.4196 23.4807C21.944 23.2219 23.7847 21.8701 24.475 20.4608L29.5369 10.3368C32.298 4.84345 36.7848 4.84345 39.5171 10.3368Z"
                      stroke="#292D32"
                      stroke-width="3.23564"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <path
                      d="M39.5171 10.3368L44.5791 20.4608C45.2693 21.8701 47.1101 23.2219 48.6632 23.4807L57.838 25.0051C63.7053 25.983 65.0858 30.2396 60.8579 34.4388L53.7252 41.5716C52.5172 42.7795 51.8557 45.1092 52.2296 46.7774L54.2716 55.6071C55.8822 62.5961 52.172 65.2996 45.9884 61.6469L37.3888 56.5562C35.8357 55.6358 33.2759 55.6358 31.694 56.5562L23.0944 61.6469C16.9395 65.2996 13.2005 62.5673 14.8112 55.6071L16.8532 46.7774C17.2271 45.1092 16.5656 42.7795 15.3576 41.5716L8.22484 34.4388C4.0257 30.2396 5.37748 25.983 11.2448 25.0051L20.4196 23.4807C21.944 23.2219 23.7847 21.8701 24.475 20.4608L29.5369 10.3368C32.298 4.84345 36.7848 4.84345 39.5171 10.3368Z"
                      stroke="#292D32"
                      stroke-width="3.23564"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <path
                      d="M39.5171 10.3368L44.5791 20.4608C45.2693 21.8701 47.1101 23.2219 48.6632 23.4807L57.838 25.0051C63.7053 25.983 65.0858 30.2396 60.8579 34.4388L53.7252 41.5716C52.5172 42.7795 51.8557 45.1092 52.2296 46.7774L54.2716 55.6071C55.8822 62.5961 52.172 65.2996 45.9884 61.6469L37.3888 56.5562C35.8357 55.6358 33.2759 55.6358 31.694 56.5562L23.0944 61.6469C16.9395 65.2996 13.2005 62.5673 14.8112 55.6071L16.8532 46.7774C17.2271 45.1092 16.5656 42.7795 15.3576 41.5716L8.22484 34.4388C4.0257 30.2396 5.37748 25.983 11.2448 25.0051L20.4196 23.4807C21.944 23.2219 23.7847 21.8701 24.475 20.4608L29.5369 10.3368C32.298 4.84345 36.7848 4.84345 39.5171 10.3368Z"
                      stroke="#292D32"
                      stroke-width="3.23564"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <path
                      d="M39.5171 10.3368L44.5791 20.4608C45.2693 21.8701 47.1101 23.2219 48.6632 23.4807L57.838 25.0051C63.7053 25.983 65.0858 30.2396 60.8579 34.4388L53.7252 41.5716C52.5172 42.7795 51.8557 45.1092 52.2296 46.7774L54.2716 55.6071C55.8822 62.5961 52.172 65.2996 45.9884 61.6469L37.3888 56.5562C35.8357 55.6358 33.2759 55.6358 31.694 56.5562L23.0944 61.6469C16.9395 65.2996 13.2005 62.5673 14.8112 55.6071L16.8532 46.7774C17.2271 45.1092 16.5656 42.7795 15.3576 41.5716L8.22484 34.4388C4.0257 30.2396 5.37748 25.983 11.2448 25.0051L20.4196 23.4807C21.944 23.2219 23.7847 21.8701 24.475 20.4608L29.5369 10.3368C32.298 4.84345 36.7848 4.84345 39.5171 10.3368Z"
                      stroke="#292D32"
                      stroke-width="3.23564"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <path
                      d="M39.5171 10.3368L44.5791 20.4608C45.2693 21.8701 47.1101 23.2219 48.6632 23.4807L57.838 25.0051C63.7053 25.983 65.0858 30.2396 60.8579 34.4388L53.7252 41.5716C52.5172 42.7795 51.8557 45.1092 52.2296 46.7774L54.2716 55.6071C55.8822 62.5961 52.172 65.2996 45.9884 61.6469L37.3888 56.5562C35.8357 55.6358 33.2759 55.6358 31.694 56.5562L23.0944 61.6469C16.9395 65.2996 13.2005 62.5673 14.8112 55.6071L16.8532 46.7774C17.2271 45.1092 16.5656 42.7795 15.3576 41.5716L8.22484 34.4388C4.0257 30.2396 5.37748 25.983 11.2448 25.0051L20.4196 23.4807C21.944 23.2219 23.7847 21.8701 24.475 20.4608L29.5369 10.3368C32.298 4.84345 36.7848 4.84345 39.5171 10.3368Z"
                      stroke="#292D32"
                      stroke-width="3.23564"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
