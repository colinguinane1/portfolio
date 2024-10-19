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
const nextConfig = { reactStrictMode: true };
 
export default withMDX(nextConfig);