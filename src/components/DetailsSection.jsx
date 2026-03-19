import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const DetailsSection = () => {
  return (
    <section className="section-container">
      <div className="contact-card">
        <h2 className="contact-title">Ready to Move In?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.9)' }}>
          Join the best boys hostel in the city. Spots fill up fast!
        </p>
        
        <div style={{ background: 'rgba(255,255,255,0.08)', padding: '2.5rem', borderRadius: '20px', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left', border: '1px solid rgba(255,255,255,0.1)' }}>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
            <span style={{ fontSize: '1.8rem', marginTop: '0.2rem' }}>📍</span>
            <div>
              <strong style={{ color: 'var(--color-accent)', display: 'block', fontSize: '1.4rem', marginBottom: '0.4rem' }}>Location</strong>
              <span style={{ color: 'white', fontSize: '1.2rem', lineHeight: '1.5' }}>Panjagutta,<br/>Hyderabad</span>
            </div>
          </div>

          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
            <span style={{ fontSize: '1.8rem', marginTop: '0.2rem' }}>👤</span>
            <div>
              <strong style={{ color: 'var(--color-accent)', display: 'block', fontSize: '1.4rem', marginBottom: '0.4rem' }}>Owner</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <span style={{ color: 'white', fontSize: '1.2rem' }}>Piyush</span>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <a href="#" style={{ color: 'var(--color-primary)' }} title="Instagram"><Instagram size={20} /></a>
                  <a href="#" style={{ color: 'var(--color-primary)' }} title="Facebook"><Facebook size={20} /></a>
                  <a href="#" style={{ color: 'var(--color-primary)' }} title="Twitter"><Twitter size={20} /></a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
            <span style={{ fontSize: '1.8rem', marginTop: '0.2rem' }}>👔</span>
            <div>
              <strong style={{ color: 'var(--color-accent)', display: 'block', fontSize: '1.4rem', marginBottom: '0.4rem' }}>Advisor</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <span style={{ color: 'white', fontSize: '1.2rem' }}>Bhupendra Jadhav</span>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <a href="#" style={{ color: 'var(--color-secondary)' }} title="LinkedIn"><Linkedin size={20} /></a>
                  <a href="#" style={{ color: 'var(--color-secondary)' }} title="Instagram"><Instagram size={20} /></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <button className="cta-button" onClick={() => alert('Booking flow initiated!')}>
          Book Your Room Now
        </button>
      </div>
    </section>
  );
};

export default DetailsSection;
