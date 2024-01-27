'use client'

import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'
import Link from 'next/link'

export interface CardProps {
  img: string
  title: string
  link: string
}

const CardWrapper = styled(Card)({
  width: '170px',
  transition: 'box-shadow 0.3s', // smooth transition for the shadow
  ':hover': {
    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)', // Add your desired shadow
  },
  margin: '10px',
})

export default function CourseCard({ img, title, link }: CardProps) {
  return (
    <>
      <CardWrapper>
        <Link href={link}>
          <CardMedia sx={{ height: 100 }} image={img} />
          <CardContent>
            <Typography color='primary.main' component='div'>
              {title}
            </Typography>
          </CardContent>
        </Link>
      </CardWrapper>
    </>
  )
}
