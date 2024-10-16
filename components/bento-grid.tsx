import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import FadeInSection from "./FadeInView";
import { ExternalLink, Github, Link2Off } from "lucide-react";

export default function BentoGrid() {
  return (
    <FadeInSection>
      <div className="grid grid-cols-4 mb-12 gap-4">
        <Card className="col-span-3">
          <CardContent>Hi</CardContent>
        </Card>
        <Card className="grid place-content-center h-full w-full">
          <CardContent className="flex items-center gap-1 justify-center">
            <Github size={15} />
          </CardContent>
        </Card>
        <Card>
          <CardContent>Hi</CardContent>
        </Card>
        <Card className="col-span-3 flex items-center justify-center">
          <CardContent className="flex items-center justify-center gap-2">
            Check out my latest project <ExternalLink />
          </CardContent>
        </Card>
      </div>
    </FadeInSection>
  );
}
