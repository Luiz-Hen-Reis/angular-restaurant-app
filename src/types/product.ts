export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image_url: string;
  };

export interface ProductList {
    products: Product[]
}

