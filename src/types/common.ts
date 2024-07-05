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

export interface ICategory {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}

export interface IProduct {
  id: 1;
  title: 'Hamburger';
  description: 'Description';
  price: '10.00';
  discount: '10.00';
  stock: 10;
  images: string;
  createdAt: '2024-05-31T13:40:22.445Z';
  updatedAt: '2024-05-31T13:40:22.445Z';
  deletedAt: null;
  category: ICategory;
  author: IAuthor;
  publisher: IPublisher;
}

export interface IProductMain {
  products: IProduct[];
  meta: IMeta;
}

export interface IProductDetail {
  id: number;
  title: string;
  description: string;
  price: string;
  discount: string;
  stock: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  addedBy: IAuth;
  category: ICategory;
  author: IAuthor;
  publisher: IPublisher;
}

export interface IAuthor {
  id: number;
  name: string;
  gender: string;
  dateOfBirth: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
}

export interface IPublisher {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
}

export interface IItemCart {
  id: number;
  quantity: number;
  product: IProductDetail;
}

export interface CartProduct {
  id: number;
  isOrdered: boolean;
  createdAt: string;
  updatedAt: string;
  items: IItemCart[];
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

export interface IReviewProductDetail {
  ratings: number;
  comment: string;
  user: IAuth;
  product: IProductDetail;
  id: number;
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
  address: string;
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

export interface IMeta {
  limit: string | string;
  totalItems: number;
  totalPages: number;
  currentPage: string | number;
}
