import { AboutSection } from "@/components/AboutSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { FaqSection } from "@/components/FaqSection";
import { FeaturedServicesSection } from "@/components/FeaturedServicesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FooterSection } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedServicesSection />
      <AboutSection />
      <ServicesSection />
      <CallToActionSection />
      <FeaturesSection />
      <FaqSection />
      <FooterSection />
    </>
  );
}
