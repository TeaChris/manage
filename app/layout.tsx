import { CategoryProvider } from './context/store'
import './globals.css'
import { Inter } from 'next/font/google'

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
        <CategoryProvider>{children}</CategoryProvider>
      </body>
    </html>
  )
}
