"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import CartExample from "../../public/assets/images/cart-example.png";
import Link from "next/link";

const CartDetail = () => {
  const { cartProducts } = useCart();
  const { updateQuantity } = useCart();
  const grandTotal = cartProducts.reduce((total, product) => {
    const amount = parseFloat(product.priceRange.minVariantPrice.amount || "0");
    const quantity = Number(product.quantity) || 0;
    return total + amount * quantity;
  }, 0);

  const handleIncrement = (productId: string) => {
    const product = cartProducts.find((item) => item.id === productId);
    if (product) {
      const updatedQuantity = Number(product.quantity) + 1;
      updateQuantity(productId, updatedQuantity);
    }
  };

  const handleDecrement = (productId: string) => {
    const product = cartProducts.find((item) => item.id === productId);
    if (product && Number(product.quantity) > 1) {
      const updatedQuantity = Number(product.quantity) - 1;
      updateQuantity(productId, updatedQuantity);
    }
  };
  return (
    <>
      <section className="px-3 sm:px-3.5 md:px-5">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-black uppercase font-h1 leading-[80.769%]">
              your cart
            </h2>
          </div>
          <div className="cart mt-12">
            <table className="w-full">
              <thead className="py-2.5">
                <tr className="text-left">
                  <th className="py-2.5">
                    <span className="fs-18 text-black leading-normal">
                      Product
                    </span>
                  </th>
                  <th className="py-2.5">
                    <span className="fs-18 text-black leading-normal">
                      Price
                    </span>
                  </th>
                  <th className="py-2.5">
                    <span className="fs-18 text-black leading-normal">
                      Quantity
                    </span>
                  </th>
                  <th className="py-2.5">
                    <span className="fs-18 text-black leading-normal">
                      Total
                    </span>
                  </th>
                  <th className="py-2.5">
                    <span className="fs-18 text-black leading-normal">
                      Select
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((product) => (
                  <tr key={product.id} className="border-t border-[#E5E5E5]">
                    <td className="w-[35%] lg:w-[30%] xl:w-[30%] 2xl:w-[25%] py-5">
                      <div className="flex flex-row gap-3 items-center justify-start">
                        <div className="img-wrapper min-w-[112px] aspect-square rounded-[10px] overflow-hidden">
                          <Image
                            src={product.featuredImage?.url || CartExample}
                            alt={product.title}
                            className="w-full! h-full! object-cover"
                            width={112}
                            height={112}
                          />
                        </div>
                        <div className="">
                          <Link href={"#"}>
                            <p className="cart-item_name text-black leading-normal">
                              {product.title}
                            </p>
                          </Link>
                          <button className="text-green underline cursor-pointer leading-normal">
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="w-[15%] lg:w-[20%] xl:w-[20%] 2xl:w-[25%] py-5 align-text-top ">
                      <span className="cart-item_price text-black leading-normal">
                        {product.priceRange.minVariantPrice.amount}
                      </span>
                    </td>
                    <td className="w-[15%] lg:w-[20%] xl:w-[20%] 2xl:w-[25%] py-5 align-text-top ">
                      <div className="quantity-counter inline-flex flex-row rounded-[6px] overflow-hidden">
                        <button
                          onClick={() => handleDecrement(product.id)}
                          className="decrement flex items-center justify-center text-white bg-dark-green cursor-pointer"
                        >
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
                        <span className="quantity-value bg-[#F5F5F5] leading-normal text-black px-6">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => handleIncrement(product.id)}
                          className="increment flex items-center justify-center text-white bg-dark-green cursor-pointer"
                        >
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
                      </div>
                    </td>
                    <td className="w-[15%] lg:w-[20%] xl:w-[20%] 2xl:w-[25%] py-5 align-text-top ">
                      <span className="cart-item_total text-black leading-normal">
                        {(
                          parseFloat(
                            product.priceRange.minVariantPrice.amount
                          ) * Number(product.quantity)
                        ).toFixed(2)}
                      </span>
                    </td>
                    <td className="py-5 align-text-top text-center ">
                      <input
                        className="checkbox primary"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-12 ">
              <p className="text-[#808080] leading-normal mb-3.5">
                Frequently bought With{" "}
              </p>
            </div>

            <div className="mt-12 ">
              <div className="w-full md:w-[50%] border-t border-[#E5E5E5]">
                <div className="mt-2.5 flex flex-row justify-between items-center">
                  <span>Grand Total</span>
                  <h3 className="font-bold! text-black leading-[95.238%]">
                    {cartProducts
                      .reduce((total, product) => {
                        return (
                          total +
                          parseFloat(
                            product.priceRange.minVariantPrice.amount
                          ) *
                            product.quantity
                        );
                      }, 0)
                      .toFixed(2)}
                  </h3>
                </div>
                <p className="fs-18 text-[#808080] leading-normal">
                  Taxes and Shipping calculated at checkout
                </p>
                <button className="btn style-2 btn-primary  leading-normal cursor-pointer w-full mt-7">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartDetail;
