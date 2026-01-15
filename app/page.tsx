"use client";

import { useState, useCallback } from "react";
import CRTFrame from "@/components/crt/CRTFrame";
import CRTScreen from "@/components/crt/CRTScreen";
import CRTOverlay from "@/components/crt/CRTOverlay";
import TVMenu, { MenuSection } from "@/components/menu/TVMenu";
import MenuWindow from "@/components/menu/MenuWindow";
import HomeScreen from "@/components/sections/HomeScreen";
import AboutMe from "@/components/sections/AboutMe";
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { AudioProvider, useAudio } from "@/components/audio/AudioContext";
import MuteButton from "@/components/audio/MuteButton";

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState<MenuSection>("home");
  const { playOpen, playClose } = useAudio();

  const handleSectionChange = useCallback((section: MenuSection) => {
    if (section === "home") {
      playClose();
    } else {
      playOpen();
    }
    setActiveSection(section);
  }, [playOpen, playClose]);

  const handleClose = useCallback(() => {
    playClose();
    setActiveSection("home");
  }, [playClose]);

  const getSectionTitle = (section: MenuSection): string => {
    const titles: Record<MenuSection, string> = {
      home: "HOME",
      about: "ABOUT ME",
      experience: "EXPERIENCE",
      projects: "PROJECTS",
      contact: "CONTACT",
    };
    return titles[section];
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutMe />;
      case "experience":
        return <Experiences />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-black">
      <CRTFrame>
        <CRTScreen>
          {/* Mute button */}
          <MuteButton />

          {/* CRT visual effects overlay */}
          <CRTOverlay />

          {/* Home screen content */}
          {activeSection === "home" && (
            <HomeScreen />
          )}

          {/* Navigation menu - only visible on home screen */}
          {activeSection === "home" && (
            <TVMenu 
              activeSection={activeSection} 
              onSelect={handleSectionChange} 
              centered={true}
            />
          )}

          {/* Content windows */}
          <MenuWindow
            title={getSectionTitle(activeSection)}
            isOpen={activeSection !== "home"}
            onClose={handleClose}
          >
            {renderSectionContent()}
          </MenuWindow>
        </CRTScreen>
      </CRTFrame>
    </main>
  );
}

export default function Home() {
  return (
    <AudioProvider>
      <PortfolioContent />
    </AudioProvider>
  );
}
