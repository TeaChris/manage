'use client'

import { useState } from 'react'

import { BsSearch } from 'react-icons/bs'

export default function HomeHeader() {
  const [search, setSearch] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      // perform search logic or API call using the searchTerm value
      console.log('Performing search:', search)
      // clear the input field
      setSearch('')
    }
  }

  return (
    <section className="w-full h-[30rem]">
      <div className="container mx-auto flex flex-col items-center gap-6 pt-20">
        <h1 className="font-bold text-[2.5rem] md:text-[4rem] text-center capitalize leading-2">
          an end to final year project topic repitition
        </h1>
        <p className="text-sm">
          Solve the world problem through your final year project
        </p>
        <div className="w-full flex items-center bg-blue-100 py-3 px-4 rounded-md text-black mt-3">
          <BsSearch style={{ color: 'lightblue', fontSize: '1.5rem' }} />
          <input
            type="text"
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter your project topic"
            className="ml-3 bg-transparent w-full py-1 px-0 focus:outline-none"
          />
        </div>
      </div>
    </section>
  )
}
