'use client'

import React, { useState } from 'react'
import { IconSearch } from '../../public/icons'

interface SearchInputProps {
  onSearch: (value: string) => void
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchValue(value)
    onSearch(value)
  }

  return (
    <div className="relative">
      <input
        type="text"
        className="rounded-full border border-black px-4 py-2 pr-12 focus:outline-none"
        value={searchValue}
        onChange={handleChange}
      />
      {searchValue.length === 0 && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs">
          {IconSearch}
          <span className="ml-1 text-bs-gray">Search...</span>
        </div>
      )}
    </div>
  )
}
