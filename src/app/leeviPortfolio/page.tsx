import HeroSection from '@/components/leeviPortfolio/HeroSection1';
import AboutSection from '@/components/leeviPortfolio/AboutSection';
import SkillsSection from '@/components/leeviPortfolio/SkillsSection';
import PortfolioSection from '@/components/leeviPortfolio/PortfolioSection';
import ExperienceSection from '@/components/leeviPortfolio/ExperienceSection';
import EducationSection from '@/components/leeviPortfolio/EducationSection';
import FooterSection from '@/components/leeviPortfolio/FooterSection';




export default function PortfolioPage() {
    return (
        <div className="bg-black text-white">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <ExperienceSection />
            <EducationSection />
            <FooterSection />
        </div>
    );
}