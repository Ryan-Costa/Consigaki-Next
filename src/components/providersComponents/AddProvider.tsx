import React, { useState, ChangeEvent } from "react";
import { IconArrowBack, IconPartners } from "../../../public/icons";
import { Inter } from "next/font/google";
import ToggleSwitch from "../ToggleSwitch";
import { ButtonSave } from "../common/ButtonSave";
import { Input } from "../common/Input";
import { IProviders } from "@/interfaces/IProps";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface AddProvidersProps {
  item: IProviders;
  onClose: () => void;
}

export default function AddProvider({ item, onClose }: AddProvidersProps) {
  const [savedItem, setSavedItem] = useState<IProviders>(item);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSavedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onClose();
    console.log("Item editado:", savedItem);
  };

  const handleGoBack = () => {
    onClose();
    console.log("voltei");
  };

  return (
    <div>
      <button className="" onClick={handleGoBack}>
        {IconArrowBack}
      </button>

      <div className="mt-12 flex gap-2">
        <h1 className="text-2xl font-bold">Adicionar Consignatária</h1>
        {IconPartners}
      </div>
      <p
        className={`${inter.className} text-base tracking-tight text-text-regular`}
      >
        Prencha todos os campos
      </p>
      <div className="mt-6 flex gap-6">
        <Input
          label="Razão Social"
          type="text"
          name="razaoSocial"
          placeholder="---------- -------- -------"
          className="w-full"
          // value={setSavedItem.razaoSocial}
          onChange={handleInputChange}
        />
        <Input
          label="CNPJ"
          name="cnpj"
          type="text"
          placeholder="00000000000-000-000"
          className="w-full"
          // value={setSavedItem.razaoSocial}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Cadastro"
          name="cadastro"
          type="text"
          placeholder="00/00/0000"
          // value={setSavedItem.razaoSocial}
          onChange={handleInputChange}
        />
        <Input
          label="Alterado"
          name="alterado"
          type="text"
          placeholder="00/00/0000"
          // value={setSavedItem.razaoSocial}
          onChange={handleInputChange}
        />
      </div>
      <ToggleSwitch />
      <ButtonSave handleSave={handleSave} />
    </div>
  );
}
