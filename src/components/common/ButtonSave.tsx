type ButtonSaveProps = {
  handleSave: () => void
}

export function ButtonSave({ handleSave }: ButtonSaveProps) {
  return (
    <div className="mt-10 w-full rounded-lg">
      <button
        className="w-full rounded-[8px] bg-goldenrod py-4 text-2xl font-bold hover:bg-green-goldenrod"
        onClick={handleSave}
      >
        Salvar
      </button>
    </div>
  )
}
