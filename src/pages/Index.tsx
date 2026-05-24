import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SolutionSection } from "@/components/SolutionSection";
import { PlansSection } from "@/components/PlansSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
// import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { GrowthSection } from "@/components/GrowthSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SolutionSection />
        <GrowthSection />
        <PlansSection />
        <StatsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
