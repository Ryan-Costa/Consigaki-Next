import { ComponentProps } from 'react'

type ButtonAddProps = ComponentProps<'button'> & {
  name: string
  className?: string
}

export function ButtonAdd({ name, className }: ButtonAddProps) {
  return (
    <>
      <div className={`${className} mt-8 inline-block rounded-md`}>
        <button
          className={`${className} rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-2 outline-neutral-950`}
        >
          + Adicionar {name}
        </button>
      </div>
    </>
  )
}
