type ButtonSaveProps = {
  handleSave?: () => void
  type?: "submit"
}

export function ButtonSave({ handleSave, type }: ButtonSaveProps) {
  return (
    <div className="mt-10 w-full rounded-lg shadow-lg">
      <button
        className="w-full rounded-[8px] bg-goldenrod py-4 text-2xl font-bold hover:bg-green-goldenrod"
        onClick={handleSave}
        type={type}
      >
        Salvar
      </button>
    </div>
  )
}
