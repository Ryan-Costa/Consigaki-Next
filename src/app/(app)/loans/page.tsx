"use client";

import TableLoans from "@/components/table/TableLoans";
import { Dropdown } from "@/components/Dropdown";
import AddLoans from "@/components/loansComponents/AddLoans";
import EditLoans from "@/components/loansComponents/EditLoans";
import SearchInput from "@/components/SearchInput";
import { ILoans } from "@/interfaces/IProps";
import { Roboto } from "@next/font/google";
import { useState } from "react";
import { IconPartners } from "../../../../public/icons";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Loans() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ILoans | null>(null);
  const [heAddProduct, setHeAddProduct] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleEdit = (item: ILoans) => {
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
          <AddLoans item={selectedItem!} onClose={handleCloseAdditionScreen} />
        ) : (
          <>
            {isEditing ? (
              <EditLoans item={selectedItem!} onClose={handleCloseEditScreen} />
            ) : (
              <>
                <div className="flex w-full justify-between">
                  <h2 className="flex items-center gap-2 text-2xl font-bold">
                    Esteira {IconPartners}
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
                <div className="mt-8">
                  <button
                    onClick={handleAddition}
                    className="rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-none"
                  >
                    + Adicionar Esteira
                  </button>
                </div>
                <TableLoans
                  searchTerm={searchTerm}
                  handleEdit={handleEdit}
                  type={"loans"}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
