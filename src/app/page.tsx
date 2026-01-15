import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import StatsSection from '@/components/StatsSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
            <Navbar />
            <HeroSection />
            <StatsSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <EducationSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
