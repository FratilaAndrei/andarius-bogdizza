import { ProductModel } from "./models";

export const PRODUCTS: ProductModel[] = [
  {
    id: "1",
    image:
      "https://properpizza.ro/sibiu/wp-content/uploads/2019/03/Proper-Pizza-Pasta-Margherita-00.jpg",
    title: "Margherita",
    size: "medie",
    price: 35,
    quantityInCart: 1,
    category: "pizza",
  },
  {
    id: "2",
    image:
      "https://properpizza.ro/sibiu/wp-content/uploads/2020/03/Proper-Pizza-Pasta-Chicken-BBQ-00.jpg",
    title: "Polo",
    size: "party",
    price: 74,
    quantityInCart: 3,
    category: "pizza",

  },
  {
    id: "3",
    image:
      "https://properpizza.ro/sibiu/wp-content/uploads/2020/03/Proper-Pizza-Pasta-Chicken-BBQ-00.jpg",
    title: "Hawaian",
    size: "mare",
    price: 42,
    quantityInCart: 1,
    category: "pizza"
  },
  {
    id: "4",
    image: "https://properpizza.ro/sibiu/wp-content/uploads/2020/03/Proper-Pizza-Pasta-Pepperoni-00-640x640.jpg",
    title:"Peperoni",
    size: "mare",
    price: 42,
    quantityInCart: 0,
    category: "pizza"
  },
  {
    id: "5",
    image: "https://properpizza.ro/sibiu/wp-content/uploads/2020/03/Proper-Pizza-Paste-Lasagna-00-640x640.jpg",
    title: "Lasagna",
    price: 27,
    quantityInCart:0,
    category: "paste",
  },
  {
    id: "6",
    image: "https://properpizza.ro/sibiu/wp-content/uploads/2020/03/Proper-Pizza-Paste-Penne-al-Forno-00-640x640.jpg",
    title: "Penne al Forno",
    price: 32,
    quantityInCart: 1,
    category: "paste",
  },
  {
    id: "7",
    image: "https://properpizza.ro/sibiu/wp-content/uploads/2020/03/Clatite-cu-Fineti-768x768.jpg",
    title: "Clatite cu Fineti",
    price: 13,
    quantityInCart: 2,
    category: "desert",
  },
  {
    id: "8",
    image: "https://media.discordapp.net/attachments/897560315938635776/1157005236074987691/IMG-20230926-WA0000.jpg?ex=65170898&is=6515b718&hm=cc4553cbac64884165a9108f7576a17986461843b9886c1988f758c3a6188a15&=&width=422&height=982",
    title: "CEL MAI PUTERNIC OM DIN ROMANIA",
    price: Infinity,
    quantityInCart: 1,
    category: "snack",
  }
];
