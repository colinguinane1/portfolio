import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import FadeInSection from "./FadeInView";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      longDescription:
        "This e-commerce platform provides a seamless shopping experience for users. It features a responsive React frontend, a robust Node.js backend, and integrates with Stripe for secure payments. The platform includes user authentication, product catalog management, shopping cart functionality, and order processing.",
      challenges:
        "One of the main challenges was implementing real-time inventory updates to prevent overselling. We solved this using MongoDB change streams and Socket.io for live updates.",
      outcome:
        "The platform has successfully processed over 10,000 orders and maintains a 99.9% uptime.",
      github: "https://github.com/johndoe/ecommerce-platform",
      live: "https://example-ecommerce.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      longDescription:
        "This task management application allows teams to collaborate in real-time. Users can create, assign, and track tasks, set deadlines, and communicate through comments. The app uses React for the frontend, Express for the backend, and PostgreSQL for data storage.",
      challenges:
        "Implementing real-time updates across multiple clients was challenging. We used Socket.io to ensure all connected clients receive instant updates when tasks are modified.",
      outcome:
        "The app has been adopted by several small to medium-sized companies, improving their project management efficiency by up to 30%.",
      github: "https://github.com/johndoe/task-manager",
      live: "https://example-taskmanager.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that provides real-time forecasts and historical data visualization.",
      technologies: ["React", "D3.js", "Node.js", "OpenWeatherMap API"],
      longDescription:
        "This weather dashboard offers users detailed weather information for any location. It includes current conditions, hourly and daily forecasts, and historical weather data visualizations. The app uses React for the UI, D3.js for data visualization, and integrates with the OpenWeatherMap API for weather data.",
      challenges:
        "Creating intuitive and informative data visualizations for complex weather data was a significant challenge. We used D3.js to create custom, interactive charts that display trends clearly.",
      outcome:
        "The dashboard has gained popularity among outdoor enthusiasts and event planners, with over 50,000 monthly active users.",
      github: "https://github.com/johndoe/weather-dashboard",
      live: "https://example-weather.com",
    },
  ];
  return (
    <FadeInSection>
      <section id="projects" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid gap-6   ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FadeInSection>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="bg-card border cursor-pointer hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          {project.description}
                        </CardDescription>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-gray-500 text-gray-500 dark:border-gray-400 dark:text-gray-400"
                            >
                              {tech}
                            </Badge>
                          ))}{" "}
                        </div>{" "}
                        <Button variant={"outline"} className="mt-4">
                          <ArrowUpRight className="mr-1" size={20} />
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] rounded-lg bg-card ">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Project Details:</h4>
                      <p className="mb-2">{project.longDescription}</p>
                      <h4 className="font-semibold mb-2">Challenges:</h4>
                      <p className="mb-2">{project.challenges}</p>
                      <h4 className="font-semibold mb-2">Outcome:</h4>
                      <p className="mb-4">{project.outcome}</p>
                      <div className="flex space-x-4">
                        <Button
                          variant="outline"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => window.open(project.live, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </FadeInSection>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
