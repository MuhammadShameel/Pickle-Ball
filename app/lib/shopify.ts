import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// Configuration with your actual values
export const storefrontClient = createStorefrontApiClient({
  storeDomain: 'xemf5u-v1.myshopify.com',
  apiVersion: '2024-01', // Use latest stable version
  publicAccessToken: '1b9850233ad391ff93d541c513f7de01'
});