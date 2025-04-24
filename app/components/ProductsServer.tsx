// app/components/ProductsServer.tsx
import { storefrontClient } from "../lib/shopify";
import Products from "./Products";

// Define the Product type
export type Product = {
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

// Fetch products on the server side
const ProductsServer = async () => {
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

    return <Products products={data?.products.nodes || []} />;
};

export default ProductsServer;
