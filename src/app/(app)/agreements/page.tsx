"use client";

import CustomTable from "@/components/CustomTable";
import EditProvider from "@/components/EditProvider";
import SearchInput from "@/components/SearchInput";
import { useState } from "react";
import { IconPartners } from "../../../../public/icons";

import { Roboto } from "@next/font/google";
import AddProvider from "@/components/AddProvider";
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

export default function Agreements() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null);
  const [addProvider, setAddProvider] = useState(false);

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

  const handleAdd = () => {
    setAddProvider(true);
  };

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        {addProvider ? (
          <AddProvider
            item={selectedItem!}
            handleClose={handleCloseEditScreen}
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
                  <h2 className="flex gap-2 text-lg font-bold">
                    Convênios {IconPartners}
                  </h2>
                  <div className="flex gap-5 ">
                    <div className="flex w-60 items-center justify-center rounded-20 border border-black px-7">
                      <select
                        name="teste"
                        id="1"
                        className="h-full w-full font-bold outline-none"
                      >
                        <option value="1">Ativo</option>
                        <option value="0">Inativo</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-center">
                      <SearchInput onSearch={handleSearch} />
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={handleAdd}
                    className="rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-none"
                  >
                    + Adicionar Convênio
                  </button>
                </div>
                <CustomTable
                  searchTerm={searchTerm}
                  handleEdit={handleEdit}
                  type={"agreements"}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
