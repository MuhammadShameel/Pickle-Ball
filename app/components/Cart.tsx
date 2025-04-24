'use client'
import React, { useState } from "react";
import { Product } from "./ProductsServer"; // Import the Product type

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null; // Accept the selected product
}

const Cart = ({ isOpen, onClose, product }: CartProps) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    // Calculate the total price based on the quantity
    const totalPrice = (parseFloat(product?.priceRange.minVariantPrice.amount || "0") * quantity).toFixed(2);

    if (!isOpen || !product) return null; // If the modal is closed or no product, don't render

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-1/3">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                <div>
                    {/* Product details */}
                    <p className="text-lg font-bold">{product.title}</p>
                    <img
                        className="w-full h-full object-contain my-4"
                        src={product.featuredImage?.url}
                        alt={product.featuredImage?.altText || product.title}
                    />
                    <p className="text-sm">Price: {product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}</p>

                    {/* Quantity controls */}
                    <div className="mt-4 flex items-center gap-4">
                        <button className="px-4 py-2 border rounded" onClick={handleDecrease}>-</button>
                        <span className="px-2">{quantity}</span>
                        <button className="px-4 py-2 border rounded" onClick={handleIncrease}>+</button>
                    </div>

                    {/* Total price */}
                    <div className="mt-4">
                        <p className="text-lg font-semibold">Total: {totalPrice} {product.priceRange.minVariantPrice.currencyCode}</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-between">
                    <button className="px-4 py-2 bg-gray-200 rounded" onClick={onClose}>
                        Close
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
