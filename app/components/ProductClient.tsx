'use client'

import { useState } from "react";
import Image from "next/image";
import AddToCartButton from "@/app/components/AddToCartButton"; // Add this path if necessary
import { useCart } from "@/app/context/CartContext"; // Import the CartContext for state management
import { Product } from "./ProductsServer";

const ProductClient = ({ product }: { product: Product }) => {
    const { cartProducts, addToCart } = useCart(); // Access CartContext
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [tooltipProductId, setTooltipProductId] = useState<string | null>(null);

    const handleAddToCart = (product: Product) => {
        addToCart(product);
        setSidebarOpen(true); // Open sidebar when a product is added
        setTooltipProductId(product.id);

        setTimeout(() => {
            setTooltipProductId(null);
        }, 2000);
    };

    return (
        <div>
            <h2>{product.title}</h2>
            <div className="product-image">
                {product.featuredImage && (
                    <Image
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText || product.title}
                        width={500}
                        height={500}
                    />
                )}
            </div>
            <div className="product-price">
                <h3>
                    {product.priceRange.minVariantPrice.amount}{" "}
                    {product.priceRange.minVariantPrice.currencyCode}
                </h3>
            </div>
            <div className="product-description">
                <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
            </div>
            {/* Add to Cart button */}
            <AddToCartButton product={product} onAddToCart={handleAddToCart} />

            {/* Tooltip for product added to the cart */}
            {tooltipProductId === product.id && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded-lg z-10">
                    Product added to cart!
                </div>
            )}

            {/* Sidebar code can be added here */}
            {/* Sidebar component to show cart items */}
        </div>
    );
};

export default ProductClient;
