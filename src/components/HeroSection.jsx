import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const textRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      }
    );
  }, []);

  return (
    <section className="section-container" style={{ minHeight: '100vh', justifyContent: 'center' }}>
      <div ref={textRef} style={{ zIndex: 10, position: 'relative' }}>
        <h1 className="hero-title">
          Freedom to Live.
        </h1>
        <h1 className="hero-title" style={{ color: 'var(--color-primary)' }}>
          Just Like <span className="secondary-highlight">Home.</span>
        </h1>
        <p className="hero-subtitle" style={{ margin: '2rem auto 0' }}>
          Discover the ultimate boys hostel experience built for comfort, cleanliness, and freedom in the heart of Hyderabad.
        </p>
      </div>
      
      <div className="scroll-indicator" style={{ position: 'absolute', bottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.7 }}>
        <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Scroll to explore</p>
        <div style={{ width: '2px', height: '40px', background: 'var(--color-text)', borderRadius: '2px' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
