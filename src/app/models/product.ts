export type ItemFilter = Product[];

export class Product {
  id: number;
  name: string;
  price: number;
  category: string;
  photo: string;
  quantity: number;
}
