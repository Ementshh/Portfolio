"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playClick: () => void;
  playHover: () => void;
  playOpen: () => void;
  playClose: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

// Generate click sound using Web Audio API
const createClickSound = (audioCtx: AudioContext) => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.05);
  
  gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.05);
};

// Generate hover sound
const createHoverSound = (audioCtx: AudioContext) => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
  
  gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.02);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.02);
};

// Generate window open sound
const createOpenSound = (audioCtx: AudioContext) => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.1);
  
  gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.1);
};

// Generate window close sound
const createCloseSound = (audioCtx: AudioContext) => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.08);
  
  gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.08);
};

// CRT Hum generator
class CRTHum {
  private audioCtx: AudioContext | null = null;
  private oscillator: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying = false;

  start() {
    if (this.isPlaying || typeof window === 'undefined') return;
    
    this.audioCtx = new (window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    this.oscillator = this.audioCtx.createOscillator();
    this.gainNode = this.audioCtx.createGain();
    
    // Create a low hum sound (60Hz like CRT refresh)
    this.oscillator.type = 'sine';
    this.oscillator.frequency.setValueAtTime(60, this.audioCtx.currentTime);
    
    // Very quiet
    this.gainNode.gain.setValueAtTime(0.015, this.audioCtx.currentTime);
    
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);
    
    this.oscillator.start();
    this.isPlaying = true;
  }

  stop() {
    if (!this.isPlaying) return;
    
    if (this.oscillator) {
      this.oscillator.stop();
      this.oscillator.disconnect();
    }
    if (this.gainNode) {
      this.gainNode.disconnect();
    }
    if (this.audioCtx) {
      this.audioCtx.close();
    }
    
    this.oscillator = null;
    this.gainNode = null;
    this.audioCtx = null;
    this.isPlaying = false;
  }

  setVolume(volume: number) {
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.setValueAtTime(volume, this.audioCtx.currentTime);
    }
  }
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(true); // Start muted by default
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [crtHum] = useState(() => new CRTHum());

  useEffect(() => {
    // Initialize audio context on first user interaction
    const initAudio = () => {
      if (!audioCtx && typeof window !== 'undefined') {
        const ctx = new (window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        setAudioCtx(ctx);
      }
    };

    window.addEventListener('click', initAudio, { once: true });
    return () => window.removeEventListener('click', initAudio);
  }, [audioCtx]);

  useEffect(() => {
    if (!isMuted) {
      crtHum.start();
    } else {
      crtHum.stop();
    }

    return () => crtHum.stop();
  }, [isMuted, crtHum]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  const playClick = useCallback(() => {
    if (isMuted || !audioCtx) return;
    createClickSound(audioCtx);
  }, [isMuted, audioCtx]);

  const playHover = useCallback(() => {
    if (isMuted || !audioCtx) return;
    createHoverSound(audioCtx);
  }, [isMuted, audioCtx]);

  const playOpen = useCallback(() => {
    if (isMuted || !audioCtx) return;
    createOpenSound(audioCtx);
  }, [isMuted, audioCtx]);

  const playClose = useCallback(() => {
    if (isMuted || !audioCtx) return;
    createCloseSound(audioCtx);
  }, [isMuted, audioCtx]);

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playClick, playHover, playOpen, playClose }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
