"use client";

import { useState, useCallback } from "react";
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
  const [openSections, setOpenSections] = useState<Set<MenuSection>>(new Set());
  const { playOpen, playClose } = useAudio();

  const handleSectionChange = useCallback((section: MenuSection) => {
    if (section === "home") {
      // Close all sections
      playClose();
      setOpenSections(new Set());
    } else {
      setOpenSections(prev => {
        const newSet = new Set(prev);
        if (newSet.has(section)) {
          playClose();
          newSet.delete(section);
        } else {
          playOpen();
          newSet.add(section);
        }
        return newSet;
      });
    }
  }, [playOpen, playClose]);

  const handleClose = useCallback((section: MenuSection) => {
    playClose();
    setOpenSections(prev => {
      const newSet = new Set(prev);
      newSet.delete(section);
      return newSet;
    });
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

  const renderSectionContent = (section: MenuSection) => {
    switch (section) {
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

  // Get active section for menu highlighting (last opened or home)
  const activeSection: MenuSection = openSections.size > 0 
    ? Array.from(openSections)[openSections.size - 1] 
    : "home";

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-black relative">
      {/* Mute button - fixed to top left of screen */}
      <MuteButton />

      <div className="window-border bg-black/90 backdrop-blur-sm rounded-lg w-full max-w-4xl aspect-[4/3] flex flex-col overflow-hidden relative">
        {/* CRT visual effects overlay */}
        <CRTOverlay />

        {/* Main content area */}
        <div className="flex-1 relative">
          {/* Home screen content - always visible */}
          <HomeScreen />

          {/* Navigation menu - always visible */}
          <TVMenu 
            activeSection={activeSection} 
            onSelect={handleSectionChange} 
            centered={true}
          />
        </div>
      </div>

      {/* Content windows - outside the main container so they can be dragged freely */}
      {(["about", "experience", "projects", "contact"] as const).map((section, index) => (
        <MenuWindow
          key={section}
          title={getSectionTitle(section)}
          isOpen={openSections.has(section)}
          onClose={() => handleClose(section)}
          offset={{ x: index * 30 - 45, y: index * 30 - 45 }}
        >
          {renderSectionContent(section)}
        </MenuWindow>
      ))}
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
