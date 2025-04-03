"use client";

import { useState } from "react";

interface AddToCartButtonProps {
  variantId: string;
}

export default function AddToCartButton({ variantId }: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);

  const addToCart = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ variantId }),
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = data.checkoutUrl;
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={addToCart}
      disabled={loading}
      className="w-full bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors disabled:opacity-50"
    >
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
}
