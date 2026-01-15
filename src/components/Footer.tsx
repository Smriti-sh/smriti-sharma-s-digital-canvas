import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Closing Statement */}
          <p className="text-lg md:text-xl font-display text-foreground mb-8">
            "I'm always learning, building, and growing —{" "}
            <span className="text-gradient font-semibold">
              let's create something meaningful together.
            </span>
            "
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <span>© {currentYear} Smriti Sharma. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
