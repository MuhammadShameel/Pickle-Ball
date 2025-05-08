"use client";
import React from "react";
import Image from "next/image";

import Video from "../../public/assets/images/our-story-video.jpg";
import Founder from "../../public/assets/images/founder.jpg";
import Community from "./Community";
import NewsLetter from "./NewsLetter";
import Testimonials from "./Testimonials";
import FooterSection from "./Footer";

const OurStory = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="mt-2 px-3 sm:px-3.5 md:px-5">
        <div className="container mx-auto">
          <div className="">
            <div className="flex flex-col items-center">
              <div className="w-full xl:w-2/3">
                <h1 className="text-green uppercase leading-[80.769%] text-center">
                  Bread 'n Butter: <br />
                  The Story
                </h1>
              </div>

              <p className="leading-normal mt-4 text-center">
                The flagship product from House. We created the Bread 'n Butter
                paddle because we were looking for a new and exciting game to
                play. We weren't satisfied with the look of the dominant brands
                that we were seeing on local courts. Many looked to have an
                outdated 1990's fitness equipment aesthetic. So, we decided to
                take matters into our own hands and design a new paddle from the
                ground up.
              </p>

              <button className="btn btn-primary  leading-normal mt-3.5 md:mt-6  cursor-pointer shadow-sm">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="mt-100 px-3 sm:px-3.5 md:px-5">
        <div className="container mx-auto">
          <div className="video-thumbnail aspect-video h-auto rounded-[10px] overflow-hidden">
            <Image
              src={Video}
              width={1280}
              height={600}
              alt="Thumbnail"
              className="w-full! h-full! object-cover"
            />
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE */}
      <section className="mt-100">
        <div className="mb-3.5 sm:mb-6">
          <h3 className="uppercase text-black text-center leading-[100%] font-wide">
            Founder’s Message
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="h-full">
              <div className="img-wrapper h-full overflow-hidden aspect-1/1">
                <Image
                  className="w-full! h-full! object-cover"
                  src={Founder}
                  alt="Founder"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center bg-dark-green">
            <div className="xl:w-5/5 2xl:w-4/5 px-5 lg:ps-10 xl:ps-20 py-20 sm:py-22 md:py-24 lg:py-12 text-center lg:text-left">
              <p className="leading-normal text-[#D2DCD9]">
                Drawing inspiration from the street signs of New York City, we
                dedicated countless hours to researching the best materials and
                designing the perfect shape and size for our paddle. <br />
                The result was a high-quality, lightweight paddle that was
                comfortable to hold and provided excellent control and power on
                the pickleball court. In addition, the Bread 'n Butter has a
                unique and stylish design that stands out on the court. The
                pickleball community quickly took notice and the paddle became a
                popular choice for players of all skill levels. <br /> Our
                dedication and passion is to create game-changing products
                that redefine what it means to be a pickleball player.
              </p>
              <span className="leading-normal text-white mt-5 block">
                - Mark Vermylen, Founder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* IT'S BIGGER THAN PADDLES SECTION */}
      <section className="mt-100 bigger-section">
        <div className="mb-3.5 sm:mb-6">
          <h3 className="uppercase text-black text-center leading-[100%] font-wide">
            It's Bigger than paddles
          </h3>
        </div>
        <Community />
      </section>

      {/* NEWSLETTER SECTION  */}
      <NewsLetter />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* FOOTER SECTION */}
      <FooterSection className="mt-100" />
    </>
  );
};

export default OurStory;
