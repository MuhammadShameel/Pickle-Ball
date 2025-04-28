"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../components/ProductsServer"; // Adjust path as needed

interface CartItem extends Product {
    quantity: number; // Track quantity for each product in the cart
}

interface CartContextType {
    cartProducts: CartItem[]; // The cart will hold items with quantities
    addToCart: (product: Product) => void; // Adds a product or increases its quantity
    removeFromCart: (productId: string) => void; // Removes a product from the cart
    updateQuantity: (productId: string, quantity: number) => void; // Updates quantity of a product
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

    // Function to add product to cart or update its quantity if already in cart
    const addToCart = (product: Product) => {
        setCartProducts((prevProducts) => {
            const existingProduct = prevProducts.find((item) => item.id === product.id);

            if (existingProduct) {
                // If the product already exists in the cart, increment the quantity
                return prevProducts.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If the product is not in the cart, add it with a quantity of 1
                return [...prevProducts, { ...product, quantity: 1 }];
            }
        });
    };

    // Function to remove product from the cart
    const removeFromCart = (productId: string) => {
        setCartProducts((prevProducts) => prevProducts.filter((item) => item.id !== productId));
    };

    // Function to update the quantity of a product in the cart
    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            // If quantity is zero or negative, remove the item from the cart
            removeFromCart(productId);
        } else {
            setCartProducts((prevProducts) =>
                prevProducts.map((item) =>
                    item.id === productId ? { ...item, quantity } : item
                )
            );
        }
    };

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
