export interface ProductModel {
  id: string;
  size: string;
  image: string;
  title: string;
  price: number;
  quantityInCart?: number;
}
