import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Star from "../../public/assets/star.svg";
import BlankStar from "../../public/assets/blank-star.svg";
import UserImage from "../../public/assets/user-image.png";
import ReviewImageOne from "../../public/assets/review-image-one.png";
import ReviewImageTwo from "../../public/assets/review-image-two.png";

const Testimonials = () => {
  return (
    <>
      <section className="mt-100 px-3 sm:px-3.5 md:px-5 testimonial-section">
        <div className="container mx-auto">
          <div className="mb-3.5 sm:mb-6">
            <h3 className="uppercase text-black text-center leading-[100%] font-wide">
              Testimonials
            </h3>
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
    </>
  );
};

export default Testimonials;
