"use client";
import { useState } from "react";
import { IconClose } from "../../../../public/icons";
import { ButtonAdd } from "../../common/ButtonAdd";
import { ModalProduct } from "../../modal/ModalProduct";

export function TableEditProductAgreement() {
  const [isOpenModalProduct, setIsOpenModalProduct] = useState(false);

  const [agreementsData, setAgreementsData] = useState([
    {
      nome: "Cartão Consignado",
      banner: "http://aws.s3.imagem.com/teste",
    },
    {
      nome: "Cartão Consignado",
      banner: "http://aws.s3.imagem.com/teste",
    },
  ]);

  const handleDelete = (index: any) => {
    const updateData = [...agreementsData];
    updateData.splice(index, 1);
    setAgreementsData(updateData);
  };

  const handleOpenModalProduct = () => {
    setIsOpenModalProduct(true);
  };

  const handleCloseModalProduct = () => {
    setIsOpenModalProduct(false);
  };

  return (
    <>
      <table className="mt-4 w-full text-left">
        <thead>
          <tr>
            <th className="p-4 text-left">Nome Produto</th>
            <th className="p-4 text-left">Banner</th>
            <th className="p-4 text-left">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {agreementsData.map((item, index) => (
            <tr className="border-y" key={item.nome}>
              <td className="w-2/6 p-4 text-left">{item.nome}</td>
              <td className="w-4/6 p-4 text-left">
                <button
                  // onClick={handleOpenModalBanner}
                  className="font-semibold underline"
                >
                  {item.banner}
                </button>
              </td>
              <td className="w-6/6 flex justify-center p-4 text-left">
                <a
                  onClick={() => handleDelete(index)}
                  className="cursor-pointer"
                >
                  {IconClose}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ButtonAdd
        name="Produto"
        type="tableAgreement"
        handleOpenModal={handleOpenModalProduct}
      />

      <ModalProduct
        isOpen={isOpenModalProduct}
        onRequestClose={handleCloseModalProduct}
      />
    </>
  );
}
