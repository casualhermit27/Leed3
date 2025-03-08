import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import AnimatedBackground from "@/components/animated-background";
import AnimatedGradientBackground from "@/components/animated-gradient-background";
import BentoGrid from "@/components/bento-grid";
import BentoHeroLead from "@/components/bento-hero-lead";
import LeadFormSection from "@/components/lead-form-section";
import DesignSamplesSection from "@/components/design-samples-section";
import HowItWorks from "@/components/how-it-works";
import { createClient } from "../../supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <AnimatedGradientBackground />
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section - Lead Generation Focus */}
      <BentoHeroLead />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Features Section - Bento Grid */}
      <BentoGrid />

      {/* Lead Form Section - Multi-step form */}
      <LeadFormSection />

      {/* Design Samples Section */}
      <DesignSamplesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  );
}
