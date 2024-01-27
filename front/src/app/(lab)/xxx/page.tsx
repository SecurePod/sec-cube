// 'use client'

// import ConfettiExplosion from 'react-confetti-explosion'
// import React from 'react'

// export default function Page() {
//   const [isExploding, setIsExploding] = React.useState(false)
//   return (
//     <>
//       <button onClick={() => setIsExploding(true)}>explode</button>
//       {isExploding && <ConfettiExplosion />}
//     </>
//   )
// }

'use client'

import { ClearModal } from '@/components/common/modal'
import { useModal } from '@/hooks/useModal'
import { Button } from '@mui/material'

export default function Page() {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <>
      <Button onClick={openModal}>open</Button>
      <ClearModal link='/' isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
