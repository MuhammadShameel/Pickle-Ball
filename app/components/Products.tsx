'use client';

import React, { useState, useEffect } from "react";
import { Product } from "./ProductsServer";
import Sidebar from "../components/Sidebar"; // Sidebar component
import AddToCartButton from "./AddToCartButton";
import { useCart } from "../context/CartContext"; // Use the CartContext hook

interface ProductsProps {
  products: Product[];
  errorMessage: string | null;
}

const Products: React.FC<ProductsProps> = ({ products, errorMessage }) => {
  const { cartProducts, addToCart, removeFromCart } = useCart(); // Use CartContext
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

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    console.log("Current cart products:", cartProducts); // Debugging: Log cart state
  }, [cartProducts]);

  return (
    <div>
      {errorMessage && <div className="error-message text-red-500">{errorMessage}</div>}
      <section className="bg-gray-50 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="relative card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden">
                <div className="card-header relative">
                  <div className="img-wrapper text-center">
                    {product.featuredImage && (
                      <img className="w-full h-full object-contain" src={product.featuredImage.url} alt={product.featuredImage.altText || product.title} width={100} height={100} />
                    )}
                  </div>
                </div>

                <div className="card-body mt-2.5">
                  <p className="text-black mt-2.5 leading-normal">{product.title}</p>
                  <h3 className="text-black leading-[95.238%] mt-2.5 font-semibold">
                    {product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}
                  </h3>

                  <div className="flex flex-col mt-6 gap-2.5">
                    <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                      Customize
                    </button>
                    <AddToCartButton product={product} onAddToCart={handleAddToCart} />
                  </div>
                </div>

                {/* Tooltip for each product individually */}
                {tooltipProductId === product.id && (
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded-lg z-10">
                    Product added to cart!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar with cart */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        cartProducts={cartProducts} // Pass cartProducts from CartContext
        onRemoveFromCart={removeFromCart} // Pass removeFromCart to Sidebar
      />
    </div>
  );
};

export default Products;
