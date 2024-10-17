import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInView";
import Link from "next/link";

export default function Hero() {
  return (
    <FadeInSection>
      <section id="about" className="mb-10">
        <div className="flex  items-center  w-full gap-6 py-4">
          {" "}
          <Image
            className="rounded-full border  mb-6 w-32 h-32 border-foreground"
            width={100}
            height={100}
            alt="pfp"
            src="/portriat2.jpeg"
          />{" "}
          <div className="flex flex-col items-start">
            <motion.h1
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Colin Guinane
            </motion.h1>
            <motion.p
              className="text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Full Stack Developer
            </motion.p>
          </div>
        </div>

        <motion.p
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          I’m a web developer located in{" "}
          <Link
            href="https://maps.app.goo.gl/KUE9144oAbA9mVqr7"
            target="_blank"
            className="font-extrabold underline underline-offset-4"
          >
            Edmonton, AB
          </Link>{" "}
          experienced in building applications with Next.js and React. I focus
          on clean code and solving problems through development while staying
          up-to-date with new technologies.
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        ></motion.div>
      </section>
    </FadeInSection>
  );
}
