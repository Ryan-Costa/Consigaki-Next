"use client";

import TableAgreementsUsers from "@/components/table/TableAgreementsUsers";
import EditUser from "@/components/usersComponents/EditUser";
import AddUser from "@/components/usersComponents/AddUser";

import SearchInput from "@/components/SearchInput";
import { useState } from "react";
import { IconPartners } from "../../../../public/icons";
import { Dropdown } from "@/components/Dropdown";

import { Roboto } from "@next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface ItemProps {
  codigo: string;
  nome: string;
  cadastro: string;
}

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null);
  const [heAddUser, setHeAddUser] = useState(false);

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
    setHeAddUser(true);
  };

  const handleCloseAdditionScreen = () => {
    setHeAddUser(false);
  };

  return (
    <>
      <div
        className={`${
          roboto.className
        } h-full w-full rounded-md bg-white px-6 ${
          heAddUser ? "py-9" : "py-14"
        }`}
      >
        {heAddUser ? (
          <AddUser item={selectedItem!} onClose={handleCloseAdditionScreen} />
        ) : (
          <>
            {isEditing ? (
              <EditUser item={selectedItem!} onClose={handleCloseEditScreen} />
            ) : (
              <>
                <div className="flex w-full justify-between">
                  <h2 className="flex items-center gap-2 text-2xl font-bold">
                    Usuários {IconPartners}
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
                    + Adicionar Usuário
                  </button>
                </div>
                <TableAgreementsUsers
                  searchTerm={searchTerm}
                  handleEdit={handleEdit}
                  type={"users"}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
