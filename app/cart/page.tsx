'use client'
import React from "react";
import { useCart } from "../context/CartContext";  // Ensure useCart is imported
import Image from "next/image";
import Link from "next/link";
import CartExample from "../../public/assets/images/cart-example.png";
import '../styles/globals.css'

const CartDetail = () => {
    const { cartProducts } = useCart();  // Get cartProducts from context
    const { updateQuantity } = useCart()
    // Calculate the grand total by summing up the prices of all products in the cart
    const grandTotal = cartProducts.reduce((total, product) => {
        const amount = parseFloat(product.priceRange.minVariantPrice.amount || "0");
        const quantity = Number(product.quantity) || 0; // Ensures quantity is a number
        return total + amount * quantity;
    }, 0);

    // Handle incrementing and decrementing product quantities
    const handleIncrement = (productId: string) => {
        const product = cartProducts.find(item => item.id === productId);
        if (product) {
            const updatedQuantity = Number(product.quantity) + 1; // Ensure the quantity is a number
            updateQuantity(productId, updatedQuantity);
        }
    };

    const handleDecrement = (productId: string) => {
        const product = cartProducts.find(item => item.id === productId);
        if (product && Number(product.quantity) > 1) {
            const updatedQuantity = Number(product.quantity) - 1; // Ensure the quantity is a number
            updateQuantity(productId, updatedQuantity);
        }
    };
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
                                        <div className="quantity-counter flex flex-row rounded-[6px] overflow-hidden">
                                            <button
                                                className="decrement flex items-center justify-center text-white bg-dark-green cursor-pointer"
                                                onClick={() => handleDecrement(product.id)}
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
                                                className="increment flex items-center justify-center text-white bg-dark-green cursor-pointer"
                                                onClick={() => handleIncrement(product.id)}
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
