import React, { useState, ChangeEvent } from "react";
import { IconArrowBack, IconPartners } from "../../../public/icons";
import { Inter } from "next/font/google";
import ToggleSwitch from "../ToggleSwitch";
import { IProducts } from "@/interfaces/IProps";
import { ButtonSave } from "../common/ButtonSave";

// import { useForm } from "react-hook-form";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface EditProps {
  item: IProducts;
  onClose: () => void;
}

export default function EditProduct({ item, onClose }: EditProps) {
  const [editedItem, setEditedItem] = useState<IProducts>(item);
  // const { control, handleSubmit } = useForm({
  //   defaultValues: {},
  // });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onClose();
    console.log("Item editado:", editedItem);
  };

  const handleGoBack = () => {
    // window.location.reload();
    onClose();
    console.log("voltei");
  };

  return (
    <div>
      <button className="" onClick={handleGoBack}>
        {IconArrowBack}
      </button>
      <div className="mt-12 flex gap-2">
        <h1 className="text-2xl font-bold">Editar produto</h1>
        {IconPartners}
      </div>
      <p
        className={`${inter.className} text-base tracking-tight text-text-regular`}
      >
        Prencha todos os campos
      </p>
      <div className="mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Nome
          </label>
          <input
            name="razaoSocial"
            type="text"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.name}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Cadastro
          </label>
          <input
            name="cadastro"
            type="text"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={new Date(editedItem.createdAt).toLocaleDateString()}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Alterado
          </label>
          <input
            name="alterado"
            type="text"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={new Date(editedItem.updatedAt).toLocaleDateString()}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <ToggleSwitch />
      <ButtonSave handleSave={handleSave} />
    </div>
  );
}
