// CartContext.tsx (or CartContext.js)
'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "../components/ProductsServer";

interface CartItem extends Product {
    [x: string]: any;
    quantity: number; // Track quantity for each product in the cart
}

interface CartContextType {
    cartProducts: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
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
    const [cartProducts, setCartProducts] = useState<CartItem[]>(() => {
        if (typeof window !== "undefined") {
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cartProducts));
        }
    }, [cartProducts]);

    const addToCart = (product: Product) => {
        setCartProducts((prevProducts) => {
            const existingProduct = prevProducts.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevProducts.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevProducts, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId: string) => {
        setCartProducts((prevProducts) => prevProducts.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
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
