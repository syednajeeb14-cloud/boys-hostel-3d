import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ImageParallaxSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // We animate the layers at different speeds for a cinematic depth effect
    const layers = gsap.utils.toArray('.parallax-layer');
    
    layers.forEach((layer) => {
      const speed = parseFloat(layer.getAttribute('data-speed'));
      
      gsap.to(layer, {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth interpolation
        }
      });
    });

    const texts = gsap.utils.toArray('.parallax-text');
    texts.forEach((text) => {
      gsap.fromTo(text, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
          }
        }
      );
    });

  }, []);

  return (
    <div className="parallax-scene" ref={containerRef}>
      {/* Background layer: Slowest */}
      <div className="parallax-layer bg-layer" data-speed="0.1" style={{ backgroundImage: `url('/assets/room.png')` }}></div>
      
      {/* Midground layer: Medium (Floating elements that shift more) */}
      <div className="parallax-layer mg-layer" data-speed="0.25">
         <img src="/assets/room.png" alt="Luxury Room" className="floating-img floating-img-1" />
         <img src="/assets/dining.png" alt="Dining Area" className="floating-img floating-img-2" />
         <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop" alt="Premium Lounge" className="floating-img floating-img-3" />
         <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Study Workspace" className="floating-img floating-img-4" />
         <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" alt="Fitness Center" className="floating-img floating-img-5" />
         <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" alt="City View" className="floating-img floating-img-6" />
      </div>
      
      {/* Foreground layer: Fastest (Text Content) */}
      <div className="parallax-layer fg-layer" data-speed="0.5">
         <div className="parallax-text-container">
            <h2 className="parallax-text">Cinematic Depth.</h2>
            <h2 className="parallax-text" style={{ color: 'var(--color-primary)' }}>Premium Quality Spaces.</h2>
            <p className="parallax-text" style={{ fontSize: '1.4rem', fontWeight: 400, marginTop: '2rem' }}>Experience multiple pristine areas of our Panjagutta property designed for absolute comfort.</p>
         </div>
      </div>
    </div>
  );
};

export default ImageParallaxSection;
