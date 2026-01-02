import { Code2, Brain, Rocket, Heart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building with MEAN/MERN stacks",
  },
  {
    icon: Brain,
    title: "AI/ML Exploration",
    description: "Learning machine learning fundamentals",
  },
  {
    icon: Rocket,
    title: "Growth Mindset",
    description: "Always learning and improving",
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "Love what I do every day",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3 tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Curious Developer, Lifelong Learner
            </h2>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Web Developer</span> and{" "}
                <span className="text-foreground font-medium">AI/ML enthusiast</span> from Udaipur, Rajasthan. 
                After completing my BCA with a strong academic record (CGPA 8.16), I'm now pursuing my MCA 
                to deepen my expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At <span className="text-foreground font-medium">Secure Learning</span>, I had the opportunity 
                to work on exciting projects — from building an AI Question Generator using OpenAI to implementing 
                vector databases and developing RESTful APIs. These experiences taught me the value of writing 
                clean, efficient code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What drives me? A genuine curiosity for technology and a commitment to continuous growth. 
                I believe in building solutions that matter and learning something new every single day.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-secondary/50 border border-border hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
