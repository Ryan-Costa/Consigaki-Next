"use client";

import TableProviders from "@/components/table/TableProviders";
import AddProvider from "@/components/providersComponents/AddProvider";
import EditProvider from "@/components/providersComponents/EditProvider";

import SearchInput from "@/components/SearchInput";
import { useState } from "react";
import { IconPartners } from "../../../../public/icons";

import { Roboto } from "@next/font/google";
import { DropdownTable } from "@/components/dropdown/DropdownTable";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface ItemProps {
  codigo: string;
  razaoSocial: string;
  cnpj: string;
  cadastro: string;
}

export default function Providers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null);
  const [heAddProvider, setHeAddProvider] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleEdit = (item: ItemProps) => {
    setSelectedItem(item);
    setIsEditing(true);
  };

  const handleCloseEditScreen = () => {
    setIsEditing(false);
  };

  const handleAddition = () => {
    setHeAddProvider(true);
  };

  const handleCloseAdditionScreen = () => {
    setHeAddProvider(false);
  };

  return (
    <>
      <div
        className={`${
          roboto.className
        } h-full w-full rounded-md bg-white px-6 ${
          heAddProvider ? "py-9" : "py-14"
        }`}
      >
        {heAddProvider ? (
          <AddProvider
            item={selectedItem!}
            onClose={handleCloseAdditionScreen}
          />
        ) : (
          <>
            {isEditing ? (
              <EditProvider
                item={selectedItem!}
                onClose={handleCloseEditScreen}
              />
            ) : (
              <>
                <div className="flex w-full justify-between">
                  <h2 className="flex items-center gap-2 text-2xl font-bold">
                    Consignatárias {IconPartners}
                  </h2>
                  <div className="flex gap-5 ">
                    <DropdownTable />
                    <div className="flex items-center justify-center">
                      <SearchInput onSearch={handleSearch} />
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={handleAddition}
                    className="rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-none"
                  >
                    + Adicionar Consignatária
                  </button>
                </div>
                <TableProviders
                  searchTerm={searchTerm}
                  handleEdit={handleEdit}
                  type={"providers"}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
