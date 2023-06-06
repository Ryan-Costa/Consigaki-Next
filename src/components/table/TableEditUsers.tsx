import { useState } from "react";
import { IconClose, IconEdit } from "../../../public/icons";
import ModalEditUserAgreement from "../modal/ModalEditUserAgreement";
import ModalDeleteUserAgreement from "../modal/ModalDeleteUserAgreement";

export function TableEditUsers() {
  const [isOpenModalEditUser, setIsOpenModalEditUser] = useState(false);
  const [isOpenModalDeleteUser, setIsOpenModalDeleteUser] = useState(false);

  const [agreementsData, setAgreementsData] = useState([
    {
      nome: "Empréstimo",
      banner: "http://aws.s3.imagem.com/teste",
      ativo: "Sim",
    },
    {
      nome: "Empréstimo",
      banner: "http://aws.s3.imagem.com/teste",
      ativo: "Não",
    },
  ]);

  const handleDelete = (index: any) => {
    const updateData = [...agreementsData];
    updateData.splice(index, 1);
    setAgreementsData(updateData);
  };

  const handleOpenModalEditUser = () => {
    setIsOpenModalEditUser(true);
  };

  const handleCloseModalEditUser = () => {
    setIsOpenModalEditUser(false);
  };

  const handleOpenModalDeleteUser = () => {
    setIsOpenModalDeleteUser(true);
  };

  const handleCloseModalDeleteUser = () => {
    setIsOpenModalDeleteUser(false);
  };

  return (
    <>
      <table className="mt-4 w-full text-left">
        <thead>
          <tr>
            <th className="p-4 text-left">Nome Produto</th>
            <th className="p-4 text-left">Banner</th>
            <th className="p-4 text-left">Ativo</th>
            <th className="p-4 text-left">Editar</th>
            <th className="p-4 text-left">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {agreementsData.map((item, index) => (
            <tr className="border-y" key={item.nome}>
              <td className="w-1/6 p-4 text-left">{item.nome}</td>
              <td className="w-3/6 p-4 text-left">{item.banner}</td>
              <td className="w-1/6 p-4 text-left">{item.ativo}</td>
              <td className="w-6/6 p-4 text-left">
                <a onClick={handleOpenModalEditUser} className="cursor-pointer">
                  {IconEdit}
                </a>
                <ModalEditUserAgreement
                  isOpen={isOpenModalEditUser}
                  onRequestClose={handleCloseModalEditUser}
                />
              </td>

              <td className="w-6/6 flex justify-center p-4 text-left">
                <a
                  onClick={handleOpenModalDeleteUser}
                  className="cursor-pointer"
                >
                  {IconClose}
                </a>
                <ModalDeleteUserAgreement
                  isOpen={isOpenModalDeleteUser}
                  onRequestClose={handleCloseModalDeleteUser}
                  handleDelete={() => handleDelete(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full">
        <button
          className="mt-9 rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-none"
          // onClick={}
        >
          + Adicionar Convênio
        </button>
      </div>
    </>
  );
}
