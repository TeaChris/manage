'use client'

import { useState } from 'react'
import { useCategoryContext, useFormDataContext } from '../context/store'

export default function CreateProject() {
  const { categories } = useCategoryContext()
  const { addFormDataEntry } = useFormDataContext()

  // setting initial states
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // controlled input for the form
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // validate input fields
    // title
    if (title.trim() === '') {
      setErrorMessage('Category name is required')
      return
    }
    // author
    if (author.trim() === '') {
      setErrorMessage('Category name is required')
      return
    }
    // category
    if (selectedCategory.trim() === '') {
      setErrorMessage('Category name is required')
      return
    }

    // Add the new category to the array
    addFormDataEntry(title, author, selectedCategory)

    // reset input fields to empty state after submission
    setTitle('')
    setAuthor('')
    setSelectedCategory('')
  }

  return (
    <section className="w-full h-fit grid place-items-center my-16">
      <div className="w-[40rem] h-fit p-8 rounded-xl bg-white shadow-md shadow-black flex flex-col items-center gap-3">
        <h2 className="text-2xl capitalize font-medium">create new project</h2>
        <form
          className="w-full px-4 flex flex-col items-start gap-4"
          onSubmit={handleSubmit}
        >
          {/* project title */}
          <div className="w-full flex flex-col items-start gap-3">
            <label htmlFor="title" className="capitalize text-sm">
              project name
            </label>
            <div className="w-full flex flex-col items-start gap-1">
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="bg-transparent pl-2 border border-slate-300 w-full focus:outline-none"
              />
              <span className="text-red-700 font-medium text-xss">
                {errorMessage}
              </span>
            </div>
          </div>

          {/* author */}
          <div className="w-full flex flex-col items-start gap-3">
            <label htmlFor="author" className="capitalize text-sm">
              author name
            </label>
            <div className="w-full flex flex-col items-start gap-1">
              <input
                type="text"
                value={author}
                onChange={handleAuthorChange}
                className="bg-transparent pl-2 border border-slate-300 w-full focus:outline-none"
              />
              <span className="text-red-700 font-medium text-xss">
                {errorMessage}
              </span>
            </div>
          </div>

          {/* category */}
          <div className="w-full flex flex-col gap-3 items-start">
            <label htmlFor="category" className="capitalize text-sm">
              project category
            </label>
            <select
              name="category"
              id=""
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full h-8 p-1 flex items-center justify-between border border-slate-300 focus:outline-none"
            >
              <option value="">Select a category</option>
              {categories.map((category) => {
                return (
                  <option
                    value={category.name}
                    className="capitalize"
                    key={category.id}
                  >
                    {category.name}
                  </option>
                )
              })}
            </select>
            <span className="text-red-700 font-medium text-xss">
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
