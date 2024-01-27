import { Lato } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './global.css'

const Lato700 = Lato({
  weight: '400',
  preload: false,
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={Lato700.className}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  )
}
