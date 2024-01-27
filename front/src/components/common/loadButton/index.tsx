'use client'

import React, { useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'

const buttonStyle = {
  display: 'inline-flex',
  backgroundColor: '#2696F0!important',
  alignItems: 'center',
  fontWeight: 'bold',
  textAlign: 'center',
  borderRadius: '9999px',
  outline: 'none',
  transition: 'all 100ms ease-in',
  '&:disabled': {
    color: '#fff',
    opacity: 0.5,
  },
  boxShadow: 'md',
  '&:hover': {
    boxShadow: 'xl',
  },
  '&:focus-visible': {
    ring: '1',
  },
  fontSize: 'small',
  padding: '10px 20px',
}

interface LoadButtonPromiseProps {
  onClick: () => Promise<void>
  btnLabel: string
}

export function LoadButtonPromise({ onClick, btnLabel }: LoadButtonPromiseProps) {
  const [loading, setLoading] = useState(false)

  function handleClick() {
    setLoading(true)
    console.log('clicked')
    onClick()
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <LoadingButton
        size='large'
        variant='contained'
        sx={buttonStyle}
        onClick={handleClick}
        loading={loading}
        loadingPosition='start'
        startIcon={
          <svg
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 hidden sm:inline-block mr-2'
          >
            <path
              d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        }
      >
        {btnLabel}
      </LoadingButton>
    </div>
  )
}

interface LoadButtonProps {
  onClick: () => void
  btnLabel: string
}

export default function LoadButton({ onClick, btnLabel }: LoadButtonProps) {
  const [loading, setLoading] = useState(false)

  function handleClick() {
    setLoading(true)
    onClick()
    setTimeout(function () {
      setLoading(false)
    }, 5000)
  }
  return (
    <div>
      <LoadingButton
        size='large'
        variant='contained'
        sx={buttonStyle}
        onClick={handleClick}
        loading={loading}
        loadingPosition='start'
        startIcon={
          <svg
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 hidden sm:inline-block mr-2'
          >
            <path
              d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        }
      >
        {btnLabel}
      </LoadingButton>
    </div>
  )
}
