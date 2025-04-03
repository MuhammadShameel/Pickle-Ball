import { storefrontClient } from "../lib/shopify";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { variantId } = await request.json();

    const { data } = await storefrontClient.request<{
      cartCreate: {
        cart: {
          checkoutUrl: string;
        };
      };
    }>(
      `
      mutation CartCreate($variantId: ID!) {
        cartCreate(
          input: {
            lines: [
              {
                quantity: 1
                merchandiseId: $variantId
              }
            ]
          }
        ) {
          cart {
            checkoutUrl
          }
        }
      }
    `,
      {
        variables: {
          variantId,
        },
      }
    );

    return NextResponse.json({
      checkoutUrl: data?.cartCreate.cart.checkoutUrl,
    });
  } catch (error) {
    console.error("Error creating cart:", error);
    return NextResponse.json(
      { error: "Failed to add item to cart" },
      { status: 500 }
    );
  }
}
