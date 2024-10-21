import FadeInSection from "./FadeInView";
import { CardDescription } from "./bento-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Component } from "@/lib/get-components";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";

interface ComponentCardProps {
  component: Component;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  return (
    <FadeInSection>
      <Link
        key={component.slug}
        className="flex flex-col"
        href={`/components/${component.slug}`}
      >
        <Card>
          <CardHeader>
            <div className="text-2xl font-bold hover:underline">
              {component.metadata.title}
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <div className=" pb-4">{component.metadata.description}</div>
            </CardDescription>{" "}
            <Button variant={"outline"}>
              View <ChevronRight className="ml-1" size={15} />
            </Button>
          </CardContent>
        </Card>
      </Link>
    </FadeInSection>
  );
}
