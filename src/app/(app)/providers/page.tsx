"use client";

import TableProviders from "@/components/table/TableProviders";
import AddProvider from "@/components/providersComponents/AddProvider";
import EditProvider from "@/components/providersComponents/EditProvider";

import { SearchInput } from "@/components/SearchInput";
import { useEffect, useState } from "react";
import { IconPartners } from "../../../../public/icons";
import { Dropdown } from "@/components/Dropdown";

import { Roboto } from "next/font/google";
import { ButtonAdd } from "@/components/common/ButtonAdd";
import { IDataProviders, IProviders } from "@/interfaces/IProps";
import api from "@/services/server/api";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Providers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IProviders | null>(null);
  const [heAddProvider, setHeAddProvider] = useState(false);
  const [providers, setProvider] = useState<IProviders[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<IDataProviders>("/providers");
        console.log("Fetch", response);
        setProvider(response.data.data.providers);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleEdit = (item: IProviders) => {
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
                <ButtonAdd
                  name="Consignatária"
                  handleAddition={handleAddition}
                />
                <TableProviders
                  searchTerm={searchTerm}
                  handleEdit={handleEdit}
                  data={providers}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
