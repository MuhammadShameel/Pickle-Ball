"use client";

import React, { useState, useEffect } from "react";

import { Product } from "./ProductsServer";
import Sidebar from "../components/Sidebar";
import AddToCartButton from "./AddToCartButton";
import { useCart } from "../context/CartContext"; // Use the CartContext hook
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


interface ProductsProps {
  products: Product[];
  errorMessage: string | null;
}

const filters = [
  {
    id: "collections",
    name: "Collections",
    options: [
      { value: "Lorem Ipsum1", label: "Lorem Ipsum1", checked: false },
      { value: "Lorem Ipsum2", label: "Lorem Ipsum2", checked: false },
      { value: "Lorem Ipsum3", label: "Lorem Ipsum3", checked: true },
      { value: "Lorem Ipsum4", label: "Lorem Ipsum4", checked: false },
      { value: "Lorem Ipsum5", label: "Lorem Ipsum5", checked: false },
    ],
  },
  {
    id: "core thickness",
    name: "Core Thickness",
    options: [
      { value: "14 mm", label: "14 mm", checked: false },
      { value: "16 mm", label: "16 mm", checked: false },
    ],
  },
  {
    id: "carbon fiber",
    name: "Carbon Fiber",
    options: [
      { value: "T-3600", label: "T-3600", checked: false },
      { value: "T-7000", label: "T-7000", checked: false },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Products: React.FC<ProductsProps> = ({ products, errorMessage }) => {
  const { cartProducts, addToCart } = useCart();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [tooltipProductId, setTooltipProductId] = useState<string | null>(null);

  useEffect(() => {
    import("tw-elements").then(({ Tab, initTWE }) => {
      initTWE({ Tab });
    });
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setSidebarOpen(true);
    setTooltipProductId(product.id);

    setTimeout(() => {
      setTooltipProductId(null);
    }, 2000);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
  }, [cartProducts]);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (

    <>
      {errorMessage && (
        <div className="error-message text-red-500">{errorMessage}</div>
      )}
      <section className="pt-11 px-3 sm:px-3.5 md:px-5">
        <div className="mx-auto max-w-7xl">
          {/* Mobile filter dialog */}
          <Dialog
            open={mobileFiltersOpen}
            onClose={setMobileFiltersOpen}
            className="relative z-40 lg:hidden"
          >
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
            />

            <div className="fixed inset-0 z-40 flex">
              <DialogPanel
                transition
                className="relative mr-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
              >
                <div className="border-b border-[#CCCCCC] pb-3 md:pb-6 px-4 flex items-center justify-between">
                  <h4 className="text-black uppercase leading-[100%]">
                    Filters
                  </h4>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="flex items-center justify-center p-2 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>

                {/* Filters */}
                <form className="px-4">
                  <div className="pt-6 space-y-7 sm:space-y-10">
                    {filters.map((section) => (
                      <div key={section.id}>
                        <p className="text-black leading-normal font-bold!">
                          {section.name}
                        </p>
                        <div className="flex flex-col gap-1 mt-3.5">
                          {section.options.map((option, optionIdx) => (
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              key={option.value}
                              className="flex items-center gap-x-3 py-2.5 px-5 rounded-[6px] border border-[#E5E5E5] cursor-pointer"
                            >
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                type="checkbox"
                                className="checkbox bg-[#D9D9D9] w-[20px]! h-[20px]!"
                                name={`${section.id}[]`}
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                              />

                              <span className="fs-18 leading-[100%]">
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}

    <div>
      {errorMessage && <div className="error-message text-red-500">{errorMessage}</div>}
      <section className=" py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="relative card flex flex-col p-5 rounded-[10px] border border-[#0000001a] overflow-hidden">

                <div className="card-header relative">
                  <div className="img-wrapper text-center">
                    {product.featuredImage && (
                      <img className="w-full h-full object-contain" src={product.featuredImage.url} alt={product.featuredImage.altText || product.title} width={100} height={100} />
                    )}

                  </div>
                  <div className="pt-6 space-y-7 sm:space-y-10">
                    <div>
                      <p className="text-black leading-normal font-bold!">
                        Colors
                      </p>
                      <div className="flex flex-row flex-wrap gap-2.5 mt-3.5">
                        <label
                          htmlFor="red"
                          className="p-3.5 sm:p-4 md:p-5  rounded-[6px] border border-[#CCCCCC] cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name=""
                            id="red"
                            className="sr-only"
                          />
                          <span className="w-[20px] md:w-[30px] aspect-square block rounded-full bg-[#FD85C8]"></span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <p className="text-black leading-normal font-bold!">
                        Price
                      </p>
                      <div className="flex gap-2.5 mt-3.5">
                        <input
                          type="number"
                          placeholder="Min."
                          name=""
                          id=""
                          className="w-full input-field"
                        />
                        <input
                          type="number"
                          placeholder="Max."
                          name=""
                          id=""
                          className="w-full input-field"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </DialogPanel>
            </div>
          </Dialog>

          <h2 className="leading-[100%] text-black uppercase text-center lg:text-left">
            All Pickleball Paddles
          </h2>

          <section
            aria-labelledby="products-heading"
            className="pt-6 sm:pt-7 md:pt-8 lg:pt-12"
          >
            <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-4 ">
              {/* Filters */}
              <form className="hidden lg:block border-e border-[#cccccc]">
                <div className="border-b border-[#CCCCCC] pb-10">
                  <h4 className="text-black uppercase leading-[100%] mt-2">
                    Filters
                  </h4>
                </div>
                <div className="py-6 pe-3.5 space-y-10">
                  {filters.map((section) => (
                    <div key={section.id}>
                      <p className="text-black leading-normal font-bold!">
                        {section.name}
                      </p>
                      <div className="flex flex-col gap-1 mt-3.5">
                        {section.options.map((option, optionIdx) => (
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            key={option.value}
                            className="flex items-center gap-x-3 py-2.5 px-5 rounded-[6px] border border-[#E5E5E5] cursor-pointer"
                          >
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              type="checkbox"
                              className="checkbox bg-[#D9D9D9] w-[20px]! h-[20px]!"
                              name={`${section.id}[]`}
                              id={`filter-${section.id}-${optionIdx}`}
                            />

                            <span className="fs-18 leading-[100%]">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="py-6 pe-3.5 space-y-10">
                  <div>
                    <p className="text-black leading-normal font-bold!">
                      Colors
                    </p>
                    <div className="flex flex-row flex-wrap gap-2.5 mt-3.5">
                      <label
                        htmlFor="red"
                        className="p-5 rounded-[6px] border border-[#CCCCCC] cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name=""
                          id="red"
                          className="sr-only"
                        />
                        <span className="w-[30px] aspect-square block rounded-full bg-[#FD85C8]"></span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <p className="text-black leading-normal font-bold!">
                      Price
                    </p>
                    <div className="flex gap-2.5 mt-3.5">
                      <input
                        type="number"
                        placeholder="Min."
                        name=""
                        id=""
                        className="w-full input-field"
                      />
                      <input
                        type="number"
                        placeholder="Max."
                        name=""
                        id=""
                        className="w-full input-field"
                      />
                    </div>
                  </div>
                </div>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 ">
                <div className="lg:ps-3.5 border-b border-[#CCCCCC] pb-5">
                  <ul
                    className="flex list-none gap-1"
                    role="tablist"
                    data-twe-nav-ref
                  >
                    <li>
                      <button
                        type="button"
                        onClick={() => setMobileFiltersOpen(true)}
                        className="btn p-2! sm:p-2.5! btn-outline-green lg:hidden"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22 6.5H16"
                            stroke="#1E503F"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 6.5H2"
                            stroke="#1E503F"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                            stroke="#1E503F"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22 17.5H18"
                            stroke="#1E503F"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 17.5H2"
                            stroke="#1E503F"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                            stroke="#1E503F"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                    <li role="presentation" className="w-full">
                      <a
                        href="#tabs-home"
                        className="btn style-2 btn-outline-green text-center leading:[1.2rem] sm:leading-[1.5rem] lg:leading-normal block"
                        data-twe-toggle="pill"
                        data-twe-target="#tabs-home"
                        data-twe-nav-active
                        role="tab"
                        aria-controls="tabs-home"
                        aria-selected="true"
                      >
                        Paddles
                      </a>
                    </li>
                    <li role="presentation" className="w-full">
                      <a
                        href="#tabs-profile"
                        className="btn style-2 btn-outline-green text-center leading:[1.2rem] sm:leading-[1.5rem] lg:leading-normal block"
                        data-twe-toggle="pill"
                        data-twe-target="#tabs-profile"
                        role="tab"
                        aria-controls="tabs-profile"
                        aria-selected="false"
                      >
                        Sets
                      </a>
                    </li>
                    <li role="presentation" className="w-full">
                      <a
                        href="#tabs-messages"
                        className="btn style-2 btn-outline-green text-center leading:[1.2rem] sm:leading-[1.5rem] lg:leading-normal block"
                        data-twe-toggle="pill"
                        data-twe-target="#tabs-messages"
                        role="tab"
                        aria-controls="tabs-messages"
                        aria-selected="false"
                      >
                        Gear
                      </a>
                    </li>
                    <li role="presentation" className="w-full">
                      <a
                        href="#tabs-contact"
                        className="btn style-2 btn-outline-green text-center leading:[1.2rem] sm:leading-[1.5rem] lg:leading-normal block"
                        data-twe-toggle="pill"
                        data-twe-target="#tabs-contact"
                        role="tab"
                        aria-controls="tabs-contact"
                        aria-selected="false"
                      >
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Tabs content */}
                <div className="mt-5 lg:ps-3.5">
                  <div
                    className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                    id="tabs-home"
                    role="tabpanel"
                    aria-labelledby="tabs-home-tab"
                    data-twe-tab-active
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-3  gap-y-2.5 sm:gap-y-5 md:gap-y-6 lg:gap-y-7 gap-x-2.5 md:gap-x-4 xl:gap-x-5">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="card relative rounded-[6px] sm:rounded-[10px] flex flex-col p-2.5 sm:p-5  border border-[#E5E5E5] overflow-hidden"
                        >
                          <div className="card-header relative">
                            <div className="img-wrapper w-[100%] aspect-square">
                              {product.featuredImage && (
                                <Image
                                  className="w-full! h-full! object-cover"
                                  src={product.featuredImage.url}
                                  alt={
                                    product.featuredImage.altText ||
                                    product.title
                                  }
                                  width={100}
                                  height={100}
                                />
                              )}
                            </div>
                          </div>

                          <div className="card-body mt-3.5 md:mt-5">
                            <p className="text-black leading-normal">
                              {product.title}
                            </p>
                            <h4 className="text-black leading-[100%] mt-2.5 md:mt-5">
                              {product.priceRange.minVariantPrice.amount}{" "}
                              {product.priceRange.minVariantPrice.currencyCode}
                            </h4>

                            <div className="flex flex-col mt-3 sm:mt-4 md:mt-6 lg:mt-10 gap-1 sm:gap-2">
                              <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                                Customize
                              </button>
                              <AddToCartButton
                                product={product}
                                onAddToCart={handleAddToCart}
                              />
                            </div>
                          </div>

                          {/* Tooltip for each product individually */}
                          {tooltipProductId === product.id && (
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded-lg z-10">
                              Product added to cart!
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                    id="tabs-profile"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab"
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-2.5 sm:gap-y-5 md:gap-y-6 lg:gap-y-7 gap-x-2.5 md:gap-x-4 xl:gap-x-5">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="relative card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden"
                        >
                          <div className="card-header relative">
                            <div className="img-wrapper text-center">
                              {product.featuredImage && (
                                <Image
                                  className="w-full h-full object-contain"
                                  src={product.featuredImage.url}
                                  alt={
                                    product.featuredImage.altText ||
                                    product.title
                                  }
                                  width={100}
                                  height={100}
                                />
                              )}
                            </div>
                          </div>

                          <div className="card-body mt-3.5 md:mt-5">
                            <p className="text-black leading-normal">
                              {product.title}
                            </p>
                            <h4 className="text-black leading-[100%] mt-2.5 md:mt-5">
                              {product.priceRange.minVariantPrice.amount}{" "}
                              {product.priceRange.minVariantPrice.currencyCode}
                            </h4>

                            <div className="flex flex-col mt-3 sm:mt-4 md:mt-6 lg:mt-10 gap-1 sm:gap-2">
                              <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                                Customize
                              </button>
                              <AddToCartButton
                                product={product}
                                onAddToCart={handleAddToCart}
                              />
                            </div>
                          </div>

                          {/* Tooltip for each product individually */}
                          {tooltipProductId === product.id && (
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded-lg z-10">
                              Product added to cart!
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                    id="tabs-messages"
                    role="tabpanel"
                    aria-labelledby="tabs-messages-tab"
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-2.5 sm:gap-y-5 md:gap-y-6 lg:gap-y-7 gap-x-2.5 md:gap-x-4 xl:gap-x-5">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="relative card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden"
                        >
                          <div className="card-header relative">
                            <div className="img-wrapper text-center">
                              {product.featuredImage && (
                                <Image
                                  className="w-full h-full object-contain"
                                  src={product.featuredImage.url}
                                  alt={
                                    product.featuredImage.altText ||
                                    product.title
                                  }
                                  width={100}
                                  height={100}
                                />
                              )}
                            </div>
                          </div>

                          <div className="card-body mt-3.5 md:mt-5">
                            <p className="text-black  leading-normal">
                              {product.title}
                            </p>
                            <h4 className="text-black leading-[100%] mt-2.5 md:mt-5">
                              {product.priceRange.minVariantPrice.amount}{" "}
                              {product.priceRange.minVariantPrice.currencyCode}
                            </h4>

                            <div className="flex flex-col mt-3 sm:mt-4 md:mt-6 lg:mt-10 gap-1 sm:gap-2">
                              <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                                Customize
                              </button>
                              <AddToCartButton
                                product={product}
                                onAddToCart={handleAddToCart}
                              />
                            </div>
                          </div>

                          {/* Tooltip for each product individually */}
                          {tooltipProductId === product.id && (
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded-lg z-10">
                              Product added to cart!
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                    id="tabs-contact"
                    role="tabpanel"
                    aria-labelledby="tabs-contact-tab"
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-2.5 sm:gap-y-5 md:gap-y-6 lg:gap-y-7 gap-x-2.5 md:gap-x-4 xl:gap-x-5">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="relative card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden"
                        >
                          <div className="card-header relative">
                            <div className="img-wrapper text-center">
                              {product.featuredImage && (
                                <Image
                                  className="w-full h-full object-contain"
                                  src={product.featuredImage.url}
                                  alt={
                                    product.featuredImage.altText ||
                                    product.title
                                  }
                                  width={100}
                                  height={100}
                                />
                              )}
                            </div>
                          </div>

                          <div className="card-body mt-3.5 md:mt-5">
                            <p className="text-black  leading-normal">
                              {product.title}
                            </p>
                            <h4 className="text-black leading-[100%] mt-2.5 md:mt-5">
                              {product.priceRange.minVariantPrice.amount}{" "}
                              {product.priceRange.minVariantPrice.currencyCode}
                            </h4>

                            <div className="flex flex-col mt-3 sm:mt-4 md:mt-6 lg:mt-10 gap-1 sm:gap-2">
                              <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                                Customize
                              </button>
                              <AddToCartButton
                                product={product}
                                onAddToCart={handleAddToCart}
                              />
                            </div>
                          </div>

                          {/* Tooltip for each product individually */}
                          {tooltipProductId === product.id && (
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded-lg z-10">
                              Product added to cart!
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

            ))}

          </div>


      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
    </>
  );
};

export default Products;
