import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <Testimonials />
      <FaqSection />
      <ContactSection />
    </>
  );
}
