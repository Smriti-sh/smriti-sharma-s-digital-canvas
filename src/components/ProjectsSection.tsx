import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, Layout, Database } from "lucide-react";

const projects = [
  {
    title: "AI Question Generator",
    description:
      "An intelligent question generation system built using OpenAI APIs and Weaviate vector database. Enables automated, context-aware question creation for educational platforms.",
    icon: Sparkles,
    technologies: ["OpenAI", "Weaviate", "Node.js", "Express", "MEAN Stack"],
    featured: true,
  },
  {
    title: "MERN Full-Stack App",
    description:
      "A complete full-stack application demonstrating proficiency in MongoDB, Express, React, and Node.js. Features user authentication, CRUD operations, and responsive design.",
    icon: Layout,
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    featured: false,
  },
  {
    title: "RESTful API Service",
    description:
      "A robust API service built with Node.js and Express, featuring proper error handling, validation, and integration with NoSQL databases for scalable data management.",
    icon: Database,
    technologies: ["Node.js", "Express", "MongoDB", "REST API", "JWT"],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3 tracking-wider uppercase">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Things I've Built
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills in web development and AI integration.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                variant="elevated"
                className="group animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {/* Project Icon Header */}
                  <div className="p-6 pb-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>

                    {project.featured && (
                      <Badge variant="accent" className="mb-3">
                        Featured
                      </Badge>
                    )}

                    <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-4 pt-0 border-t border-border mt-2">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="flex-1 text-xs" disabled>
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                        Code
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1 text-xs" disabled>
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects Note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            More projects coming soon as I continue to build and learn!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
