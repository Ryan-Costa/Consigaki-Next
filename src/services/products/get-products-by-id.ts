import { IProductID } from "@/interfaces/IProps";
import api from "../server/api";

export async function getProductsById(product: number) {
  const response = await api.get<IProductID>(`/products/${product}`);
  const products = response.data
  return products
}