'use client'

import React, { useState, useRef, ReactNode } from 'react'
import styles from './card-accord.module.scss'
import Chevron from './chevron'
import { Card, CardContent, Typography, Box } from '@mui/material'
import Divider from '@mui/material/Divider'
import Link from 'next/link'

export interface CardAccordProps {
  img: string
  num: number
  title: string
  desc: string
  tag: string
  children: ReactNode[]
}

const CardAccord: React.FC<CardAccordProps> = ({
  img,
  num,
  title,
  desc,
  tag,
  children,
}: CardAccordProps) => {
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
    <>
      <div className={styles.accordion__section}>
        <button
          className={`${styles.accordion} ${isActive ? 'active' : ''}`}
          onClick={toggleAccordion}
        >
          <div className={styles.accordion__cover}>
            <Card sx={{ boxShadow: 'none', display: 'flex', alignItems: 'center' }}>
              <Box component='img' sx={{ height: 140 }} src={img} title='green iguana' />
              <CardContent>
                <Typography color='#BDBDBD' gutterBottom fontSize={12} component='div'>
                  全{num}レッスン
                </Typography>
                <Typography
                  fontFamily={
                    '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;'
                  }
                  gutterBottom
                  fontSize={20}
                  color={'#212121'}
                  fontWeight={600}
                  component='div'
                >
                  {title}
                </Typography>
                <Typography
                  fontFamily={
                    '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;'
                  }
                  variant='body2'
                  color='text.secondary'
                >
                  {desc}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <Chevron className={rotateClass} width={10} fill={'#777'} />
        </button>
        <div ref={content} style={{ maxHeight: height }} className={styles.accordion__content}>
          <div className={styles.accordion__inner}>
            {children!.map((child: ReactNode, index: number) => {
              return (
                <>
                  <Link href={`/course/${tag}/${index + 1}`}>
                    <Typography color={'primary.light'} ml={3} p={1} key={index} fontSize={14}>
                      {child}
                    </Typography>
                  </Link>
                  <Divider light />
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CardAccord
