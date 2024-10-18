import type { Metadata } from "next";
import dynamic from "next/dynamic";
import fs from "node:fs";
import path from "node:path";
import React from "react";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params);
  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

async function getPost({ slug }: { slug: string }) {
  try {
    const mdxPath = path.join("content", "blogs", `${slug}.mdx`);
    if (!fs.existsSync(mdxPath)) {
      throw new Error(`MDX file for slug ${slug} does not exist`);
    }

    const { metadata } = await import(`@/content/blogs/${slug}.mdx`);

    return {
      slug,
      metadata,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(`Unable to fetch the post for slug: ${slug}`);
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content", "blogs"));
  const params = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await getPost(params);
  const MDXContent = dynamic(() => import(`@/content/blogs/${slug}.mdx`));

  return (
    <div className="max-w-3xl z-10 w-full items-center justify-between">
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <article className="prose prose-lg md:prose-lg lg:prose-lg mx-auto min-w-full">
          <div className="pb-8">
            <p className="font-semibold text-lg">
              <span className=" pr-1">{post.metadata.publishDate}</span>{" "}
              {post.metadata.category}
            </p>
          </div>
          <div className="pb-10">
            <h1 className="text-5xl sm:text-6xl font-black capitalize leading-12">
              {post.metadata.title}
            </h1>
          </div>
          <MDXContent />
        </article>
      </div>
    </div>
  );
}
