import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import ItsAboutCommunity from "../../public/assets/its-about-community.png";

const Community = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center bg-pink ">
          <div className="xl:w-5/5 2xl:w-4/5 px-5  xl:ps-20 py-20 sm:py-22 md:py-24 lg:py-12 text-center lg:text-left">
            <h2 className="font-h1 text-black uppercase leading-[80.769%]">
              It’s About Community
            </h2>
            <p className="leading-normal text-grey mt-2.5 md:mt-3.5">
              At House, we don’t just sell paddles—we build culture. A team who
              loves the game, play hard, and show up for each other on and off
              the court.
            </p>
            <p className="mt-3.5">
              We’re here for the ones who rally with strangers, who make the
              game look good, who turn a court into a community. When you rock
              House, you're repping a brand that’s repping the future of
              Pickleball.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
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
    </>
  );
};

export default Community;
