import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { OpportunitiesSection } from "@/components/OpportunitiesSection";
import { PlansSection } from "@/components/PlansSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SolutionSection />
        <HowItWorksSection />
        <OpportunitiesSection />
        <PlansSection />
        <ShowcaseSection />
        <StatsSection />
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
