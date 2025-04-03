export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  featuredImage: {
    url: string;
    altText: string;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: {
    nodes: ShopifyProductVariant[];
  };
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  image: {
    url: string;
    altText: string;
  };
}

export interface ShopifyCartCreate {
  cartCreate: {
    cart: {
      checkoutUrl: string;
    };
  };
}
