'use client'

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react'

type Category = {
  id: number
  name: string
}

type CategoryContextType = {
  categories: Category[]
  addCategory: (name: string) => void
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
)

export const useCategoryContext = (): CategoryContextType => {
  const context = useContext(CategoryContext)
  if (!context) {
    throw new Error('useCategoryContext must be used within a CategoryProvider')
  }
  return context
}

type CategoryProviderProps = {
  children: React.ReactNode
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([])

  const addCategory = (name: string) => {
    const newCategory: Category = {
      id: categories.length + 1,
      name: name,
    }
    setCategories([...categories, newCategory])
  }

  return (
    <CategoryContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}
