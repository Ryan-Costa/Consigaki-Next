import React, { useState } from 'react'
import { IconSearchWhite } from '../../public/icons'

interface SearchInputProps {
  onSearch: (value: string) => void
}

export function SearchInput({ onSearch }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchValue(value)
  }

  const handleSearch = () => {
    onSearch(searchValue)
  }

  return (
    <div className="relative flex gap-2">
      <input
        type="text"
        className="rounded-md border border-gray-500 px-4 py-2 pr-12 focus:outline-none"
        value={searchValue}
        onChange={handleChange}
        placeholder="Buscar"
      />
      <button
        className={`flex cursor-pointer items-center rounded-md bg-bs-teal-2 px-2 active:bg-gray-300`}
        onClick={handleSearch}
      >
        {IconSearchWhite}
      </button>
    </div>
  )
}
