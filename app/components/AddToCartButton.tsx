"use client";

import React from "react";
import { Product } from "./ProductsServer";
import { ShoppingBag } from "lucide-react"; // Example icon, make sure you're using Lucide or similar

interface AddToCartButtonProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, onAddToCart }) => {
    return (
        <button
            onClick={() => onAddToCart(product)}
            className="btn style-2 btn-primary leading-tight cursor-pointer"
        >
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
