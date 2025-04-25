// types/kickflip.ts

export type Customization = {
  text: string;
  color: string;
  imageUrl: string;
};

export type KickflipApiResponse = {
  success: boolean;
  message: string;
  productData?: any; // If you want to be more specific, define the structure of the productData here.
};

export type KickflipProduct = {
  id: string;
  title: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  featuredImage?: {
    url: string;
    altText: string;
  };
};
