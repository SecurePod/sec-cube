'use client'
import { useMDXComponents } from '@/libs/mdx/mdx-component'
import Guide from './guide.mdx'
import Layout from '@/app/(lab)/[tag]/[...id]/lab-layout'
import dynamic from 'next/dynamic'
import Accordion from '@/components/lab/accordion/accordion'
import { ContentProps } from '../types'
import { ContainerInformation } from '@/libs/docker/api'

const Term = dynamic(() => import('@/components/lab/term'), {
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

const sshBrute: React.FC<ContentProps> = ({ data }) => {
  console.log(data)
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
          ],
        }}
      />
    </>
  )
}

export default sshBrute
