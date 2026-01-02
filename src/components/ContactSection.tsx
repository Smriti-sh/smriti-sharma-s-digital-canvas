import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "smritisapr2001@gmail.com",
    href: "mailto:smritisapr2001@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7742519484",
    href: "tel:+917742519484",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Udaipur, Rajasthan, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Smriti-sh",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3 tracking-wider uppercase">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card key={item.label} variant="default" className="hover:border-primary/20 transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background border border-border hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <Card variant="elevated" className="bg-accent-gradient text-primary-foreground overflow-hidden">
              <CardContent className="p-8 flex flex-col justify-center h-full relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4">
                    Ready to Start a Project?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Whether you have a project in mind or just want to say hello, I'd love to hear from you!
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a href="mailto:smritisapr2001@gmail.com">
                      <Send className="w-4 h-4 mr-2" />
                      Send a Message
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
