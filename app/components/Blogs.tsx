"use client";
import React from "react";
import BlogSlide from "./BlogSlide";
import Link from "next/link";
import Image from "next/image";
import NewsLetter from "./NewsLetter";
import FooterSection from "./Footer";

const blogs = [
  {
    id: "one",
    title: "Top 10 Pickleball Tips for Beginners",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros lectus, euismod et maximus non, egestas non nunc.",
    featuredImgUrl: "/assets/images/blog-demo.png",
    link: "/",
  },
  {
    id: "two",
    title: "Upcoming Pickleball Tournaments",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros lectus, euismod et maximus non, egestas non nunc.",
    featuredImgUrl: "/assets/images/blog-demo.png",
    link: "/",
  },
  {
    id: "three",
    title: "Best Pickleball Courts in Your Area",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros lectus, euismod et maximus non, egestas non nunc.",
    featuredImgUrl: "/assets/images/blog-demo.png",
    link: "/",
  },
  {
    id: "four",
    title: "Best Pickleball Courts in Your Area",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros lectus, euismod et maximus non, egestas non nunc.",
    featuredImgUrl: "/assets/images/blog-demo.png",
    link: "/",
  },
];

const Blogs = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="mt-2 px-3 sm:px-3.5 md:px-5">
        <div className="container mx-auto">
          <div className="">
            <div className="flex flex-col items-center">
              <div className="w-full xl:w-2/3">
                <h1 className="text-green uppercase leading-[80.769%] text-center">
                  Tips, Tournaments & Custom Paddle Insights
                </h1>
              </div>

              <p className="leading-normal mt-4 text-center">
                Lorem ipsum dolor sit amet,adipiscing elit. Vivamus varius
                sapien semper odio ullamcorper,Lorem ipsum dolor sit
                amet,adipiscing elit. Vivamus varius sapien semper odio
                ullamcorper,Lorem ipsum dolor sit amet,adipiscing elit. Vivamus
                varius sapien semper odio ullamcorper,
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BLOG SECTION */}
      <section className="mt-100">
        <div className="mb-3.5 sm:mb-6">
          <h3 className="uppercase text-black text-center leading-[100%] font-wide">
            Featured Blog
          </h3>
        </div>
        <BlogSlide />
      </section>

      {/* BLOGS SECTION */}
      <section className="mt-100 px-3 sm:px-3.5 md:px-5">
        <div className="container mx-auto">
          <div className="mb-3.5 sm:mb-6">
            <h3 className="uppercase text-black text-center leading-[100%] font-wide">
              Explore All
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2.5 gap-y-5 sm:gap-x-5 sm:gap-y-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="card">
                <div className="img-wrapper w-full aspect-4/3 rounded-[10px] overflow-hidden">
                  <Image
                    src={blog.featuredImgUrl}
                    width={300}
                    height={413}
                    alt={blog.title}
                    className="w-full! h-full! object-cover"
                  />
                </div>
                <div className="card-body flex flex-col gap-1 sm:gap-3.5 mt-2 sm:mt-3.5">
                  <h5 className="text-black leading-normal">{blog.title}</h5>
                  <p className="fs-18 leading-normal">{blog.excerpt}</p>
                  <Link
                    href={blog.link}
                    className="flex items-center leading-normal text-green gap-0.5"
                  >
                    <span>Read More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.42627 5.9895L18.0105 5.9895L18.0105 14.5738"
                        stroke="#1E503F"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.98975 18.0105L17.8904 6.10989"
                        stroke="#1E503F"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <NewsLetter />

      {/* FOOTER SECTION */}
      <FooterSection />
    </>
  );
};

export default Blogs;
