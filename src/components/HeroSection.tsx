import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-soft animation-delay-500" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-in-up animation-delay-100">
            Hi, I'm{" "}
            <span className="text-gradient">Smriti Sharma</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-4 animate-fade-in-up animation-delay-200">
            Web Developer & AI/ML Learner
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
            Passionate about building meaningful web experiences and exploring the fascinating world of artificial intelligence. Based in Udaipur, Rajasthan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-500">
            <a
              href="https://www.linkedin.com/in/smriti-sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Smriti-sh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:smritisapr2001@gmail.com"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
