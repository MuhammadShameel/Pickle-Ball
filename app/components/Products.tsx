// app/components/Products.tsx
'use client'

import React, { useState } from "react";
import { Product } from "./ProductsServer"; // Import the type for Product
import Cart from "./Cart"; // Your existing Cart component import

const Products = ({ products }: { products: Product[] }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product); // Set the selected product
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
    setSelectedProduct(null); // Reset the selected product
  };

  return (
    <div>
      <section className="bg-gray-50 py-8 antialiased  md:py-12">
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
              </div>
            ))}
            <Cart isOpen={isModalOpen} onClose={handleCloseModal} product={selectedProduct} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
