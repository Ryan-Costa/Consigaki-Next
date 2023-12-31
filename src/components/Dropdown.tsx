import React, { useState } from 'react'
import { IconArrow } from '../../public/icons'
import { UseFormRegister } from 'react-hook-form'

type DropdownProps = {
  type: 'modal' | 'table' | 'form'
  options: string[]
  defaultValue: string
  className?: string
  name: string
  onSelect?: (value: string) => void
  register?: UseFormRegister<any>
}

export const Dropdown: React.FC<DropdownProps> = ({
  type,
  options,
  name,
  defaultValue,
  className,
  onSelect,
  register,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSelectItem = (value: string) => {
    setSelectedValue(value)
    onSelect?.(value)
  }

  return (
    <div
      className={`flex ${
        type === 'modal'
          ? 'h-12 w-60 rounded-xl border-black px-7'
          : type === 'table'
          ? 'h-42 w-60 rounded-20 border-gray-500 px-7'
          : type === 'form'
          ? `h-[48px] rounded-lg border border-gray-400 px-6 outline-none ${className}`
          : null
      } items-center justify-center border`}
    >
      <button
        className={`relative flex w-full items-center justify-between font-bold ${
          type === 'form' ? 'text-text-select' : 'text-gray-500'
        }`}
        onClick={handleOpen}
        {...(register && register(name))}
      >
        {!selectedValue ? defaultValue : selectedValue}
        <span
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-40 transform ' : 'rotate-180'
          }`}
        >
          {IconArrow}
        </span>
        {isOpen && (
          <div
            className={`absolute -right-7 top-9 z-10 box-border flex ${
              type !== 'form' ? 'w-60' : 'w-full'
            } list-none flex-col rounded-b-2xl bg-white text-left text-black shadow-lg`}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className={`box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700 ${
                  selectedValue === option ? 'selected' : ''
                }`}
                onClick={() => {
                  handleSelectItem(option)
                }}
              >
                {option}
              </li>
            ))}

            <li className="h-4"></li>
          </div>
        )}
      </button>
    </div>
  )
}
