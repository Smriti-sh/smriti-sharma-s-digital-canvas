import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "JavaScript", category: "core" },
  { name: "MEAN Stack", category: "core" },
  { name: "MERN Stack", category: "core" },
  { name: "Python", category: "core" },
  { name: "Node.js", category: "core" },
  { name: "Express.js", category: "core" },
  { name: "React", category: "core" },
  { name: "DSA", category: "core" },
  { name: "AI/ML Fundamentals", category: "learning" },
  { name: "NoSQL Databases", category: "database" },
  { name: "Vector Databases", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "REST APIs", category: "tools" },
  { name: "Analytical Thinking", category: "soft" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3 tracking-wider uppercase">
              Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From full-stack web development to exploring AI/ML, here are the tools and technologies I use to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={skill.name}
                variant="skill"
                className="text-sm py-2 px-4 cursor-default animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill.name}
              </Badge>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-display font-semibold text-foreground mb-6">
              Languages I Speak
            </h3>
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-background border border-border">
                <span className="text-2xl">🇬🇧</span>
                <div className="text-left">
                  <p className="font-medium text-foreground">English</p>
                  <p className="text-xs text-muted-foreground">Bilingual Proficiency</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-background border border-border">
                <span className="text-2xl">🇮🇳</span>
                <div className="text-left">
                  <p className="font-medium text-foreground">Hindi</p>
                  <p className="text-xs text-muted-foreground">Advanced (C2)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
