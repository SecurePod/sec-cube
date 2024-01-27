'use client'

import React, { useState } from 'react'
import { Tabs, TabList, Tab } from 'react-tabs'
import './style.css'

export interface TabData {
  name: React.ReactNode // fontを利用する可能性があるため
  content: React.ReactNode
}

interface PanelsProps {
  tabsData: TabData[]
}

const Panels: React.FC<PanelsProps> = ({ tabsData }) => {
  const [mainTab, setMainTab] = useState(0)

  return (
    <div className='right-frame-wrap'>
      <div className='right-frame'>
        <Tabs selectedIndex={mainTab} onSelect={(index) => setMainTab(index)}>
          <TabList>
            {tabsData.map((tab, index) => (
              <Tab key={index}>{tab.name}</Tab>
            ))}
          </TabList>
          {tabsData.map((tab, index) => (
            <div key={index} style={{ display: mainTab === index ? 'block' : 'none' }}>
              {tab.content}
            </div>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default Panels
