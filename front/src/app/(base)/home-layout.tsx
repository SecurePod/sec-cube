'use client'

import React from 'react'
import Sidebar, { DrawerHeader } from '@/components/common/side'
import Box from '@mui/joy/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo, "MS PGothic", sans-serif',
    fontWeightRegular: 400,
    fontSize: 14,
  },
  palette: {
    primary: {
      main: '#1c3746',
      light: '#8491a5',
      dark: '#8491a5',
    },
    secondary: {
      main: '#2696F0', // リンクなどに利用する青
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
    },
  },
})

export default function HomeLayout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Box component='main'>
        <ThemeProvider theme={theme}>
          <Sidebar>
            <Box
              component='main'
              sx={{ flexGrow: 1, p: 3, backgroundColor: '#F8FBFE' }}
              maxWidth='100%'
            >
              <DrawerHeader />
              {children}
            </Box>
          </Sidebar>
        </ThemeProvider>
      </Box>
    </>
  )
}
