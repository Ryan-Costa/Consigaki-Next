import React, { useState, ChangeEvent } from "react";
import { IconArrowBack, IconPartners } from "../../../public/icons";
import { Inter } from "@next/font/google";
import ToggleSwitch from "../ToggleSwitch";
import { TableEditAgreement } from "../table/TableEditAgreement";
// import { useForm } from "react-hook-form";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface Item {
  codigo: string;
  nome: string;
  cadastro: string;
}

interface EditProps {
  item: Item;
  onClose: () => void;
}

export default function EditAgreement({ item, onClose }: EditProps) {
  const [editedItem, setEditedItem] = useState<Item>(item);
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
    console.log("Item editado:", editedItem);
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
      <div className="mt-8 flex gap-2">
        <h1 className="text-2xl font-bold">Editar Convênio</h1>
        {IconPartners}
      </div>
      <p
        className={`${inter.className} text-sm tracking-tight text-text-regular`}
      >
        Prencha todos os campos
      </p>
      <div className="mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Nome
          </label>
          <input
            name="nome"
            type="text"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.nome}
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
            value={editedItem.cadastro}
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
          />
        </div>
      </div>
      <ToggleSwitch />
      <div className="mt-10 w-full rounded-sm">
        <button className="w-full rounded-sm bg-goldenrod py-4 text-2xl font-bold hover:bg-green-goldenrod">
          Salvar
        </button>
      </div>
      <h2 className="mt-6 flex items-center gap-2 text-2xl font-bold">
        Produtos {IconPartners}
      </h2>
      <TableEditAgreement />
      {/* <h2>Editar Item</h2>
      <label>
        Código:
        <input
          type="text"
          name="codigo"
          value={editedItem.codigo}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Razão Social:
        <input
          type="text"
          name="razaoSocial"
          value={editedItem.razaoSocial}
          onChange={handleInputChange}
        />
      </label>
      <label>
        CNPJ:
        <input
          type="text"
          name="cnpj"
          value={editedItem.cnpj}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Cadastro:
        <input
          type="text"
          name="cadastro"
          value={editedItem.cadastro}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleSave}>Salvar</button> */}
    </div>
  );
}
