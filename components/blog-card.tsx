import FadeInSection from "./FadeInView";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Post } from "@/lib/get-posts";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <FadeInSection>
      <Link
        key={post.slug}
        className="flex flex-col"
        href={`/posts/${post.slug}`}
      >
        <Card>
          <CardHeader>
            {" "}
            <div className="text-2xl font-bold hover:underline">
              {post.metadata.title}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              {post.metadata.publishDate}
              <Button variant={"outline"}>
                Read <ChevronRight className="ml-1" size={15} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </FadeInSection>
  );
}
