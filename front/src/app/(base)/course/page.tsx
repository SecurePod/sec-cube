'use client'

import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Layout from '@/app/(base)/home-layout'
import CardAccord from '@/components/lab/accordion/card-accord'
import { AttackData, basicData, defenseData } from './data'
import Image from 'next/image'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Layout>
      <Box maxWidth='70%' margin='auto'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              textColor='secondary'
              indicatorColor='secondary'
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab
                sx={{
                  width: 'calc(100% / 3)',
                  ':hover': {
                    color: '#2696F0',
                  },
                }}
                disableRipple
                label={
                  <Box className='block w-full p-4 text-primary-vivid rounded-t-lg  active font-bold md:text-lg'>
                    <Image
                      alt=''
                      className='w-10 h-auto md:mr-2 inline-block'
                      height='40'
                      src='/img/study.png'
                      width='40'
                    />
                    <Box component='span' className='block mt-2 md:inline md:mt-0'>
                      基礎型
                    </Box>
                    <Box component='span' className='hidden md:block mt-3 text-xs font-normal'>
                      基礎的な学習を行って学ぶ
                    </Box>
                  </Box>
                }
                {...a11yProps(0)}
              />

              <Tab
                sx={{
                  width: 'calc(100% / 3)',
                  ':hover': {
                    color: '#2696F0',
                  },
                }}
                disableRipple
                label={
                  <Box className='block w-full p-4 text-primary-vivid rounded-t-lg  active font-bold md:text-lg'>
                    <Image
                      alt=''
                      className='w-10 h-auto md:mr-2 inline-block'
                      height='40'
                      src='/img/fire.png'
                      width='40'
                    />
                    <Box component='span' className='block mt-2 md:inline md:mt-0'>
                      実践型
                    </Box>
                    <Box component='span' className='hidden md:block mt-3 text-xs font-normal'>
                      実践的な攻撃を行って学ぶ
                    </Box>
                  </Box>
                }
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  width: 'calc(100% / 3)',
                  ':hover': {
                    color: '#2696F0',
                  },
                }}
                disableRipple
                label={
                  <Box className='block w-full p-4 rounded-t-lg font-bold md:text-lg  duration-300'>
                    <Image
                      alt=''
                      className='w-10 h-auto md:mr-2 inline-block'
                      height='40'
                      src='/img/shield.png'
                      width='40'
                    />
                    <Box component='span' className='block mt-2 md:inline md:mt-0'>
                      防御編
                    </Box>
                    <Box component='span' className='hidden md:block mt-3 text-xs font-normal'>
                      セキュアコーディングを通して学ぶ
                    </Box>
                  </Box>
                }
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {basicData.map((course, index) => (
              <CardAccord
                key={index}
                img={course.img}
                num={course.num}
                title={course.title}
                tag={course.tag}
                desc={course.desc}
              >
                {course.children}
              </CardAccord>
            ))}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {AttackData.map((course, index) => (
              <CardAccord
                key={index}
                img={course.img}
                num={course.num}
                title={course.title}
                tag={course.tag}
                desc={course.desc}
              >
                {course.children}
              </CardAccord>
            ))}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {defenseData.map((course, index) => (
              <CardAccord
                key={index}
                img={course.img}
                num={course.num}
                title={course.title}
                tag={course.tag}
                desc={course.desc}
              >
                {course.children}
              </CardAccord>
            ))}
          </CustomTabPanel>
        </Box>
      </Box>
    </Layout>
  )
}
