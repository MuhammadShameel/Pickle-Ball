// pages/products/[handle].tsx (Product Detail Page)
'use client'

import { useState, useEffect } from 'react';
import { KickflipProduct } from './../types/kickflip';
import CustomizeProduct from '../components/CustomizeProduct';

const ProductDetailPage = ({ handle }: { handle: string }) => {
    const [product, setProduct] = useState<KickflipProduct | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch product details from Shopify Storefront API (assuming you have the product handle)
        const fetchProduct = async () => {
            const res = await fetch(`/api/products/${handle}`);
            const data = await res.json();
            setProduct(data.product); // Assuming you have a product object in the response
            setIsLoading(false);
        };

        fetchProduct();
    }, [handle]);

    if (isLoading) return <div>Loading...</div>;

    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-detail">
            <h1>{product.title}</h1>
            <img src={product.featuredImage?.url} alt={product.title} />
            <p>{product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}</p>
            <CustomizeProduct productId={product.id} />
        </div>
    );
};

export default ProductDetailPage;
