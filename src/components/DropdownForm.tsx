import React, { useState, useRef } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { IconArrow, IconArrowDownGray } from '../../public/icons'

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
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLSelectElement>(null)

  const handleSelectItem = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (valueSelected) {
      valueSelected(event.target.value)
    }
    setSelectedValue(event.target.value)
    setIsOpen(false)
  }

  const handleToggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
    if (!isOpen && selectRef.current) {
      selectRef.current.click()
    }
  }

  return (
    <div className="relative">
      <div
        className={`flex w-full rounded-lg border border-gray-400`}
        onClick={handleToggleDropdown}
      >
        <select
          ref={selectRef}
          className={`h-[48px] w-full cursor-pointer appearance-none rounded-lg px-4 ${
            isOpen ? 'border-b-0' : ''
          } ${className}`}
          {...(register && register(name))}
          onChange={handleSelectItem}
          value={selectedValue}
        >
          {options.map((option) => (
            <option
              key={option.value}
              className={`box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700`}
              value={option.value}
            >
              {option.displayName}
            </option>
          ))}
        </select>
        <div
          className={`pointer-events-none absolute right-0 flex h-[48px] w-[48px] ${
            isOpen ? 'rotate-0' : 'rotate-180'
          } items-center justify-center `}
        >
          {isOpen ? IconArrow : IconArrowDownGray}
        </div>
      </div>
    </div>
  )
}
