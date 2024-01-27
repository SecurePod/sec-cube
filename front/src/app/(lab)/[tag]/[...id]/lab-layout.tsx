import Footer from '@/components/lab/footer'
import Header from '@/components/lab/header'
import { Box } from '@mui/material'
import Guide from '@/components/lab/guide'
import Panels, { TabData } from '@/components/lab/panels'
import React from 'react'

interface ExerLayoutProps {
  guideData: React.ReactNode
  tabsData: TabData[]
}

export default function LabLayout({ data }: { data: ExerLayoutProps }) {
  return (
    <>
      <Box>
        <Header />
        <Box sx={{ display: 'flex', height: 'calc(100vh - 130px)' }}>
          <Guide>{data.guideData}</Guide>
          <Box
            sx={{
              flexGrow: 1,
              position: 'relative',
              minWidth: 0,
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Panels tabsData={data.tabsData} />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  )
}
