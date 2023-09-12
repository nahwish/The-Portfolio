import React, { useContext } from "react";
import  AboutSection  from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { ProjectsSection } from "@/app/projects/page";
import { EmailSection } from "@/components/EmailSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#121212] flex-col">
      <div className="container mx-auto px-12 py-12 ">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection id="about"/>
          {/* <ProjectsSection /> */}
          <EmailSection id="contac"/>
        </div>
        <Footer />
      </div>
    </main>
  );
}