'use client'

import Layout from '@/app/(lab)/[tag]/[...id]/lab-layout'
import dynamic from 'next/dynamic'
import Iframe from '@/components/lab/iframe'
import { ContentProps } from '../types'
import { ContainerInformation } from '@/libs/docker/api'
import { useMDXComponents } from '@/libs/mdx/mdx-component'
import Guide from './guide.mdx'
import Accordion from '@/components/lab/accordion/accordion'

const Term = dynamic(() => import('@/components/lab/term'), {
  ssr: false,
})

const Monaco = dynamic(() => import('@/components/lab/monaco'), {
  ssr: false,
})

interface GuideDataProps {
  attackerIp: string
  targetIp: string
}

const GuideData: React.FC<ContainerInformation> = (data: ContainerInformation) => {
  const props: GuideDataProps = {
    attackerIp: data[0].containerIp,
    targetIp: data[1].containerIp,
  }
  const components = useMDXComponents({ Guide })
  return (
    <>
      <Guide components={components} {...props} />
      <Accordion title='1. ヒント'>ヒント</Accordion>
    </>
  )
}

const Httpd: React.FC<ContentProps> = ({ data }) => {
  return (
    <>
      <Layout
        data={{
          guideData: <GuideData {...data} />,
          tabsData: [
            {
              name: 'Terminal',
              content: (
                <>
                  <Term id={data[0].id} />
                </>
              ),
            },
            {
              name: 'Editor',
              content: (
                <>
                  <Monaco />
                </>
              ),
            },
            {
              name: 'Iframe',
              content: (
                <>
                  <Iframe port={data[0].hostPort[0]} />
                </>
              ),
            },
          ],
        }}
      />
    </>
  )
}

export default Httpd
