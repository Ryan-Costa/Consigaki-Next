interface ButtonAddProps {
  name: string
  type?: 'tableAgreement'
  handleAddition?: () => void
  handleOpenModal?: () => void
  className?: string
}

export function ButtonAdd({
  name,
  type,
  handleAddition,
  handleOpenModal,
  className,
}: ButtonAddProps) {
  return (
    <>
      <div className={`${className} mt-8`}>
        <button
          className={`${className} rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-none`}
          onClick={() => {
            if (type === 'tableAgreement') {
              handleOpenModal && handleOpenModal()
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
