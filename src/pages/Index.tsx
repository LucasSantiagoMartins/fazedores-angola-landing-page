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
        {/* Sticky Hero/Carousel — fica por trás enquanto as próximas secções sobem */}
        <div className="relative h-screen">
          <div className="sticky top-0 h-screen w-full overflow-hidden gpu z-0">
            <Hero />
          </div>
        </div>

        {/* Conteúdo subsequente sobe e cobre o Hero */}
        <div className="relative z-10 bg-background gpu">
          <SolutionSection />
          <GrowthSection />
          <PlansSection />
          <StatsSection />
          <AboutSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
