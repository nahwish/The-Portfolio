import React, { useContext } from "react";
import  AboutSection  from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import  ProjectsSection  from "@/app/projects/page";
import { EmailSection } from "@/components/EmailSection";
import { Footer } from "@/components/Footer";
import { TabProvider } from "../../context/TabContext";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#121212] flex-col">
      <div className="container mx-auto px-12 py-12 ">
        <NavBar />
        <div className="container mt-10 mx-auto px-12 py-4">
          <TabProvider>
            <HeroSection />
            <AboutSection id="about"/>
            <ProjectsSection />
            <EmailSection />
          </TabProvider>
        </div>
        <Footer />
      </div>
    </main>
  );
}
