import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
 
/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "aurora-x",
  transformers: [
    transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
    })
  ]
};
 
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
 
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true ,  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
  
      },
      {
        protocol: 'https',
        hostname: 'external-content.duckduckgo.com',
      },
      {
protocol: 'https',
hostname: 'gktuazxnjcwahdrwuchb.supabase.co'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      }
    ],
  },
};
 
export default withMDX(nextConfig);