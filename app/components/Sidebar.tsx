// app/components/Sidebar.tsx
"use client";

import React from "react";
import Image from "next/image";

import CartExample from "../../public/assets/images/cart-example.png";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // If the sidebar is not open, don't render it

  return (
    <div
      className={`cart-sidebar fixed top-0 right-0 overflow-y-auto w-[50%] h-full bg-white p-7 pt-12 z-50 transition-transform transform ${
        isOpen ? "translate-x-0 active" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border border-red-500">
        <h2 className="leading-[100%] text-black capitalize">Your cart</h2>
        <button className="cursor-pointer p-2" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M10.0994 6.00009L14.7719 1.32729C15.076 1.02334 15.076 0.531906 14.7719 0.22796C14.468 -0.0759865 13.9766 -0.0759865 13.6726 0.22796L8.99993 4.90076L4.32737 0.22796C4.02329 -0.0759865 3.532 -0.0759865 3.22806 0.22796C2.92398 0.531906 2.92398 1.02334 3.22806 1.32729L7.90062 6.00009L3.22806 10.6729C2.92398 10.9768 2.92398 11.4683 3.22806 11.7722C3.37953 11.9238 3.5787 12 3.77772 12C3.97674 12 4.17576 11.9238 4.32737 11.7722L8.99993 7.09942L13.6726 11.7722C13.8242 11.9238 14.0233 12 14.2223 12C14.4213 12 14.6203 11.9238 14.7719 11.7722C15.076 11.4683 15.076 10.9768 14.7719 10.6729L10.0994 6.00009Z"
              fill="black"
              fillOpacity="0.5"
            />
          </svg>
        </button>
      </div>
      {/* CART PRODUCTS */}
      <div className="mt-7 border border-red-500 flex flex-col gap-y-5">
        <div className="flex flex-row justify-between border border-red-500">
          <div className="flex flex-row gap-3.5 items-center justify-start">
            <div className="img-wrapper w-[100px] aspect-square rounded-[10px] overflow-hidden">
              <Image
                src={CartExample}
                alt="Cart Example Product"
                className="w-full! h-full! object-cover"
              />
            </div>
            <div className="border border-red-500">
              <p className="product-name text-black leading-normal">
                Bread 'n Butter Paddle
              </p>
              <h3 className="text-black font-bold! leading-[95.238%] mt-3">
                74.99 $
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <button className="cursor-pointer p-2 cancel-product self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M10.0994 6.00009L14.7719 1.32729C15.076 1.02334 15.076 0.531906 14.7719 0.22796C14.468 -0.0759865 13.9766 -0.0759865 13.6726 0.22796L8.99993 4.90076L4.32737 0.22796C4.02329 -0.0759865 3.532 -0.0759865 3.22806 0.22796C2.92398 0.531906 2.92398 1.02334 3.22806 1.32729L7.90062 6.00009L3.22806 10.6729C2.92398 10.9768 2.92398 11.4683 3.22806 11.7722C3.37953 11.9238 3.5787 12 3.77772 12C3.97674 12 4.17576 11.9238 4.32737 11.7722L8.99993 7.09942L13.6726 11.7722C13.8242 11.9238 14.0233 12 14.2223 12C14.4213 12 14.6203 11.9238 14.7719 11.7722C15.076 11.4683 15.076 10.9768 14.7719 10.6729L10.0994 6.00009Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </svg>
            </button>
            <div className="quantity-counter flex flex-row rounded-[6px] overflow-hidden">
              <button className="increment flex items-center justify-center text-white bg-dark-green cursor-pointer">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33203 1L8.33203 15.6667"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 8.33398L15.6667 8.33398"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <span className="quantity-value bg-[#F5F5F5] leading-normal text-black px-6">
                1
              </span>
              <button className="decrement flex items-center justify-center text-white bg-dark-green cursor-pointer">
                <svg
                  width="16"
                  height="2"
                  viewBox="0 0 16 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L15.3 1"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between border border-red-500">
          <div className="flex flex-row gap-3.5 items-center justify-start">
            <div className="img-wrapper w-[100px] aspect-square rounded-[10px] overflow-hidden">
              <Image
                src={CartExample}
                alt="Cart Example Product"
                className="w-full! h-full! object-cover"
              />
            </div>
            <div className="border border-red-500">
              <p className="product-name text-black leading-normal">
                Bread 'n Butter Paddle
              </p>
              <h3 className="text-black font-bold! leading-[95.238%] mt-3">
                74.99 $
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <button className="cursor-pointer p-2 cancel-product self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M10.0994 6.00009L14.7719 1.32729C15.076 1.02334 15.076 0.531906 14.7719 0.22796C14.468 -0.0759865 13.9766 -0.0759865 13.6726 0.22796L8.99993 4.90076L4.32737 0.22796C4.02329 -0.0759865 3.532 -0.0759865 3.22806 0.22796C2.92398 0.531906 2.92398 1.02334 3.22806 1.32729L7.90062 6.00009L3.22806 10.6729C2.92398 10.9768 2.92398 11.4683 3.22806 11.7722C3.37953 11.9238 3.5787 12 3.77772 12C3.97674 12 4.17576 11.9238 4.32737 11.7722L8.99993 7.09942L13.6726 11.7722C13.8242 11.9238 14.0233 12 14.2223 12C14.4213 12 14.6203 11.9238 14.7719 11.7722C15.076 11.4683 15.076 10.9768 14.7719 10.6729L10.0994 6.00009Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </svg>
            </button>
            <div className="quantity-counter flex flex-row rounded-[6px] overflow-hidden">
              <button className="increment flex items-center justify-center text-white bg-dark-green cursor-pointer">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33203 1L8.33203 15.6667"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 8.33398L15.6667 8.33398"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <span className="quantity-value bg-[#F5F5F5] leading-normal text-black px-6">
                1
              </span>
              <button className="decrement flex items-center justify-center text-white bg-dark-green cursor-pointer">
                <svg
                  width="16"
                  height="2"
                  viewBox="0 0 16 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L15.3 1"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between border border-red-500">
          <div className="flex flex-row gap-3.5 items-center justify-start">
            <div className="img-wrapper w-[100px] aspect-square rounded-[10px] overflow-hidden">
              <Image
                src={CartExample}
                alt="Cart Example Product"
                className="w-full! h-full! object-cover"
              />
            </div>
            <div className="border border-red-500">
              <p className="product-name text-black leading-normal">
                Bread 'n Butter Paddle
              </p>
              <h3 className="text-black font-bold! leading-[95.238%] mt-3">
                74.99 $
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <button className="cursor-pointer p-2 cancel-product self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M10.0994 6.00009L14.7719 1.32729C15.076 1.02334 15.076 0.531906 14.7719 0.22796C14.468 -0.0759865 13.9766 -0.0759865 13.6726 0.22796L8.99993 4.90076L4.32737 0.22796C4.02329 -0.0759865 3.532 -0.0759865 3.22806 0.22796C2.92398 0.531906 2.92398 1.02334 3.22806 1.32729L7.90062 6.00009L3.22806 10.6729C2.92398 10.9768 2.92398 11.4683 3.22806 11.7722C3.37953 11.9238 3.5787 12 3.77772 12C3.97674 12 4.17576 11.9238 4.32737 11.7722L8.99993 7.09942L13.6726 11.7722C13.8242 11.9238 14.0233 12 14.2223 12C14.4213 12 14.6203 11.9238 14.7719 11.7722C15.076 11.4683 15.076 10.9768 14.7719 10.6729L10.0994 6.00009Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </svg>
            </button>
            <div className="quantity-counter flex flex-row rounded-[6px] overflow-hidden">
              <button className="increment flex items-center justify-center text-white bg-dark-green cursor-pointer">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33203 1L8.33203 15.6667"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 8.33398L15.6667 8.33398"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <span className="quantity-value bg-[#F5F5F5] leading-normal text-black px-6">
                1
              </span>
              <button className="decrement flex items-center justify-center text-white bg-dark-green cursor-pointer">
                <svg
                  width="16"
                  height="2"
                  viewBox="0 0 16 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L15.3 1"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FREQUENTLY BOUGHT */}
      <div className="mt-7 border border-red-500">
        <p className="text-[#808080] leading-normal mb-3.5">
          Frequently bought With{" "}
        </p>
      </div>

      {/* GRAND TOTAL */}
      <div className="mt-7 border-t border-[#E5E5E5]">
        <div className="mt-2.5 flex flex-row justify-between items-center">
          <span>Grand Total</span>
          <h3 className="font-bold! text-black leading-[95.238%]">74.99 $</h3>
        </div>
        <p className="fs-18 text-[#808080] leading-normal">
          Taxes and Shipping calculated at checkout
        </p>
      </div>

      <div className="mt-7 flex flex-row gap-x-2.5">
        <button className="btn style-2 btn-outline-green  leading-normal cursor-pointer w-full">
          View Cart
        </button>
        <button className="btn style-2 btn-primary  leading-normal cursor-pointer w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
