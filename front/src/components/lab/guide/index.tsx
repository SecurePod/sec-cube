import React from 'react'

export default function Guide({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className='h-full'
        style={{
          position: 'relative',
          userSelect: 'auto',
          width: '50%',
          height: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          flexShrink: 0,
          zIndex: 100,
        }}
      >
        <div className='flex-1 flex flex-col h-full'>
          <div className='relative flex-1 min-h-0' style={{ width: 'calc(100% - 5px)' }}>
            <div className='bg-white relative h-full flex flex-col'></div>
            <article className='manual bg-white overflow-y-auto flex-1 absolute top-0 left-0 right-0 bottom-0 z-[9999]'>
              <div className='w-full h-full'>
                <div className='px-6 pb-4 overflow-hidden bg-white relative rounded-md h-full overflow-y-auto preview-scroll-box pt-2'>
                  <div className='absolute top-2 right-2'>
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
                  </div>
                  <div className=''>{children}</div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div>
          <div
            className='bg-gray-200 z-[999]'
            style={{
              position: 'absolute',
              userSelect: 'none',
              width: '10px',
              height: '100%',
              top: '0px',
              cursor: 'col-resize',
              right: '-5px',
            }}
          ></div>
        </div>
      </div>
    </>
  )
}
