'use client'

import React, { useState } from "react";
import { Product } from "./ProductsServer";
import Sidebar from "./Sidebar"; // Sidebar component

const Products = ({ products }: { products: Product[] }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]); // Track cart products
  const [tooltipVisible, setTooltipVisible] = useState(false); // Tooltip visibility state

  const handleAddToCart = (product: Product) => {
    setCartProducts((prevProducts) => [...prevProducts, product]); // Add product to the cart
    setSidebarOpen(true); // Open the sidebar when a product is added
    setTooltipVisible(true); // Show the tooltip

    const handleRemoveFromCart = (productId: string) => {
      // Remove the product from the cart by its ID
      setCartProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    };

    // Hide the tooltip after 2 seconds
    setTimeout(() => {
      setTooltipVisible(false); // Hide the tooltip after 2 seconds
    }, 2000);
  };

  const closeSidebar = () => {
    setSidebarOpen(false); // Close the sidebar
  };

  // function handleRemoveFromCart(productId: string): void {
  //   throw new Error("Function not implemented.");
  // }

  const handleRemoveFromCart = (productId: string) => {
    // Remove the product from the cart by its ID
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };


  return (
    <div>
      <section className="bg-gray-50 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="card flex flex-col p-5 rounded-4xl border border-[#0000001a] overflow-hidden">
                <div className="card-header relative">
                  <div className="img-wrapper text-center">
                    {product.featuredImage && (
                      <img
                        className="w-full h-full object-contain"
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText || product.title}
                        width={100}
                        height={100}
                      />
                    )}
                  </div>
                </div>
                <div className="card-body mt-2.5">
                  <p className="text-black mt-2.5 leading-normal">{product.title}</p>
                  <h3 className="text-black leading-[95.238%] mt-2.5 font-semibold">
                    {product.priceRange.minVariantPrice.amount}{" "}
                    {product.priceRange.minVariantPrice.currencyCode}
                  </h3>
                  <div className="flex flex-col mt-6 gap-2.5">
                    <button className="btn style-2 btn-outline-green leading-tight cursor-pointer">
                      Customize
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)} // Pass product to the handler
                      className="btn style-2 btn-secondary leading-tight cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Tooltip */}
                {tooltipVisible && (
                  <div className="tooltip absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg mt-2 z-10">
                    Product added to cart!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar component with cartProducts */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} cartProducts={cartProducts} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default Products;
