import FAQSection from '../components/sections/FAQSection'
import FinalCTASection from '../components/sections/FinalCTASection'
import HeroSection from '../components/sections/HeroSection'
import TrustedMarqueeSection from '../components/sections/TrustedMarqueeSection'
import ProblemSection from '../components/sections/ProblemSection'
import SolutionsGridSection from '../components/sections/SolutionsGridSection'
import FeaturesGridSection from '../components/sections/FeaturesGridSection'
import DashboardShowcaseSection from '../components/sections/DashboardShowcaseSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import StatsSection from '../components/sections/StatsSection'
import TestimonialCarousel from '../components/sections/TestimonialCarousel'
import HomePricingSection from '../components/sections/HomePricingSection'
import SectionDivider from '../components/global/SectionDivider'
import StorySection from '../components/sections/StorySection'

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <TrustedMarqueeSection />
      <SectionDivider variant="beam" />
      <ProblemSection />
      <SectionDivider variant="dots" />
      <SolutionsGridSection />
      <FeaturesGridSection />
      <DashboardShowcaseSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialCarousel />
      <StorySection />
      <HomePricingSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  )
}
