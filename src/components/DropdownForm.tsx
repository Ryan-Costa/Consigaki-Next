import React, { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
// import { IconArrow } from '../../public/icons'

interface DropdownProps {
  name: string
  options: { name: string; displayName: string; value: number | string }[]
  defaultValue?: number | string | undefined
  className?: string
  register?: UseFormRegister<any>
  valueSelected?: (value: string) => void
}

export function DropdownForm({
  name,
  options,
  defaultValue,
  className,
  register,
  valueSelected,
}: DropdownProps) {
  const [selectedValue, setSelectedValue] = useState<
    number | string | undefined
  >(defaultValue)

  const handleSelectItem = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (valueSelected) {
      valueSelected(event.target.value)
    }
    setSelectedValue(+event.target.value)
  }

  return (
    <select
      className="h-[48px] rounded-lg border border-gray-400 px-2 outline-none"
      {...(register && register(name))}
      onChange={handleSelectItem}
      value={selectedValue}
    >
      {selectedValue && (
        <option value="" disabled hidden>
          {selectedValue}
        </option>
      )}

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
