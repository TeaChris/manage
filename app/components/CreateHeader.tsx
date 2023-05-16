'use client'

import { useState } from 'react'
import { useCategoryContext } from '../context/store'

export default function CreateHeader() {
  const { addCategory } = useCategoryContext()
  const [categoryName, setCategoryName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value)
    setErrorMessage('')
  }

  // form submit controlled
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // empty input not allowed onSubmit
    if (categoryName.trim() === '') {
      setErrorMessage('Category name is required')
      return
    }

    // Add the new category to the array
    addCategory(categoryName)

    // Reset the input field to an empty string
    setCategoryName('')
  }

  return (
    <section className="w-full h-fit grid place-items-center my-16">
      <div className="w-[40rem] h-64 p-8 rounded-xl bg-white shadow-md shadow-black flex flex-col items-center gap-3">
        <h2 className="text-2xl capitalize font-medium">create new category</h2>
        <form
          className="w-full px-4 flex flex-col items-start gap-3"
          onSubmit={handleSubmit}
        >
          <label htmlFor="category" className="capitalize text-sm">
            category name
          </label>
          <div className="w-full flex flex-col items-start gap-1">
            <input
              type="text"
              value={categoryName}
              onChange={handleInputChange}
              className="bg-transparent pl-2 border border-slate-300 w-full focus:outline-none"
            />
            <span className="text-red-700 font-medium text-sm">
              {errorMessage}
            </span>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition duration-500 text-white py-2 px-4 rounded-md"
          >
            Create
          </button>
        </form>
      </div>
    </section>
  )
}
