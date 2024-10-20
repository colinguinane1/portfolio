"use client";

import FadeInSection from "./FadeInView";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  GitBranch,
  LucideServerCog,
  Server,
  Settings,
} from "lucide-react";

export default function Skills() {
  const iconSize = 15;
  const skills = [
    { label: "JavaScript", icon: <Code size={iconSize} /> },
    { label: "TypeScript", icon: <Code size={iconSize} /> },
    { label: "React", icon: <Settings size={iconSize} /> },
    { label: "Node.js", icon: <Server size={iconSize} /> },
    { label: "Next.js", icon: <Settings size={iconSize} /> },
    { label: "Express", icon: <Server size={iconSize} /> },
    { label: "MongoDB", icon: <Database size={iconSize} /> },
    { label: "SQL", icon: <Database size={iconSize} /> },
    { label: "REST APIs", icon: <LucideServerCog size={iconSize} /> },
    { label: "Git", icon: <GitBranch size={iconSize} /> },
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
              <Badge className="flex items-center gap-2" variant="secondary">
                {skill.icon}

                {skill.label}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </FadeInSection>
  );
}
