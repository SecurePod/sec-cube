'use client'

import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useSpring, animated } from '@react-spring/web'
import WarningIcon from '@mui/icons-material/Warning'
import { Button } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ConfettiExplosion from 'react-confetti-explosion'
import { Cheer } from '../confetti'
import Link from 'next/link'

interface FadeProps {
  children: React.ReactElement
  in?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void
  onExited?: (node: HTMLElement, isAppearing: boolean) => void
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { children, in: open, onClick, onEnter, onExited, ...other } = props
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onEnter(null as any, true)
      }
    },
    onRest: () => {
      if (!open && onExited) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onExited(null as any, true)
      }
    },
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  )
})

interface SpringModalProps {
  text?: string
  children: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export function ErrorModal({ children, isOpen, onClose }: SpringModalProps) {
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    boxShadow: 24,
    borderRadius: '10px',
    bgcolor: '#fff',
    border: '1px solid #fff',
    zIndex: 9999,
  }

  return (
    <div>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        open={isOpen || false}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px 10px 0 0',
                p: 2,
                bgcolor: '#EF4444',
                color: '#fff',
              }}
            >
              <WarningIcon />
              <Typography sx={{ ml: 1, fontSize: '17px' }} fontWeight={600}>
                エラー
              </Typography>
            </Box>
            <Typography
              id='spring-modal-description'
              sx={{ p: 3, fontSize: '16px', fontWeight: 500 }}
            >
              {children}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
              <Button
                disableRipple
                sx={{}}
                variant='outlined'
                size='medium'
                onClick={onClose}
                color='error'
              >
                閉じる
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

interface ClearModalProps {
  link?: string
  isOpen: boolean
  onClose: () => void
}

export function ClearModal({ isOpen, onClose }: ClearModalProps) {
  const [isExploding, setIsExploding] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      Cheer()
      setIsExploding(true)
    }
  }, [isOpen])

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    boxShadow: 24,
    borderRadius: '10px',
    bgcolor: '#fff',
    border: '1px solid #fff',
    zIndex: 9999,
  }

  return (
    <div>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        open={isOpen || false}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px 10px 0 0',
                p: 2,
                bgcolor: '#44CAD6',
                color: '#fff',
              }}
            >
              <CheckCircleIcon />

              <Typography sx={{ ml: 1, fontSize: '17px' }} fontWeight={600}>
                ステージクリア
              </Typography>
            </Box>
            <Typography
              id='spring-modal-description'
              sx={{ p: 3, fontSize: '16px', fontWeight: 500, textAlign: 'center' }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {isExploding && <ConfettiExplosion zIndex={10000} duration={4000} />}
              </Box>
              クリアおめでとう！
            </Typography>
            <Typography
              id='spring-modal-description'
              sx={{ p: 1, fontSize: '16px', fontWeight: 500, textAlign: 'center' }}
            >
              <button className='inline-flex items-center font-semibold text-center rounded-full outline-none transition duration-100 disabled:opacity-50 transition ease-in transition-all shadow-md hover:shadow-xl border-[#D2D5DA] bg-white border text-[#545F65] text-sm px-[20px] py-[10px] react:bg-transparent react:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  aria-hidden='true'
                  className='w-5 h-auto inline-block sm:mr-2 align-middle'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                  ></path>
                </svg>
                <Link href='/course' className='hidden sm:inline'>
                  レッスン一覧
                </Link>
              </button>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
              <Button
                sx={{ border: '1px solid #44CAD6', color: '#44CAD6' }}
                disableRipple
                variant='outlined'
                size='medium'
                onClick={onClose}
              >
                閉じる
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
