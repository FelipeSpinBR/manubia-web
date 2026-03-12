import { BenefitsSection } from '@/components/benefits-section';
import { FeaturesSection } from '@/components/features-section';
import { FinalCta } from '@/components/final-cta';
import { HeroSection } from '@/components/hero-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { SecuritySection } from '@/components/security-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <SecuritySection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
