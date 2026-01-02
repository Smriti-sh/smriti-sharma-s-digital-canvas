import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experience = {
  title: "Web Developer Intern",
  company: "Secure Learning",
  period: "2024",
  location: "Remote",
  highlights: [
    "Built and integrated an AI Question Generator using OpenAI APIs",
    "Implemented a vector database (Weaviate) for AI-driven content retrieval",
    "Developed RESTful APIs using Node.js and Express framework",
    "Performed integration testing across MEAN Stack architecture components",
    "Improved code quality, stability, and overall system efficiency",
  ],
  technologies: ["OpenAI", "Weaviate", "Node.js", "Express", "MEAN Stack", "REST APIs"],
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3 tracking-wider uppercase">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Where I've Made an Impact
            </h2>
          </div>

          {/* Experience Card */}
          <Card variant="elevated" className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent-gradient flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-medium text-primary">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {experience.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
