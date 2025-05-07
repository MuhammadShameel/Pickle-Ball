import { storefrontClient } from "@/app/lib/shopify";
import { Product } from "@/app/components/ProductsServer";
import ProductClient from "../../components/ProductClient"; // New Client Component
import { notFound } from "next/navigation"; // For 404 if product not found

// This is a Server Component
const ProductDetailPage = async ({ params }: { params: { handle: string } }) => {
    const { handle } = params;

    let product: Product | null = null;
    let errorMessage: string | null = null;

    try {
        const { data } = await storefrontClient.request<{
            product: Product;
        }>(`
      query {
        product(handle: "${handle}") {
          id
          title
          handle
          featuredImage {
            url
            altText
          }
          descriptionHtml
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    `);

        product = data?.product || null;
    } catch (error) {
        console.error("Error fetching product:", error);
        errorMessage = "There was an issue fetching the product. Please try again later.";
    }

    // If product not found, show 404 page
    if (!product) {
        notFound();
    }

    return (
        <div className="product-detail-page">
            {/* Pass the fetched product to the client-side component */}
            <ProductClient product={product} />
        </div>
    );
};

export default ProductDetailPage;
