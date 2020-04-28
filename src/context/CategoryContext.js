import { createContext } from "react";

export const initialCategory = {
  category: "",
  subcategory: "",
  product: "",
  categoryList: null,
  loading: false,
  error: null,
  productList: null,
  newList: null,
  amazingList: null,
  topList: null,
};

const CategoryContext = createContext(initialCategory);

export default CategoryContext;
