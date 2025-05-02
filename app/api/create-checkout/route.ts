import { NextResponse } from "next/server";
import fetch from "node-fetch";

interface CheckoutCreateResponse {
  data: {
    cartCreate: {
      cart: {
        id: string;
        checkoutUrl: string; // Shopify's hosted checkout URL
      };
      userErrors: {
        field: string[];
        message: string;
      }[]; // Errors if any
    };
  };
  errors?: { message: string }[]; // General errors from the API
}

export async function POST(request: Request) {
  const { lineItems, email } = await request.json();

  const SHOPIFY_API_URL =
    "https://xemf5u-v1.myshopify.com/api/2025-07/graphql.json"; // Correct API version
  const SHOPIFY_ACCESS_TOKEN = "3ad7462358644621f36d7ec7c109732e"; // Replace with your Storefront Access Token

  const query = `
    mutation cartCreate($input: CartCreateInput!) {
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

  // Ensure lineItems are formatted properly: Shopify expects each lineItem to have a variantId and quantity
  const variables = {
    input: {
      lineItems: lineItems.map(
        (item: { variantId: string; quantity: number }) => ({
          variantId: `gid://shopify/ProductVariant/${item.variantId}`, // Correct global ID format
          quantity: item.quantity,
        })
      ),
      email: email || "mshameelkz@gmail.com", // Optional email
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

    // Handle any errors from the Shopify API
    if (data.errors || data.data.cartCreate.userErrors.length > 0) {
      console.error(
        "GraphQL Error:",
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

    // Return the checkout URL to redirect the user to Shopify's hosted checkout page
    return NextResponse.json(
      { checkoutUrl: data.data.cartCreate.cart.checkoutUrl },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Error creating checkout", details: error },
      { status: 500 }
    );
  }
}
