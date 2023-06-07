interface ButtonAddProps {
  name: string
  type?: 'tableAgreement'
  handleAddition?: () => void
  handleOpenModalProduct?: () => void
}

export function ButtonAdd({
  name,
  type,
  handleAddition,
  handleOpenModalProduct,
}: ButtonAddProps) {
  return (
    <>
      <div className="mt-8">
        <button
          className="rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-none"
          onClick={() => {
            if (type === 'tableAgreement') {
              handleOpenModalProduct && handleOpenModalProduct()
            } else {
              handleAddition && handleAddition()
            }
          }}
        >
          + Adicionar {name}
        </button>
      </div>
    </>
  )
}
