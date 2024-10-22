"use client";

import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMediaQuery } from "@/lib/media-query";

export default function ResponsiveDialog() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const Trigger = () => {
    return <Button>Trigger</Button>;
  };
  const Title = () => {
    return <h1>Title</h1>;
  };
  const Description = () => {
    return (
      <p>This is a responsive component that renders a Drawer or a Dialog</p>
    );
  };
  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger>
          <Trigger />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <Title />
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <Description />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    );
  } else {
    return (
      <Drawer>
        <DrawerTrigger>
          <Trigger />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <Title />
            </DrawerTitle>
            <DrawerDescription>
              <Description />
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    );
  }
}
