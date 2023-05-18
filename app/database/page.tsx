'use client'

import { useFormDataContext } from '../context/store'

import { CiUser } from 'react-icons/ci'
import { BiCalendar } from 'react-icons/bi'

export default function Database() {
  const { formDataEntries } = useFormDataContext()

  // getting current date
  const currentDate = new Date()

  const day = currentDate.getDate()
  const month = currentDate.toLocaleString('default', { month: 'long' })
  const year = currentDate.getFullYear()

  return (
    <main className="mt-32 w-full h-fit p-4">
      <div className="container mx-auto md:flex items-center justify-between">
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
    </main>
  )
}
