import React from "react";
import Image from "next/image";
import CartExample from "../../public/assets/images/cart-example.png";
import Link from "next/link";

const CartDetail = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-black uppercase font-h1 leading-[80.769%]">
              your cart
            </h2>
          </div>
          <div className="cart mt-12">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th>
                    <span className="fs-18 text-black leading-normal">
                      Product
                    </span>
                  </th>
                  <th>
                    <span className="fs-18 text-black leading-normal">
                      Price
                    </span>
                  </th>
                  <th>
                    <span className="fs-18 text-black leading-normal">
                      Quantity
                    </span>
                  </th>
                  <th>
                    <span className="fs-18 text-black leading-normal">
                      Total
                    </span>
                  </th>
                  <th>
                    <span className="fs-18 text-black leading-normal">
                      Select
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-[25%] border border-red-500">
                    <div className="flex flex-row gap-3 items-center justify-start">
                      <div className="img-wrapper min-w-[112px] aspect-square rounded-[10px] overflow-hidden">
                        <Image
                          src={CartExample}
                          alt="Cart Example Product"
                          className="w-full! h-full! object-cover"
                        />
                      </div>
                      <div className="border border-red-500">
                        <Link href={"#"}>
                          <p className="cart-item_name text-black leading-normal">
                            Bread 'n Butter Paddle
                          </p>
                        </Link>
                        <button className="text-green underline cursor-pointer leading-normal">
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="w-[25%] align-text-top border border-red-500">
                    <span className="cart-item_price text-black leading-normal">
                      74.99 $
                    </span>
                  </td>
                  <td className="w-[25%] align-text-top border border-red-500">
                    <div className="quantity-counter inline-flex flex-row rounded-[6px] overflow-hidden">
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
                  </td>
                  <td className="w-[25%] align-text-top border border-red-500">
                    <span className="cart-item_total text-black leading-normal">
                      74.99 $
                    </span>
                  </td>
                  <td className="align-text-top text-center border border-red-500">
                    <input className="checkbox" type="checkbox" name="" id="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartDetail;
