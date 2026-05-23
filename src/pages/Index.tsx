import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SolutionSection } from "@/components/SolutionSection";
// import { OpportunitiesSection } from "@/components/OpportunitiesSection";
import { PlansSection } from "@/components/PlansSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SolutionSection />
        {/* <OpportunitiesSection /> */}
        <PlansSection />
        <ShowcaseSection />
        <StatsSection />
        <AboutSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
