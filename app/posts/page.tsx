import BlogCard from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Next.js Template | Blog",
  };
}

type Post = {
  slug: string;
  metadata: PostMetadata;
};

interface PostMetadata {
  title: string;
  publishDate: string;
  [key: string]: unknown;
}

export async function getAllPosts(): Promise<Post[]> {
  const dir = path.join(process.cwd(), "content", "blogs");
  const files = fs.readdirSync(dir);

  const posts = files
    .filter(
      (filename) => filename.endsWith(".mdx") && !filename.startsWith(".")
    )
    .map((filename) => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { metadata } = require(`@/content/blogs/${filename}`);
        return {
          slug: filename.replace(".mdx", ""),
          metadata: metadata || {
            title: "Untitled",
            publishDate: "1970-01-01",
          },
        };
      } catch (error) {
        console.error(`Error loading metadata for file ${filename}:`, error);
        return {
          slug: filename.replace(".mdx", ""),
          metadata: { title: "Untitled", publishDate: "1970-01-01" },
        };
      }
    });

  // Sort posts by publishDate in descending order
  posts.sort(
    (a, b) =>
      new Date(b.metadata.publishDate).getTime() -
      new Date(a.metadata.publishDate).getTime()
  );

  return posts;
}

export default async function Blogs() {
  const posts = await getAllPosts();

  return (
    <section className="w-screen">
      <div className="flex flex-col gap-8 p-4 max-w-3xl z-10 w-full  justify-between">
        <div>
          <h2 className="text-5xl text-left sm:text-6xl font-black">Blog</h2>
        </div>
        <div className="text-lg">
          <p>I occasionally write about something that interests me.</p>
        </div>

        <div className="w-full">
          <div className="space-y-4">
            {posts.map((post) => (
              <BlogCard post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
