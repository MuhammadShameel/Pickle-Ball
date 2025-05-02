import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const storefrontClient = createStorefrontApiClient({
  storeDomain: "xemf5u-v1.myshopify.com",
  apiVersion: "2024-01",
  publicAccessToken: "3ad7462358644621f36d7ec7c109732e",
});
