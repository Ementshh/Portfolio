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
import { ThemeProvider } from "@/components/theme/ThemeContext";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useIsMobile } from "@/hooks/useMediaQuery";

type WindowSection = Exclude<MenuSection, "home">;

function PortfolioContent() {
  const [openSections, setOpenSections] = useState<Set<MenuSection>>(new Set());
  const [windowZIndices, setWindowZIndices] = useState<Record<WindowSection, number>>({
    about: 50,
    experience: 50,
    projects: 50,
    contact: 50,
  });
  const [topZIndex, setTopZIndex] = useState(50);
  const { playOpen, playClose } = useAudio();
  const isMobile = useIsMobile();

  const bringToFront = useCallback((section: WindowSection) => {
    setTopZIndex(prev => {
      const newZ = prev + 1;
      setWindowZIndices(prevZ => ({
        ...prevZ,
        [section]: newZ,
      }));
      return newZ;
    });
  }, []);

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
          // Bring newly opened window to top
          bringToFront(section as WindowSection);
        }
        return newSet;
      });
    }
  }, [playOpen, playClose, bringToFront]);

  const handleClose = useCallback((section: MenuSection) => {
    playClose();
    setOpenSections(prev => {
      const newSet = new Set(prev);
      newSet.delete(section);
      return newSet;
    });
  }, [playClose]);

  const handleWindowClick = useCallback((section: WindowSection) => {
    bringToFront(section);
  }, [bringToFront]);

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
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 relative" style={{ backgroundColor: 'var(--background)' }}>
      {/* Mute button - fixed to top left of screen */}
      <MuteButton />
      {/* Theme toggle - next to mute button */}
      <ThemeToggle />

      {/* Mobile layout - simplified without CRT frame */}
      {isMobile ? (
        <div className="w-full h-screen flex flex-col items-center justify-center relative">
          {/* Home screen content */}
          <HomeScreen isMobile={true} />

          {/* Navigation menu */}
          <TVMenu 
            activeSection={activeSection} 
            onSelect={handleSectionChange} 
            centered={true}
            isMobile={true}
          />
        </div>
      ) : (
        /* Desktop layout - full CRT frame */
        <div className="window-border backdrop-blur-sm rounded-lg w-full max-w-4xl aspect-[4/3] flex flex-col overflow-hidden relative" style={{ backgroundColor: 'var(--window-bg)' }}>
          {/* Window title bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: 'var(--window-border)', backgroundColor: 'var(--title-bar-bg)' }}>
            <div className="flex items-center gap-2">
              <span className="text-sm crt-text" style={{ color: 'var(--crt-blue-glow)' }}>■</span>
              <h2 className="font-bold text-sm md:text-base crt-text select-none" style={{ color: 'var(--crt-blue)' }}>HOME</h2>
            </div>
          </div>

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
      )}

      {/* Content windows - outside the main container so they can be dragged freely */}
      {(["about", "experience", "projects", "contact"] as const).map((section, index) => (
        <MenuWindow
          key={section}
          title={getSectionTitle(section)}
          isOpen={openSections.has(section)}
          onClose={() => handleClose(section)}
          offset={{ x: index * 30 - 45, y: index * 30 - 45 }}
          zIndex={windowZIndices[section]}
          onWindowClick={() => handleWindowClick(section)}
        >
          {renderSectionContent(section)}
        </MenuWindow>
      ))}
    </main>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <PortfolioContent />
      </AudioProvider>
    </ThemeProvider>
  );
}
