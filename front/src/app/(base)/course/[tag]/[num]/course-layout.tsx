import Footer from '@/components/course/footer'
import Header from '@/components/lab/header'
import { Box } from '@mui/material'
import { Container } from '@mui/material'

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box>
        <Header />
        <Box sx={{ display: 'flex', height: 'calc(100vh - 130px)' }}>
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
                overflowY: 'auto',
              }}
            >
              <Container
                sx={{
                  padding: '1.5rem 1.5rem 5rem 1.5rem',
                  backgroundColor: '#fff',
                  position: 'relative',
                  borderRadius: '0.375rem',
                }}
              >
                {/* <Box sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                  <button className='border-none bg-transparent' data-state='closed'>
                    <svg
                      className='w-5 h-auto text-gray-600'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                    </svg>
                  </button>
                </Box> */}
                {children}
              </Container>
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  )
}
