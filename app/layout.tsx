import { CategoryProvider, FormDataProvider } from './context/store'
import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:
    'Manage: Helping you shape and manage your task to becoming more future-like',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CategoryProvider>
          <FormDataProvider>
            <Navbar/>
            {children}
            <Footer/>
          </FormDataProvider>
        </CategoryProvider>
      </body>
    </html>
  )
}
