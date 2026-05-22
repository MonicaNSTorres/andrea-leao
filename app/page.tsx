import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HelpSection } from "@/components/HelpSection";
import { AboutSection } from "@/components/AboutSection";
import { TherapySection } from "@/components/TherapySection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCTA } from "@/components/FinalCTA";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { LocationSection } from "@/components/LocationSection"; 
import { BenefitsSection } from "@/components/BenefitsSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f2f1ec] text-[#23414a]">
      <SEOJsonLd />

      <Header />

      <Hero />

      <BenefitsSection />

      <HelpSection />

      <AboutSection />

      <TherapySection />

      <FaqSection />

      <LocationSection />

      <FinalCTA />

      <WhatsAppFloat />
    </main>
  );
}