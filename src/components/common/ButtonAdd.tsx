import { ComponentProps } from 'react'

type ButtonAddProps = ComponentProps<'button'> & {
  name: string
  styled?: 'tableAgreement'
  handleAddition?: () => void
  handleOpenModal?: () => void
  className?: string
}

export function ButtonAdd({
  name,
  styled,
  type,
  handleAddition,
  handleOpenModal,
  className,
}: ButtonAddProps) {
  return (
    <>
      <div className={`${className} mt-8 inline-block rounded-md`}>
        <button
          className={`${className} rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-none`}
          onClick={() => {
            if (styled === 'tableAgreement') {
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
