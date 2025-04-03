import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import BlogImage from "../../public/assets/blog-image.png";
import btnArrowWhite from "../../public/assets/btn-white-arrow.svg";

const BlogSlide = () => {
  return (
    <div className="mt-12 blog-slide">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="bg-pink p-5 rounded-4xl flex justify-center items-center gap-12">
            <div className=" flex-1/3">
              <div className="img-wrapper rounded-4xl overflow-hidden aspect-1/1">
                <Image
                  className="w-full! h-full! object-cover"
                  src={BlogImage}
                  alt="Blog Image"
                  width={487} // Adjust width as needed
                  height={510} // Adjust height as needed
                />
              </div>
            </div>
            <div className=" flex-2/3">
              <h2 className="text-black leading-[107.692%] tracking-[-1.3px]">
                Top 10 Pickleball Tips for Beginners
              </h2>
              <p className="mt-6 fs-18">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                eros lectus, euismod et maximus non, egestas non nunc.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Integer eros
                lectus, euismod et maximus non, egestas non nunc.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer eros
                lectus, euismod et maximus non, egestas non nunc.
              </p>
              <button className="btn btn-secondary flex items-center gap-2.5 leading-normal mt-11 cursor-pointer">
                Read More
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-pink p-5 rounded-4xl flex justify-center items-center gap-12">
            <div className=" flex-1/3">
              <div className="img-wrapper rounded-4xl overflow-hidden aspect-1/1">
                <Image
                  className="w-full! h-full! object-cover"
                  src={BlogImage}
                  alt="Blog Image"
                  width={487} // Adjust width as needed
                  height={510} // Adjust height as needed
                />
              </div>
            </div>
            <div className=" flex-2/3">
              <h2 className="text-black leading-[107.692%] tracking-[-1.3px]">
                Top 10 Pickleball Tips for Beginners
              </h2>
              <p className="mt-6 fs-18">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                eros lectus, euismod et maximus non, egestas non nunc.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Integer eros
                lectus, euismod et maximus non, egestas non nunc.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer eros
                lectus, euismod et maximus non, egestas non nunc.
              </p>
              <button className="btn btn-secondary flex items-center gap-2.5 leading-normal mt-11 cursor-pointer">
                Read More
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
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSlide;
