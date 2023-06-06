import React, { useState, ChangeEvent } from "react";
import { IconArrowBack, IconPartners } from "../../../public/icons";
import ToggleSwitch from "../ToggleSwitch";
import { ILoans } from "@/interfaces/IProps";
import { UserProps } from "@/interfaces/IProps";
import { Dropdown } from "../Dropdown";
// import { useForm } from "react-hook-form";

import { Inter } from "@next/font/google";
import { Roboto } from "@next/font/google";
import DocumentDownload from "../DocumentDownload";
import ButtonSave from "../common/ButtonSave";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface EditLoansProps {
  item: ILoans;
  onClose: () => void;
}

export default function EditLoans({ item, onClose }: EditLoansProps) {
  const [editedItem, setEditedItem] = useState<ILoans>(item);
  // const { control, handleSubmit } = useForm({
  //   defaultValues: {},
  // });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
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
    <div className={inter.className}>
      <button className="" onClick={handleGoBack}>
        {IconArrowBack}
      </button>
      <div className="mt-12 flex gap-2">
        <h1 className={`${roboto.className} font-bold first-line:text-2xl`}>
          Detalhes da Esteira
        </h1>
        {IconPartners}
      </div>

      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Usuário</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>

      <div className="mt-5 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Nome
          </label>
          <input
            name="name"
            type="text"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.userId}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            E-mail
          </label>
          <input
            name="mail"
            type="text"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.userId}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            CPF
          </label>
          <input
            name="CPF"
            type="text"
            placeholder="000.000.000-00"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.cpf}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Celular
          </label>
          <input
            name="celular"
            type="text"
            placeholder="(00) 0 0000-0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.cellPhoner}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Data de nascimento
          </label>
          <input
            name="dataNascimento"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.dateBirth}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Perfil
          </label>
          <Dropdown
            defaultValue="Suporte"
            type="form"
            options={["Cliente", "Suporte", "Administrador"]}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Acesso
          </label>
          <Dropdown
            defaultValue="Login liberado"
            type="form"
            options={["Login bloqueado", "Login liberado"]}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Cadastro
          </label>
          <input
            name="cadastro"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.register}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Alterado
          </label>
          <input
            name="alterado"
            type="text"
            placeholder="00/00/0000"
            readOnly
            disabled
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.register}
          />
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Operação</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <div className="mt-5 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Convênio
          </label>
          <input
            name="convênio"
            type="text"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.productId}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Matrícula
          </label>
          <input
            name="matricula"
            type="text"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.registration}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Cargo
          </label>
          <input
            name="cargo"
            type="text"
            placeholder="000.000.000-00"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.cpf}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Vínculo
          </label>
          <input
            name="vinculo"
            type="text"
            placeholder="(00) 0 0000-0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.cellPhoner}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Consignatária
          </label>
          <input
            name="consignataria"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.providerId}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Liberado
          </label>
          <input
            name="liberado"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.dateBirth}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Parcela
          </label>
          <input
            name="parcela"
            type="text"
            placeholder="00"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.fee}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Prazo
          </label>
          <input
            name="prazo"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.cellPhoner}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Taxa
          </label>
          <input
            name="taxa"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.providerId}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            ADF
          </label>
          <input
            name="adf"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.dateBirth}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Data Averbação
          </label>
          <input
            name="dataAverbacao"
            type="text"
            placeholder="000.000.000-00"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.cpf}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Data Solicitação
          </label>
          <input
            name="dataSolicitacao"
            type="text"
            placeholder="(00) 0 0000-0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.cellPhoner}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Data Pagamento
          </label>
          <input
            name="dataPagamento"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.providerId}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Status
          </label>
          <input
            name="status"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.dateBirth}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Observação de pendências
          </label>
          <textarea
            name="observacaoPendencias"
            placeholder="David Bessa Pontes"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.dateBirth}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Documentos</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <div className="mt-5 flex items-center gap-2">
        <h1 className={`${roboto.className} w-1/3 text-2xl font-bold`}>
          Fotos dos documentos
        </h1>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <p className="text-base">Imagens menos que 16MB</p>
      <div className="mt-5 flex gap-8">
        <DocumentDownload />
        <DocumentDownload />
        <DocumentDownload />
        <DocumentDownload />
      </div>
      <ButtonSave handleSave={handleSave} />
    </div>
  );
}
