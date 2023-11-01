export type DummyJsonResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type Product = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

export type ProductsPaginator = {
  items: Product[];
  page: number;
  hasMorePages: boolean;
}
