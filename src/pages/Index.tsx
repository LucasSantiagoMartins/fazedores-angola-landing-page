import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WalletSection } from "@/components/WalletSection";
import { WalletFeatureCard } from "@/components/WalletFeatureCard";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TransactionsSection } from "@/components/TransactionsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WalletSection />
        <WalletFeatureCard />
        <BenefitsSection />
        <TransactionsSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
