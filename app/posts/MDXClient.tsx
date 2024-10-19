"use client";

import dynamic from "next/dynamic";

type ClientMDXContentProps = {
  slug: string;
};

export default function ClientMDXContent({ slug }: ClientMDXContentProps) {
  // Correctly use the slug string in the dynamic import
  const MDXContent = dynamic(() => import(`@/content/blogs/${slug}.mdx`));
  return <MDXContent />;
}
