import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Mohanlal Sukhadia University (MLSU)",
    period: "2024 - Present",
    status: "Pursuing",
    description:
      "Currently advancing my knowledge in computer science, focusing on advanced software development, AI/ML concepts, and system design.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mohanlal Sukhadia University (MLSU)",
    period: "2021 - 2024",
    status: "Completed",
    cgpa: "8.16",
    description:
      "Built a strong foundation in programming, web development, databases, and software engineering principles.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3 tracking-wider uppercase">
              Education
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Academic Journey
            </h2>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {education.map((item, index) => (
              <Card
                key={item.degree}
                variant="elevated"
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-display font-bold text-foreground">
                            {item.degree}
                          </h3>
                          <p className="text-primary font-medium">
                            {item.institution}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant={item.status === "Pursuing" ? "accent" : "secondary"}
                          >
                            {item.status}
                          </Badge>
                          {item.cgpa && (
                            <Badge variant="skill" className="flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              CGPA: {item.cgpa}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>

                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
