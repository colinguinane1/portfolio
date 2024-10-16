import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/FadeInView";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <FadeInSection>
      <section id="contact" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-4">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out!
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </motion.div>
      </section>
    </FadeInSection>
  );
}
