import { ChangeEvent } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputProps {
  label: string
  name: string
  type: string
  placeholder?: string
  readOnly?: boolean
  disabled?: boolean
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
  classNameInput?: string
  register?: UseFormRegister<any>
}

export function Input({
  label,
  name,
  type,
  placeholder,
  disabled,
  readOnly,
  onChange,
  value,
  register,
  className,
  classNameInput,
}: InputProps) {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <label className="font-semibold">{label}</label>
      <input
        {...(register && register(name))}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${classNameInput} h-[48px] w-full rounded-lg border border-gray-400 px-6 outline-none`}
        readOnly={readOnly}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
