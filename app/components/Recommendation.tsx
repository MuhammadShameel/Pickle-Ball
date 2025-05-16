import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Recommendation = () => {
  return (
    <>
      <div className="mt-5 md:mt-7 lg:mt-8.5">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={2}
          autoplay
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 22,
            },
          }}
        >
          <SwiperSlide>
            <div className="card relative rounded-[6px] sm:rounded-[10px] flex flex-col p-2.5 sm:p-5  border border-[#E5E5E5] overflow-hidden">
              <div className="card-header relative">
                <div className="img-wrapper w-[100%] aspect-square">
                  <img
                    alt="Premium Pickleball Paddle Set – Lightweight & Durable"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    className="w-full! h-full! object-cover"
                    src="../../public/assets/images/product.png"
                  />
                </div>
              </div>
              <div className="card-body mt-3.5 md:mt-5 h-full">
                <a
                  className="cursor-pointer transition-all hover:underline"
                  href="/products/premium-pickleball-paddle-set-lightweight-durable"
                >
                  <p className="text-black leading-normal">
                    Premium Pickleball Paddle Set – Lightweight &amp; Durable
                  </p>
                </a>
                <h3 className="font-normal! text-black leading-[100%] mt-2.5 md:mt-5 font-wide">
                  10000.0 PKR
                </h3>
              </div>
              <div className="card-footer">
                <div className="flex flex-col mt-3 sm:mt-4 md:mt-6 lg:mt-10 gap-1 sm:gap-2">
                  <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                    Customize
                  </button>
                  <button className="btn style-2 btn-primary leading-tight cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card relative rounded-[6px] sm:rounded-[10px] flex flex-col p-2.5 sm:p-5  border border-[#E5E5E5] overflow-hidden">
              <div className="card-header relative">
                <div className="img-wrapper w-[100%] aspect-square">
                  <img
                    alt="Premium Pickleball Paddle Set – Lightweight & Durable"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    className="w-full! h-full! object-cover"
                    src="../../public/assets/images/product.png"
                  />
                </div>
              </div>
              <div className="card-body mt-3.5 md:mt-5 h-full">
                <a
                  className="cursor-pointer transition-all hover:underline"
                  href="/products/premium-pickleball-paddle-set-lightweight-durable"
                >
                  <p className="text-black leading-normal">
                    Premium Pickleball Paddle Set – Lightweight &amp; Durable
                  </p>
                </a>
                <h3 className="font-normal! text-black leading-[100%] mt-2.5 md:mt-5 font-wide">
                  10000.0 PKR
                </h3>
              </div>
              <div className="card-footer">
                <div className="flex flex-col mt-3 sm:mt-4 md:mt-6 lg:mt-10 gap-1 sm:gap-2">
                  <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                    Customize
                  </button>
                  <button className="btn style-2 btn-primary leading-tight cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card relative rounded-[6px] sm:rounded-[10px] flex flex-col p-2.5 sm:p-5  border border-[#E5E5E5] overflow-hidden">
              <div className="card-header relative">
                <div className="img-wrapper w-[100%] aspect-square">
                  <img
                    alt="Premium Pickleball Paddle Set – Lightweight & Durable"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    className="w-full! h-full! object-cover"
                    src="../../public/assets/images/product.png"
                  />
                </div>
              </div>
              <div className="card-body mt-3.5 md:mt-5 h-full">
                <a
                  className="cursor-pointer transition-all hover:underline"
                  href="/products/premium-pickleball-paddle-set-lightweight-durable"
                >
                  <p className="text-black leading-normal">
                    Premium Pickleball Paddle Set – Lightweight &amp; Durable
                  </p>
                </a>
                <h3 className="font-normal! text-black leading-[100%] mt-2.5 md:mt-5 font-wide">
                  10000.0 PKR
                </h3>
              </div>
              <div className="card-footer">
                <div className="flex flex-col mt-3 sm:mt-4 md:mt-6 lg:mt-10 gap-1 sm:gap-2">
                  <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                    Customize
                  </button>
                  <button className="btn style-2 btn-primary leading-tight cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card relative rounded-[6px] sm:rounded-[10px] flex flex-col p-2.5 sm:p-5  border border-[#E5E5E5] overflow-hidden">
              <div className="card-header relative">
                <div className="img-wrapper w-[100%] aspect-square">
                  <img
                    alt="Premium Pickleball Paddle Set – Lightweight & Durable"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    className="w-full! h-full! object-cover"
                    src="../../public/assets/images/product.png"
                  />
                </div>
              </div>
              <div className="card-body mt-3.5 md:mt-5 h-full">
                <a
                  className="cursor-pointer transition-all hover:underline"
                  href="/products/premium-pickleball-paddle-set-lightweight-durable"
                >
                  <p className="text-black leading-normal">
                    Premium Pickleball Paddle Set – Lightweight &amp; Durable
                  </p>
                </a>
                <h3 className="font-normal! text-black leading-[100%] mt-2.5 md:mt-5 font-wide">
                  10000.0 PKR
                </h3>
              </div>
              <div className="card-footer">
                <div className="flex flex-col mt-3 sm:mt-4 md:mt-6 lg:mt-10 gap-1 sm:gap-2">
                  <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                    Customize
                  </button>
                  <button className="btn style-2 btn-primary leading-tight cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Recommendation;
