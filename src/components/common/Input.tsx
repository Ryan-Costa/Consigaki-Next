import { ChangeEvent, ComponentProps } from 'react'
import { UseFormRegister } from 'react-hook-form'

type InputProps = ComponentProps<'input'> & {
  label: string
  name: string
  type: string
  placeholder?: string
  readOnly?: boolean
  disabled?: boolean
  value?: string | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
  classNameInput?: string
  classNameLabel?: string
  register?: UseFormRegister<any>
  maxLength?: number
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
  classNameLabel,
  maxLength,
}: InputProps) {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <label className={`font-${!classNameLabel && 'semibold'}`}>{label}</label>
      <div className="rounded-lg border border-gray-400">
        <input
          {...(register && register(name))}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`${classNameInput} h-[48px] w-full rounded-lg  px-6`}
          readOnly={readOnly}
          disabled={disabled}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
