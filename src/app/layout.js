import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vineet Rana | ECE Student & Aspiring SDE',
  description: 'Portfolio of Vineet Rana, B.Tech ECE student at NIT Delhi seeking SDE internship opportunities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
