'use client'

import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => {
      return (
        <p className='font-bold text-lg mb-6 text-primary-vivid border-b-2 border-primary-vivid py-2 flex items-center'>
          <svg
            className='w-6 h-6 inline-block mr-2'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          {props.children}
        </p>
      )
    },
    h3: (props) => {
      return <h3 className='mt-8 text-xl font-bold' {...props} />
    },
    code: ({ children, ...props }) => {
      if (typeof children === 'string') {
        return (
          <code className='bg-gray-100 p-1 rounded text-red-600' {...props}>
            {children}
          </code>
        )
      } else {
        return (
          <code className='p-4 m-2' {...props}>
            {children}
          </code>
        )
      }
    },
    ...components,
  }
}
