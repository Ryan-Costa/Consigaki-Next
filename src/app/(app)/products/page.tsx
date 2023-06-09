"use client";

import TableProducts from "@/components/table/TableProducts";
import AddProduct from "@/components/productsComponents/AddProduct";
import EditProduct from "@/components/productsComponents/EditProduct";

import SearchInput from "@/components/SearchInput";
import { useEffect, useState } from "react";
import { IconPartners } from "../../../../public/icons";

import { Dropdown } from "@/components/Dropdown";
import { IAllProducts, IProducts } from "@/interfaces/IProps";
import api from "../../../services/client/products/index";
import { Roboto } from "next/font/google";
import { ButtonAdd } from "@/components/common/ButtonAdd";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IProducts | null>(null);
  const [heAddProduct, setHeAddProduct] = useState(false);
  const [products, setProducts] = useState<IProducts[]>([]);

  const getProducts = async () => {
    try {
      const response = await api.get<IAllProducts>(
        "http://localhost:3000/products/api"
      );
      console.log(response.data.jsonData.products);
      setProducts(response.data.jsonData.products);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleEdit = (item: IProducts) => {
    setSelectedItem(item);
    setIsEditing(true);
  };

  const handleCloseEditScreen = () => {
    setIsEditing(false);
  };

  const handleAddition = () => {
    setHeAddProduct(true);
  };

  const handleCloseAdditionScreen = () => {
    setHeAddProduct(false);
  };

  return (
    <>
      <div
        className={`${
          roboto.className
        } h-full w-full rounded-md bg-white px-6 ${
          heAddProduct ? "py-9" : "py-14"
        }`}
      >
        {heAddProduct ? (
          <AddProduct
            item={selectedItem!}
            onClose={handleCloseAdditionScreen}
          />
        ) : (
          <>
            {isEditing ? (
              <EditProduct
                item={selectedItem!}
                onClose={handleCloseEditScreen}
              />
            ) : (
              <>
                <div className="flex w-full justify-between">
                  <h2 className="flex items-center gap-2 text-2xl font-bold">
                    Produtos {IconPartners}
                  </h2>
                  <div className="flex gap-5 ">
                    <Dropdown
                      defaultValue="Ativo"
                      type="table"
                      options={["Opção 1", "Opção 2", "Opção 3", "Opção 4"]}
                    />
                    <div className="flex items-center justify-center">
                      <SearchInput onSearch={handleSearch} />
                    </div>
                  </div>
                </div>
                <ButtonAdd name="Produto" handleAddition={handleAddition} />
                <TableProducts
                  searchTerm={searchTerm}
                  handleEdit={handleEdit}
                  data={products}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
