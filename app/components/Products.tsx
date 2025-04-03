import React from "react";
import Image from "next/image";
import { storefrontClient } from "../lib/shopify";
import Link from "next/link";
import { ShopifyProduct } from "../types/shopify";

// import Ball from "../../public/assets/ball.png";
// import PickleBall from "../../public/assets/pickleball.png";
// import btnArrow from "../../public/assets/btn-black-arrow.svg";
// import btnArrowWhite from "../../public/assets/btn-white-arrow.svg";
// import heroImageOne from "../../public/assets/hero-image-one.png";
// import heroImageTwo from "../../public/assets/hero-image-two.png";
// import heroImageThree from "../../public/assets/hero-image-three.png";
// import heroImageFour from "../../public/assets/hero-image-four.png";

import PaddlePink from "../../public/assets/paddle-pink.png";
import Star from "../../public/assets/star.svg";
import BlankStar from "../../public/assets/blank-star.svg";

const Products = async () => {
  const { data } = await storefrontClient.request<{
    products: { nodes: ShopifyProduct[] };
  }>(`
        query {
          products(first: 10) {
            nodes {
              id
              title
              handle
              featuredImage {
                url
                altText
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      `);
  return (
    <div>
      <section className="bg-gray-50 py-8 antialiased  md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* <!-- Heading & Filters --> */}
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="me-2.5 h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                      <a
                        href="#"
                        className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                      >
                        Products
                      </a>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                      <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                        Electronics
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
                Paddles
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <button
                data-modal-toggle="filterModal"
                data-modal-target="filterModal"
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                <svg
                  className="-ms-0.5 me-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                  />
                </svg>
                Filters
                <svg
                  className="-me-0.5 ms-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <button
                id="sortDropdownButton1"
                data-dropdown-toggle="dropdownSort1"
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                <svg
                  className="-ms-0.5 me-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
                  />
                </svg>
                Sort
                <svg
                  className="-me-0.5 ms-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="dropdownSort1"
                className="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                data-popper-placement="bottom"
              >
                <ul
                  className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                  aria-labelledby="sortDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      The most popular{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      Newest{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      Increasing price{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      Decreasing price{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      No. reviews{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      Discount %{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {data?.products.nodes.map((product: any) => (
              <Link key={product.id} href={`/products/${product.handle}`}>
                <div className="card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden">
                  <div className="card-header relative">
                    <div className="img-wrapper text-center">
                      {product.featuredImage && (
                        <Image
                          className="w-full! h-full! object-contain"
                          src={product.featuredImage.url}
                          alt={product.featuredImage.altText || product.title}
                          width={354} // Adjust width as needed
                          height={354} // Adjust height as needed
                        />
                      )}
                    </div>
                    <div className="colors flex flex-col absolute top-1/2 right-0">
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-green block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color active cursor-pointer transition-all">
                        <span className="bg-dark-pink block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-black block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-purple block w-full h-full rounded-full"></span>
                      </button>
                      <button className="color cursor-pointer transition-all">
                        <span className="bg-sky block w-full h-full rounded-full"></span>
                      </button>
                    </div>
                  </div>
                  <div className="card-body mt-2.5">
                    <div className="rating flex items-center gap-2.5">
                      <div className="rating-stars flex items-center">
                        <Image
                          src={Star}
                          alt="Star"
                          width={30} // Adjust width as needed
                          height={30} // Adjust height as needed
                        />
                        <Image
                          src={Star}
                          alt="Star"
                          width={30} // Adjust width as needed
                          height={30} // Adjust height as needed
                        />
                        <Image
                          src={Star}
                          alt="Star"
                          width={30} // Adjust width as needed
                          height={30} // Adjust height as needed
                        />
                        <Image
                          src={BlankStar}
                          alt="Star"
                          width={30} // Adjust width as needed
                          height={30} // Adjust height as needed
                        />
                        <Image
                          src={BlankStar}
                          alt="Star"
                          width={30} // Adjust width as needed
                          height={30} // Adjust height as needed
                        />
                      </div>
                      <p className="text-[14px]! text-[#0009] leading-[1rem]">
                        10 reviews
                      </p>
                    </div>
                    <p className="text-black mt-2.5 leading-normal">
                      {product.title}
                    </p>
                    <h3 className="text-black leading-[95.238%] mt-2.5 font-semibold!">
                      {product.priceRange.minVariantPrice.amount}{" "}
                      {product.priceRange.minVariantPrice.currencyCode}
                    </h3>
                    <div className="flex flex-col mt-6 gap-2.5">
                      <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                        Customize
                      </button>
                      <button className="btn style-2 btn-secondary leading-tight cursor-pointer">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full text-center">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Show more
            </button>
          </div>
        </div>
        {/* <!-- Filter modal --> */}
      </section>
    </div>
  );
};

export default Products;
