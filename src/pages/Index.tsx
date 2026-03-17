import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import SafetySection from "@/components/SafetySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <IndustriesSection />
      <SafetySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
