import FadeInSection from "./FadeInView";
import { Post } from "@/lib/get-posts";
import { Link } from "next-view-transitions";
import Image from "next/image";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <FadeInSection>
      <Link key={post.slug} href={`/posts/${post.slug}`}>
        <div className="bg-transparent p-0 border-none shadow-none justify-between w-full flex items-center flex-row-reverse">
          <div className="">
            <Image
              src={post.metadata.image ? post.metadata.image : "/gradient.jpg"}
              width={800}
              height={450}
              alt="Blog Post Image"
              className=" rounded-lg object-cover max-w-20 transition-all group-hover:scale-[1.01]"
              style={{
                objectFit: "cover",
                aspectRatio: "2/2",
              }}
            />
          </div>
          <div className="w-full">
            <div>
              <div className="flex items-center text-foreground justify-between">
                {post.metadata.publishDate}
              </div>{" "}
              <div className="text-lg font-bold text-primary hover:underline">
                {post.metadata.title}
              </div>
            </div>{" "}
          </div>
        </div>
      </Link>
    </FadeInSection>
  );
}
