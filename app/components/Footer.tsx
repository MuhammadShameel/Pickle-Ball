import React from "react";
import Link from "next/link";

import HousePickleBall from "../../public/assets/images/housepickleball.png";
import Image from "next/image";

const FooterSection = ({ className = "" }) => {
  return (
    <>
      <footer
        className={`pb-5 lg:pb-10 pt-10.5 md:pt-14 lg:pt-16 xl:pt-20 px-3 sm:px-3.5 md:px-5 bg-dark-green ${className}`}
      >
        <div className="container mx-auto">
          <Image
            src={HousePickleBall}
            alt="house pickle ball"
            className="w-full! h-auto"
          />
          <div className="flex flex-row flex-wrap justify-between mt-11 md:mt-13 lg:mt-15 gap-y-10">
            <div className="w-full sm:w-2/4 lg:w-1/4 ">
              <h3 className="uppercase text-white font-normal! font-wide leading-[100%]">
                About Us
              </h3>
              <p className="mt-3.5 md:mt-6 text-[#78958B] fs-18 leading-normal">
                A job career refers to the long-term professional journey of an
                individual, encompassing various roles.
              </p>

              <div className="flex gap-2 mt-3.5 md:mt-6 ">
                <a
                  href="#"
                  className="w-[40px] aspect-square rounded-full border border-[#567C6F] flex items-center justify-center"
                >
                  <svg
                    width="8"
                    height="17"
                    viewBox="0 0 8 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.64297 16.5988V8.29877H0V5.43841H1.64297V3.72106C1.64297 1.38758 2.57069 0 5.20647 0H7.40082V2.86068H6.0292C5.00316 2.86068 4.93528 3.26042 4.93528 4.00645L4.93155 5.43808H7.41636L7.1256 8.29844H4.93155V16.5988H1.64297Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-[40px] aspect-square rounded-full border border-[#567C6F] flex items-center justify-center"
                >
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.47409 3.71915L6.503 4.20713L6.02129 4.14738C4.26789 3.91833 2.73608 3.14154 1.43548 1.83694L0.799628 1.18962L0.635848 1.66764C0.289022 2.73323 0.510606 3.85857 1.23316 4.61544C1.61852 5.03371 1.53182 5.09346 0.867066 4.84449C0.635849 4.76482 0.433533 4.70507 0.414265 4.73495C0.346826 4.80466 0.578044 5.71091 0.761091 6.06943C1.01158 6.56736 1.52218 7.05534 2.08096 7.34415L2.55303 7.5732L1.99425 7.58316C1.45474 7.58316 1.43548 7.59312 1.49328 7.80225C1.68596 8.44957 2.44705 9.13673 3.29485 9.43549L3.89216 9.64463L3.37192 9.96331C2.6012 10.4214 1.6956 10.6803 0.789994 10.7003C0.35646 10.7102 0 10.7501 0 10.7799C0 10.8795 1.17536 11.4372 1.85938 11.6563C3.91143 12.3036 6.34885 12.0248 8.17932 10.9194C9.47992 10.1326 10.7805 8.56908 11.3875 7.05534C11.715 6.24868 12.0426 4.77478 12.0426 4.06771C12.0426 3.60961 12.0715 3.54985 12.611 3.00212C12.9289 2.68344 13.2276 2.33488 13.2854 2.23529C13.3817 2.04608 13.3721 2.04608 12.8807 2.21537C12.0619 2.51414 11.9462 2.4743 12.3509 2.02616C12.6495 1.70748 13.006 1.12987 13.006 0.960568C13.006 0.930692 12.8615 0.980485 12.6977 1.07011C12.5243 1.1697 12.1389 1.31908 11.8499 1.40871L11.3297 1.57801L10.8576 1.24937C10.5975 1.07011 10.2314 0.870939 10.0387 0.811186C9.54736 0.671763 8.7959 0.691681 8.35274 0.851022C7.14848 1.29917 6.38739 2.45439 6.47409 3.71915Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-[40px] aspect-square rounded-full border border-[#567C6F] flex items-center justify-center"
                >
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.17844 15.4925H0V5.5332H3.17844V15.4925Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.57977 3.31977H1.56171C0.613198 3.31977 0 2.5817 0 1.65931C0 0.717408 0.631874 0 1.59839 0C2.5649 0 3.1601 0.717408 3.17844 1.65931C3.17844 2.5817 2.5649 3.31977 1.57977 3.31977Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.833 15.4922H11.7098V10.2864C11.7098 8.9788 11.2578 8.08653 10.1271 8.08653C9.2642 8.08653 8.75022 8.68805 8.52449 9.26903C8.4419 9.47724 8.42163 9.76735 8.42163 10.0582V15.4925H5.29785C5.29785 15.4925 5.33902 6.67502 5.29785 5.76195H8.42163V7.1402C8.83618 6.47765 9.57864 5.5332 11.237 5.5332C13.2923 5.5332 14.8332 6.92424 14.8332 9.91304L14.833 15.4922Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full sm:w-auto flex gap-8 sm:gap-3.5 lg:gap-1 xl:gap-12.5 ">
              <div className="">
                <p className="leading-normal text-white">Menu</p>
                <ul className="mt-2.5 md:mt-5 space-y-1.5 md:space-y-2.5">
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      About
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="leading-normal text-white">Explore</p>
                <ul className="mt-2.5 md:mt-5 space-y-1.5 md:space-y-2.5">
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Custom Paddle
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Paddles
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Accessories
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Gear
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Sets
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="leading-normal text-white">Help & Support</p>
                <ul className="mt-2.5 md:mt-5 space-y-1.5 md:space-y-2.5">
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Shipping policy
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="#"
                      className="text-[#78958B] fs-18 leading-normal"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full sm:w-2/4 lg:w-auto ">
              <div className="flex flex-col">
                <p className="uppercase leading-normal text-white">
                  OFFICE LOCATION
                </p>
                <p className="mt-1.5 md:mt-3.5 text-[#78958B] leading-normal">
                  Address Line Lorem Ipsum Dolore Sit
                </p>
              </div>
              <div className="flex flex-col mt-5 md:mt-8 lg:mt-11">
                <p className="leading-normal text-white">
                  Subscribe to Newsletter
                </p>
                <form action="" method="post">
                  <div className="flex mt-2.5 md:mt-5 lg:mt-7 rounded-[6px] overflow-hidden">
                    <input
                      placeholder="Enter Email"
                      type="text"
                      className="w-full outline-none! px-3.5 md:px-6 py-2.5 md:py-3.5 text-white"
                      style={{ background: "rgba(255, 255, 255, 0.20)" }}
                    />
                    <button className="btn-white  cursor-pointer rounded-l-none! p-2.5 md:p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.4299 5.93018L20.4999 12.0002L14.4299 18.0702"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.5 12H20.33"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-5.5 border-t border-[#567C6F]">
                <p className="text-end text-[12px]! text-white mt-1">
                  © By House . All rights reserved.
                  {/* Design by NanolixDigital */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
