import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FloatingDockDemo } from "@/components/dock";
import HeroSection from "@/components/hero";
import AboutMeSection from "@/components/aboutme";
import EducationSection from "@/components/education";
import ProjectsSection from "@/components/projects";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
      <ProjectsSection />
      <FloatingDockDemo />
    </main>
  );
}
