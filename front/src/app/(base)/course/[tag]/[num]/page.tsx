import CourseLayout from './course-layout'
import React from 'react'
import { Metadata } from 'next'
import { Box } from '@mui/material'

interface Props {
  params: {
    tag: string
    num: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.tag,
  }
}

const sqli = (
  <>
    <p className='font-bold text-lg mb-6 text-primary-vivid border-b-2 border-primary-vivid py-2 flex items-center'>
      <svg
        className='w-6 h-6 inline-block mr-2'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </svg>
      SQLインジェクションとは
    </p>
    <p>SQLインジェクションとは....</p>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <img
        style={{ margin: '30px' }}
        src='https://www.ipa.go.jp/security/vuln/websecurity/ug65p900000197iq-img/pkin3a0000003apw.png'
        alt=''
      />
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <p>※ 画像はIPA 安全なウェブサイトの作り方 - 1.1 SQLインジェクションより引用</p>
    </Box>

    <br />
    <p>
      このコースではSQLインジェクションの脆弱性を利用し、管理者アカウントにログインすることでSQLインジェクションの脅威などを理解するコースです
    </p>
    <br />

    <p>ここに説明を書く... 予定</p>
    <h3 className='mt-8 text-xl font-bold'>このコースに取り組むために必要な学習コース</h3>
    <br />
    <li>PHP入門編</li>
    <li>SQL入門編</li>
  </>
)

const sshBrute = (
  <>
    <p className='font-bold text-lg mb-6 text-primary-vivid border-b-2 border-primary-vivid py-2 flex items-center'>
      <svg
        className='w-6 h-6 inline-block mr-2'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </svg>
      Hydraとは
    </p>
    <p>
      Hydraは、SSHやFTPなどのサービスや、webアプリのログインフォームに対して総当たり攻撃を行うことができるツールです。
    </p>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <img
        style={{ margin: '30px' }}
        src='https://cdn.cyberpunk.rs/wp-content/uploads/2018/07/hydrathc.jpg'
        alt=''
      />
    </Box>
    <br />
    <p>
      このコースではHydraを使ってrootユーザーのSSHパスワードを解析することで総当り攻撃や辞書型攻撃といった攻撃手法の理解を行います。
    </p>
    <br />
    <p>ここに説明を書く... 予定</p>
    <h3 className='mt-8 text-xl font-bold'>このコースに取り組むために必要な学習コース</h3>
    <br />
    <li>コマンドラインを使ってみよう - 超基礎コマンド編</li>
  </>
)

export default function Page({ params }: Props) {
  return (
    <>
      <CourseLayout>
        {params.tag === 'sqli' && sqli}
        {params.tag === 'sshBrute' && sshBrute}
      </CourseLayout>
    </>
  )
}
