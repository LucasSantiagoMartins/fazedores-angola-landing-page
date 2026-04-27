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
import { FinalCTASection } from "@/components/FinalCTASection";
import { WaveDivider } from "@/components/WaveDivider";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WaveDivider fromColor="hsl(0 0% 0%)" toColor="hsl(var(--muted))" />
        <SolutionSection />
        <WaveDivider fromColor="hsl(var(--muted))" toColor="hsl(var(--background))" />
        <HowItWorksSection />
        <OpportunitiesSection />
        <WaveDivider fromColor="hsl(var(--background))" toColor="hsl(var(--muted))" />
        <PlansSection />
        <WaveDivider fromColor="hsl(var(--muted))" toColor="hsl(var(--background))" />
        <ShowcaseSection />
        <StatsSection />
        <AboutSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
