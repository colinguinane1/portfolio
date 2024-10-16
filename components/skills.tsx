import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInView";

export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "GraphQL",
    "REST APIs",
    "Git",
    "AWS",
    "Docker",
  ];

  return (
    <FadeInSection>
      <section id="skills" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Badge variant="secondary">{skill}</Badge>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </FadeInSection>
  );
}
