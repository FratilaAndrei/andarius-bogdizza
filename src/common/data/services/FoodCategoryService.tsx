import { FoodCategory } from "../models";

export const getCategoryFromEnum = (category: FoodCategory) => {
  switch (category) {
    case FoodCategory.Pizza:
      return "Pizza";
    case FoodCategory.Paste:
      return "Paste";
    case FoodCategory.Desert:
      return "Desert";
    case FoodCategory.Snack:
      return "Snack";
    default:
      return "Unknown";
  }
};
