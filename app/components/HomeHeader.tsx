'use client'

import { useState } from 'react'
import { useFormDataContext } from '../context/store'

import { BsSearch } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { BiCalendar } from 'react-icons/bi'

export default function HomeHeader() {
  const { formDataEntries } = useFormDataContext()
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

  // getting current date
  const currentDate = new Date()

  const day = currentDate.getDate()
  const month = currentDate.toLocaleString('default', { month: 'long' })
  const year = currentDate.getFullYear()

  return (
    <section className="w-full h-fit py-3">
      <div className="w-full h-fit container mx-auto flex flex-col items-center gap-4 pt-20">
        <h1 className="font-bold text-[2.5rem] md:text-[4rem] text-center capitalize leading-2">
          an end to final year project topic repitition
        </h1>
        <p className="text-sm">
          Solve the world problem through your final year project
        </p>
        <div className="w-full flex items-center bg-blue-100 py-3 px-4 rounded-md text-black mt-5">
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
        <div className="w-full h-fit flex flex-col items-start gap-12 mt-20">
          <h1 className="text-[2rem] capitalize">
            explore your recent project topic
          </h1>
          <div className="w-full h-fit grid grid-cols-3 items-center justify-between">
            {formDataEntries.map((entry) => {
              return (
                <div
                  key={entry.id}
                  className="w-80 h-fit p-2 flex flex-col items-start gap-4"
                >
                  <div className="w-full h-fit p-1 flex flex-col items-start gap-2">
                    <small className="text-sm capitalize text-blue-500">
                      {entry.category}
                    </small>
                    <small className="first-letter:capitalize text-sm leading-4 font-bold">
                      {entry.title}
                    </small>
                  </div>
                  <div className="w-full h-fit p-1 flex flex-col items-start gap-0">
                    <div className="w-full flex items-center gap-3">
                      <CiUser style={{ fontSize: '0.75rem' }} />
                      <small className="text-xs capitalize">{entry.name}</small>
                    </div>
                    <div className="w-full flex items-center gap-3">
                      <BiCalendar style={{ fontSize: '0.75rem' }} />
                      <span className="text-xs">{`${month} ${day}, ${year}`}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
