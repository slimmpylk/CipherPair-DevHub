import HeroSection from "@/components/samuliPortfolio/HeroSection";
import AboutSection from "@/components/samuliPortfolio/AboutSection";
import SkillsSection from "@/components/samuliPortfolio/SkillsSection";
import PortfolioSection from "@/components/samuliPortfolio/PortfolioSection";
import ExperienceSection from "@/components/samuliPortfolio/ExperienceSection";
import EducationSection from "@/components/samuliPortfolio/EducationSection";
import FooterSection from "@/components/samuliPortfolio/FooterSection";
import StravaStats from "@/components/samuliPortfolio/StravaStats";

export const dynamic = "force-dynamic"; // Ensure this page is fully dynamic

export default async function PortfolioPage() {
    return (
        <div className="bg-black text-white">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <StravaStats />
            <ExperienceSection />
            <EducationSection />
            <FooterSection />
        </div>
    );
}
