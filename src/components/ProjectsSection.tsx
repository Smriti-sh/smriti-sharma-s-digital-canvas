import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, Layout, Database } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

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
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website featuring dark/light theme toggle, parallax scrolling effects, and smooth animations. Built with a focus on clean design and user experience.",
    icon: Layout,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    featured: true,
    demoLink: "https://my-portfolio-2026-eight.vercel.app/",
    githubLink: "https://github.com/Smriti-sh/smriti-sharma-s-digital-canvas",
  },
  {
    title: "MERN Stack Project: Video Calling Realtime Chat App & Social App",
    description:
      "A complete full-stack application demonstrating proficiency in MongoDB, Express, React, and Node.js. Features user authentication, CRUD operations, and responsive design.",
    icon: Layout,
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    featured: false,
  },
];

const ProjectsSection = () => {
  const parallax = useParallax(0.12);

  return (
    <section id="projects" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Parallax background shapes */}
      <div 
        className="absolute -top-10 left-1/4 w-56 h-56 bg-primary/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallax}px)` }}
      />
      <div 
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${-parallax * 0.6}px)` }}
      />
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

                  <div className="p-4 pt-0 border-t border-border mt-2">
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex-1 text-xs" 
                        disabled={!project.githubLink}
                        asChild={!!project.githubLink}
                      >
                        {project.githubLink ? (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3.5 h-3.5 mr-1.5" />
                            Code
                          </a>
                        ) : (
                          <>
                            <Github className="w-3.5 h-3.5 mr-1.5" />
                            Code
                          </>
                        )}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex-1 text-xs" 
                        disabled={!project.demoLink}
                        asChild={!!project.demoLink}
                      >
                        {project.demoLink ? (
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                            Demo
                          </a>
                        ) : (
                          <>
                            <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                            Demo
                          </>
                        )}
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
