import { ProductModel } from "./models";

export const PRODUCTS: ProductModel[] = [
  {
    id: "1",
    image:
      "https://properpizza.ro/sibiu/wp-content/uploads/2019/03/Proper-Pizza-Pasta-Margherita-00.jpg",
    title: "Margherita",
    ingredients: "blat, sos rosii, mozzarella",
    category: "Pizza",
    size: "medie",
    price: 35,
    quantityInCart: 0,
  },
  {
    id: "2",
    image:
      "https://properpizza.ro/sibiu/wp-content/uploads/2020/03/Proper-Pizza-Pasta-Chicken-BBQ-00.jpg",
    title: "Polo",
    ingredients: "blat, sos rosii, mozzarella, pui, ardei",
    category: "Pizza",
    size: "party",
    price: 74,
    quantityInCart: 3,
  },
  {
    id: "3",
    image:
      "https://properpizza.ro/sibiu/wp-content/uploads/2020/03/Proper-Pizza-Pasta-Chicken-BBQ-00.jpg",
    title: "Carbonara",
    ingredients: "blat, sos rosii, mozzarella, pui ardei",
    category: "Pizza",
    size: "mare",
    price: 42,
    quantityInCart: 1,
  },
];
