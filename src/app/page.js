import { AboutSection } from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection'
import { NavBar } from '@/components/NavBar';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EmailSection } from '@/components/EmailSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#121212] flex-col">
      <div className="container mx-auto px-12 py-12 ">
        <NavBar/>
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection/>
          <ProjectsSection/>
          <EmailSection/>
        </div>
        <Footer/>
      </div>
    </main>
  );
}


