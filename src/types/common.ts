export const REGEX_PHONE_NUMBER =
  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

export const API_URL = 'https://phanhoangquoctu-datn-be.onrender.com';

export interface ICategory {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
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
  deletedAt: null;
  category: ICategory;
  author: null;
  publisher: null;
}

export interface ICategory {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
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

export interface CartProduct {
  id: number;
  product: {
    images: string[] | string;
    category: { id: number; title: string };
    id: number;
    title: string;
    price: number | string;
    stock: number;
  };
  quantity: number;
}

export interface IProvince {
  code: string;
  isDeleted: boolean;
  name: string;
  name_with_type: string;
  slug: string;
  type: string;
  _id: string;
}

export interface IProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  gender: null | string;
  dateOfBirth: null | string;
  roles: string[];
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  isActice: boolean;
}

export interface IReviewProduct {
  id: number;
  comment: string;
  ratings: number;
  createdAt: string;
  updatedAt: string;
  user: IUser;
  product: {
    id: number;
    title: string;
    description: string;
    price: string;
    stock: number;
    images: string[];
    createdAt: string;
    updatedAt: string;
    category: ICategory;
  };
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  roles: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IBlog {
  id: number;
  title: string;
  description: string;
  images: string[];
  isApproved: boolean;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  likeCount: number;
  author: IAuth;
  likes: ILike[];
}

export interface ILike {
  id: number;
  user: IAuth;
}

export interface IAuth {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: null | string;
  gender: null | string;
  dateOfBirth: null | string;
  roles: string[];
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  isActice: boolean;
  verifyCode: null;
}

export interface IComment {
  content: string;
  author: IAuth;
  post: IPost;
  id: number;
  createdAt: string;
  deletedAt: null | string;
}

export interface IPost {
  id: number;
  title: string;
  description: string;
  images: string[];
  isApproved: boolean;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  likeCount: number;
}

export interface IMetaComment {
  limit: string;
  totalItems: number;
  totalPages: number;
  currentPage: string;
}
