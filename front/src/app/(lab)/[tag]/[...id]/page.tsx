import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { getConInfo } from '@/libs/docker/api'

interface PageProps {
  params: {
    tag: string
    id: string[]
  }
}

// コンポーネントの動的読み込み
const DynamicComponent = (slug: string) => {
  return dynamic(() => import(`@/content/${slug}`))
}

const Page: NextPage<PageProps> = async ({ params }: PageProps) => {
  const Component = DynamicComponent(params.tag)
  const data = await getConInfo(params.id)
  return (
    <div>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Component data={data} />
    </div>
  )
}

export default Page
