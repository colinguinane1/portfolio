"use client";

import dynamic from "next/dynamic";

type ClientMDXContentProps = {
  slug: string;
};

export default function UIClientMDXContent({ slug }: ClientMDXContentProps) {
  // Correctly use the slug string in the dynamic import
  const MDXContent = dynamic(() => import(`@/content/ui/${slug}.mdx`));
  return <MDXContent />;
}
