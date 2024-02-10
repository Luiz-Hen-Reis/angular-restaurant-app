import { Product } from "./product";

export interface Category {
    id: string;
    name: string;
    image_url: string;
  };

export interface CategoryList {
    categories: Category[]
}

export interface CategoryProduct {
  category_id: string;
  category_name: string;
  image_url: string;
  products: Product[]
}
