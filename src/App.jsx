import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CanvasContainer from './components/CanvasContainer';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ImageParallaxSection from './components/ImageParallaxSection';
import SolutionSection from './components/SolutionSection';
import DetailsSection from './components/DetailsSection';
import VoiceAgentButton from './components/VoiceAgentButton';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Setup basic GSAP revealing for sections
    const sections = gsap.utils.toArray('.section-container');
    
    sections.forEach((section, index) => {
      // Avoid conflict with parallax section
      if (index === 0 || section.classList.contains('parallax-scene')) return;
      
      gsap.fromTo(
        section.querySelector('.glass-card') || section.querySelector('.contact-card'),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={mainRef}>
      <CanvasContainer />
      <HeroSection />
      <ProblemSection />
      <ImageParallaxSection />
      <SolutionSection />
      <DetailsSection />
      <VoiceAgentButton />
    </div>
  );
}

export default App;
