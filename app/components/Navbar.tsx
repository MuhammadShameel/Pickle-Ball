"use client";

import React, { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Profile from "../../public/assets/images/profile.svg";
import Bag from "../../public/assets/images/bag.svg";
import MenuIcon from "../../public/assets/images/menu.svg";
import Sidebar from "./Sidebar";
import { useCart } from "../context/CartContext";
import { Product } from "./ProductsServer";

import { Menu, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { cartProducts, addToCart, removeFromCart } = useCart();
  const handleSidebarToggle = () => setIsSidebarOpen((v) => !v);
  const closeSidebar = () => setIsSidebarOpen(false);
  const handleMenuClick = () => setIsMenuOpen((v) => !v);
  const handleAddToCart = (product: Product) => {
    console.log("Adding product to cart:", product);
    addToCart(product);
    handleSidebarToggle();
  };

  const links = [
    "Custom Paddles",
    "Shop",
    "Our Story",
    "Collaborations",
    "Blog",
    "Contact Us",
  ];

  return (
    <>
      <header className="px-3 sm:px-3.5 md:px-5 relative bg-white">
        <div className="container mx-auto py-6 md:py-7 lg:py-10 relative lg:static z-20 bg-white">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuClick}
              className="lg:hidden p-2 rounded-full hover:bg-[#B2FFA9] transition"
            >
              <Image src={MenuIcon} alt="Menu" className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="logo-wrapper max-h-[32px] md:max-h-[50px] lg:max-h-[64px] flex"
            >
              <Image src={Logo} alt="Logo" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center gap-8">
              {links.map((txt) =>
                txt === "Shop" ? (
                  <Menu as="div" key="shop" className="inline-block text-left">
                    <Menu.Button className="outline-0 nav-link">
                      <Link
                        href="/"
                        className="nav-link inline-flex items-center "
                      >
                        Shop
                        <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500 transition-transform duration-200" />
                      </Link>
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Menu.Items className="absolute left-0 top-[90%] w-full bg-white z-30  focus:outline-none pb-7 px-3 sm:px-3.5 md:px-5">
                        <div className="container mx-auto">
                          <div className="grid grid-cols-5 gap-5 ">
                            <div className="border-r border-[#CCCCCC] pb-2.5">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    href="/shop"
                                    className={`block transition-all duration-300 ease  ${
                                      active ? "text-[#1E503F]" : "text-black"
                                    }`}
                                  >
                                    <span className="font-bold!">Shop All</span>
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>

                            <div className="border-r border-[#CCCCCC] pb-2.5">
                              <p className="text-black">Paddles</p>
                              <div className="mt-3.5 flex flex-col gap-2">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Featured Paddles
                                    </Link>
                                  )}
                                </Menu.Item>

                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Best Sellers
                                    </Link>
                                  )}
                                </Menu.Item>

                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Design Your Own Paddle
                                    </Link>
                                  )}
                                </Menu.Item>

                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Exclusive
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>

                            <div className="border-r border-[#CCCCCC] pb-2.5">
                              <p className="text-black">Gear</p>
                              <div className="mt-3.5 flex flex-col gap-2">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Featured Gear
                                    </Link>
                                  )}
                                </Menu.Item>

                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Best Sellers
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>

                            <div className="border-r border-[#CCCCCC] pb-2.5">
                              <p className="text-black">Accessories</p>
                              <div className="mt-3.5 flex flex-col gap-2">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Featured Accessories
                                    </Link>
                                  )}
                                </Menu.Item>

                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Best Sellers
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>

                            <div className=" pb-2.5">
                              <p className="text-black">Sets</p>
                              <div className="mt-3.5 flex flex-col gap-2">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Featured Sets
                                    </Link>
                                  )}
                                </Menu.Item>

                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Best Sellers
                                    </Link>
                                  )}
                                </Menu.Item>

                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Build Your Own Set
                                    </Link>
                                  )}
                                </Menu.Item>

                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      href="/shop/apparel"
                                      className={`block nav-link ${
                                        active ? "" : "text-[#666666]"
                                      }`}
                                    >
                                      Exclusive
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Link key={txt} href="" className="nav-link">
                    {txt}
                  </Link>
                )
              )}
            </nav>

            {/* Profile & Cart */}
            <div className="flex gap-2 md:gap-2.5">
              <button className="w-[32px] md:w-[40px] lg:w-[50px] aspect-square border border-[#00000099] rounded-full p-1.5 md:p-2.5 hover:bg-[#B2FFA9] hover:border-[#1E503F] transition">
                <Image src={Profile} alt="Profile" />
              </button>
              <button
                onClick={handleSidebarToggle}
                className="w-[32px] md:w-[40px] lg:w-[50px] aspect-square border border-[#00000099] rounded-full p-1.5 md:p-2.5 hover:bg-[#B2FFA9] hover:border-[#1E503F] transition"
              >
                <Image src={Bag} alt="Bag" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <nav
          className={`
    lg:hidden absolute top-full inset-x-0 w-full shadow-md
    bg-white bg-opacity-95 z-10
    transform transition-transform transition-opacity duration-300 ease-in-out
    px-3 sm:px-3.5 md:px-5
    ${
      isMenuOpen
        ? "translate-y-0 opacity-100 pointer-events-auto"
        : "-translate-y-full opacity-0 pointer-events-none"
    }
  `}
        >
          <div className="container mx-auto py-6">
            <div className="flex flex-col space-y-4">
              {/* Static Links */}
              {[
                "Custom Paddles",
                "Our Story",
                "Collaborations",
                "Blog",
                "Contact Us",
              ].map((txt) => (
                <Link
                  key={txt}
                  href=""
                  className="nav-link"
                  onClick={handleMenuClick}
                >
                  {txt}
                </Link>
              ))}

              {/* Shop Disclosure */}
              <Disclosure as={"div"}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full flex justify-between items-center">
                      <span className="nav-link">Shop</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-2 pt-5">
                      {/* Paddles */}
                      <Disclosure as={"div"}>
                        {({ open: openP }) => (
                          <>
                            <Disclosure.Button className="w-full flex justify-between items-center">
                              <span
                                className={`fs-18 font-bold! ${
                                  openP ? "text-black" : "text-[#666666]"
                                }`}
                              >
                                Paddles
                              </span>
                              <svg
                                className={`w-4 h-4 transform transition-transform ${
                                  openP ? "rotate-180" : "rotate-0"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col gap-2.5 py-2.5">
                              <Link
                                href="/shop/paddles/featured"
                                className="fs-18 text-[#666666]"
                              >
                                Featured Paddles
                              </Link>
                              <Link
                                href="/shop/paddles/best-sellers"
                                className="fs-18 text-[#666666]"
                              >
                                Best Sellers
                              </Link>
                              <Link
                                href="/shop/paddles/customize"
                                className="fs-18 text-[#666666]"
                              >
                                Design Your Own Paddle
                              </Link>
                              <Link
                                href="/shop/paddles/exclusive"
                                className="fs-18 text-[#666666]"
                              >
                                Exclusive
                              </Link>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      {/* Gear */}
                      <Disclosure as={"div"}>
                        {({ open: openG }) => (
                          <>
                            <Disclosure.Button className="w-full flex justify-between items-center">
                              <span
                                className={`fs-18 font-bold! ${
                                  openG ? "text-black" : "text-[#666666]"
                                }`}
                              >
                                Gear
                              </span>
                              <svg
                                className={`w-4 h-4 transform transition-transform ${
                                  openG ? "rotate-180" : "rotate-0"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col gap-2.5 py-2.5">
                              <Link
                                href="/shop/gear/featured"
                                className="fs-18 text-[#666]"
                              >
                                Featured Gear
                              </Link>
                              <Link
                                href="/shop/gear/best-sellers"
                                className="fs-18 text-[#666]"
                              >
                                Best Sellers
                              </Link>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      {/* Accessories */}
                      <Disclosure as={"div"}>
                        {({ open: openA }) => (
                          <>
                            <Disclosure.Button className="w-full flex justify-between items-center">
                              <span
                                className={`fs-18 font-bold! ${
                                  openA ? "text-black" : "text-[#666666]"
                                }`}
                              >
                                Accessories
                              </span>
                              <svg
                                className={`w-4 h-4 transform transition-transform ${
                                  openA ? "rotate-180" : "rotate-0"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col gap-2.5 py-2.5">
                              <Link
                                href="/shop/accessories/featured"
                                className="fs-18 text-[#666]"
                              >
                                Featured Accessories
                              </Link>
                              <Link
                                href="/shop/accessories/best-sellers"
                                className="fs-18 text-[#666]"
                              >
                                Best Sellers
                              </Link>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      {/* Sets */}
                      <Disclosure as={"div"}>
                        {({ open: openS }) => (
                          <>
                            <Disclosure.Button className="w-full flex justify-between items-center">
                              <span
                                className={`fs-18 font-bold! ${
                                  openS ? "text-black" : "text-[#666666]"
                                }`}
                              >
                                Sets
                              </span>
                              <svg
                                className={`w-4 h-4 transform transition-transform ${
                                  openS ? "rotate-180" : "rotate-0"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col gap-2.5 py-2.5">
                              <Link
                                href="/shop/sets/featured"
                                className="fs-18 text-[#666]"
                              >
                                Featured Sets
                              </Link>
                              <Link
                                href="/shop/sets/best-sellers"
                                className="fs-18 text-[#666]"
                              >
                                Best Sellers
                              </Link>
                              <Link
                                href="/shop/sets/customize"
                                className="fs-18 text-[#666]"
                              >
                                Build Your Own Set
                              </Link>
                              <Link
                                href="/shop/sets/exclusive"
                                className="fs-18 text-[#666]"
                              >
                                Exclusive
                              </Link>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar (Cart) */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        cartProducts={cartProducts}
        onRemoveFromCart={removeFromCart}
      />
    </>
  );
};

export default Navbar;
