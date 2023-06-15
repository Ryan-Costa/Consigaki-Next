import React, { useState, ChangeEvent } from "react";
import { IconArrowBack, IconPartners } from "../../../public/icons";
import { Inter } from "next/font/google";
import ToggleSwitch from "../ToggleSwitch";
import { IProducts } from "@/interfaces/IProps";
import { ButtonSave } from "../common/ButtonSave";
import { Input } from "../common/Input";

// import { useForm } from "react-hook-form";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface EditProductsProps {
  item: IProducts;
  onClose: () => void;
}

export default function EditProduct({ item, onClose }: EditProductsProps) {
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
        <Input
          label="Nome"
          type="text"
          name="nome"
          placeholder="00/00/0000"
          className="w-full"
          value={editedItem.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Cadastro"
          type="text"
          name="cadastro"
          value={new Date(editedItem.createdAt).toLocaleDateString()}
          onChange={handleInputChange}
        />
        <Input
          label="Alterado"
          type="text"
          name="alterado"
          value={new Date(editedItem.updatedAt).toLocaleDateString()}
          onChange={handleInputChange}
        />
      </div>
      <ToggleSwitch />
      <ButtonSave handleSave={handleSave} />
    </div>
  );
}
