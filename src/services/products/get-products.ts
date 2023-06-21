import { IDataProducts } from "@/interfaces/IProps";
import api from "../server/api";

export async function getProducts() {
  const response = await api.get<IDataProducts>('/products');
  const products = response.data
  return products?.data
}