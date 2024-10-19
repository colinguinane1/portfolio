import FadeInSection from "./FadeInView";
import BlogCard from "./blog-card";
import { Post } from "@/lib/get-posts";

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <FadeInSection>
      <section className="pb-10">
        <h2 className="text-2xl py-4 font-bold">Recent Posts</h2>
        <div className="grid gap-6">
          {posts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
