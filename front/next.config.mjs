import nextMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkBreaks from 'remark-breaks'

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkBreaks],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: false }

export default withMDX(nextConfig)
