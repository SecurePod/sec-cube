import './global.css'
import NextTopLoader from 'nextjs-toploader'
import { Box } from '@mui/material'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <Box component={'body'}>
        <NextTopLoader />
        {children}
      </Box>
    </html>
  )
}
