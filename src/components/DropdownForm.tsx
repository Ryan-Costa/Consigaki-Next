import React, { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
// import { IconArrow } from '../../public/icons'

type DropdownProps = {
  name: string
  options: { name: string; displayName: string; value: number }[]
  defaultValue?: number | string | boolean | undefined
  className?: string
  register?: UseFormRegister<any>
}

export const DropdownForm: React.FC<DropdownProps> = ({
  name,
  options,
  defaultValue,
  className,
  register,
}) => {
  const [selectedValue, setSelectedValue] = useState<
    number | string | boolean | undefined
  >(defaultValue)

  const handleSelectItem = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('selectedValue | ', selectedValue)
    console.log('event | ', +event.target.value)
    setSelectedValue(+event.target.value)
  }

  return (
    <select
      className="h-[48px] rounded-lg border border-gray-400 px-2 outline-none"
      {...(register && register(name))}
      onChange={handleSelectItem}
    >
      {defaultValue ? (
        <option value="" disabled hidden>
          {defaultValue}
        </option>
      ) : null}

      {options.map((option) => (
        <option
          key={option.value}
          className={`box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700 ${
            selectedValue === option.value ? 'selected' : ''
          }`}
          value={option.value}
        >
          {option.displayName}
        </option>
      ))}
    </select>
  )
}
