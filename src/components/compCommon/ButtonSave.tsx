type ButtonSaveProps = {
  type?: 'submit'
}

export function ButtonSave({ type }: ButtonSaveProps) {
  return (
    <div className="mt-10 w-full rounded-lg shadow-lg">
      <button
        className="w-full rounded-[8px] bg-goldenrod py-4 text-2xl font-bold hover:bg-green-goldenrod"
        type={type}
      >
        Salvar
      </button>
    </div>
  )
}
