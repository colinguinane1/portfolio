import ClientMDXContent from "../MDXClient";
import type { Metadata } from "next";
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
  // Dynamically import the MDX file based on the slug

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex justify-center items-center flex-col gap-6">
        <article className="prose lg:prose-xl md:prose-lg sm:prose sm:prose-sm w-full">
          <div className="pb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black capitalize leading-tight">
              {post.metadata.title}
            </h1>
          </div>
          <div className="pb-8">
            <p className="font-semibold text-sm sm:text-base md:text-lg">
              <span className="pr-1">{post.metadata.publishDate}</span>
              {post.metadata.category}
            </p>
          </div>
          <ClientMDXContent slug={slug} />
        </article>
      </div>
    </div>
  );
}
