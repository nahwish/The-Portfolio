import HeroSection from '@/components/HeroSection'
import { NavBar } from '@/components/NavBar';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#121212] ">
      <div className="container mx-auto px-12 py-12">
        <NavBar/>
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
        </div>
      </div>
    </main>
  );
}


