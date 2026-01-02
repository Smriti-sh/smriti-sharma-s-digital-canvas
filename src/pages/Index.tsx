import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Smriti Sharma | Web Developer & AI/ML Learner</title>
        <meta
          name="description"
          content="Portfolio of Smriti Sharma - A passionate Web Developer and AI/ML learner from Udaipur, Rajasthan. Experienced in MEAN/MERN Stack, OpenAI integration, and building meaningful web experiences."
        />
        <meta
          name="keywords"
          content="Smriti Sharma, Web Developer, MEAN Stack, MERN Stack, AI/ML, React, Node.js, Portfolio"
        />
        <meta property="og:title" content="Smriti Sharma | Web Developer & AI/ML Learner" />
        <meta
          property="og:description"
          content="Portfolio of Smriti Sharma - A passionate Web Developer and AI/ML learner building meaningful web experiences."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smriti Sharma | Web Developer & AI/ML Learner" />
        <meta
          name="twitter:description"
          content="Portfolio of Smriti Sharma - A passionate Web Developer and AI/ML learner building meaningful web experiences."
        />
        <link rel="canonical" href="https://smritisharma.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
