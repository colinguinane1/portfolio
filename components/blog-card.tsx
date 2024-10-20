import FadeInSection from "./FadeInView";
import { CardDescription } from "./bento-grid";
import { Badge } from "./ui/badge";
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
            <CardDescription>
              <div className="flex items-center  pb-4 justify-between">
                {post.metadata.publishDate}
              </div>
              <div className=" pb-4">{post.metadata.description}</div>
              <Badge
                variant="outline"
                className="border-gray-500 mb-4 text-gray-500 dark:border-gray-400 dark:text-gray-400"
              >
                {post.metadata.category}
              </Badge>
            </CardDescription>{" "}
            <Button variant={"outline"}>
              Read <ChevronRight className="ml-1" size={15} />
            </Button>
          </CardContent>
        </Card>
      </Link>
    </FadeInSection>
  );
}
