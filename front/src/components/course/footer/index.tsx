'use client'

import React from 'react'
import Link from 'next/link'
import { EnvStartButton } from '../envButton'

// import { ContainerIds } from '@/libs/docker/api'

const Footer: React.FC = () => {
  // const truncateIds = (data: ContainerIds) => {
  //   return data.map((item) => item.id.substring(0, 10)).join('/')
  // }
  return (
    <>
      <div
        className='z-[9999] bg-white react:bg-base-gray fixed react:border-t react:border-gray-800/60 bottom-0 left-0 right-0'
        style={{
          boxShadow: ' rgba(0, 0, 0, 0.06) 0px -2px 4px, rgba(91, 91, 91, 0.11) 0px -4px 6px',
        }}
      >
        <div className='py-4 grid grid-cols-3'>
          <div className='px-3 md:px-6 inline-flex items-center col-span-1 md:col-span-1'>
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
          </div>
          <div className='px-3 md:px-6 inline-flex items-center justify-center col-span-1 md:col-span-1'>
            <EnvStartButton />
            {/* <LoadButtonPromise>
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
              <span className='hidden sm:block'>問題に挑戦！</span>
              <span className='inline sm:hidden'>挑戦！</span>
            </LoadButtonPromise> */}
          </div>
          {/* <div className='px-3 md:px-6 inline-flex items-center justify-end'>
            <span data-state='closed'>
              <button
                disabled
                className='inline-flex items-center font-semibold text-center rounded-full outline-none transition duration-100 disabled:opacity-50 transition ease-in transition-all shadow-md hover:shadow-xl border-[#D2D5DA] bg-white border text-[#545F65] text-sm px-[20px] py-[10px] react:bg-transparent react:text-white cursor-not-allowed'
              >
                <svg
                  viewBox='0 0 640 512'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-auto inline-block sm:mr-2 align-middle'
                >
                  <path
                    d='M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z'
                    fill='currentColor'
                  ></path>
                </svg>
                <span className='hidden sm:inline'>AIに質問</span>
              </button>
            </span>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Footer
