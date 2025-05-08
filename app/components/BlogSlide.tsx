import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import BlogImage from "../../public/assets/blog-image.png";

const BlogSlide = () => {
  return (
    <div className="featured-blog-section">
      <Swiper
        className="h-full"
        modules={[Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="h-full">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 ">
              <div className="h-full">
                <div className="img-wrapper h-full overflow-hidden aspect-1/1">
                  <Image
                    className="w-full! h-full! object-cover"
                    src={BlogImage}
                    alt="It's About Community"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center bg-light-green ">
              <div className="xl:w-5/5 2xl:w-4/5 px-5 lg:ps-10 xl:ps-20 py-20 sm:py-22 md:py-24 lg:py-12 text-center lg:text-left">
                <h2 className="font-h1 text-black uppercase leading-[80.769%]">
                  Top 10 Pickleball Tips for Beginners
                </h2>
                <p className="leading-normal text-grey mt-2.5 md:mt-3.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer eros lectus, euismod et maximus non, egestas non
                  nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="btn btn-primary  leading-normal mt-6 sm:mt-7 md:mt-9 cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 ">
              <div className="h-full">
                <div className="img-wrapper h-full overflow-hidden aspect-1/1">
                  <Image
                    className="w-full! h-full! object-cover"
                    src={BlogImage}
                    alt="It's About Community"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center bg-light-green ">
              <div className="xl:w-5/5 2xl:w-4/5 px-5 lg:ps-10 xl:ps-20 py-20 sm:py-22 md:py-24 lg:py-12 text-center lg:text-left">
                <h2 className="font-h1 text-black uppercase leading-[80.769%]">
                  Top 10 Pickleball Tips for Beginners
                </h2>
                <p className="leading-normal text-grey mt-2.5 md:mt-3.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer eros lectus, euismod et maximus non, egestas non
                  nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="btn btn-primary  leading-normal mt-6 sm:mt-7 md:mt-9 cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSlide;
