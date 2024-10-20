// app/page.tsx (Server Component - Page)

import RecentPosts from "./recent-posts";
import fs from "node:fs";
import path from "node:path";

// Import your RecentPosts component

type Post = {
  slug: string;
  metadata: {
    title: string;
    publishDate: string;
  };
};

// Use `getStaticProps` to fetch the posts
export async function getStaticProps() {
  const dir = path.join(process.cwd(), "content", "blogs");
  const files = fs.readdirSync(dir);

  const posts = files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { metadata } = require(`@/content/blogs/${filename}`);
      return {
        slug: filename.replace(".mdx", ""),
        metadata: metadata || { title: "Untitled", publishDate: "1970-01-01" },
      };
    });

  // Sort posts by publishDate in descending order
  posts.sort(
    (a, b) =>
      new Date(b.metadata.publishDate).getTime() -
      new Date(a.metadata.publishDate).getTime()
  );

  return {
    props: {
      posts,
    },
  };
}

// Page component that receives `posts` from `getStaticProps`
export default function HomePage({ posts }: { posts: Post[] }) {
  return <RecentPosts posts={posts} />; // Pass the posts to the RecentPosts component
}
