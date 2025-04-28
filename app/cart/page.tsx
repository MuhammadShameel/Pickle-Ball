"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import CartExample from "../../public/assets/images/cart-example.png";
import TrashIcon from "../../public/assets/images/trash.svg";
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
                      Remove
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
                      <button className="inline-flex items-center justify-center cursor-pointer">
                        <svg
                          className="w-[18px] h-[18px] fill-[#ae1f23]"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          viewBox="0 0 18 18"
                        >
                          <g>
                            <path
                              className="st0"
                              d="M1013.01-604.78l67.15-.08c1.86.1,3.61,1.25,4.11,3.09-2.06,25.49-5.25,50.94-7.84,76.4-.48,1.79-1.6,3.03-3.4,3.53-16.97.43-34.03.05-51.03.19-2.08-.1-3.74-1.32-4.52-3.21-2.89-25.48-5.69-51.07-8.07-76.6.39-1.87,1.78-2.97,3.6-3.33ZM1026.07-594.65c-2.08.33-3.62,2.54-3.42,4.61,2.27,17.51,2.86,35.28,5.09,52.79.27,2.14.49,5.35,3.12,5.95,3.67.83,6-1.88,5.42-5.42-2.41-17.37-2.68-35.47-5.08-52.78-.4-2.89-1.62-5.69-5.13-5.14ZM1049.78-593.56c-2.49-2.48-6.85-.74-7.11,2.71v56.01c.58,4.81,7.43,4.9,8.27.27-.15-19.12.27-38.32-.21-57.4-.32-.46-.58-1.21-.95-1.58ZM1066.34-594.65c-1.42.23-3.03,1.66-3.33,3.07l-5.4,54.6c-1.3,6.06,6.5,8.27,8.25,2.38l5.35-55.19c.33-2.86-1.95-5.33-4.87-4.87Z"
                            />
                            <path
                              className="st0"
                              d="M1033.27-630.38c8.27.47,17.67-.84,25.82-.07,2.2.21,3.8,1.67,4.1,3.9.15,1.09-.45,3.71.74,4.06l19.41.05c1.79.17,3.33,1.58,3.58,3.36.17,1.2.18,5.43-.1,6.52-.39,1.49-2.4,3-4,2.94h-72.82c-1.75.06-3.84-1.63-4.11-3.36-.21-1.37-.16-5.91.32-7.11.39-.98,1.24-1.68,2.18-2.08,6.94-.61,14.04-.03,21.04-.3,1.11-.37.6-3.32.73-4.33.23-1.68,1.54-3.01,3.1-3.56Z"
                            />
                          </g>
                          <g>
                            <path
                              className="st0"
                              d="M3.75,4.28h11.08c.31,0,.6.19.68.5-.34,4.21-.87,8.41-1.29,12.61-.08.29-.26.5-.56.58-2.8.07-5.61,0-8.42.03-.34-.02-.62-.22-.75-.53-.48-4.2-.94-8.43-1.33-12.64.06-.31.29-.49.59-.55ZM5.9,5.95c-.34.05-.6.42-.56.76.37,2.89.47,5.82.84,8.71.05.35.08.88.51.98.61.14.99-.31.89-.89-.4-2.87-.44-5.85-.84-8.71-.07-.48-.27-.94-.85-.85ZM9.81,6.13c-.41-.41-1.13-.12-1.17.45v9.24c.1.79,1.23.81,1.37.04-.02-3.16.04-6.32-.03-9.47-.05-.08-.1-.2-.16-.26ZM12.55,5.95c-.23.04-.5.27-.55.51l-.89,9.01c-.21,1,1.07,1.36,1.36.39l.88-9.11c.05-.47-.32-.88-.8-.8Z"
                            />
                            <path
                              className="st0"
                              d="M7.09.05c1.37.08,2.92-.14,4.26-.01.36.03.63.28.68.64.02.18-.07.61.12.67h3.2c.3.04.55.27.59.56.03.2.03.9-.02,1.08-.06.25-.4.5-.66.48H3.25c-.29,0-.63-.27-.68-.55-.03-.23-.03-.98.05-1.17.06-.16.2-.28.36-.34,1.15-.1,2.32,0,3.47-.05.18-.06.1-.55.12-.71.04-.28.25-.5.51-.59Z"
                            />
                          </g>
                        </svg>
                      </button>
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
