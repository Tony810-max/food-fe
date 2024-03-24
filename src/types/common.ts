export const REGEX_PHONE_NUMBER =
  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

export const API_URL = "https://food-be-1dsk.onrender.com";

export interface ICategory{
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: string;
  stock: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
  product_addedById: number;
  product_categoryId: number;
  category_id: number;
  category_title: string;
  category_description: string;
  category_createdAt: string;
  category_updatedAt: string;
  category_addedById: number;
  reviewCount: string;
  avgRating: number | null;
}

export interface Product {
  id: number;
  addedBy: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  };
  category: {
    id: number;
    title: string;
  };
  createdAt: string;
  updatedAt: string;
  description: string;
  images: string[];
  price: number | string;
  stock: number;
  title: string;
}
