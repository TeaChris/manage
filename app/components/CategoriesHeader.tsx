'use client'

import Link from 'next/link'

import { useCategoryContext } from '../context/store'

import { IoMdAddCircleOutline } from 'react-icons/io'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'

export default function CategoriesHeader() {
  const { categories, deleteCategory, editCategory } = useCategoryContext()

  // delete logic
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(event.currentTarget.value)
    deleteCategory(id)
  }

  // edit logic
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(event.currentTarget.value)
    const newName = prompt('Enter the new category name:')
    if (newName) {
      editCategory(id, newName)
    }
  }

  return (
    <header className="w-full h-fit p-8 mt-16 grid place-items-center relative">
      <div className="md:w-[50rem] flex flex-col items-start gap-6">
        {/* top */}
        <div className="w-full p-4 flex flex-col md:flex md:flex-row items-center gap-8 md:justify-between">
          <h2 className="capitalize text-[1.5rem] md:text-[2rem] font-semibold">
            project categories
          </h2>
          <Link
            href="/create"
            className="flex items-center gap-1 text-white text-sm capitalize bg-blue-600 hover:bg-blue-700 transition duration-500 w-fit h-10 p-2 rounded-md"
          >
            <IoMdAddCircleOutline style={{ fontSize: '1rem' }} />
            add new category
          </Link>
        </div>

        {/* bottom */}
        <div className="w-full flex flex-col items-start gap-1">
          <div className="w-full md:w-[85%] flex md:flex md:items-center justify-between">
            <p className="capitalize font-normal">category name</p>
            <p className="capitalize font-normal">actions</p>
          </div>
          <div className="w-full h-[0.1rem] bg-black"></div>
          <div className="w-full h-fit py-2 flex flex-col items-start gap-1">
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="w-full h-fit p-2 bg-blue-100 rounded-md flex items-center justify-between hover:scale-95 transition duration-200 cursor-pointer"
                >
                  <span className="capitalize">{category.name}</span>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={handleEdit}
                      value={category.id}
                      className="hidden"
                    >
                      <BiEdit
                        style={{
                          background: 'green',
                          width: '2rem',
                          height: '2rem',
                          display: 'grid',
                          placeItems: 'center',
                          color: 'white',
                          fontSize: '1.5rem',
                          padding: '0.5rem',
                          borderRadius: '0.5rem',
                          cursor: 'pointer',
                        }}
                      />
                    </button>

                    <button
                      type="button"
                      onClick={handleDelete}
                      value={category.id}
                    >
                      <AiOutlineDelete
                        style={{
                          background: 'red',
                          width: '2rem',
                          height: '2rem',
                          display: 'grid',
                          placeItems: 'center',
                          color: 'white',
                          fontSize: '1.5rem',
                          padding: '0.5rem',
                          borderRadius: '0.5rem',
                          cursor: 'pointer',
                        }}
                      />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
