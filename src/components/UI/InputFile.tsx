// InputFile.tsx
import { UseFormRegister } from 'react-hook-form'
import { ChangeEvent, useState } from 'react'

interface InputFileProps {
  name: string
  type: string
  register: UseFormRegister<any>
  onImageChange: (url: string) => void
}

export default function InputFile({
  name,
  type,
  register,
  onImageChange,
}: InputFileProps) {
  const [, setImageUrl] = useState<string>('')

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()

      reader.onload = () => {
        const url = reader.result as string
        setImageUrl(url)
        onImageChange(url)
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <input
        {...(register && register(name))}
        name={name}
        type={type}
        onChange={handleImageChange}
      />
    </>
  )
}
