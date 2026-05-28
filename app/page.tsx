import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PipelineAnimation from "@/components/PipelineAnimation";
import SmoothScroll from "@/components/SmoothScroll";
import HeroSection from "@/sections/HeroSection";
import CompanySection from "@/sections/CompanySection";
import ProductsSection from "@/sections/ProductsSection";
import IndustriesSection from "@/sections/IndustriesSection";
import CertificationsSection from "@/sections/CertificationsSection";
import WhyChooseSection from "@/sections/WhyChooseSection";
import DirectorSection from "@/sections/DirectorSection";
import ContactSection from "@/sections/ContactSection";
import { organizationSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="relative min-h-screen overflow-hidden bg-industrial-graphite text-industrial-white">
        <PipelineAnimation />
        <Navbar />
        <HeroSection />
        <CompanySection />
        <ProductsSection />
        <IndustriesSection />
        <CertificationsSection />
        <WhyChooseSection />
        <DirectorSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
