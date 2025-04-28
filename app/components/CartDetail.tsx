import React from "react";
import { useCart } from "../context/CartContext";  // Ensure useCart is imported
import Image from "next/image";
import Link from "next/link";
import CartExample from "../../public/assets/images/cart-example.png";

const CartDetail = () => {
  const { cartProducts } = useCart();  // Get cartProducts from context

  return (
    <section className="px-3 sm:px-3.5 md:px-5">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-black uppercase font-h1 leading-[80.769%]">Your Cart</h2>
        </div>

        <div className="cart mt-12">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((product) => (
                <tr key={product.id} className="border-t border-[#E5E5E5]">
                  <td>
                    <div className="flex flex-row gap-3 items-center">
                      <div className="img-wrapper min-w-[112px] aspect-square rounded-[10px] overflow-hidden">
                        <Image
                          src={product.featuredImage?.url || CartExample}
                          alt={product.title}
                          width={112}
                          height={112}
                        />
                      </div>
                      <div>
                        <p>{product.title}</p>
                        <button className="text-green underline">Remove</button>
                      </div>
                    </div>
                  </td>
                  <td>{product.priceRange.minVariantPrice.amount}</td>
                  <td>
                    {/* Handle Quantity Logic Here */}
                    <div className="quantity-counter">
                      <button>+</button>
                      <span>{product.quantity}</span>
                      <button>-</button>
                    </div>
                  </td>
                  <td>{(parseFloat(product.priceRange.minVariantPrice.amount) * Number(product.quantity)).toFixed(2)}</td>

                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Grand Total */}
          <div className="mt-12">
            <div className="w-full md:w-[50%] border-t border-[#E5E5E5]">
              <div className="flex justify-between items-center">
                <span>Grand Total</span>
                <h3 className="font-bold">{cartProducts.reduce((total, product) => {
                  return total + (parseFloat(product.priceRange.minVariantPrice.amount) * product.quantity);
                }, 0).toFixed(2)}</h3>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button className="btn btn-primary w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartDetail;
