export interface ProductImage {
  alt: string;
  url: string;
  title: string;
}

export interface ProductPrices {
  sales?: {
    value: number;
    formatted: string;
  };
  list: {
    value: number;
    formatted: string;
  };
}

export interface VariationAttributeValue {
  id: string;
  displayValue: string;
  value: string;
}

export enum VariationAttributeIds {
  COLOR = 'Color',
  SIZE = 'Size',
}

export interface VariationAttribute {
  attributeId: VariationAttributeIds;
  displayName: string;
  id: string;
  swatchable?: boolean;
  values: Array<VariationAttributeValue>;
}

export interface SearchProductItem {
  productId: string;
  productName: string;
  image: ProductImage;
  prices: ProductPrices;
}

export interface SearchProducts {
  products: Array<SearchProductItem>;
}

export interface Product {
  productId: string;
  productName: string;
  longDescription: string;
  shortDescription: string;
  images: ProductImage[];
  prices: ProductPrices;
  variations?: [];
  variationAttributes?: VariationAttribute[];
}

export type ProductHit = {
  productId: string;
  productName: string;
  image: {
    alt: string;
    url: string;
    title: string;
  };
  prices: {
    list: {
      value: number;
      formatted: string;
    };
  };
};
