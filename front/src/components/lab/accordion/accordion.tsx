'use client'

import React, { useState, useRef, ReactNode } from 'react'
import styles from './accordion.module.scss'
import Chevron from './chevron'

interface AccordionProps {
  title: string
  children: ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false)
  const [height, setHeight] = useState<string>('0px')
  const [rotateClass, setRotateClass] = useState<string>(styles.accordion__icon) // Change here

  const content = useRef<HTMLDivElement>(null)

  function toggleAccordion() {
    setIsActive(!isActive)
    setHeight(isActive ? '0px' : `${content.current?.scrollHeight}px`)
    setRotateClass(isActive ? styles.accordion__icon : `${styles.accordion__icon} ${styles.rotate}`)
  }

  return (
    <div className={styles.accordion__section}>
      <button
        className={`${styles.accordion} ${isActive ? 'active' : ''}`}
        onClick={toggleAccordion}
      >
        <p className={styles.accordion__title}>{title}</p>
        <Chevron className={rotateClass} width={10} fill={'#777'} />
      </button>
      <div ref={content} style={{ maxHeight: height }} className={styles.accordion__content}>
        <div className={styles.accordion__inner}>{children}</div>
      </div>
    </div>
  )
}

export default Accordion
