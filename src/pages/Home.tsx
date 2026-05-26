import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import CompanyIntro from '@/components/sections/CompanyIntro';
import NewsCards from '@/components/sections/NewsCards';
import ServiceCards from '@/components/sections/ServiceCards';
import CasesGallery from '@/components/sections/CasesGallery';
import PartnersBanner from '@/components/sections/PartnersBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-dark">
      <HeroSection />
      <StatsSection />
      <CompanyIntro />
      <NewsCards />
      <ServiceCards />
      <CasesGallery />
      <PartnersBanner />
    </div>
  );
}
