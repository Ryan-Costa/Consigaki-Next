import React, { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
// import { IconArrow } from '../../public/icons'

type DropdownProps = {
  name: string
  type: 'modal' | 'table' | 'form'
  options: { name: string; displayName: string; value: number }[]
  defaultValue?: number | string | undefined
  className?: string
  onSelect?: (value: number) => void
  register?: UseFormRegister<any>
}

export const DropdownForm: React.FC<DropdownProps> = ({
  name,
  type,
  options,
  defaultValue,
  className,
  onSelect,
  register,
}) => {
  // const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<
    number | string | undefined
  >(defaultValue)

  // const handleOpen = () => {
  //   setIsOpen((prev) => !prev)
  // }

  const handleSelectItem = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('selectedValue | ', selectedValue)
    console.log('event | ', +event.target.value)
    setSelectedValue(+event.target.value)
    onSelect?.(+event.target.value)
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
    // <div
    //   className={`flex ${
    //     type === 'modal'
    //       ? 'h-12 w-60 rounded-xl border-black px-7'
    //       : type === 'table'
    //       ? 'h-42 w-60 rounded-20 border-black px-7'
    //       : type === 'form'
    //       ? `h-[48px] rounded-lg border border-gray-400 px-6 outline-none ${className}`
    //       : null
    //   } items-center justify-center border`}
    // >
    //   <button
    //     className={`relative flex w-full items-center justify-between font-bold ${
    //       type === 'form' ? 'text-text-select' : 'text-black'
    //     }`}
    //     onClick={handleOpen}
    //   >
    //     {!selectedValue ? defaultValue : selectedValue}
    //     <span
    //       className={`transition-transform duration-300 ${
    //         isOpen ? 'rotate-40 transform ' : 'rotate-180'
    //       }`}
    //     >
    //       {IconArrow}
    //     </span>
    //     {isOpen && (
    //       <select
    //         {...(register && register(name))}
    //         className={`absolute -right-7 top-9 z-10 box-border flex ${
    //           type !== 'form' ? 'w-60' : 'w-full'
    //         } list-none flex-col rounded-b-2xl bg-white text-left text-black shadow-lg`}
    //         onChange={handleSelectItem}
    //       >
    //         {options.map((option) => (
    //           <option
    //             key={option.value}
    //             className={`box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700 ${
    //               selectedValue === option.value ? 'selected' : ''
    //             }`}
    //             value={option.value}
    //           >
    //             {option.displayName}
    //           </option>
    //         ))}
    //       </select>
    //     )}
    //   </button>
    // </div>
  )
}
