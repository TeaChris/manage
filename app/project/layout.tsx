// import './globals.css'

export const metadata = {
  title:
    'Manage: Helping you shape and manage your task to becoming more future-like',
  description: '',
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
