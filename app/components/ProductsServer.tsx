// app/components/ProductsServer.tsx
import { ReactNode } from "react";
import { storefrontClient } from "../lib/shopify";
import Products from "./Products";

// Define the Product type
export type Product = {
  descriptionHtml: string | TrustedHTML;
  variants: any;
  quantity: ReactNode;
  id: string;
  handle: string;
  title: string;
  featuredImage?: {
    url: string;
    altText?: string;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
};

const ProductsServer = async () => {
  let products: Product[] = [];
  let errorMessage: string | null = null;

  try {
    const { data } = await storefrontClient.request<{
      products: { nodes: Product[] };
    }>(`
            query {
                products(first: 10) {
                    nodes {
                        id
                        title
                        handle
                        featuredImage {
                            url
                            altText
                        }
                        priceRange {
                            minVariantPrice {
                                amount
                                currencyCode
                            }
                        }
                    }
                }
            }
        `);

    products = data?.products.nodes || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    errorMessage = "There was an issue fetching the products. Please try again later.";
  }

  // Pass products and any error message to the Products component
  return <Products products={products} errorMessage={errorMessage} />;
};

export default ProductsServer;
