import { Category } from "./category";

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  sku_code: string;
  price: number;
  description: string;
  stockStatus: "IN_STOCK" | "OUT_OF_STOCK" | "LOW_STOCK";
  stockQuantity: number;
  imageProduct: string;
  createdAt: string;
  updatedAt: string;
  category?: Category;
}
