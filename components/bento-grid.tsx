import FadeInSection from "./FadeInView";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl bg-card border dark:border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.30)] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-lg font-semibold dark:text-white py-2", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn("text-sm font-normal text-neutral-400 max-w-sm", className)}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          " bg-[rgba(40,40,40,0.30)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

export default function BentoGrid() {
  return (
    <FadeInSection>
      <div className="grid grid-cols-4 mb-12 gap-4">
        <Card className="col-span-3">
          <CardTitle>Edmonton, AB, Canada</CardTitle>
        </Card>
        <Card className="">
          <CardTitle className="flex items-center gap-1 justify-center">
            <Github className="w-10 h-10" />
          </CardTitle>
        </Card>
        <Card>
          <CardTitle>
            <Linkedin className="w-10 h-10" />
          </CardTitle>
        </Card>
        <Card className="col-span-3 flex items-center justify-center">
          <CardDescription className="flex items-center justify-center gap-2">
            Check out my latest project <ExternalLink />
          </CardDescription>
        </Card>
      </div>
    </FadeInSection>
  );
}
