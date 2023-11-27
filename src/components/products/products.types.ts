export interface Category {
  id: number;
  name: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Categories {
  categories: Category[];
}
