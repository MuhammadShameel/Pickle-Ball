import { NextResponse } from "next/server";
import fetch from "node-fetch";

interface LineItem {
  variantId: string;
  quantity: number;
}

interface CreateCheckoutRequest {
  lineItems: LineItem[];
  email?: string;
}

interface CheckoutCreateResponse {
  data: {
    cartCreate: {
      cart: {
        id: string;
        checkoutUrl: string;
      };
      userErrors: {
        field: string[];
        message: string;
      }[];
    };
  };
  errors?: { message: string }[];
}

export async function POST(request: Request) {
  const { lineItems, email }: CreateCheckoutRequest = await request.json();

  const SHOPIFY_API_URL =
    "https://xemf5u-v1.myshopify.com/api/2025-07/graphql.json";
  const SHOPIFY_ACCESS_TOKEN = "3ad7462358644621f36d7ec7c109732e";

  // Correct GraphQL mutation using CartInput and lines
  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  // Corrected variables with lines and merchandiseId
  const variables = {
    input: {
      lines: lineItems.map((item: LineItem) => ({
        quantity: item.quantity,
        merchandiseId: `gid://shopify/ProductVariant/${item.variantId}`,
      })),
      email: email || "khanzadashameel2@gmail.com", // Optional email address
    },
  };

  try {
    const response = await fetch(SHOPIFY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = (await response.json()) as CheckoutCreateResponse;

    if (response.ok) {
      // Return the checkout URL if the request was successful
      return NextResponse.json(
        { checkoutUrl: data.data.cartCreate.cart.checkoutUrl },
        { status: 200 }
      );
    } else {
      // Handle the case where Shopify's API returns an error
      console.error(
        "Shopify API error:",
        data.errors || data.data.cartCreate.userErrors
      );
      return NextResponse.json(
        {
          error: "Failed to create cart",
          details: data.errors || data.data.cartCreate.userErrors,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("Error creating checkout:", error);
    return NextResponse.json(
      { error: "Error creating checkout", details: error },
      { status: 500 }
    );
  }
}
