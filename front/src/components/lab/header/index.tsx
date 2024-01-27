import React from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header id={styles.header}>
        <div className={styles.logo_wrap}>
          <Link href='/'>
            <Image className={styles.logo} src='/next.svg' alt='' width={100} height={50} />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
